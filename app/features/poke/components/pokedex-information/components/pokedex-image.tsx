import Image from 'next/image';

interface PokedexImageProps {
  src: string;
  alt: string;
}

export default function PokedexImage({ alt }: PokedexImageProps) {
  const src = '/pokeball.svg';
  return (
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={350} height={350} priority />
    </div>
  );
}
