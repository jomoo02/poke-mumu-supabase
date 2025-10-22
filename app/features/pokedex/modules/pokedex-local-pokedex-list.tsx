import Link from 'next/link';
import Image from 'next/image';
import { getInfoPokeSpriteSrc, getHomePokeSprtieSrc } from '@/app/utils/sprite';
import { cn } from '@/app/lib/utils';

export default function PokedexLocalPokedexList() {
  return (
    <div>
      <h2>버전 별 도감</h2>
      <div className="grid max-w-lg mx-auto">
        <Link
          href="/pokedex/game/red-blue-yellow"
          className="border borer-border rounded-lg p-4 relative overflow-hidden h-18 items-center flex"
        >
          <div className="relative z-10 text-lg text-foreground font-medium">
            적 · 녹 · 청 & 피카츄
          </div>
          <div className="absolute top-0 bottom-0 right-4 flex space-x-2 z-0 opacity-50 pointer-events-none">
            <Image
              src={getInfoPokeSpriteSrc('0001')}
              alt="0001"
              width={50}
              className="object-contain"
              height={50}
            />
            <Image
              src={getInfoPokeSpriteSrc('0004')}
              alt="0004"
              width={50}
              className="object-contain"
              height={50}
            />
            <Image
              src={getInfoPokeSpriteSrc('0007')}
              alt="0007"
              width={50}
              className="object-contain"
              height={50}
            />
            <Image
              src={getInfoPokeSpriteSrc('0025')}
              alt="0025"
              width={50}
              className="object-contain"
              height={50}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
