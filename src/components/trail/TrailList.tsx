import { Grid } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { ITrail, Trail } from './Trail';

interface TrailList {
  trails: ITrail[];
}

export const TrailList: FC<TrailList> = (props) => {
  const { trails } = props;
  return (
    <Grid container spacing={1} alignItems="stretch">
      {trails.map((t, i) => {
        return (
          <Grid item sm={12} md={4} key={i}>
            <Trail key={i} trail={t} />
          </Grid>
        );
      })}
    </Grid>
  );
};
