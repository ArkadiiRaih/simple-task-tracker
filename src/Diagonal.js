import React from "react";

const Diagonal = () => {
  return (
    <svg
      className="diagonal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f44336"></stop>
          <stop offset="100%" stopColor="#d32f2f"></stop>
        </linearGradient>
      </defs>
      <polygon points="0,0.1 0,0 100,0 100,10" fill="url(#linear)"></polygon>
    </svg>
  );
};

export default Diagonal;
