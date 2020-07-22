import React, { RefObject } from 'react';
import {
  SuggestionsList,
  SuggestionsListItem,
  SuggestionsMenuContainer,
  Prefix,
} from '../../../lib/components';
import { useHeightFromBottom } from '../../../lib/hooks';

interface Props<T extends string> {
  inputRef: RefObject<HTMLInputElement>;
  query: string;
  suggestions: T[];
  onOptionFocus: (index: number) => () => void;
  onOptionClick: (index: number) => () => void;
}

export const SuggestionsMenu = <T extends string>({
  inputRef,
  query,
  suggestions,
  onOptionFocus,
  onOptionClick,
}: Props<T>) => {
  const prefixLength = query.trim().length;
  const height = useHeightFromBottom(inputRef);

  const renderSuggestionItem = (suggestion: T, index: number) => (
    <SuggestionsListItem
      tabIndex={0}
      key={`${suggestion}_${index}`}
      onFocus={onOptionFocus(index)}
      onClick={onOptionClick(index)}
    >
      <Prefix>{suggestion.slice(0, prefixLength)}</Prefix>
      {suggestion.slice(prefixLength)}
    </SuggestionsListItem>
  );

  return (
    <SuggestionsMenuContainer height={height}>
      <SuggestionsList>{suggestions.map(renderSuggestionItem)}</SuggestionsList>
    </SuggestionsMenuContainer>
  );
};
