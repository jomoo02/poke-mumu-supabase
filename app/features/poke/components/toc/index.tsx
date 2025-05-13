import Link from 'next/link';

export default function Toc() {
  return (
    <div className="border sticky top-20 h-60 w-44 hidden lg:block text-base font-semibold text-slate-600">
      <Link href="#stats">능력치</Link>
    </div>
  );
}
