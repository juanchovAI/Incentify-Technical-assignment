import React from "react";

import weightIcon from "../../assets/information-icons/weight.svg";
import heightIcon from "../../assets/information-icons/height.svg";
import speciesIcon from "../../assets/information-icons/species.svg";
import abilityIcon from "../../assets/information-icons/ability.svg";

interface PokemonStansInfoProps {
  weight: number;
  height: number;
  ability: string;
  species: string;
  loading: boolean;
}

const PokemonDetailsSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-20 pb-10">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <div className="flex gap-6 items-center w-154 h-8">
            <div className="w-6 h-6 bg-Gray rounded-full animate-pulse"></div>
            <p className="text-12  bg-LigthGrey w-20 h-4 rounded animate-pulse"></p>
          </div>
          <div className="p-8 h-10 border bg-LigthGrey animate-pulse border-Black border-opacity-10 rounded-full text-center w-154 mt-1"></div>
        </div>
      ))}
    </div>
  );
};

const PokemonStansInfo: React.FC<PokemonStansInfoProps> = ({
  weight,
  height,
  ability,
  species,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <PokemonDetailsSkeleton />
      ) : (
        <div className="flex flex-wrap gap-20 pb-10">
          <div>
            {" "}
            <div className="flex gap-6 items-center">
              <img src={weightIcon} alt="height icon" />{" "}
              <p className="text-12 opacity-60">WEIGHT:</p>
            </div>
            <div className="p-8 border border-Black border-opacity-10 rounded-full text-center  w-154 mt-1 text-18 max-mini:w-full">
              {weight + " kg"}
            </div>
          </div>
          <div>
            {" "}
            <div className="flex gap-6 items-center">
              <img src={heightIcon} alt="height icon" />{" "}
              <p className="text-12 opacity-60">HEIGHT:</p>
            </div>
            <div className="p-8 border border-Black border-opacity-10 rounded-full text-center  w-154 mt-1 text-18 max-mini:w-full">
              {height + " m"}
            </div>
          </div>
          <div>
            {" "}
            <div className="flex gap-6 items-center">
              <img src={speciesIcon} alt="species icon" />{" "}
              <p className="text-12 opacity-60">SPECIES:</p>
            </div>
            <div className="p-8 border border-Black border-opacity-10 rounded-full text-center  w-154 mt-1 text-18 max-mini:w-full">
              {species}
            </div>
          </div>
          <div>
            {" "}
            <div className="flex gap-6 items-center">
              <img src={abilityIcon} alt="species icon" />{" "}
              <p className="text-12 opacity-60">ABILITY:</p>
            </div>
            <div className="p-8 border border-Black border-opacity-10 rounded-full text-center  w-154 mt-1 text-18 max-mini:w-full">
              {ability}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonStansInfo;
