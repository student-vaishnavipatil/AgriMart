import React, { useEffect, useRef } from 'react';
import './ImageCarousel.css'; // Make sure to create this CSS file

const images = [
  'farm1.jpg', // Replace with your actual image URLs
  'farm2.jpg',
  'farm3.jpg',
  'farm4.jpg',
  // Add more images as needed
];

const ImageCarousel = () => {
  const carouselRef = useRef(null);
  const totalImages = images.length;
  const scrollSpeed = 5; // Increased speed: Adjust this for scroll speed (higher is faster)
  const intervalTime = 10; // Decreased interval: Adjust this for smoother scrolling

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += scrollSpeed; // Scroll to the right by a fixed amount
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 3) {
          // Reset scroll position when reaching the end
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, intervalTime); // Keep this value low for smoothness

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
      {/* Duplicate the images for seamless scrolling */}
      {[...images, ...images, ...images].map((image, index) => (
        <div className="carousel-image" key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
