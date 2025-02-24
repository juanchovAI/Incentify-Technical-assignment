const GraundIcon: React.FC = () => (
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
      d="M12.9644 24.4741C12.9595 24.4741 12.9561 24.4693 12.9577 24.4647L17.5532 11.4797C17.5542 11.4769 17.5569 11.475 17.5598 11.475H22.4656C22.4686 11.475 22.4713 11.4769 22.4723 11.4797L26.9996 24.4648C27.0012 24.4694 26.9977 24.4741 26.9929 24.4741H13.1025H12.9644ZM9.00711 24.5249C9.00217 24.5249 8.99875 24.52 9.00049 24.5154L12.4226 15.3793C12.4236 15.3765 12.4263 15.3747 12.4292 15.3747H15.4026C15.4075 15.3747 15.4109 15.3796 15.4093 15.3842L12.1002 24.5203C12.0992 24.5231 12.0965 24.5249 12.0935 24.5249H9.00711Z"
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

export default GraundIcon;
