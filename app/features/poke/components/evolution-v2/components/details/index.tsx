import ArrowIcon from './arrow-icon';
import type { Detail } from './type';
import DetailItem from './detail-item';
import { cn } from '@/app/lib/utils';

interface DetailsProps {
  evolutionId: number;
  details: Detail[];
  className?: string;
}

export default function Details({
  details,
  evolutionId,
  className,
}: DetailsProps) {
  if (!details || details.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        ` w-40 lg:w-64 max-w-40 lg:max-w-64 py-2.5 px-1`,
        className,
      )}
    >
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
