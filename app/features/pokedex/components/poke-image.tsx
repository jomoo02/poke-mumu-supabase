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
    <div className="w-12 h-12 relative">
      <Image
        placeholder="blur"
        blurDataURL="/pokeball.svg"
        src={src}
        // src="/pokeball.svg"
        alt={alt}
        fill
        sizes="48px"
        style={{
          objectFit: 'contain',
        }}
        priority={false}
      />
    </div>
  );
}
