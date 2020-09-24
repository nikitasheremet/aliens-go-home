import React from "react";
import { pathFromBezierCurve } from "../utils/formulas";

const baseWidth = 80;
const height = 60;

const cubicBezierCurve = {
  initialAxis: {
    x: baseWidth / -2,
    y: height,
  },
  initialControlPoint: {
    x: 20,
    y: -height,
  },
  endingControlPoint: {
    x: 60,
    y: height * -1,
  },
  endingAxis: {
    x: baseWidth,
    y: 0,
  },
};

export default (props) => {
  return (
    <g>
      <path d={pathFromBezierCurve(cubicBezierCurve)} style={cannonBaseStyle} />
      <line
        x1={baseWidth / -2}
        y1={height}
        x2={baseWidth / 2}
        y2={height}
        style={cannonBaseStyle}
      />
    </g>
  );
};

const cannonBaseStyle = {
  fill: "#a16012",
  stroke: "#75450e",
  strokeWidth: "2px",
};
