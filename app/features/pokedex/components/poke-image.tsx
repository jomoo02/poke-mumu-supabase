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
    <div className="w-[50px] h-[48px] xl:w-[58px] xl:h-[56px] relative">
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
