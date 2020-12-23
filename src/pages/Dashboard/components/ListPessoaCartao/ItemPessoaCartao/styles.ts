import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background-color: #ffffff;
  border: 0;

  border-left: 1rem solid #9ebc7d;
  margin-bottom: 1.5rem;
  margin-right: 1rem;
  padding: 0.5rem 0;
  border-radius: 0.8rem;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    margin-left: 1rem;
    margin-right: 0rem;
    /* background-color: #fcffbc; */
    border-left: 1rem solid #226329;
    background: ${darken(0.05, '#ffffff')};
    box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
    svg {
      color: #226329;
    }
  }
`;

export const UserLogo = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
  border-radius: 50%;
  background-color: #6d995c;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 500;
    color: ${transparentize(0.15, '#ffffff')};
    padding: 0;
    margin: 0;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h1 {
    font-weight: 500;
    color: var(--primary);
  }
  span {
    font-weight: 300;
    color: var(--gray);
    strong {
      font-weight: 400;
      color: var(--primary);
    }
  }
`;

export const CardIcon = styled.div`
  span {
    font-weight: 600;
    margin-right: 1rem;
    color: #6d995c;
  }
  margin-left: auto;
  margin-right: 1rem;
  svg {
    color: #9ebc7d;
  }
`;
