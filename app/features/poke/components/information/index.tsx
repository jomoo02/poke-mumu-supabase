import SectionHeader from '../section-header';
import BreedingInfo from './components/breeding-info';
import DetailInfo from './components/detail-info';
import ImageInfo from './components/image-info';
import Basic from './components/pokedex-info';
import { formatBasic, formatBreeding, formatDetail } from './lib/format';
import type {
  PokedexNumber,
  EffortValue,
  Detail,
  Breeding,
  PokedexInfo,
} from './types';

interface InformationProps {
  types: string[];
  ndex: number;
  name: string;
  form: string | null;
  pokedexNumbers: PokedexNumber[];
  effortValue: EffortValue[];
  detail: Detail | null;
  breeding: Breeding | null;
  pokedexInfo: PokedexInfo | null;
  sprite: string;
}

export default function Information({
  types,
  ndex,
  name,
  form,
  sprite,
  pokedexNumbers,
  effortValue,
  detail,
  breeding,
  pokedexInfo,
}: InformationProps) {
  const basic = formatBasic({
    pokedexInfo,
    pokedexNumbers,
    types,
    ndex,
    name,
    form,
  });

  const detailData = formatDetail(detail, effortValue);

  const breedingData = formatBreeding(breeding);

  return (
    <div>
      <SectionHeader id="information" sectionTitle="기본 정보" />
      <div className="border border-slate-300 bg-white rounded-lg shadow-md shadow-slate-300 py-4">
        <div className="flex flex-col items-center gap-y-10 overflow-hidden">
          <ImageInfo sprite={sprite} name={name} />
          <div className="gap-x-14 md:justify-around w-full grid md:grid-cols-2 p-4 md:p-9">
            <Basic info={basic} />
            <div className="flex flex-col xl:justify-between">
              <DetailInfo detail={detailData} />
              <BreedingInfo breeding={breedingData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
