import React, { useState } from "react";
import { capitalizePokemonName, getInfoForTypeTips } from "../../helpers/utils";

interface TypeElementProps {
  type: string;
}

const TypeElement: React.FC<TypeElementProps> = ({ type }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      className={
        "bg-" +
        getInfoForTypeTips(type) +
        " px-14  w-fit rounded-full flex justify-center items-center gap-8 text-14 min-w-fit overflow-hidden min-h-9 shrink-0"
      }
    >
      {!imageLoaded && <div className="w-36 h-8 bg-none rounded-full" />}
      <img
        src={"../../assets/png-icons/" + type + ".png"}
        alt={type + " type image"}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />

      <p className="max-mini:hidden">{capitalizePokemonName(type)}</p>
    </div>
  );
};

export default TypeElement;
