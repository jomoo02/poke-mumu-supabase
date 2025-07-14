import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import Info from './info';
import InfoHeader from './info-header';

interface BreedingInfoProps {
  breeding: Breeding | null;
}

export default function BreedingInfo({ breeding }: BreedingInfoProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className=" justify-center">
      <h3 className="text-slate-800 text-lg font-semibold mx-1 mb-2">
        유전 정보
      </h3>
      <div className="grid max-w-2xl">
        <InfoHeader />
        <Info category="알그룹">
          <div className="flex">
            {eggGroups.map((group, index) => (
              <div key={group}>
                {index > 0 && ', '}
                {group}
              </div>
            ))}
          </div>
        </Info>
        <Info category="성비">
          <p className="flex gap-x-2">
            {male === '무성' ? (
              <>{male}</>
            ) : (
              <>
                <span className="text-blue-700 whitespace-nowrap">
                  수컷: {male}%
                </span>
                <span className="text-rose-700 whitespace-nowrap">
                  암컷: {female}%
                </span>
              </>
            )}
          </p>
        </Info>
        <Info category="부화 카운트">{hatchCounter}</Info>
      </div>
      <ul className="text-slate-800 mt-8 list-disc list-inside p-1 space-y-0.5">
        {eggGroups[0] === '미발견' && (
          <li>
            알그룹이 <span className="font-medium">미발견</span>인 경우, 교배가
            불가능합니다.
          </li>
        )}

        {hatchCounter && (
          <li>
            알이 부화하려면 약{' '}
            <span className="font-medium">{Number(hatchCounter) * 256}</span>
            걸음이 필요합니다.
          </li>
        )}
      </ul>
    </div>
  );
}
