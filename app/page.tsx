export const dynamic = 'force-dynamic';

export default function MaingPage() {
  // const id = Math.floor(Math.random() * 1017) + 1;

  return (
    <main className="min-h-screen">
      <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">
        포켓몬 정보 플랫폼
      </h2>
      <div className="text-center text-slate-800 text-lg">
        <p>포케무무는 포켓몬의 다양한 데이터를 제공합니다.</p>
        <p>
          도감, 능력치, 진화, 성격 등 핵심 정보를 간결하게 확인할 수 있습니다.
        </p>
        <p>
          앞으로 기술, 아이템 등 더 많은 정보를 지속적으로 추가할 예정입니다.
        </p>
      </div>
    </main>
  );
}
