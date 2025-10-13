import PokeTypeBadge from '@/app/components/badge/poke-type';
import type { PokedexInfo, PokedexNumber } from './types';
import SectionHeader from '../section-header';
import { formatData } from './lib/format';
import PokedexImage from './components/pokedex-image';
import Info from './components/info';
import { MarsIcon, VenusIcon } from 'lucide-react';
import InfoV2 from './components/info-v2';

export type PokedexData = {
  types: string[];
  no: number;
  name_ko: string;
  form: string | null;
  pokedexInfo: PokedexInfo | null;
  pokedexNumbers: PokedexNumber[];
};

interface PodexInformationProps {
  pokedexData: PokedexData;
  sprite: string;
}

export default function PokedexInformation({
  pokedexData,
  sprite,
}: PodexInformationProps) {
  const {
    name,
    ndex,
    types,
    form,
    pokedexNumbers,
    height,
    weight,
    genera,
    src,
  } = formatData(pokedexData, sprite);

  return (
    <div>
      <SectionHeader id="pokedex-info" sectionTitle="도감 정보" isFirst />

      <div className="grid xl:grid-cols-2 w-full gap-14">
        <div className="p-2 ">
          <PokedexImage src={src} alt={name} />
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className=" w-full gap-2 ">
            {' '}
            <div className="text-xl text-muted-foreground font-medium">
              No.{ndex}
            </div>
            <div className="text-3xl text-foreground font-medium">{name}</div>
            <div className="text-xl text-muted-foreground font-medium">
              {form}
            </div>
          </div>

          <div>
            <div className="rounded-xl p-4 grid grid-cols-2 w-full sm:grid-cols-3 border border-border h-full shadow-sm">
              {/* <InfoV2 subject="도감번호">No.{ndex}</InfoV2>
            <InfoV2 subject="이름">{name}</InfoV2> */}

              <InfoV2 subject="분류">{genera}</InfoV2>
              {/* {form && <InfoV2 subject="모습">{form}</InfoV2>} */}
              <InfoV2 subject="타입">
                <div className="flex gap-x-2">
                  {types.map((type) => (
                    <PokeTypeBadge key={type} type={type} />
                  ))}
                </div>
              </InfoV2>

              <InfoV2 subject="신장">{height}</InfoV2>
              <InfoV2 subject="무게">{weight}</InfoV2>
              <InfoV2 subject="성별 ">
                <div className="flex gap-x-1">
                  <MarsIcon className="size-6 text-blue-900" />
                  <VenusIcon className="size-6 text-rose-900" />
                </div>
              </InfoV2>
              {/* <InfoV2 subject="">{weight}</InfoV2> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
