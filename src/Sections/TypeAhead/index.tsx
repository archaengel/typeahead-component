import React, {
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { SuggestionsMenu } from './components';
import { TypeAheadContainer, TypeAheadInput } from '../../lib/components';
import { useOnClickOutside } from '../../lib/hooks';
import { Trie } from '../../lib/utils';

interface Props {
  list: string[];
}

export const TypeAhead = ({ list }: Props) => {
  const [query, setQuery] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>(list);
  const [prefixTrie] = useState<Trie>(new Trie());
  const inputRef = useRef<HTMLInputElement>(null);
  const typeAheadRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setQuery(value);
    const trimmedValue = value.trim();
    setSuggestions(prefixTrie.getSuggestions(trimmedValue));
    setIsMenuOpen(trimmedValue.length > 0);
  };

  const handleClick = () => {
    if (!!query.trim()) {
      setIsMenuOpen(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === 'Escape') {
      setIsMenuOpen(false);
      setSelectionIndex(null);
      e.preventDefault();
    }

    if (key === 'Enter') {
      setIsMenuOpen(false);
      if (selectionIndex !== null) {
        setQuery(suggestions[selectionIndex]);
        setSelectionIndex(null);
      }
      inputRef.current?.focus();
      e.preventDefault();
    }
  };

  const onOptionFocus = (index: number) => () => {
    setSelectionIndex(index);
  };

  const onOptionClick = (index: number) => () => {
    setQuery(suggestions[index]);
    setIsMenuOpen(false);
  };

  useOnClickOutside(typeAheadRef, () => setIsMenuOpen(false));

  useEffect(() => {
    prefixTrie.formTrie(list);
  }, [list, prefixTrie]);

  return (
    <TypeAheadContainer ref={typeAheadRef} onKeyDown={handleKeyDown}>
      <TypeAheadInput
        ref={inputRef}
        onChange={handleChange}
        value={query}
        onClick={handleClick}
      />
      {isMenuOpen && suggestions.length > 0 && (
        <SuggestionsMenu
          inputRef={inputRef}
          query={query}
          suggestions={suggestions}
          onOptionFocus={onOptionFocus}
          onOptionClick={onOptionClick}
        />
      )}
    </TypeAheadContainer>
  );
};
