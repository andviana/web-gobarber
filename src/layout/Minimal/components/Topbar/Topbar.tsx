import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      boxShadow: 'none',
    },
    titleBar: {
      color: 'white',
      paddingTop: '2px',
      paddingBototm: '2px',
      paddingLeft: '2px',
      paddingRight: '2px',
    },
    iconBar: {
      marginLeft: '20px',
      marginRight: '20px',
      paddingTop: '2px',
      paddingBototm: '2px',
      paddingLeft: '2px',
      paddingRight: '2px',
      color: 'white',
    },
  }),
);

interface TopBarProps {
  className?: string;
}
const Topbar: React.FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/settings">
          <Typography className={classes.titleBar} variant="h3">
            <FontAwesomeIcon
              className={classes.iconBar}
              icon={faUtensils}
              size="2x"
            />
            GRUU
          </Typography>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
