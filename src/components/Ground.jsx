import React from "react";
import { backgroundWidth } from "../utils/constants";

export default () => {
  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={backgroundWidth / -2}
        y={0}
        width={backgroundWidth}
        height={100}
      />
      <line
        x1={backgroundWidth / -2}
        y1={0}
        x2={backgroundWidth / 2}
        y2={0}
        style={groundSkyDivision}
      />
    </g>
  );
};

const groundStyle = {
  fill: "#59a941",
};
const groundSkyDivision = {
  stroke: "#458232",
  strokeWidth: "3px",
};
