import PokeCard from './poke-card';
import type { PokedexPoke } from '@/app/api/pokedex/route';

// import { getPokeList } from '../utils/get-poke';

export default async function PokedexServer({
  pokeList,
}: {
  pokeList: PokedexPoke[];
}) {
  return (
    <div>
      {pokeList.map((poke) => (
        <PokeCard
          key={poke.id}
          name={poke.name_ko || ''}
          no={poke.no}
          sprite={poke.sprite || ''}
          type1={poke.type_1 || ''}
          type2={poke.type_2}
          pokeKey={poke.poke_key || ''}
          form={poke.form}
          // pokeStat={poke.poke_stat[0]}
        />
      ))}
    </div>
  );
}
