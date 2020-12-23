import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Topbar } from './components';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 64,
      height: '100%',
    },
    content: {
      height: '100%',
    },
  }),
);

const Minimal: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Minimal;
