import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';
import Info from './info';
import InfoHeader from './info-header';

import {
  IconNumber100Small,
  IconNumber50Small,
  IconPacman,
} from '@tabler/icons-react';
import { VenusAndMars, Dot, Egg, Footprints } from 'lucide-react';

import Card from './card';
import Alert from './alert';

interface BreedingInfoProps {
  breeding: Breeding | null;
}

export default function TestInfo({}) {
  // const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  // const [male, female] = genderRatio.split('-');

  return (
    <div className="">
      {/* <h3 className="text-slate-800 text-lg font-semibold mx-1 ">성장</h3> */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"> */}
      {/* <div className="grid  lg:grid-cols-4  gap-4"> */}
      <div className="grid lg:grid-cols-3 ">
        <Card title="필요 경험치" icon={<IconPacman className="size-6" />}>
          <div className="font-medium text-foreground text-pretty break-keep">
            항상 빠름
          </div>
        </Card>
        <Card
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
        </Card>
      </div>

      {/* </div> */}
      {/* <Alert> */}

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
