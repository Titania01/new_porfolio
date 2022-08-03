import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.172 7 .222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.222}
        y1={0.636}
        x2={3.637}
        y2={0.636}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8B5CF6" />
        <stop offset={1} stopColor="#EC4899" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
