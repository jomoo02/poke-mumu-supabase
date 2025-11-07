import Image from 'next/image';

import { cn } from '@/app/shared/lib';

import { getSpriteSrc, getSpriteInfoSrc, type Poke } from '../model';

interface PokeSpriteProps {
  poke: Poke;
  className?: string;
  priority?: boolean;
}

export function PokeSprite({
  poke,
  className,
  priority = false,
}: PokeSpriteProps) {
  const src = getSpriteSrc(poke);
  const alt = poke.name;

  return (
    <div className={cn('w-14 h-14 relative', className)}>
      <Image
        placeholder="blur"
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        src={src}
        alt={alt}
        fill
        // sizes="64px"
        style={{
          objectFit: 'contain',
        }}
        priority={priority}
      />
    </div>
  );
}

interface PokeSpriteProps {
  poke: Poke;
  className?: string;
  priority?: boolean;
}

export function PokeInfoSprite({
  poke,
  className,
  priority = true,
}: PokeSpriteProps) {
  const src = getSpriteInfoSrc(poke);
  const alt = poke.name;

  return (
    <div className={cn('w-80 h-80 relative', className)}>
      <Image
        placeholder="blur"
        blurDataURL="/pokeball.svg"
        src={src}
        alt={alt}
        fill
        // sizes="64px"
        style={{
          objectFit: 'contain',
        }}
        priority={priority}
      />
    </div>
  );
}

interface PokeSpriteWithBlurProps {
  poke: Poke;
  className?: string;
}

export function PokeSpriteWithBlur({
  poke,
  className,
}: PokeSpriteWithBlurProps) {
  const src = getSpriteSrc(poke);
  const alt = poke.name;
  const blurDataUrl =
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  return (
    <div className={cn('w-14 h-14 relative', className)}>
      <Image
        placeholder="blur"
        blurDataURL={blurDataUrl}
        src={src}
        alt={alt}
        fill
        // sizes="64px"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
