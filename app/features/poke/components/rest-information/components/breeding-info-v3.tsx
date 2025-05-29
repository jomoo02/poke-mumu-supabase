import type { Breeding } from '../types';
import { formatBreeding } from '../lib/format-breeding';

interface BreedingInfoProps {
  breeding: Breeding | null;
}

export default function BreedingInfoV3({ breeding }: BreedingInfoProps) {
  const { eggGroups, genderRatio, hatchCounter } = formatBreeding(breeding);
  const [male, female] = genderRatio.split('-');

  return (
    <div className=" justify-center">
      <h3 className="text-slate-800 text-lg font-medium mb-2">유전 정보</h3>
      <div className="flex">
        <div className="flex text-[15px] text-slate-800 border border-gray-300 rounded-md overflow-auto h-full">
          <div className="border-r border-gray-300 flex flex-col min-w-20">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              알그룹
            </div>
            <div className="flex flex-col justify-center items-center flex-1 py-2 px-3">
              {eggGroups.map((group) => (
                <div key={group}>{group}</div>
              ))}
            </div>
          </div>
          <div className="border-r border-gray-300 flex flex-col min-w-28">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              성비
            </div>
            <div className="flex-1 py-2 px-3 flex flex-col justify-center items-center">
              {male === '무성' ? (
                <div>{male}</div>
              ) : (
                <>
                  <div className="text-blue-400 whitespace-nowrap">
                    수컷 : {male}%
                  </div>{' '}
                  <div className="text-rose-400 whitespace-nowrap">
                    암컷 : {female}%
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col  min-w-28">
            <div className="font-medium text-slate-700 bg-neutral-100 py-1 px-4 h-8 border-b border-gray-300 flex items-center justify-center">
              부화 카운트
            </div>
            <div className="text-center flex-1 py-2 px-3 flex items-center justify-center">
              {hatchCounter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
