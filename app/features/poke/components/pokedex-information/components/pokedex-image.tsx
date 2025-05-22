import Image from 'next/image';

interface PokedexImageProps {
  src: string;
  alt: string;
}

export default function PokedexImage({ src, alt }: PokedexImageProps) {
  return (
    // <div className="flex justify-center items-center py-3 sm:py-5 lg:py-6 xl:py-0 my-6">
    <div className="flex items-center justify-center">
      <Image src={src} alt={alt} width={325} height={325} priority />
    </div>

    // </div>
  );
}
