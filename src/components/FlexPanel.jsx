import React, { useState, useLayoutEffect } from "react";
import "./style/flex-panel.scss";

const defaultImages = [
  "./public/supr.png",
  "./public/supr2.png",
  "./public/supr3.png"
];

const FlexPanel = () => {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(null);

  useLayoutEffect(() => {
    setImages(defaultImages);
    setActive(Math.floor(images.length / 2));
  }, [images]);
  const handleClick = e => {
    if (+e.target.dataset.index === active) {
      setActive(null);
      return;
    }
    setActive(+e.target.dataset.index);
  };
  return (
    <div>
      <div className="panels">
        {images.map((img, idx) => (
          // eslint-disable-next-line
          <div
            key={img}
            data-index={idx}
            className={`panel ${
              idx === active ? "panel__open panel__open_active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={handleClick}
          >
            <p>Some Text</p>
            <p data-index={idx}>Word</p>
            <p>Some Text</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexPanel;
