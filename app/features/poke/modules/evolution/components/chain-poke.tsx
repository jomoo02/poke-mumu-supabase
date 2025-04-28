import Image from 'next/image';
// import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import ChainPokeLink from './chain-poke-link';
import { useChainMaxWidth, usePokeMap } from './chain.context';
import type { Detail } from '../types/evolution';
import ChainPokeDetail from './chain-poke-detail';

interface ChainPokeProps {
  pokeId: number;
  conditionDetails: Detail[];
}

export default function ChainPoke({
  pokeId,
  conditionDetails,
}: ChainPokeProps) {
  const chainMaxWidth = useChainMaxWidth();
  const pokeMap = usePokeMap();

  const pokeData = pokeMap.get(pokeId);

  if (!pokeData) {
    return null;
  }

  const { poke_key, name_ko, no, form } = pokeData;

  const flexRow = chainMaxWidth === 8 ? '' : 'md:flex-row';

  // const src = getHomePokeSprtieSrc(sprite);

  return (
    <div className={`flex flex-col justify-center items-center ${flexRow}`}>
      <ChainPokeDetail conditionDetails={conditionDetails} />
      <div className="min-w-20 max-w-24 xs:w-24 md:w-24 flex flex-col items-center justify-center">
        <div className="w-16 h-16 md:w-20 relative md:h-20">
          <Image
            // src={src}
            src="/pokeball.svg"
            alt={name_ko}
            fill
            sizes="70px"
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <ChainPokeLink pokeKey={poke_key} name={name_ko} no={no} form={form} />
      </div>
    </div>
  );
}
