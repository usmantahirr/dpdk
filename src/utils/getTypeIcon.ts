import {type Type} from "@prisma/client";

const getTypeIcon = (type: Type) => {
  if (type.name === "fire") return 'Fire.svg';
  if (type.name === "water") return 'Water.svg';
  if (type.name === "bug") return 'Bug.svg';
  if (type.name === "ground") return 'Ground.svg';
  if (type.name === "ice") return 'Ice.svg';
  if (type.name === "poison") return 'Poison.svg';
  return 'rock.png'
}

export default getTypeIcon;
