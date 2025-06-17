import ArrowIcon from './arrow-icon';
import type { Detail } from './type';
import DetailItem from './detail-item';

interface DetailsProps {
  evolutionId: number;
  details: Detail[];
}

export default function Details({ details, evolutionId }: DetailsProps) {
  if (!details || details.length === 0) {
    return null;
  }

  const containerCN =
    evolutionId === 62
      ? 'flex flex-col justify-around items-center h-full'
      : 'flex flex-col items-center justify-center';

  return (
    <div className={`${containerCN} w-full lg:w-[220px] py-2.5 px-1`}>
      <div className="flex flex-col items-center justify-center ">
        {details.map((detail, i) => (
          <div
            key={detail.display}
            className=" flex flex-col items-center justify-center"
          >
            {i > 0 && (
              <div className="text-center text-[15px] text-slate-800">or</div>
            )}
            <p className="break-keep text-pretty text-[15px] text-center text-slate-800">
              <DetailItem
                display={detail.display}
                conditions={detail.conditions}
                trigger={detail.trigger}
              />
            </p>
          </div>
        ))}
      </div>
      <ArrowIcon evolutionId={evolutionId} />
    </div>
  );
}
