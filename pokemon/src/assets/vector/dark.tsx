import React from "react";

const DarkIcon: React.FC = () => (
  <svg
    width="100%"
    height="400"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="MyGradient" x1="1" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
        <stop offset="90%" stopColor="rgba(255, 255, 255, 30)" />
      </linearGradient>
    </defs>

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0762 24.9205C17.4182 24.9729 17.7684 25 18.125 25C21.922 25 25 21.922 25 18.125C25 14.328 21.922 11.25 18.125 11.25C17.8703 11.25 17.6187 11.2639 17.3712 11.2909C19.2547 12.7178 20.5 15.1897 20.5 18C20.5 20.9545 19.1236 23.535 17.0762 24.9205ZM18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27Z"
      fill="url(#MyGradient)"
    />
    <style>
      {`
        #icon {
                shape-rendering: crispEdges;
                fill: url(#MyGradient);
                }
    `}
    </style>
  </svg>
);

export default DarkIcon;
