import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';
import InfoCardV2 from './info-card-v2';
import InfoCardItemV2 from './info-card-item-v2';

interface DetailInfoProps {
  detail: Detail | null;
  effortValues: EffortValue[];
}

export default function DetailInfoV2({
  detail,
  effortValues,
}: DetailInfoProps) {
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
      <InfoCardV2 title="훈련 정보">
        <InfoCardItemV2 subject="포획률">{captureRate}</InfoCardItemV2>
        <InfoCardItemV2 subject="노력치">
          {formattedEffortValues.map((v) => (
            <div key={v} className="truncate">
              {v}
            </div>
          ))}
        </InfoCardItemV2>
        <InfoCardItemV2 subject="기초 친밀도">{baseFriendShip}</InfoCardItemV2>
        <InfoCardItemV2 subject="성장">
          <div className="flex items-center gap-x-2">
            <div className="truncate">{growthRate}</div>
            <div className="text-left">
              <p className="p-px text-[15px] truncate">
                {atLevel50Text} : {expPointAtLevel50.toLocaleString()}
              </p>
              <p className="p-px text-[15px] truncate">
                {atLevel100Text} : {expPointAtLevel100.toLocaleString()}
              </p>
            </div>
          </div>
        </InfoCardItemV2>
      </InfoCardV2>
    </div>
  );
}
