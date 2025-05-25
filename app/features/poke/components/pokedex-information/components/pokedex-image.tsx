import Image from 'next/image';

interface PokedexImageProps {
  src: string;
  alt: string;
}

export default function PokedexImage({ alt }: PokedexImageProps) {
  const src2 = '/pokeball.svg';
  return (
    <div className="flex items-center justify-center">
      <Image src={src2} alt={alt} width={325} height={325} priority />
    </div>
  );
}
