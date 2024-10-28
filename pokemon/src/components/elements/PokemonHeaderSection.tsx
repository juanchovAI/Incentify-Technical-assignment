import React from "react";
import { getInfoForTypeTips } from "../../helpers/utils";
import { getSvg } from "../../helpers/svgsFile";

interface PokemonHeaderSectionProps {
  type: string;
  imgUrl: string;
  loading: boolean;
}

const PokemonHeaderSection: React.FC<PokemonHeaderSectionProps> = ({
  type,
  imgUrl,
  loading,
}) => {
  const gradientBackground = getInfoForTypeTips(type);

  return (
    <div>
      {loading ? (
        <div
          style={{
            clipPath: "circle(260px at 50% 3%)",
            backgroundColor: "#F2F2F2",
            height: "270px",
          }}
          className={`bg-LigthGrey animate-pulse`}
        ></div>
      ) : (
        <div
          style={{
            clipPath: "circle(260px at 50% 3%)",
            backgroundColor: "#F2F2F2",
            height: "270px",
          }}
          className={`bg-gradient-to-br from-${gradientBackground} from-30% to-white flex justify-center items-center `}
        >
          {React.createElement(getSvg(type))}
        </div>
      )}
      {loading ? (
        ""
      ) : (
        <div className="flex justify-center">
          <img
            style={{ zIndex: 10 }}
            className="max-w-36 h-36  z-10 -mt-32 "
            src={imgUrl}
            alt="image of the selected pokemon"
          />
        </div>
      )}
    </div>
  );
};

export default PokemonHeaderSection;
