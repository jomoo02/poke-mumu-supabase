import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/app/lib/utils';

export default function NationalDex() {
  return (
    <div>
      {/* <h2>전국 도감</h2> */}
      <div className="w-full max-w-2xl mx-auto grid">
        <Link
          href="/pokedex/all"
          className={cn(
            'border shadow-sm border-border rounded-lg px-4 py-6 relative overflow-hidden items-center flex flex-col justify-between',
            'outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'active:bg-accent hover:bg-accent',
          )}
        >
          <span className="text-lg text-foreground font-medium">
            전국 도감(능력치 포함)
          </span>
        </Link>
      </div>
    </div>
  );
}
