const NormalIcon: React.FC = () => (
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
      d="M25.9102 18C25.9102 22.3687 22.3687 25.9102 18 25.9102C13.6313 25.9102 10.0898 22.3687 10.0898 18C10.0898 13.6313 13.6313 10.0898 18 10.0898C22.3687 10.0898 25.9102 13.6313 25.9102 18ZM22.5201 18C22.5201 20.4964 20.4964 22.5201 18 22.5201C15.5036 22.5201 13.4799 20.4964 13.4799 18C13.4799 15.5036 15.5036 13.4799 18 13.4799C20.4964 13.4799 22.5201 15.5036 22.5201 18Z"
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

export default NormalIcon;
