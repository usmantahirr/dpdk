import { type NextPage } from "next";

import Filter from "~/components/Filter";
import Card from "~/components/Card";
import CoreTemplate from "~/components/coreTemplate";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  const pokemon = api.pokemon.getAll.useQuery();

  return (
    <CoreTemplate title="Pokedex">
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.data?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </CoreTemplate>
  );
};

export default Home;
