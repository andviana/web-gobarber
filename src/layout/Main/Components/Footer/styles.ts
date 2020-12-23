import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  > div {
    color: rgba(255, 255, 255, 0.25);

    span {
      svg {
        color: rgba(75, 0, 0, 0.3);
        margin: 0 0.5rem;
      }
    }

    > a {
      color: rgba(255, 255, 255, 0.25);
      margin: 0 0.5rem;
      &:hover {
        color: rgba(255, 255, 255, 0.75);
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
