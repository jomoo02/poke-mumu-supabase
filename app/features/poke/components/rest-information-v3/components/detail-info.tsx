import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';
import InfoHeader from './info-header';
import Info from './info';
import { getCatchProbability } from '../utils/capture-rate';
import Card from './card';

import { ArrowBigUp, Smile, Hand, Dot } from 'lucide-react';
import { IconPacman, IconPokeball } from '@tabler/icons-react';
import Alert from './alert';

interface DetailInfoProps {
  detail: Detail | null;
  effortValues: EffortValue[];
}

export default function DetailInfo({ detail, effortValues }: DetailInfoProps) {
  const {
    growthCurve,
    baseFriendShip,
    captureRate,
    effortValues: formattedEffortValues,
  } = formatDetail(detail, effortValues);

  const { growthRate, expPointAtLevel100, expPointAtLevel50 } = growthCurve;
  const atLevel50Text = 'Lv.1 -> Lv.50';
  const atLevel100Text = 'Lv.1 -> Lv.100';

  const catchRate =
    Math.round(
      getCatchProbability({
        hpCurrent: 100,
        hpMax: 100,
        catchRate: Number(captureRate),
      }) * 1000,
    ) / 10;

  // console.log(formattedEffortValues);

  return (
    <div>
      <h3 className="text-slate-800 text-lg font-semibold mb-2 mx-1">훈련</h3>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
        <Card title="포획률" icon={<IconPokeball className="size-6" />}>
          <div className="font-medium text-foreground">{captureRate}</div>
        </Card>
        <Card title="노력치" icon={<ArrowBigUp className="size-6" />}>
          <div className="font-medium text-foreground flex items-center">
            {formattedEffortValues.map((v, index) => (
              <div key={v} className="truncate flex items-center">
                {index > 0 && <Dot className="size-4" />}
                {v}
              </div>
            ))}
          </div>
        </Card>
        <Card title="기초 친밀도" icon={<Smile className="size-6" />}>
          <div className="font-medium text-foreground">{baseFriendShip}</div>
        </Card>
        <Card title="필요 경험치" icon={<IconPacman className="size-6" />}>
          <div className="font-medium text-foreground text-pretty break-keep">
            {growthRate}
          </div>
        </Card>
      </div>

      {/* <Alert>
        <div className="text-pretty break-keep text-foreground">
          체력이 가득 찼을 때 포획 확률(몬스터볼) :{' '}
          <span className="font-medium">약 {catchRate}%</span>
        </div>
      </Alert>
      <Alert>
        <div>성장에 필요한 경험치</div>
        <div className="text-pretty break-keep">
          {atLevel50Text}:{' '}
          <span className="font-medium">
            {expPointAtLevel50.toLocaleString()}
          </span>
        </div>
        <div className="text-pretty break-keep">
          {atLevel100Text}:{' '}
          <span className="font-medium">
            {expPointAtLevel100.toLocaleString()}
          </span>
        </div>
      </Alert> */}
      {/* <div className="grid max-w-2xl">
        <InfoHeader />
        <Info category="포획률">{captureRate}</Info>
        <Info category="노력치">
          {formattedEffortValues.map((v, index) => (
            <div key={v} className="truncate">
              {v}
            </div>
          ))}
        </Info>
        <Info category="기초 친밀도">{baseFriendShip}</Info>
        <Info category="필요 경험치">
          <div>
            <p>{growthRate}</p>
          </div>
        </Info>
      </div>
      <ul className="text-slate-800 mt-8 list-disc list-inside p-1 space-y-0.5">
        <li className="text-pretty break-keep">
          체력이 가득 찼을 때 포획 확률(몬스터볼):{' '}
          <span className="font-medium">약 {catchRate}%</span>
        </li>
        <li>성장에 필요한 경험치</li>
        <ul className="list-[circle] list-inside px-2">
          <li className="text-pretty break-keep">
            {atLevel50Text}:{' '}
            <span className="font-medium">
              {expPointAtLevel50.toLocaleString()}
            </span>
          </li>
          <li className="text-pretty break-keep">
            {atLevel100Text}:{' '}
            <span className="font-medium">
              {expPointAtLevel100.toLocaleString()}
            </span>
          </li>
        </ul>
      </ul> */}
    </div>
  );
}
