import React from 'react';
import { Container, CardContainer } from './styles';

const Card: React.FC = ({ children }) => {
  return (
    <Container>
      <CardContainer>{children}</CardContainer>
    </Container>
  );
};

export default Card;
