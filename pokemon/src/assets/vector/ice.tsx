const IceIcon: React.FC = () => (
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
      d="M22.5104 10.3726L22.5657 15.2364L18.3234 17.2729L18.2711 12.6805L22.5104 10.3726Z"
      fill="url(#MyGradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.7632 18.0367L22.5636 20.4388L18.3615 18.0329L22.5614 15.8268L26.7632 18.0367Z"
      fill="url(#MyGradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6146 18.0367L13.415 20.4388L9.21292 18.0329L13.4128 15.8268L17.6146 18.0367Z"
      fill="url(#MyGradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3676 10.3527L17.7265 12.5115L17.6151 17.2159L13.4995 15.1776L13.3676 10.3527Z"
      fill="url(#MyGradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.6296 25.6472L18.2707 23.4884L18.3821 18.7839L22.4977 20.8223L22.6296 25.6472Z"
      fill="url(#MyGradient)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5185 25.6911L13.4631 20.8273L17.7054 18.7908L17.7577 23.3832L13.5185 25.6911Z"
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

export default IceIcon;
