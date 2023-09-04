import * as React from "react";

function IconPlus(props) {
  return (
    <svg
      fill={props.color ? props.color : "#f2f2f2"}
      viewBox="0 0 16 16"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
    </svg>
  );
}

export default IconPlus;
