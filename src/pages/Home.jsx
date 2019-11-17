import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { Section } from './../organisms/section';

import trail1 from './../img/tmp_trail_1.jpg';
import trail2 from './../img/tmp_trail_2.jpg';
import trail3 from './../img/tmp_trail_3.jpg';

function displayStatus(status) {
  return status === 'Wet' || status === 'Melting'
    ? `Closed - ${status}`
    : status;
}

export function Home() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch('https://api.morcmtb.org/v1/trails')
      .then(res => res.json())
      .then(json => {
        setTrails(json);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <Section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {trails.map((t, i) => {
          let image = trail1;
          if (i % 3 === 0) {
            image = trail3;
          } else if (i % 2 === 0) {
            image = trail2;
          }

          return <Trail key={i} trail={t} image={image} />;
        })}
      </div>
    </Section>
  );
}

function Trail(props) {
  const { trail, image } = props;
  return (
    <div
      style={{
        maxWidth: '720px',
        border: 'solid 1px gray',
        marginBottom: '1rem',
        boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.11)'
      }}
    >
      <img src={image} className="trailImage" alt="" />
      <div style={{ padding: '0rem .5rem' }}>
        <h1 style={{}} className="title">
          {trail.trailName}
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0rem .5rem'
        }}
      >
        <h2
          style={{
            fontWeight: 'bold'
          }}
        >
          {displayStatus(trail.trailStatus)}
        </h2>
        <div
          style={{
            fontSize: 'smaller'
          }}
        >
          Updated:{' '}
          <time>
            {DateTime.fromMillis(trail.updatedAt).toLocaleString({
              weekday: 'short',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </time>
        </div>
      </div>

      <div
        style={{
          padding: '.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {trail.description}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '.5rem'
        }}
      >
        <address>
          {trail.street} <br />
          {trail.city}, {trail.state} {trail.zipcode}
        </address>
        <address>
          {trail.latitude}, {trail.longitude}
        </address>
      </div>
    </div>
  );
}

// "trailId": "3b716fa1-af6b-4aa8-aff1-11ff473072d1",
// "createdAt": 1519053269271,
// "updatedBy": "us-east-1:399937b7-68ae-49a0-bb4e-ababb1888974",
