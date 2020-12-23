import styled from 'styled-components';

export const FixedBar = styled.div`
  min-height: 6rem;
  position: fixed;
  top: 0;
  padding: 0.5rem 1rem;
  margin: 0;
  width: 100%;
  background-image: linear-gradient(
    135deg,
    var(--unifesspa-green-left) 0%,
    var(--unifesspa-green-right) 100%
  );
  border-bottom: 2px solid var(--mention-detail);
  box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.3);
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-end;
  img {
    height: 3rem;
    width: 3rem;
    opacity: 0.3;
  }

  h1 {
    margin-left: 0.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
    }
  }
  button {
    width: 3rem;
    height: 3rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 700px) {
    h1 {
      display: none;
    }
    img {
      display: none;
    }
  }
`;

export const UserArea = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  div {
    span {
      font-weight: 300;
      text-transform: uppercase;
      margin-right: 0.5rem;
      max-width: 10rem;
      text-align: right;
    }
    button {
      width: 3rem;
      height: 3rem;
      margin-right: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      border: 0;
      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
    @media (max-width: 700px) {
      display: none;
    }
  }

  > button {
    height: 4rem;
    width: 4rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    border: 0;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;
