import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #ffffff;
  border: 0;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(240, 240, 240, 1) 100%
  );
`;

export const UserLogo = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  border-radius: 50%;
  background-color: #3c763a;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 600;
    color: var(--white);
  }
`;

export const CardImage = styled.div`
  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15);
  border: 0;
  border-radius: 0.8rem;
  overflow: hidden;
  margin: 1rem;
  max-width: 30rem;
  img {
    width: 100%;
  }
`;

export const ColumnInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;
export const RowName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;
export const RowInfos = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border: 0.01rem solid lightgray;
  padding: 1rem;
  margin: 1rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;
export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CardActions = styled.div`
  margin: 0.5rem;
  button {
    margin: 0 0.5rem;
  }
`;

// GroupInfo styles
export const InfoTitle = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  font-weight: 500;
  color: gray;
`;
export const Infos = styled.div`
  width: 100%;
  margin: 0.5rem 1rem 1rem 1rem;
  padding: 1rem;
  border: 0.01rem solid #dcdcdc;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;

export const LabelInfo = styled.p`
  display: inline-block;
  width: 8rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #999999;
  padding: 0;
  margin: 0.5rem;
`;

export const TextInfo = styled.span`
  font-weight: 500;
  padding: 0;
  margin: 0.5rem;
`;
