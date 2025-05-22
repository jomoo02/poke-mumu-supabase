import PokeTypeBadge from '@/app/components/badge/poke-type';
import SectionHeader from '../section-header';
import type { PokedexInfo, PokedexNumber } from './types';
import { formatData } from './utils';
import PokedexImage from './components/pokedex-image';
import Info from './components/info';

export type PokedexData = {
  types: string[];
  no: number;
  name_ko: string;
  form: string | null;
  pokedexInfo: PokedexInfo | null;
  pokedexNumbers: PokedexNumber[];
};

interface PodexInfomationProps {
  pokedexData: PokedexData;
  sprite: string;
}

export default function PokedexInfomation({
  pokedexData,
  sprite,
}: PodexInfomationProps) {
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
      <SectionHeader id="pokedex-info" sectionTitle="도감 정보" />
      <div className="flex flex-col md:flex-row border border-slate-300 px-1 py-6 md:px-6 lg:p-10 bg-white rounded-lg shadow-md shadow-slate-300">
        <PokedexImage src={src} alt={name} />
        <div className="flex-1 mx-4 xl:mx-14 2xl:ml-36">
          <Info subject="도감번호">No.{ndex}</Info>
          <Info subject="이름">{name}</Info>
          <Info subject="분류">{genera}</Info>
          {form && <Info subject="모습">{form}</Info>}
          <Info subject="타입">
            <div className="flex gap-x-2">
              {types.map((type) => (
                <PokeTypeBadge key={type} type={type} />
              ))}
            </div>
          </Info>
          <Info subject="신장">{height}</Info>
          <Info subject="무게">{weight}</Info>
          <Info subject="지역도감">
            {pokedexNumbers.map(({ dex, dexNumber, id }) => (
              <p
                key={id}
                className="flex items-center overflow-hidden p-0.5 text-pretty"
              >
                <span className="text-zinc-700 font-medium text-[15px]">
                  {dex}
                </span>
                <span className="mx-1">:</span>
                <span className="text-[15px] font-medium text-zinc-950">
                  {dexNumber}
                </span>
              </p>
            ))}
          </Info>
        </div>
      </div>
    </div>
  );
}
