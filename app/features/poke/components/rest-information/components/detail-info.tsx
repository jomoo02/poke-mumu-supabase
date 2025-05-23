import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';
import InfoCard from './info-card';
import InfoCardItem from './info-card-item';

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
    <div className="my-3 lg:col-start-3">
      <InfoCard title="훈련 정보">
        <InfoCardItem subject="포획률">{captureRate}</InfoCardItem>
        <InfoCardItem subject="노력치">
          {formattedEffortValues.map((v) => (
            <div key={v}>{v}</div>
          ))}
        </InfoCardItem>
        <InfoCardItem subject="기초 친밀도">{baseFriendShip}</InfoCardItem>
        <InfoCardItem subject="성장">
          <div>
            <div className="truncate">{growthRate}</div>
            <p className="p-px text-[15px]">
              {atLevel50Text} : {expPointAtLevel50.toLocaleString()}
            </p>
            <p className="p-px text-[15px]">
              {atLevel100Text} : {expPointAtLevel100.toLocaleString()}
            </p>
          </div>
        </InfoCardItem>
      </InfoCard>
    </div>
  );
}
