import type { Nature } from '../data/nature';
import { getSelectedNatureData } from '../utils/get-data';

interface SelectedNatureProps {
  selectedNature: Nature | null;
}

export default function SelectedNature({
  selectedNature,
}: SelectedNatureProps) {
  if (!selectedNature) {
    return <div>non</div>;
  }

  const { nature, increase, decrease } = getSelectedNatureData(selectedNature);

  return (
    <div className="text-[15px]">
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-slate-700">성격:</span>
          <span className="px-2 py-1 bg-neutral-100 text-slate-800 rounded-md font-medium">
            {nature}
          </span>
        </div>
        {increase && (
          <div className="flex items-center gap-2">
            <span className="text-green-700">▲ 오르는 능력치:</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md font-medium">
              {increase}
            </span>
          </div>
        )}
        {decrease && (
          <div className="flex items-center gap-2">
            <span className="text-red-700">▼ 내려가는 능력치:</span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md font-medium">
              {decrease}
            </span>
          </div>
        )}
        {!increase && !decrease && (
          <p className="text-base text-slate-700 break-keep">
            이 성격은 능력치에 영향을 주지 않습니다.
          </p>
        )}
      </div>
    </div>
  );
}
