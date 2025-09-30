import Image from 'next/image';

interface PokeImageProps {
  src: string;
  alt: string;
}

export default function PokeImage({
  src = '/pokeball.svg',
  alt,
}: PokeImageProps) {
  return (
    <div className="w-14 h-14 relative">
      <Image
        placeholder="blur"
        blurDataURL="/pokeball.svg"
        // src={src}
        src="/pokeball.svg"
        alt={alt}
        fill
        sizes="64px"
        style={{
          objectFit: 'contain',
        }}
        priority={false}
      />
    </div>
  );
}
