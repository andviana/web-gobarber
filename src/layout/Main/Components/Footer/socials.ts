import {
  FaFacebookSquare,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import { IconBaseProps } from 'react-icons/lib';

export interface Social {
  href: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const socialInfo: Social[] = [
  { href: 'https://ctic.unifesspa.edu.br', icon: FaHome },
  { href: 'https://www.facebook.com/cticunifesspa/', icon: FaFacebookSquare },
  {
    href: 'https://www.instagram.com/cticunifesspa/?hl=pt',
    icon: FaInstagramSquare,
  },
  { href: 'https://br.linkedin.com/company/cticunifesspa', icon: FaLinkedin },
  { href: 'https://twitter.com/cticunifesspa', icon: FaTwitterSquare },
];
