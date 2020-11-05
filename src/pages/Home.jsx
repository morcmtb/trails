import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TrailList } from '../components/trail/TrailList';
import { addTrails } from '../components/trail/TrailsSlice';
export function Home() {
  const trails = useSelector((state) => state.trails);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/v1/trails`)
      .then((res) => res.json())
      .then((json) => {
        const trails = json.sort((a, b) => b.updatedAt - a.updatedAt);
        dispatch(addTrails(trails));
      })
      .catch((e) => console.log(e));
  }, []);

  return <TrailList trails={trails} />;
}
