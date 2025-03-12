import PokeCard from './poke-card';
import { getPokeList } from '../utils/get-poke';

export const revalidate = 3600;

export default async function PokedexServer() {
  const pokeList = await getPokeList();

  return (
    <div>
      {pokeList.map((poke) => (
        <PokeCard
          key={poke.id}
          name={poke.name_ko}
          no={poke.no}
          sprite={poke.sprite}
          type1={poke.type_1}
          type2={poke.type_2}
          pokeKey={poke.poke_key}
          form={poke.form}
          // pokeStat={poke.poke_stat[0]}
        />
      ))}
    </div>
  );
}
