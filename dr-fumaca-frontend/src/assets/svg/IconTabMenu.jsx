import * as React from "react";

function IconTabMenu(props) {
  return (
    <svg
      fill="none"
      stroke="#f2f2f2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      viewBox="0 0 24 24"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M4 12h16M4 6h16M4 18h16" />{" "}
    </svg>
  );
}

export default IconTabMenu;
