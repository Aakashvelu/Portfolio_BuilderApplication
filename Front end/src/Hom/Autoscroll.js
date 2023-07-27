import React from 'react';
import AutoScrollImages from './Scroll';
function Auto() {
  const images = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
  ];

  return (
    <div>
      <AutoScrollImages images={images} scrollDelay={3000} />
    </div>
  );
}

export default Auto;
