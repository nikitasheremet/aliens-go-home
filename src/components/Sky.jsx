import React from "react";

export default () => {
  const skyWidth = 5000;
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};
const skyStyle = {
  fill: "#30abef",
};
