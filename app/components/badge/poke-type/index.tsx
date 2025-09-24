// import './type.css';
import { getPokeTypeKo } from '@/app/lib/poke-type';
import { cn } from '@/app/lib/utils';

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
    normal: 'bg-normal',
    fire: 'bg-fire',
    water: 'bg-water',
    grass: 'bg-grass',
    electric: 'bg-electric',
    ice: 'bg-ice',
    fighting: 'bg-fighting',
    poison: 'bg-poison',
    ground: 'bg-ground',
    flying: 'bg-flying',
    psychic: 'bg-psychic',
    bug: 'bg-bug',
    rock: 'bg-rock',
    ghost: 'bg-ghost',
    dragon: 'bg-dragon',
    dark: 'bg-dark',
    steel: 'bg-steel',
    fairy: 'bg-fairy',
    unknown: 'bg-unknown',
  };

  const borderColorVariatns: Record<string, string> = {
    normal: 'border-border-normal',
    fire: 'border-border-fire',
    water: 'border-border-water',
    grass: 'border-border-grass',
    electric: 'border-border-electric',
    ice: 'border-border-ice',
    fighting: 'border-border-fighting',
    poison: 'border-border-poison',
    ground: 'border-border-ground',
    flying: 'border-border-flying',
    psychic: 'border-border-psychic',
    bug: 'border-border-bug',
    rock: 'border-border-rock',
    ghost: 'border-border-ghost',
    dragon: 'border-border-dragon',
    dark: 'border-border-dark',
    steel: 'border-border-steel',
    fairy: 'border-border-fairy',
    unknown: 'border-border-unknown',
  };

  const bg = bgVariants[pokeType];
  const borderColor = borderColorVariatns[pokeType];

  return (
    <div
      className={cn(
        'h-6.5 px-px font-medium text-sm flex items-center justify-center rounded-md border text-white text-shadow-type shrink-0',
        bg,
        borderColor,
        width,
      )}
    >
      {content}
    </div>
  );
}
