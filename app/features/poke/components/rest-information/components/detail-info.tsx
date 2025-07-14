import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';
import InfoHeader from './info-header';
import Info from './info';
import { getCatchProbability } from '../utils/capture-rate';

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

  return (
    <div className="">
      <h3 className="text-slate-800 text-lg font-semibold mb-2 mx-1">
        훈련 정보
      </h3>
      <div className="grid max-w-2xl">
        <InfoHeader />
        <Info category="포획률">{captureRate}</Info>
        <Info category="노력치">
          {formattedEffortValues.map((v) => (
            <div key={v} className="truncate">
              {v}
            </div>
          ))}
        </Info>
        <Info category="기초 친밀도">{baseFriendShip}</Info>
        <Info category="성장">
          <div>
            <p>{growthRate}</p>
            {/* <p className="p-px text-[15px] text-slate-600">
              {atLevel50Text}: {expPointAtLevel50.toLocaleString()}
            </p>
            <p className="p-px text-[15px]  text-slate-600">
              {atLevel100Text}: {expPointAtLevel100.toLocaleString()}
            </p> */}
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
            {atLevel50Text}: {expPointAtLevel50.toLocaleString()}
          </li>
          <li className="text-pretty break-keep">
            {atLevel100Text}: {expPointAtLevel100.toLocaleString()}
          </li>
        </ul>
      </ul>
    </div>
  );
}
