import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background: #3179ba;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (min-width: 600px) {
    justify-content: center;
    padding: 30px 70px;
  }

  @media only screen and (min-width: 768px) {
    padding: 30px 100px;
  }

  @media only screen and (min-width: 992px) {
    padding: 30px 150px;
  }

  @media only screen and (min-width: 1200px) {
    padding: 30px 170px;
  }
`;
