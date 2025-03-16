import { getPokeList } from './utils/get-poke';
// import PokeCard from './components/poke-card';
import PokedexTableHeader from './components/pokedex-table-header';
import PokedexTableRow from './components/pokedex-table-row';

// export const revalidate = 3600;

// export async function generateStaticParams() {
//   return [];
// }

export default async function PokedexPage() {
  const pokeList = await getPokeList();

  // const pokeTest = pokeList.slice(0, 30);

  return (
    <div className="max-w-[70rem] mx-auto sm:px-10 md:px-32 lg:px-0">
      <table className="">
        <thead className="sticky top-[55px] z-20">
          <PokedexTableHeader />
        </thead>
        <tbody className="">
          {pokeList.map((poke) => (
            <PokedexTableRow
              key={poke.id}
              name={poke.name_ko || ''}
              no={poke.no}
              sprite={poke.sprite || ''}
              type1={poke.type_1 || ''}
              type2={poke.type_2}
              pokeKey={poke.poke_key || ''}
              form={poke.form}
              pokeStat={poke.poke_stat}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
