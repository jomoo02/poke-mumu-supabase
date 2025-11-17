import { getNationPokedexData } from '../api';
import type { SearchParams } from '../model';
import NationalDex from './national-dex';
import TypeSelect from './type-select';
import SortButtonGroup from './sort-button-group';

export default async function Pokedex({
  sortBy,
  type,
  direction,
}: SearchParams) {
  const { pokes, types } = await getNationPokedexData({
    sortBy,
    type,
    direction,
  });
  return (
    <div className="flex flex-col gap-4">
      <TypeSelect types={types} />
      <SortButtonGroup />
      <NationalDex pokes={pokes} />
    </div>
  );
}
