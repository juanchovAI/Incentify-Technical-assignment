const RockIcon: React.FC = () => (
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
      d="M23.839 21.1825C23.839 24.3952 21.2248 26.9996 18 26.9996C14.7752 26.9996 12.161 24.3952 12.161 21.1825C12.161 18.058 17.6842 9.47666 17.9871 9.00838C17.994 8.9977 18.006 8.9977 18.0129 9.00838C18.3158 9.47666 23.839 18.058 23.839 21.1825ZM17.0267 25.1347C14.0637 24.4863 14.5707 21.2042 14.5707 21.2042C14.5707 21.2042 15.3798 23.1855 17.3432 23.8273C19.3067 24.4691 21.6794 23.5278 21.6794 23.5278C21.6794 23.5278 19.9896 25.7829 17.0267 25.1347Z"
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

export default RockIcon;
