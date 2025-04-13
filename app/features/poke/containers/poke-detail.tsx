import { fetchPoke } from '../api/poke';
import Stats from '../modules/stats';
import SectionHeader from '../components/section-header';
import TypeDefense from '../modules/type-defense';
import { formatPokeAbility } from '../lib/ability';
import Abilities from '../modules/abilities';

interface PokeDetailProps {
  pokeKey: string;
}

export default async function PokeDetail({ pokeKey }: PokeDetailProps) {
  const data = await fetchPoke(pokeKey);

  if (!data) {
    return null;
  }

  const { type_1, type_2, poke_stat: pokeStats, poke_ability } = data;

  const types = type_2 ? [type_1, type_2] : [type_1];
  console.log(data);
  const abilities = formatPokeAbility(poke_ability);
  // console.log(abilities);

  return (
    <div>
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
          <Abilities abilities={abilities} />
        </div>
      </div>
    </div>
  );
}
