import Image from 'next/image';
import Link from 'next/link';

import { getInfoPokeSpriteSrc, cn } from '@/app/shared/lib';

import { REGIONAL_DEX_LIST } from '../config';

interface RegionalDexProps {
  dexGroup: string;
  href: string;
  imageItems?: { sprite: string; alt: string }[];
}

function RegionalDex({ dexGroup, href, imageItems }: RegionalDexProps) {
  return (
    <Link
      href={href}
      className={cn(
        'border shadow-sm border-border rounded-lg p-4 relative overflow-hidden h-34 items-center flex flex-col justify-between',
        'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'active:bg-accent hover:bg-accent',
      )}
    >
      <div className="relative z-10 text-lg text-foreground font-medium">
        {dexGroup}
      </div>
      <div className="flex gap-x-1">
        {imageItems?.map(({ sprite, alt }) => (
          <Image
            key={sprite}
            src={getInfoPokeSpriteSrc(sprite)}
            alt={alt}
            width={55}
            height={55}
            style={{ width: 55, height: 55 }}
          />
        ))}
      </div>
    </Link>
  );
}

export default function RegionalDexList() {
  return (
    <div>
      <h2>버전 별 도감</h2>
      <div className="grid w-full mx-auto lg:grid-cols-3 gap-8">
        {REGIONAL_DEX_LIST.map((regionalDex) => (
          <RegionalDex key={regionalDex.dexGroup} {...regionalDex} />
        ))}
      </div>
    </div>
  );
}
