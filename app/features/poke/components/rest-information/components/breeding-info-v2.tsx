import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import InfoCardV2 from './info-card-v2';
import InfoCardItemV2 from './info-card-item-v2';

interface BreedingProps {
  breeding: Breeding | null;
}

export default function BreedingInfoV2({ breeding }: BreedingProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className="my-3">
      <InfoCardV2 title="유전 정보">
        <InfoCardItemV2 subject="알그룹">
          {eggGroups.map((group) => (
            <div key={group}>{group}</div>
          ))}
        </InfoCardItemV2>
        <InfoCardItemV2 subject="성비">
          <div>
            {male === '무성' ? (
              <span className="text-slate-800">{male}</span>
            ) : (
              <>
                <span className="text-blue-500 text-nowrap">
                  수컷 : {male}%
                </span>{' '}
                <span className="text-rose-500 text-nowrap">
                  암컷 : {female}%
                </span>
              </>
            )}
          </div>
        </InfoCardItemV2>
        <InfoCardItemV2 subject="부화 카운트">{hatchCounter}</InfoCardItemV2>
      </InfoCardV2>
    </div>
  );
}
