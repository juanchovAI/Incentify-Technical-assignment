const SteelIcon: React.FC = () => (
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
      d="M9.0018 18.011C8.9994 18.0069 8.9994 18.0018 9.00179 17.9977L13.5279 10.2645C13.5303 10.2605 13.5346 10.2581 13.5393 10.2581H22.5103C22.515 10.2581 22.5193 10.2605 22.5217 10.2646L26.9982 17.9978C27.0006 18.0018 27.0006 18.0068 26.9982 18.0109L22.5217 25.7354C22.5193 25.7394 22.515 25.7419 22.5103 25.7419H13.5393C13.5346 25.7419 13.5303 25.7395 13.5279 25.7355L9.0018 18.011ZM22.1701 18C22.1701 20.3023 20.3037 22.1687 18.0014 22.1687C15.6991 22.1687 13.8327 20.3023 13.8327 18C13.8327 15.6976 15.6991 13.8313 18.0014 13.8313C20.3037 13.8313 22.1701 15.6976 22.1701 18Z"
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

export default SteelIcon;
