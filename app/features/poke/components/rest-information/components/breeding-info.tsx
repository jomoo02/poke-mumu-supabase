import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import InfoCard from './info-card';
import InfoCardItem from './info-card-item';

interface BreedingProps {
  breeding: Breeding | null;
}

export default function BreedingInfo({ breeding }: BreedingProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className="my-3">
      <InfoCard title="유전 정보">
        <InfoCardItem subject="알그룹">
          {eggGroups.map((group) => (
            <div key={group}>{group}</div>
          ))}
        </InfoCardItem>
        <InfoCardItem subject="성비">
          <div>
            {male === '무성' ? (
              <span className="text-zinc-900">{male}</span>
            ) : (
              <>
                <div className="text-blue-600 text-nowrap"> 수컷 : {male}%</div>
                <div className="text-pink-600 text-nowrap">
                  암컷 : {female}%
                </div>
              </>
            )}
          </div>
        </InfoCardItem>
        <InfoCardItem subject="부화 카운트">{hatchCounter}</InfoCardItem>
      </InfoCard>
    </div>
  );
}
