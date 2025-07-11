import PokedexContainer from '../features/pokedex/containers/pokedex-container';

export default function PokedexPage() {
  return (
    <div className="max-w-[70rem] mx-auto sm:px-10 md:px-32 lg:px-0 my-6">
      <div className="px-5 md:px-0">
        <h1 className="mt-10 text-slate-900 text-3xl font-bold">
          전국도감 포켓몬 목록
        </h1>
        <div className="my-6 text-slate-700">
          <p>
            포켓몬 목록은 번호, 이름, 종족값, 개별 능력치를 기준으로 정렬할 수
            있습니다.
          </p>
          <p>타입 필터를 사용하면 원하는 타입의 포켓몬만 골라볼 수 있습니다.</p>
        </div>
      </div>

      <PokedexContainer />
    </div>
  );
}
