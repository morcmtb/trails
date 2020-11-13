import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import { DateTime } from 'luxon';
import { TrailStatusAvatar } from './TrailStatusAvatar';

export interface ITrail {
  trail: any;
}

export const Trail: FC<ITrail> = (props) => {
  const { trail } = props;
  return (
    <Card style={{ height: '100%' }}>
      <CardHeader
        avatar={<TrailStatusAvatar status={trail.trailStatus} />}
        title={trail.trailName}
        subheader={`Updated: ${DateTime.fromMillis(
          trail.updatedAt
        ).toLocaleString({
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })}`}
        action={<FormControlLabel control={<Switch />} label="follow" />}
      />

      <CardContent>
        <Typography variant="body2" component="p">
          {trail.description}
        </Typography>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography variant="body2" component="address">
              {trail.street} <br />
              {trail.city}, {trail.state} {trail.zipcode}
              <Link
                color="secondary"
                href={`https://www.google.com/maps/place/${trail.street} ${trail.city}, ${trail.state} ${trail.zipcode}`}
                target="_new"
              >
                Google Maps
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="address">
              {trail.latitude}, {trail.longitude}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
