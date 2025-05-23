import { Fragment } from 'react';
import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import Info from './info';

interface BreedingProps {
  breeding: Breeding | null;
}

export default function BreedingInfo({ breeding }: BreedingProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className="lg:p-2">
      <h3 className="text-xl font-bold text-zinc-950 pb-2 text-center">
        유전 정보
      </h3>
      <div className="lg:px-1">
        <Info subject="알그룹">
          <p>
            {eggGroups.map((eggGroup, index) => (
              <Fragment key={eggGroup}>
                <span>{eggGroup}</span>
                {index < eggGroups.length - 1 && <span>, </span>}
              </Fragment>
            ))}
          </p>
        </Info>
        <Info subject="성비">
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
        </Info>
        <Info subject="부화 카운트">{hatchCounter}</Info>
      </div>
    </div>
  );
}
