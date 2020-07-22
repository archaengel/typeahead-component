import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react';
import { SuggestionsMenu } from './components';
import { TypeAheadContainer, TypeAheadInput } from '../../lib/components';

interface Props<T extends string> {
  list: T[];
}

export const TypeAhead = <T extends string>({ list }: Props<T>) => {
  const [query, setQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<T[]>(list);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setQuery(value);
    setIsMenuOpen(true);
  };

  const handleBlur = (e: FocusEvent) => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === 'Escape') {
      setIsMenuOpen(false);
      e.preventDefault();
    }

    if (key === 'Enter') {
      setIsMenuOpen(false);
      if (selectionIndex !== null) {
        setQuery(suggestions[selectionIndex]);
      }
      inputRef.current?.focus();
      e.preventDefault();
    }
  };

  const onOptionFocus = (index: number) => () => {
    setSelectionIndex(index);
  };

  return (
    <TypeAheadContainer onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <TypeAheadInput ref={inputRef} onChange={handleChange} value={query} />
      {!!query.trim() && isMenuOpen && (
        <SuggestionsMenu
          suggestions={suggestions}
          onOptionFocus={onOptionFocus}
        />
      )}
    </TypeAheadContainer>
  );
};
