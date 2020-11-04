import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import { TrailList } from '../components/trail/TrailList';

export function Home() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/v1/trails`)
      .then((res) => res.json())
      .then((json) => {
        const trails = json.sort((a, b) => b.updatedAt - a.updatedAt);
        setTrails(trails);
      })
      .catch((e) => console.log(e));
  }, []);

  return <TrailList trails={trails} />;
}
