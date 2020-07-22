import styled from 'styled-components';
import { SuggestionsListItem } from './SuggestionsListItem';

export const SuggestionsList = styled.ul`
  margin: 0;
  padding: 10px 10px 0;
  width: 100%;
  border: none;
  border-radius: 3px;
  background: #ebecf0;
  height: 100%;
  transition: height ease-in 1s;
  display: flex;
  flex-direction: column;
  align-content: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-track-piece {
    background: rgba(9, 30, 66, 0.08);
  }
  &::-webkit-scrollbar-thumb {
    background: #cbcfd7;
    border-radius: 3px;
  }
  & ${SuggestionsListItem} {
    margin-bottom: 10px;
  }
`;
