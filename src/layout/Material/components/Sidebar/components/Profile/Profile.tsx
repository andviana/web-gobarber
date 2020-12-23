import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import clsx from 'clsx';
import { useAuth } from '../../../../../../hooks/auth';
import { HOME_PAGE } from '../../../../../../config/appConfig';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content',
    },
    avatar: {
      width: 60,
      height: 60,
      backgroundColor: indigo[500],
    },
    name: {
      marginTop: theme.spacing(1),
    },
  }),
);

interface ProfileProps {
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  const { user } = useAuth();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <RouterLink to={HOME_PAGE}>
        <Avatar
          className={classes.avatar}
          alt="Person"
          component={RouterLink}
          to={HOME_PAGE}
        >
          {user.avatar}
        </Avatar>
      </RouterLink>

      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>

      <Typography variant="body2">{user.email}</Typography>
    </div>
  );
};

export default Profile;
