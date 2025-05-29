import type { Detail, EffortValue } from '../types';
import { formatDetail } from '../lib/format-detail';

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
    <div className="overflow-hidden">
      <h3 className="text-slate-800 text-lg font-medium mb-2">훈련 정보</h3>
      <div className="flex">
        <div className="flex text-[15px] text-slate-800 border border-gray-300 rounded-md overflow-auto h-full">
          <div className="border-r border-gray-300 flex flex-col min-w-20">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              포획률
            </div>
            <div className="flex gap-x-1.5 justify-center items-center flex-1 py-2 px-3">
              {captureRate}
            </div>
          </div>
          <div className="border-r border-gray-300 flex flex-col min-w-24">
            <div className="font-medium text-slate-700 truncate bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              노력치
            </div>
            <div className="flex-1 py-2 px-3 flex flex-col items-center justify-center">
              {formattedEffortValues.map((v) => (
                <div key={v} className="truncate">
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col border-r border-gray-300 min-w-28">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              기초 친밀도
            </div>
            <div className="flex gap-x-1.5 justify-center items-center flex-1 py-2 px-3">
              {baseFriendShip}
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              성장
            </div>
            <div className="flex gap-x-1.5 justify-center flex-1 py-2 px-5 flex-col">
              <div className="truncate text-center">{growthRate}</div>
              <p className="p-px text-sm truncate text-center">
                {atLevel50Text} : {expPointAtLevel50.toLocaleString()}
              </p>
              <p className="p-px text-sm truncate text-center">
                {atLevel100Text} : {expPointAtLevel100.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
