import React from 'react';
import {
  SuggestionsList,
  SuggestionsListItem,
  SuggestionsListProps,
} from '../../../lib/components';

export const SuggestionsMenu = ({ isHidden }: SuggestionsListProps) => {
  return (
    <SuggestionsList>
      <SuggestionsListItem tabIndex={0}>This</SuggestionsListItem>
      <SuggestionsListItem tabIndex={0}>That</SuggestionsListItem>
      <SuggestionsListItem tabIndex={0}>The Other Thing</SuggestionsListItem>
    </SuggestionsList>
  );
};
