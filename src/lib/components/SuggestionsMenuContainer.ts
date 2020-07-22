import styled from 'styled-components';

interface SuggestionsMenuContainerProps {
  height: number;
}

export const SuggestionsMenuContainer = styled.div<
  SuggestionsMenuContainerProps
>`
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  border: none;
  z-index: 1;
  border-radius: 3px;
  background: #ebecf0;
  height: auto;
  max-height: ${(props) => props.height - 20}px;
  transition: height ease-in 1s;
  display: flex;
  flex-direction: column;
  align-content: center;

  &:before {
    width: 100%;
    height: 20px;
    background: #ebecf0;
    position: absolute;
    top: -15px;
    left: 0px;
    content: '';
    z-index: -1;
  }
`;
