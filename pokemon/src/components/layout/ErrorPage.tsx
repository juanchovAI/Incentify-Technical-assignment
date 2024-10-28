import React from "react";
import { Link } from "react-router-dom";

import DetectivePikachu from "../../../public/Detective_Pikachu.jpg";

const ErrorPage: React.FC = () => {
  return (
    <div className="bg-Red flex  justify-center items-center m-auto border">
      <div className="p-50 bg-DarkGrey">
        <img
          className="max-w-52 rounded-full m-auto"
          src={DetectivePikachu}
          alt="Detective pikachu image on pixel art"
        />
        <h1 className="text-32 mt-10">Oooppss - Page Not Found</h1>
        <p className="mb-10 ">
          {" "}
          🙈 So sorry for this! Please try going back to the main dashboard. In
          the meantime, Detective Pikachu will track down the root cause.
        </p>
        <Link
          className="bg-Detective rounded p-14 hover:bg-White transition-all duration-500 ease-in"
          to="/"
        >
          Go dashboard
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
