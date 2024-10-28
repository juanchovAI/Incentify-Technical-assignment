import grass from "../assets/vector/grass";
import water from "../assets/vector/water";
import bug from "../assets/vector/bug";
import dark from "../assets/vector/dark";
import dragon from "../assets/vector/dragon";
import electric from "../assets/vector/electric";
import fairy from "../assets/vector/fairy";
import fighting from "../assets/vector/fighting";
import fire from "../assets/vector/fire";
import flying from "../assets/vector/flying";
import ghost from "../assets/vector/ghost";
import ground from "../assets/vector/ground";
import ice from "../assets/vector/ice";
import poison from "../assets/vector/poison";
import rock from "../assets/vector/rock";
import steel from "../assets/vector/steel";
import psychic from "../assets/vector/psychic";
import normal from "../assets/vector/normal";

export const getSvg = (type: string) => {
  switch (type) {
    case "grass":
      return grass;
    case "water":
      return water;
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "poison":
      return poison;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "psychic":
      return psychic;
    case "normal":
      return normal;
    default:
      return normal;
  }
};
