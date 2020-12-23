import React from 'react';
import FixedTopBar from './Components/FixedTopBar';
import Footer from './Components/Footer';
import {
  Container,
  FooterArea,
  ContentArea,
  HeaderArea,
  MainArea,
  BodyArea,
} from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <FixedTopBar />
      <ContentArea>
        <HeaderArea>
          <div className="mx-2 mx-md-4 p-4 px-md-10">
            <h1>Gruu Unifesspa</h1>
          </div>
        </HeaderArea>

        <MainArea>
          <div className="mx-2 mx-md-4 mb-2 p-2 p-md-4">
            <div>{/* Componente Alert */}</div>
            <BodyArea>{children}</BodyArea>
          </div>
        </MainArea>
      </ContentArea>

      <FooterArea>
        <Footer />
      </FooterArea>
    </Container>
  );
};
export default Main;
