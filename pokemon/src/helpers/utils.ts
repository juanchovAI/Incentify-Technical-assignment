export const capitalizePokemonName = (name: string): string => {
  const firstLatter = name.charAt(0).toUpperCase();
  return firstLatter + name.substring(1);
};

export const getInfoForTypeTips = (type: string): string => {
  switch (type) {
    case "bug":
      return "TyBug";
    case "grass":
      return "TyGrass";

    case "dark":
      return "TyDark";

    case "dragon":
      return "TyDragon";

    case "electric":
      return "TyElectric";

    case "fairy":
      return "TyFairy";

    case "fighting":
      return "TyFighting";

    case "fire":
      return "TyFire";

    case "flying":
      return "TyFlying";

    case "ghost":
      return "TyGhost";

    case "ground":
      return "TyGround";

    case "ice":
      return "TyIce";

    case "poison":
      return "TyPoison";

    case "rock":
      return "TyRock";

    case "water":
      return "TyWater";

    case "steel":
      return "TySteel";

    case "psychic":
      return "TyPsychic";

    case "normal":
      return "TyNormal";

    default:
      return "TyNormal";
  }
};

interface Species {
  genus: string;
  language: {
    name: string;
    url: string;
  };
}

export const getEspecies = (species: Species[]): string => {
  const speciesResult =
    species.find((item) => item.language.name === "en")?.genus || "";

  const speciesString = speciesResult.replace("Pokémon", "");

  return speciesString;
};
