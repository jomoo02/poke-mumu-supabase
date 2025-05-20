import PokeTypeBadge from '@/app/components/badge/poke-type';
import InfoItem from './info-item';
import InfoTitle from './info-title';

interface PokedexInfo {
  info: {
    types: string[];
    ndex: string;
    name: string;
    form: string | null;
    height: string;
    weight: string;
    genera: string;
    pokedexNumbers: {
      id: number;
      dex: string;
      dexNumber: string;
    }[];
  };
}

export default function PokedexInfo({ info }: PokedexInfo) {
  const { types, ndex, name, form, height, weight, genera, pokedexNumbers } =
    info;

  return (
    <div>
      <InfoTitle category="pokedex" />
      <div>
        <InfoItem subject="전국도감" content={ndex} />
        <InfoItem subject="이름" content={name} />
        <InfoItem subject="분류" content={genera} />
        {form && <InfoItem subject="모습" content={form} />}
        <InfoItem subject="타입">
          <div className="flex gap-x-2">
            {types.map((type) => (
              <PokeTypeBadge key={type} type={type} />
            ))}
          </div>
        </InfoItem>
        <InfoItem subject="신장" content={height} />
        <InfoItem subject="무게" content={weight} />
        <InfoItem subject="지역도감">
          {pokedexNumbers.map(({ dex, dexNumber, id }) => (
            <div key={id} className="flex items-center overflow-hidden">
              <span className="truncate min-w-10 sm:min-w-12 max-w-10 sm:max-w-12">
                {dexNumber}
              </span>
              <span className="truncate text-sm text-slate-700 font-normal flex-1">{`(${dex})`}</span>
            </div>
          ))}
        </InfoItem>
      </div>
    </div>
  );
}
