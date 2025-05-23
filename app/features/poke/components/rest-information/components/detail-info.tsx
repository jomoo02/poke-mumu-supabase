import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';
import Info from './info';

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

  return (
    <div className="lg:p-2">
      <h3 className="text-xl font-bold text-zinc-950 pb-2 text-center">
        훈련 정보
      </h3>
      <div className="px-1">
        <Info subject="포획률">{captureRate}</Info>
        <Info subject="노력치">
          {formattedEffortValues.map((v) => (
            <div key={v}>{v}</div>
          ))}
        </Info>

        <Info subject="기초 친밀도">{baseFriendShip}</Info>
        <Info subject="성장">
          <div>
            <div className="truncate">{growthRate}</div>
            <p className="p-px text-[15px]">
              {atLevel50Text} : {expPointAtLevel50.toLocaleString()}
            </p>
            <p className="p-px text-[15px]">
              {atLevel100Text} : {expPointAtLevel100.toLocaleString()}
            </p>
          </div>
        </Info>
      </div>
    </div>
  );
}
