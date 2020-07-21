import React from 'react';
import { TypeAheadContainer, TypeAheadInput } from '../../lib/components';

interface Props<T> {
  dataSource: T[];
}

export const TypeAhead = <T,>({ dataSource }: Props<T>) => {
  return (
    <TypeAheadContainer>
      <TypeAheadInput />
    </TypeAheadContainer>
  );
};
