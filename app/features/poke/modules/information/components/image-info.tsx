// import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import Image from 'next/image';

interface ImageInfo {
  sprite: string;
  name: string;
}

export default function ImageInfo({
  // sprite,
  name,
}: ImageInfo) {
  // const src = getHomePokeSprtieSrc(sprite);
  const src = '/pokeball.svg';
  const alt = name;

  return (
    <div className="flex justify-center items-center py-3 sm:py-5 lg:py-6 xl:py-0 xl:w-1/3">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        // placeholder="blur"
        // blurDataURL="/pokeball.svg"
        priority
      />
    </div>
  );
}
