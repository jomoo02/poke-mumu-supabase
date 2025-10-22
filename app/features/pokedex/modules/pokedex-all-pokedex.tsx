import Link from 'next/link';

export default function PokedexAllPokedex() {
  return (
    <div>
      <h2>전국 도감</h2>
      <div className="grid grid-cols-2">
        <Link href="/pokedex/all" className="">
          <div className="border borer-border rounded-lg p-2">
            전국 도감(능력치 포함)
          </div>
        </Link>
      </div>
    </div>
  );
}
