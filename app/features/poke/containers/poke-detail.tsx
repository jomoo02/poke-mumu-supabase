import { fetchPoke } from '../api/poke';
// import Stats from '../modules/stats';
import Stats from '../components/stats';
// import TypeDefense from '../modules/type-defense';
import TypeDefense from '../components/type-defense';
import Information from '../components/information';

// import SectionHeader from '../components/section-header';
// import Abilities from '../modules/abilities/containers/abilities';
import Abilities from '../components/abilities';

// import EvolutionTree from '../modules/evolution/containers/evolution-tree';
import EvolutionTree from '../components/evolution';
// import Location from '../modules/evolution/containers/location';
// import Moves from '../modules/moves/containers/moves';
import Moves from '../components/moves';
import PokedexInformation from '../components/pokedex-information';
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
    poke_moves_2: pokeMoves,
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
  // console.log(data.pokedex_info);
  // console.log(data.pokedex_number);

  return (
    <div className="flex w-full">
      <div className="w-full">
        <Information
          types={types}
          ndex={data.no}
          name={data.name_ko}
          form={data.form}
          pokedexNumbers={data.pokedex_number}
          effortValue={data.poke_effort_value}
          detail={data.poke_detail}
          breeding={data.poke_breeding}
          pokedexInfo={data.pokedex_info}
          sprite={sprite}
        />
        <PokedexInformation pokedexData={pokedexData} sprite={sprite} />

        <Abilities abilities={poke_ability} />
        <Stats stats={pokeStats} />

        <TypeDefense types={types} />

        <EvolutionTree evolutionId={evolution_id} />

        <Moves pokeMoves={pokeMoves} />
      </div>
      {/* <Toc /> */}
    </div>
  );
}
