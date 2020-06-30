import React from "react";

function AngleRight(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        fill={props.fill}
        d="M21.061 16l-8.706 8.708-1.416-1.416 7.294-7.292-7.294-7.292 1.416-1.416c2.902 2.904 5.804 5.806 8.706 8.708z"
      />
    </svg>
  );
}

export default AngleRight;
