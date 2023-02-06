import React from "react";

export const Checkmark: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>Check</title>{" "}
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Check">
            <rect
              id="Rectangle"
              fillRule="nonzero"
              x="0"
              y="0"
              width="24"
              height="24"
            ></rect>
            <circle
              id="Oval"
              stroke="#6CCC67"
              strokeWidth="2"
              strokeLinecap="round"
              cx="12"
              cy="12"
              r="9"
            ></circle>{" "}
            <path
              d="M8.5,12.5 L10.151,14.5638 C10.3372,14.7965 10.6843,14.8157 10.895,14.605 L15.5,10"
              id="Path"
              stroke="#6CCC67"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
