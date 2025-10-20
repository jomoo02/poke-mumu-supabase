import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import Info from './info';
import InfoHeader from './info-header';

import { IconNumber100Small, IconNumber50Small } from '@tabler/icons-react';
import {
  VenusAndMars,
  Dot,
  Egg,
  Footprints,
  BarChartBig,
  Mars,
  Venus,
} from 'lucide-react';

import Card from './card';
import Alert from './alert';
import StatBar from './stat-bar';

interface BreedingInfoProps {
  breeding: Breeding | null;
}

export default function BreedingInfo({ breeding }: BreedingInfoProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className="  border-border rounded-xl">
      <h3 className="text-slate-800 text-lg font-semibold">유전</h3>
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> */}
      {/* <div className="grid  lg:grid-cols-4  gap-4"> */}

      <div className="grid">
        <Card
          className="col-span"
          title="성비"
          icon={<VenusAndMars className="size-6" />}
        >
          <div className="w-full">
            {/* <StatBar
              male={!isNaN(Number(male)) ? Number(male) : undefined}
              female={!isNaN(Number(female)) ? Number(female) : undefined}
            /> */}
            <div className="flex font-medium justify-between text-foreground text-base">
              <div className="flex items-center">
                <Mars className="size-4 text-blue-600" />
                {male}%
              </div>

              <div className="flex items-center">
                <Venus className="size-4 text-pink-800" />
                {female}%
              </div>
            </div>
          </div>
        </Card>
        <Card title="알그룹" icon={<Egg className="size-6" />}>
          <div className="flex font-medium text-foreground">
            {eggGroups.map((group, index) => (
              <div key={group} className="flex items-center">
                {index > 0 && <Dot className="size-4" />}
                {group}
              </div>
            ))}
          </div>
        </Card>

        <Card title="부화카운트" icon={<Footprints className="size-6" />}>
          <div className="flex font-medium text-foreground">
            {eggGroups[0] !== '미발견' ? hatchCounter : '—'}
            {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
              <span className="mx-1">
                (약 {Number(hatchCounter) * 256} 걸음)
              </span>
            )}
          </div>
        </Card>
      </div>

      {/* <Card
        title="Lv.50 경험치"
        icon={
          <IconNumber50Small className="size-6" />
          // <div className="w-full h-full flex items-center justify-center font-black text-sm text-center font-suite">
          //   EXP
          // </div>
        }
      >
        <div className="flex font-medium text-foreground">1,059,860</div>
      </Card>
      <Card
        title="Lv.100 경험치"
        icon={
          <IconNumber100Small className="size-6" />
          // <div className="w-full h-full flex items-center justify-center font-black text-sm text-center font-suite">
          //   EXP
          // </div>
        }
      >
        <div className="flex font-medium text-foreground">1,059,860</div>
      </Card> */}
      {/* </div> */}
      {/* <Alert> */}
      {eggGroups[0] === '미발견' && (
        <Alert>
          알그룹이 <span className="font-medium">미발견</span>인 경우, 교배가
          불가능합니다.
        </Alert>
      )}

      {/* {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
          <div>
            알이 부화하려면 약{' '}
            <span className="font-medium">{Number(hatchCounter) * 256}</span>
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
            알그룹이 <span className="font-medium">미발견</span>인 경우, 교배가
            불가능합니다.
          </li>
        )}

        {eggGroups[0] !== '미발견' && hatchCounter !== '—' && (
          <li>
            알이 부화하려면 약{' '}
            <span className="font-medium">{Number(hatchCounter) * 256}</span>
            걸음이 필요합니다.
          </li>
        )}
      </ul> */}
    </div>
  );
}
