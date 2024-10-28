import { useEffect, useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { ApiRow, fetchAllKantoPokemon } from "../fetchers/getPokemon";

import ListContainer from "./components/layout/ListContainer";
import PokemonInformationSection from "./components/layout/PokemonInformationSection";
import ErrorPage from "./components/layout/ErrorPage";

function App() {
  const [pokemonCollection, setPokemonCollection] = useState<ApiRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [customHeigthList, setCustomHeigthList] = useState<string>(
    " max-sm:h-0 max-sm:py-0 max-sm:border-0"
  );
  useEffect(() => {
    if (pokemonCollection.length > 0) {
      return;
    }
    try {
      fetchAllKantoPokemon()
        .then((data) => {
          setPokemonCollection(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div className="bg-Red w-100 px-40 py-50 flex gap-x-25 font-main max-sm:flex-col max-sm:p-20 max-sm:h-full">
        <ListContainer
          pokemons={pokemonCollection}
          loading={loading}
          heigth={customHeigthList}
        />
        <div
          onClick={() => {
            customHeigthList === ""
              ? setCustomHeigthList(" max-sm:h-0 max-sm:py-0 max-sm:border-0")
              : setCustomHeigthList("");
          }}
          className="w-100 font-semibold bg-Detective p-8 border-4 border-TyElectric text-center cursor-pointer my-2 shadow-md z-10 sm:hidden"
        >
          {customHeigthList === ""
            ? "🔼 Hide Pokemon list 🔼"
            : "🔽 Show Pokemon list 🔽"}
        </div>
        <Routes>
          <Route
            path="/pokemon/:pokemonName"
            element={
              <PokemonInformationSection
                setCustomHeigthList={setCustomHeigthList}
              />
            }
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/pokemon/bulbasaur" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
