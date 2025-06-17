'use client';

import Link from 'next/link';
import Logo from './logo';

export default function HomeButton() {
  return (
    <Link href="/">
      <Logo className="flex items-center text-lg font-extrabold text-slate-900 font-sans" />
    </Link>
  );
}
