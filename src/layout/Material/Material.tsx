import React, { useState } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 56,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
    },
    shiftContent: {
      paddingLeft: 240,
    },
    content: {
      height: '100%',
    },
  }),
);

const Material: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default withRouter(Material);
