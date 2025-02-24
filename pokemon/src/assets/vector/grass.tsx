const GrassIcon: React.FC = () => (
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
      d="M12.5554 24.4556C12.4936 24.3974 12.4325 24.3382 12.3721 24.2778C9.18402 21.0897 9.18402 15.9207 12.3721 12.7326C15.5603 9.54446 25.7189 9.33118 25.7189 9.33118C25.7189 9.33118 27.1055 21.0897 23.9174 24.2778C21.0859 27.1093 16.692 27.426 13.511 25.2281L16.0741 22.0827L20.1716 21.198L16.8269 20.8636L18.9525 18.6994L21.3721 18.1693L19.4588 17.6027L21.3721 14.1512L18.6506 17.2037L17.5997 15.7207L17.9697 18.1693L16.0741 20.3062L15.1955 17.6027L15.1955 21.198L12.5554 24.4556Z"
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

export default GrassIcon;
