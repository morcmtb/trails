import React, { FC } from 'react';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';

interface ITrailStatusAvatar {
  status: string;
}

export const TrailStatusAvatar: FC<ITrailStatusAvatar> = ({ status }) => {
  const classes = useStyles();

  function displayStatus(s: string) {
    return s === 'Wet' || s === 'Melting' ? `Closed - ${s}` : s;
  }
  const value = displayStatus(status).slice(0, 1);

  return (
    <Avatar className={value === 'C' ? classes.closed : classes.open}>
      {value}
    </Avatar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    open: {
      backgroundColor: theme.palette.success.main,
    },
    closed: {
      backgroundColor: theme.palette.error.main,
    },
  })
);
