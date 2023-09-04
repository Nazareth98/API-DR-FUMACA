import * as React from "react";

function IconAddress(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={props.color ? props.color : "#f2f2f2"}
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path
        fillRule="evenodd"
        d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"
      />
    </svg>
  );
}

export default IconAddress;
