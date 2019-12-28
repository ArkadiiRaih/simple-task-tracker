import React, { useState, useLayoutEffect, useEffect } from "react";
import "./carousel.scss";
const defaultImages = [
  "./public/supr.png",
  "./public/supr2.png",
  "./public/supr3.png"
];
const Carousel = () => {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    setImages(defaultImages);
    setTimeout(() => setActive((active + 1) % images.length), 2000);
  }, [images, active]);

  useEffect(() => {});
  const handleClick = e => {
    setActive(+e.target.dataset.index);
  };
  return (
    <div>
      <h1 className="h1">Carousel</h1>
      <div className="carousel">
        {images.map((img, idx) => (
          <img
            key={img}
            className={`carousel__image ${idx == active &&
              "carousel__image_active"}`}
            src={img}
            alt="carousel"
          />
        ))}
        <div className="carousel__picker">
          {images.map((img, idx) => (
            <button
              className={`carousel__button ${idx == active &&
                "carousel__button_active"}`}
              data-index={idx}
              key={idx}
              style={{ width: "20px", height: "20px" }}
              onClick={handleClick}
            >
              {idx}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
