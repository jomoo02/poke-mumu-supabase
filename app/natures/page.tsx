import NatureTable from '../features/nature/components/nature-table';

export default function Page() {
  return (
    <div className="max-w-screen min-h-screen mx-auto lg:flex relative my-8">
      <div className="hidden xl:block min-w-40 w-40" />
      <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-3 sm:px-6">
        <h1 className="my-4 text-slate-900 text-3xl font-bold">포켓몬 성격</h1>
        {/* 소개 */}
        <div className="text-slate-800">
          <p className="break-keep text-pretty">
            성격(Nature)은 3세대 《루비·사파이어》에서 처음 도입된 요소로,
            포켓몬 능력치에 영향을 미칩니다.
          </p>
          <p className="break-keep text-pretty my-2.5">
            포켓몬은 25가지 성격 중 하나를 무작위로 가지며, 대부분의 성격은
            체력을 제외한 능력치 하나를 10% 올리고 다른 하나를 10% 내립니다.
          </p>
          <p className="break-keep text-pretty my-2.5">
            일부 성격은 능력치에 영향을 주지 않기도 합니다.
          </p>
        </div>

        <NatureTable />
      </div>
      <div className="min-w-36 w-36 xl:min-w-40 xl:w-40 leading-5" />
    </div>
  );
}
