import { fetchPoke } from '../api/poke';
import Stats from '../modules/stats';
import SectionHeader from '../components/section-header';
import TypeDefense from '../modules/type-defense';
import Abilities from '../modules/abilities/containers/abilities';
import EvolutionTree from '../modules/evolution/containers/evolution-tree';
import Location from '../modules/evolution/containers/location';
import Moves from '../modules/moves/containers/moves';
import Information from '../modules/information/containers/information';

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
    poke_moves_2: pokeMoves,
    poke_stat: pokeStats,
  } = data;

  const types = type_2 ? [type_1, type_2] : [type_1];
  console.log(data.pokedex_info);
  console.log(data.pokedex_number);

  return (
    <div>
      <div>
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
        />
      </div>
      <div>
        <SectionHeader sectionTitle="능력치" />
        <div className="grid c-border-outer divide-y divide-slate-300 rounded-lg bg-white">
          <Stats stats={pokeStats} />
        </div>
      </div>
      <div>
        <SectionHeader sectionTitle="방어 상성" />
        <div className="c-border-outer rounded-lg bg-white">
          <TypeDefense types={types} />
        </div>
      </div>
      <div>
        <SectionHeader sectionTitle="특성" />
        <div className="c-border-outer rounded-lg bg-white grid divide-y divide-slate-300">
          <Abilities abilities={poke_ability} />
        </div>
      </div>
      {evolution_id && (
        <div>
          <SectionHeader sectionTitle="진화" />
          <div className="c-border-outer rounded-lg bg-white py-2">
            <EvolutionTree evolutionId={evolution_id} />
          </div>
          <Location evolutionId={evolution_id} />
        </div>
      )}
      <div>
        <SectionHeader sectionTitle="기술" />
        <div className="c-border-outer rounded-lg bg-white">
          <Moves pokeMoves={pokeMoves} />
        </div>
      </div>
    </div>
  );
}
