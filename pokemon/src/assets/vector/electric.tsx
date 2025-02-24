const ElectricIcon: React.FC = () => (
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
      d="M14.3585 9.05061C14.355 9.04057 14.3625 9.03009 14.3731 9.03009H20.6952C20.702 9.03009 20.708 9.03451 20.71 9.04098L23.6138 18.4228C23.6169 18.4328 23.6095 18.4429 23.599 18.4429H19.3902C19.385 18.4429 19.3813 18.4477 19.3827 18.4527L21.7966 26.9501C21.8013 26.9666 21.7797 26.9774 21.7694 26.9637L12.3886 14.4887C12.381 14.4785 12.3882 14.4639 12.401 14.4639H16.2209C16.2262 14.4639 16.2299 14.4587 16.2282 14.4537L14.3585 9.05061Z"
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

export default ElectricIcon;
