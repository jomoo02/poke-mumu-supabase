import Image from 'next/image';

interface PokedexImageProps {
  src: string;
  alt: string;
}

export default function PokedexImage({ src, alt }: PokedexImageProps) {
  // const src2 = '/pokeball.svg';
  return (
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={300} height={300} priority />
    </div>
  );
}
