import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import React, { FC, Fragment } from 'react';

import { ITrail, Trail } from './Trail';
import { followTrail } from './TrailsSlice';

interface TrailList {
  trails: ITrail[];
}

export const TrailList: FC<TrailList> = (props) => {
  const { trails } = props;
  const dispatch = useDispatch();

  function handleFollow(t: any) {
    dispatch(followTrail(t));
  }

  return (
    <Grid container spacing={1} alignItems="stretch">
      {trails.map((t, i) => {
        return (
          <Grid item sm={12} md={4} key={i}>
            <Trail key={i} trail={t} handleFollow={() => handleFollow(t)} />
          </Grid>
        );
      })}
    </Grid>
  );
};
