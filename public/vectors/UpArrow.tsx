import * as React from "react";

const SvgComponent = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={14}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.004 3.414-8.607 8.607-1.414-1.414L9.589 2H2.004V0h11v11h-2V3.414Z"
      fill={props.color || "#F9FAFB"}
    />
  </svg>
);

export default SvgComponent;
