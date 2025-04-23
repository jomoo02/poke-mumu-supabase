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
  // console.log(
  //   types,
  //   ndex,
  //   name,
  //   form,
  //   pokedexNumbers,
  //   effortValue,
  //   detail,
  //   breeding,
  //   pokedexInfo,
  // );
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
  console.log(basic);

  console.log(detailData);
  console.log(breedingData);

  return (
    <div>
      <div>
        <Basic info={basic} />
      </div>
    </div>
  );
}
