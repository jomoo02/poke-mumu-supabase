'use client';

import PokeTypeBadge from '@/app/components/badge/poke-type';
import type { PokedexInfo, PokedexNumber } from './types';
import SectionHeader from '../section-header';
import { formatData } from './lib/format';
import PokedexImage from './components/pokedex-image';
import Info from './components/info';
import { MarsIcon, VenusIcon } from 'lucide-react';
import InfoV2 from './components/info-v2';
import { useState } from 'react';
import { cn } from '@/app/lib/utils';

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

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <SectionHeader id="pokedex-info" sectionTitle="도감 정보" isFirst />

      <div className="grid xl:grid-cols-2 w-full gap-14">
        <div className="p-2 ">
          <PokedexImage src={src} alt={name} />
        </div>
        <div className="flex flex-col gap-4">
          <div className=" w-full gap-2 ">
            <div className="text-xl text-muted-foreground font-medium">
              No.{ndex}
            </div>
            <div className="text-3xl text-foreground font-medium">{name}</div>
            <div className="text-xl text-muted-foreground font-medium">
              {form}
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-2 w-full h-full divide-border">
              <InfoV2 subject="분류">{genera}</InfoV2>
              <InfoV2 subject="타입">
                <div className="flex gap-2 ">
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
              <InfoV2 subject="지역도감" className="col-span-2">
                <button
                  onClick={() => setVisible(!visible)}
                  className="rounded-md"
                >
                  펄쳐보기
                </button>
                <div className={cn(visible ? 'flex flex-col' : 'hidden')}>
                  {pokedexNumbers.map(({ id, dex, dexNumber }) => (
                    <div key={id} className="text-base p-px">
                      {dex} : {dexNumber}
                    </div>
                  ))}
                </div>
              </InfoV2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
