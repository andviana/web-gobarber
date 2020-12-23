import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--unifesspa-body-dark);
`;

export const ContentArea = styled.div`
  flex: 1 0 auto;
`;

export const HeaderArea = styled.div`
  width: auto;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    var(--tertiary) 0%,
    var(--unifesspa-body-dark) 100%
  );

  > div {
    padding: 0.25rem;
    width: 100%;
    max-width: 100rem;
    min-width: 15rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    border-width: 0;
    border-radius: 0.5rem;
    /* background-color: var(--unifesspa-body-light); */
    background: #ebebeb;
    margin-top: -2rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;

    width: 95%;
    max-width: 100rem;
    min-width: 15rem;
  }
`;

export const BodyArea = styled.div`
  margin-top: 0.5rem;
  padding: 1rem 5rem 2rem 5rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem 2rem 1rem;
  }
`;

export const FooterArea = styled.div`
  flex-shrink: 0;
  margin-bottom: 0.5rem;
`;
