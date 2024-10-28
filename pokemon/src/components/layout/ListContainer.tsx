import React from "react";
import { Link } from "react-router-dom";
import { capitalizePokemonName } from "../../helpers/utils";

interface PokemonObject {
  name: string;
  url: string;
}

interface ListContainerProps {
  pokemons: PokemonObject[];
  loading: boolean;
  heigth: string;
}

const RenderSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          className="bg-LigthGrey px-10 py-8 rounded cursor-pointer animate-pulse transition-all duration-500 ease-in"
        >
          <div className="h-4 bg-Gray w-3/4 rounded"></div>
        </div>
      ))}
    </>
  );
};

const ListContainer: React.FC<ListContainerProps> = ({
  pokemons,
  loading,
  heigth,
}) => {
  return (
    <div
      style={{
        transition: "height 1s, padding-top 1s 0.2s, padding-bottom 1s 0.2s",
      }}
      className={
        "p-15 bg-DarkGrey overflow-scroll border-Black border-solid border flex flex-col gap-10 md:min-w-220 max-h-fullScreen min-w-fit h-[1000px] " +
        " " +
        heigth
      }
    >
      {loading ? (
        <RenderSkeleton />
      ) : (
        pokemons.map((pokemon) => (
          <Link
            key={pokemon.name + Math.random()}
            to={`/pokemon/${pokemon.name}`}
          >
            <div className="bg-LigthGrey px-10 py-8 rounded cursor-pointer hover:bg-White transition-all duration-500 ease-in">
              {capitalizePokemonName(pokemon.name)}
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ListContainer;
