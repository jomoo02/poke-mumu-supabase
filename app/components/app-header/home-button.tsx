'use client';

import Link from 'next/link';
import PokeMuMuLogo from './logo';

export default function HomeButton() {
  return (
    <div className="text-slate-800 text-xl font-bold">
      <Link href="/">
        <PokeMuMuLogo />
      </Link>
    </div>
  );
}
