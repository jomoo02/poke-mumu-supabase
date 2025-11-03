// import { fetchNationalPokedex } from '@/app/_features/pokedex/api';

// import Pokedex from './pokedex';
import { fetchNationalPokedex } from './api';
import { PokedexProvider } from './model';
import NationalDex from './ui/national-dex';
import TypeSelect from './ui/type-select';
import SortButtonGroup from './ui/sort-button-group';

export default async function PokedexAllPage() {
  const { pokes, types } = await fetchNationalPokedex();

  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-2 sm:px-4 py-6 sm:py-14 min-w-0 flex-1 gap-8">
      <h1 className="scroll-m-20 text-3xl font-semibold text-foreground">
        전국도감 포켓몬 목록
      </h1>
      <div className="grid">
        <p className="text-foreground break-keep text-pretty">
          포켓몬 목록은 번호, 이름, 종족값, 개별 능력치를 기준으로 정렬할 수
          있습니다.
        </p>
        <p className="text-foreground break-keep text-pretty">
          타입 필터를 사용하면 원하는 타입의 포켓몬만 골라볼 수 있습니다.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <PokedexProvider pokes={pokes} types={types}>
          <TypeSelect />
          <SortButtonGroup />
          <NationalDex />
        </PokedexProvider>
        {/* <Pokedex pokes={pokes} /> */}
      </div>
    </div>
  );
}
