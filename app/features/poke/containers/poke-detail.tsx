import { fetchPoke } from '../api/poke';
import Stats from '../components/stats';
import TypeDefense from '../components/type-defense';
import Abilities from '../components/abilities';
import Moves from '../components/moves';
import PokedexInformation from '../components/pokedex-information';
import RestInformation from '../components/rest-information';
import EvolutionV2 from '../components/evolution';
import { fetchEvolutionChains } from '../api/evolution-chain';

import Moves2 from '../components/moves2';
import PokeMoves from '../components/moves-3';
import { formatPokeMove } from '../utils/format-move';

interface PokeDetailProps {
  pokeKey: string;
}

export default async function PokeDetail({ pokeKey }: PokeDetailProps) {
  const data = await fetchPoke(pokeKey);

  if (!data) {
    return null;
  }

  const {
    type_1,
    type_2,
    poke_ability,
    evolution_id,
    sprite,
    poke_moves: pokeMoves,
    poke_stat: pokeStats,
  } = data;

  const types = type_2 ? [type_1, type_2] : [type_1];

  const pokedexData = {
    no: data.no,
    name_ko: data.name_ko,
    form: data.form,
    pokedexNumbers: data.pokedex_number,
    pokedexInfo: data.pokedex_info,
    types,
  };

  const evolutionData = await fetchEvolutionChains(evolution_id);

  return (
    <div className="flex w-full">
      <div className="w-full">
        <PokedexInformation pokedexData={pokedexData} sprite={sprite} />
        <RestInformation
          detail={data.poke_detail}
          effortValues={data.poke_effort_value}
          breeding={data.poke_breeding}
        />

        <Abilities abilities={poke_ability} />

        <Stats stats={pokeStats} />

        <TypeDefense types={types} />
        {evolutionData && <EvolutionV2 evolutionTree={evolutionData} />}
        {/* <EvolutionTree evolutionId={evolution_id} /> */}

        {/* <PokeMoves pokeMoves={formatPokeMove(pokeMoves)} /> */}
      </div>
    </div>
  );
}
