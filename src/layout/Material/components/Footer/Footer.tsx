import React from 'react';
import { Typography, Link } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Container, SubText } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://ctic.unifesspa.edu.br/"
          target="_blank"
        >
          CTIC
        </Link>
        . 2020
      </Typography>
      <SubText>
        <Typography variant="caption">
          Created with
          <FavoriteIcon /> by CTIC.
        </Typography>
      </SubText>
    </Container>
  );
};

export default Footer;
