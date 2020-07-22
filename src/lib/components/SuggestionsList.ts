import styled from 'styled-components';
import { SuggestionsListItem } from './SuggestionsListItem';

export interface SuggestionsListProps {
  isHidden?: boolean;
}

export const SuggestionsList = styled.ul<SuggestionsListProps>`
  margin: 0;
  padding: 10px 10px 0;
  width: 100%;
  position: relative;
  border: none;
  z-index: 1;
  border-radius: 3px;
  background: #ebecf0;
  height: ${(props) => (props.isHidden ? '0%' : 'auto')};
  transition: height ease-in 1s;
  display: flex;
  flex-direction: column;
  align-content: center;
  & ${SuggestionsListItem} {
    margin-bottom: 10px;
  }
  &:before {
    width: 100%;
    height: 20px;
    background: #ebecf0;
    position: absolute;
    top: -5px;
    left: 0px;
    content: '';
    z-index: -1;
  }
`;
