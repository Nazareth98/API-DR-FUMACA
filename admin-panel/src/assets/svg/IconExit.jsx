import * as React from "react";

function IconExit(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#8C7D7D"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z" />
      <path d="M11 16l5-4-5-4v3.001H3v2h8z" />
    </svg>
  );
}

export default IconExit;
