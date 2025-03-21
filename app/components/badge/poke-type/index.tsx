import './type.css';
import { pokeTypeContents } from './type';

interface PokeTypeBadgeProps {
  type: string;
  width?: string;
}

export default function PokeTypeBadge({
  type,
  width = 'w-[60px] xs:w-[63px]',
}: PokeTypeBadgeProps) {
  return (
    <div
      className={`${width} h-[25px] px-px font-bold text-sm flex items-center justify-center rounded-[5px] border border-zinc-700/80 text-white ${type} type-text-shadow shrink-0`}
    >
      {pokeTypeContents[type] || pokeTypeContents.unknown}
    </div>
  );
}
