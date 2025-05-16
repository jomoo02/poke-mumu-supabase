// import './type.css';
import { getPokeTypeKo } from '@/app/lib/poke-type';

interface PokeTypeBadgeProps {
  type: string;
  width?: string;
}

export default function PokeTypeBadge({
  type,
  width = 'w-[60px] xs:w-[63px]',
}: PokeTypeBadgeProps) {
  const pokeType = type ?? 'unknown';

  const content = getPokeTypeKo(pokeType);

  const bgVariants: Record<string, string> = {
    normal: 'bg-[#949495]',
    fire: 'bg-[#e56c3e]',
    water: 'bg-[#5185c5]',
    grass: 'bg-[#66a945]',
    electric: 'bg-[#ebce3d]',
    ice: 'bg-[#6dc8eb]',
    fighting: 'bg-[#e09c40]',
    poison: 'bg-[#735198]',
    ground: 'bg-[#9c7743]',
    flying: 'bg-[#a2c3e7]',
    psychic: 'bg-[#dd6b7b]',
    bug: 'bg-[#9fa244]',
    rock: 'bg-[#bfb889]',
    ghost: 'bg-[#684870]',
    dragon: 'bg-[#535ca8]',
    dark: 'bg-[#4c4948]',
    steel: 'bg-[#69a9c7]',
    fairy: 'bg-[#dab4d4]',
    unknown: 'bg-fuchsia-900',
  };

  const bg = bgVariants[pokeType];

  return (
    <div
      className={`${width} h-[25px] px-px font-bold text-sm flex items-center justify-center rounded-[5px] border border-zinc-700/80 text-white ${bg} text-shadow-type shrink-0`}
    >
      {content}
    </div>
  );
}
