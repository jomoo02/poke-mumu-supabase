import PokeTypeBadge from '@/app/components/badge/poke-type';
import type { PokedexInfo, PokedexNumber } from './types';
import SectionHeader from '../section-header';
import { formatData } from './lib/format';
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
      <div className="flex gap-11 flex-col lg:flex-row lg:justify-around py-4 px-2.5 sm:px-4">
        <PokedexImage src={src} alt={name} />
        <div>
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
                className="flex items-center overflow-hidden p-0.5 text-pretty text-[15px]"
              >
                {`${dex} : ${dexNumber}`}
              </p>
            ))}
          </Info>
        </div>
      </div>
    </div>
  );
}
