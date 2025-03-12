'use client';

import Link from 'next/link';

export default function HomeButton() {
  return (
    <div className="text-slate-800 text-xl font-bold">
      <Link href="/">Poké MuMu</Link>
    </div>
  );
}
