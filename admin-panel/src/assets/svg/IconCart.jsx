import * as React from "react";

function IconCart(props) {
  return (
    <svg
      fill="#8C7D7D"
      viewBox="0 0 16 16"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M11.354 6.354a.5.5 0 00-.708-.708L8 8.293 6.854 7.146a.5.5 0 10-.708.708l1.5 1.5a.5.5 0 00.708 0l3-3z" />
      <path d="M.5 1a.5.5 0 000 1h1.11l.401 1.607 1.498 7.985A.5.5 0 004 12h1a2 2 0 100 4 2 2 0 000-4h7a2 2 0 100 4 2 2 0 000-4h1a.5.5 0 00.491-.408l1.5-8A.5.5 0 0014.5 3H2.89l-.405-1.621A.5.5 0 002 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  );
}

export default IconCart;
