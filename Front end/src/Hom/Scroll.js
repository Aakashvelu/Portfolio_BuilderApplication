import React, { useState, useEffect, useRef } from 'react';

function AutoScrollImages({ images, scrollDelay }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, scrollDelay);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, scrollDelay]);

  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth;
    containerRef.current.scrollLeft = currentIndex * containerWidth;
  }, [currentIndex]);

  return (
    <div className="auto-scroll-images" ref={containerRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
}

export default AutoScrollImages;
