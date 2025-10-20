import { getPokeTypeKo } from '@/app/lib/poke-type';
import Image from 'next/image';

interface PokeTypeBadgeProps {
  type: string;
  size?: number;
  isVisibleContent?: boolean;
}

export default function PokeTypeIcon({
  type,
  size = 32,
  isVisibleContent = false,
}: PokeTypeBadgeProps) {
  const pokeType = type ?? 'unknown';

  const content = getPokeTypeKo(pokeType);

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/type-icon/${pokeType}.png`}
          width={size}
          height={size}
          alt={pokeType}
        />
      </div>

      {isVisibleContent && (
        <div className="text-sm text-center text-muted-foreground">
          {content}
        </div>
      )}
    </div>
  );
}
