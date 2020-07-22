import React from 'react';
import { SuggestionsList, SuggestionsListItem } from '../../../lib/components';

interface Props<T> {
  suggestions: T[];
  onOptionFocus: (index: number) => () => void;
}

export const SuggestionsMenu = <T,>({
  suggestions,
  onOptionFocus,
}: Props<T>) => {
  const renderSuggestionItem = (suggestion: T, index: number) => (
    <SuggestionsListItem
      tabIndex={0}
      key={`${suggestion}_${index}`}
      onFocus={onOptionFocus(index)}
    >
      {suggestion}
    </SuggestionsListItem>
  );

  return (
    <SuggestionsList>{suggestions.map(renderSuggestionItem)}</SuggestionsList>
  );
};
