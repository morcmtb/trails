import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Container, Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

import trail1 from './../img/tmp_trail_1.jpg';
import trail2 from './../img/tmp_trail_2.jpg';
import trail3 from './../img/tmp_trail_3.jpg';

function displayStatus(status) {
    return status === 'Wet' || status === 'Melting' ? `Closed - ${status}` : status;
}

export function Home() {
    const [trails, setTrails] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/v1/trails`)
            .then((res) => res.json())
            .then((json) => {
                setTrails(json);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <Container maxWidth="lg">
            {trails.map((t, i) => {
                let image = trail1;
                if (i % 3 === 0) {
                    image = trail3;
                } else if (i % 2 === 0) {
                    image = trail2;
                }
                return <Trail key={i} trail={t} image={image} />;
            })}
        </Container>
    );
}

function Trail(props) {
    const { trail, image } = props;
    return (
        <Card sx={{ marginBottom: '2rem' }}>
            <CardHeader
                title={`${trail.trailName}`}
                subheader={`${displayStatus(trail.trailStatus)} - ${DateTime.fromMillis(trail.updatedAt).toLocaleString(
                    {
                        weekday: 'short',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    },
                )}`}
            />
            <CardMedia image={image} component="img" />
            <CardContent>
                <Typography variant="h5">{displayStatus(trail.trailStatus)}</Typography>
                <Typography paragraph>{trail.description}</Typography>
                <Typography component="address">
                    {trail.street} <br />
                    {trail.city}, {trail.state} {trail.zipcode}
                </Typography>
                <Typography component="address">
                    {trail.latitude}, {trail.longitude}
                </Typography>
            </CardContent>
        </Card>
    );
}
