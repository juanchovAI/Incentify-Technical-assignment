import React from "react";
import { capitalizePokemonName } from "../../helpers/utils";
import TypeElement from "./TypeElement";
import PokemonStansInfo from "./PokemonStansInfo";

interface Type {
  name: string;
  url: string;
}
interface TypeObject {
  slot: number;
  type: Type;
}

interface PokemonMainInfoProps {
  name: string;
  id: number;
  types: TypeObject[];
  height: number;
  weight: number;
  ability: string;
  species: string;
  loading: boolean;
}

const PokemonHeaderSkeleton = () => {
  return (
    <div>
      <div>
        <div className="w-250 h-8 bg-LigthGrey rounded-full animate-pulse mb-2"></div>
        <div className="w-70 h-4 bg-LigthGrey rounded-full animate-pulse"></div>
      </div>

      <div className="flex gap-7 py-20 flex-wrap">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="w-154 h-10 bg-LigthGrey rounded-full animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

const PokemonMainInfo: React.FC<PokemonMainInfoProps> = ({
  name,
  id,
  types,
  height,
  weight,
  ability,
  species,
  loading,
}) => {
  const addZerosToId = (id: number): string => {
    if (id < 10) {
      return `#00${id}`;
    } else if (id < 100) {
      return `#0${id}`;
    } else {
      return `#${id}`;
    }
  };

  return (
    <div className="pokemon-main-info mt-3 px-10 py-5">
      {loading ? (
        <PokemonHeaderSkeleton />
      ) : (
        <>
          {" "}
          <div>
            <h1 className="text-32 leading-6">{capitalizePokemonName(name)}</h1>
            <p className="">{addZerosToId(id)}</p>
          </div>
          <div className="flex gap-7 py-20 flex-wrap">
            {types &&
              types.map((type) => (
                <TypeElement key={Math.random()} type={type.type.name} />
              ))}
          </div>{" "}
        </>
      )}
      <div>
        <PokemonStansInfo
          weight={weight}
          height={height}
          ability={capitalizePokemonName(
            ability === undefined ? "N/A" : ability
          )}
          species={species}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default PokemonMainInfo;
