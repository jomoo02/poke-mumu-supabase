import Link from 'next/link';

interface VarietyItemProps {
  name: string;
  href: string;
  isActive: boolean;
  innerRef: (el: HTMLDivElement | null) => void;
}

export function VarietyItem({
  name,
  href,
  isActive,
  innerRef,
}: VarietyItemProps) {
  return (
    <div ref={innerRef} data-active={isActive} className="inline-block px-6">
      <Link
        href={href}
        className={`font-medium ${
          isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
        }`}
      >
        {name}
      </Link>
    </div>
  );
}
