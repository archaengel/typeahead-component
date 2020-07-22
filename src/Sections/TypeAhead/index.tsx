import React, { useState } from 'react';
import { SuggestionsMenu } from './components';
import { TypeAheadContainer, TypeAheadInput } from '../../lib/components';

interface Props<T> {
  list: T[];
}

export const TypeAhead = <T,>({ list }: Props<T>) => {
  const [query, setQuery] = useState<string>('');
  return (
    <TypeAheadContainer>
      <TypeAheadInput onChange={(e) => setQuery(e.target.value)} />
      {!!query.trim() && <SuggestionsMenu isHidden={false} />}
    </TypeAheadContainer>
  );
};
