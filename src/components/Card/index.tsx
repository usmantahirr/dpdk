import {type Category, type Pokemon, type Type} from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import getTypeIcon from "~/utils/getTypeIcon";

interface PokemonFull extends Pokemon {
  category: Category;
  type: Type;
}

interface CardProps {
  pokemon: PokemonFull;
}

export default function Card({pokemon}: CardProps) {
  return <Link href={pokemon.id}>
    <div className="card w-56 glass ">
      <figure className="justify-center"><img src={pokemon.image} alt={pokemon.name}/></figure>
      <div className="card-body">
        <h2 className="card-title content-center justify-center">
          {pokemon.name}
          <Image src={`/${getTypeIcon(pokemon.type)}`} alt={pokemon.type.name} width={15} height={15}/>
        </h2>
        <div className="flex flex-col text-center">
          <div>
            <b>Category:</b> <span>{pokemon.category.name}</span>
          </div>
          <div>
            <b>Height:</b> <span>{pokemon.height}</span>
          </div>
          <div>
            <b>Weight:</b> <span>{pokemon.weight}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
}