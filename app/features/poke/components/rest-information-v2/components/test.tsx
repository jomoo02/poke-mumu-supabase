import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import Info from './info';
import InfoHeader from './info-header';

import { IconNumber100Small, IconNumber50Small } from '@tabler/icons-react';
import { VenusAndMars, Dot, Egg, Footprints } from 'lucide-react';

import { Card, CardV2, CardV3 } from './card';
import Alert from './alert';

interface BreedingInfoProps {
  breeding: Breeding | null;
}

export default function TestInfo({ breeding }: BreedingInfoProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div>
      <h3 className="text-slate-800 text-lg font-semibold mx-1 mb-2">유전</h3>
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> */}
      <div className="grid  gap-2">
        <CardV3 title="성비" icon={<VenusAndMars className="size-6" />}>
          <div className="flex  items-center text-ellipsis">
            {male === '무성' ? (
              <>{male}</>
            ) : (
              <div className="flex items-center text-nowrap">
                {male !== '0' && <span>수컷 {male}%</span>}
                {male !== '0' && female !== '0' && (
                  <span className="mx-0.5 font-bold">:</span>
                )}
                {female !== '0' && <span>암컷 {female}%</span>}
              </div>
            )}
          </div>
        </CardV3>

        <CardV3 title="알그룹" icon={<Egg className="size-6" />}>
          <div className="flex  text-foreground">
            {eggGroups.map((group, index) => (
              <div key={group} className="flex items-center">
                {index > 0 && <Dot className="size-4" />}
                {group}
              </div>
            ))}
          </div>
        </CardV3>

        <CardV3 title="부화카운트" icon={<Footprints className="size-6" />}>
          <div className="flex  text-foreground">
            {eggGroups[0] !== '미발견' ? hatchCounter : '—'}
            {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
              <span className="mx-1">
                (약 {Number(hatchCounter) * 256} 걸음)
              </span>
            )}
          </div>
        </CardV3>
      </div>
      {/* <Alert> */}
      {eggGroups[0] === '미발견' && (
        <Alert>
          알그룹이 <span className="">미발견</span>인 경우, 교배가 불가능합니다.
        </Alert>
      )}

      {/* {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
          <div>
            알이 부화하려면 약{' '}
            <span className="">{Number(hatchCounter) * 256}</span>
            걸음이 필요합니다.
          </div>
        )} */}
      {/* </Alert> */}

      {/* <div className="grid max-w-2xl">
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
        <Info category="부화 카운트">
          {eggGroups[0] !== '미발견' ? hatchCounter : '—'}
        </Info>
      </div>
      <ul className="text-slate-800 mt-8 list-disc list-inside p-1 space-y-0.5">
        {eggGroups[0] === '미발견' && (
          <li>
            알그룹이 <span className="">미발견</span>인 경우, 교배가
            불가능합니다.
          </li>
        )}

        {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
          <li>
            알이 부화하려면 약{' '}
            <span className="">{Number(hatchCounter) * 256}</span>
            걸음이 필요합니다.
          </li>
        )}
      </ul> */}
    </div>
  );
}
