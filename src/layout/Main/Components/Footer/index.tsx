import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Social, socialInfo } from './socials';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <span>
          &copy; RU Unifesspa v0.1 - Developed with
          <FaHeart />
          by CTIC
        </span>
      </div>
      <div>
        {socialInfo.map(({ href, icon: Icon }: Social) => (
          <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
            <Icon />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Footer;
