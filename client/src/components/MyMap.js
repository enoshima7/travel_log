import React, { useState } from 'react';
import { Map } from 'react-amap';
import { AMAP_KEY } from '../static/data';
export const MyMap = () => {
  const [center, setCenter] = useState({ longitude: 120, latitude: 30 });
  return (
    <div style={{ width: 600, height: 400 }}>
      <Map amapkey={AMAP_KEY} zoom={5} center={center} />
    </div>
  );
};
