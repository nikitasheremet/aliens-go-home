import React from "react";
import { Sky, Ground, CannonBase } from "./";

export default () => {
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYmax none"
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonBase />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};
