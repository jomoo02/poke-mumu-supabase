import BreedingInfo from '../components/breeding-info';
import DetailInfo from '../components/detail-info';
import ImageInfo from '../components/image-info';
import Basic from '../components/pokedex-info';
import { formatBasic, formatBreeding, formatDetail } from '../lib/format';
import type {
  PokedexNumber,
  EffortValue,
  Detail,
  Breeding,
  PokedexInfo,
} from '../types';

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
}

export default function Information({
  types,
  ndex,
  name,
  form,
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

  console.log(detailData);

  return (
    <div className="flex flex-col xl:flex-row xl:justify-around">
      <ImageInfo sprite="1" name={name} />
      <div className="flex flex-col lg:flex-row gap-x-10">
        <Basic info={basic} />
        <div className="flex flex-col lg:justify-between">
          <DetailInfo detail={detailData} />
          <BreedingInfo breeding={breedingData} />
        </div>
      </div>
    </div>
  );
}
