import Link from 'next/link';

export default function MovePage() {
  return (
    <div>
      <ul>
        <li>모든 기술</li>
        <li>세대 별 기술</li>
        <li>
          <Link href="/move/game">버전 별 기술</Link>
        </li>
      </ul>
    </div>
  );
}
