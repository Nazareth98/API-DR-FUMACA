function IconBoxAdd(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#F27D52"
      height={props.width}
      width={props.width}
      {...props}
    >
      <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z" />
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
    </svg>
  );
}

export default IconBoxAdd;
