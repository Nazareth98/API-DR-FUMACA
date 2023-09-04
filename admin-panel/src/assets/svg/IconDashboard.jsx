// icon:layout-dashboard | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconDashboard(props) {
  return (
    <svg
      fill="none"
      stroke="#8C7D7D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 4h6v8H4zM4 16h6v4H4zM14 12h6v8h-6zM14 4h6v4h-6z" />
    </svg>
  );
}

export default IconDashboard;
