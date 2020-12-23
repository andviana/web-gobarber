import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { HOME_PAGE } from '../../../../config/appConfig';
import { LOGIN } from '../../../../config/appRoutes';
import { useAuth } from '../../../../hooks/auth';
import { Container } from './styles';

interface TopbarProps {
  onSidebarOpen(): void;
}
const Topbar: React.FC<TopbarProps> = ({ onSidebarOpen, ...rest }) => {
  const { signOut } = useAuth();

  return (
    <Container {...rest}>
      <Toolbar>
        <RouterLink to={HOME_PAGE}>
          <FontAwesomeIcon icon={faUtensils} size="2x" />
          <Typography variant="h3">GRUU</Typography>
        </RouterLink>
        <RouterLink to={LOGIN}>
          <IconButton
            // className={classes.iconBar2}
            color="inherit"
            onClick={signOut}
          >
            <InputIcon />
          </IconButton>
        </RouterLink>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </Container>
  );
};

export default Topbar;
