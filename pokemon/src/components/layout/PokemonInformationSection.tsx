import React, { useEffect, useState } from "react";
import {
  fetchPokemonDetail,
  fetchPokemonSpecies,
} from "../../../fetchers/getPokemon";
import { useNavigate, useParams } from "react-router-dom";
import { ApiDetail, Species } from "../../fetchers/getPokemon";
import { capitalizePokemonName, getEspecies } from "../../helpers/utils";
import PokemonMainInfo from "../elements/PokemonMainInfo";
import PokemonHeaderSection from "../elements/PokemonHeaderSection";

interface Type {
  name: string;
  url: string;
}
interface TypeObject {
  slot: number;
  type: Type;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonInformationSectionProps {
  setCustomHeigthList: (value: string) => void;
}

const PokemonInformationSection: React.FC<PokemonInformationSectionProps> = ({
  setCustomHeigthList,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useState<ApiDetail>(
    {} as ApiDetail
  );
  const [speciesSelected, SetSpeciesSelected] = useState<Species[]>([
    {
      genus: "",
      language: {
        name: "",
        url: "",
      },
    },
  ] as [Species]);

  const pokemonName = useParams<{ pokemonName: string }>().pokemonName;
  const navigate = useNavigate();

  useEffect(() => {
    let pokemon: ApiDetail = {} as ApiDetail;
    setCustomHeigthList(" max-sm:h-0 max-sm:py-0 max-sm:border-0 ");
    const fetchPokemon = async () => {
      try {
        if (pokemonName) {
          const result = await fetchPokemonDetail(pokemonName);
          if (result) {
            pokemon = result;
            document.title = `${capitalizePokemonName(
              pokemon.name
            )} | Pokemon App `;
            console.log(document);
          } else {
            console.error("Failed to fetch Pokemon details");
            navigate("/error");
          }
        } else {
          console.error("Pokemon name is undefined");
          navigate("/error");
        }
        setSelectedPokemonInfo(pokemon);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        if (selectedPokemonInfo.id) {
          const species = await fetchPokemonSpecies(selectedPokemonInfo?.id);
          SetSpeciesSelected(species.genera);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpecies();
  }, [selectedPokemonInfo]);

  const getAbility = (abilitiesArr: Ability[]): string => {
    return abilitiesArr && abilitiesArr.length > 0
      ? abilitiesArr.map((ability) => ability.ability.name)[0]
      : "N/A";
  };

  const getFirstType = (types: TypeObject[]): string => {
    if (types && types.length > 0) {
      return types[0].type.name;
    }
    return "";
  };

  return (
    <div className="bg-White w-full border-Black border-solid border  pb-10 ">
      <PokemonHeaderSection
        type={getFirstType(selectedPokemonInfo?.types)}
        imgUrl={selectedPokemonInfo?.sprites?.other?.showdown?.front_default}
        loading={loading}
      />
      <div className="px-20">
        <PokemonMainInfo
          name={selectedPokemonInfo?.name || ""}
          id={selectedPokemonInfo?.id}
          types={selectedPokemonInfo?.types}
          height={selectedPokemonInfo?.height}
          weight={selectedPokemonInfo?.weight}
          ability={getAbility(selectedPokemonInfo?.abilities)}
          species={getEspecies(speciesSelected)}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default PokemonInformationSection;
