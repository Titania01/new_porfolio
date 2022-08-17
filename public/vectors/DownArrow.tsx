import * as React from "react";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9 12.172 5.364-5.364 1.414 1.414L8 16 .222 8.222l1.414-1.414L7 12.172V0h2v12.172Z"
      fill={props.color || "#1F2937"}
    />
  </svg>
);

export default SvgComponent;
