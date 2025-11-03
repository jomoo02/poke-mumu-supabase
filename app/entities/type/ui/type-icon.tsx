import Image from 'next/image';

import { cn } from '@/app/shared/lib';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/app/shared/ui/tooltip';

import { type TypeDto } from '../model';

interface TypeIconProps {
  type: TypeDto;
  size?: number;
  isVisibleContent?: boolean;
  isVisibleTooltip?: boolean;
  className?: string;
}

export function TypeIcon({
  type,
  className,
  size = 32,
  isVisibleContent = false,
  isVisibleTooltip = false,
}: TypeIconProps) {
  if (isVisibleTooltip) {
    <div className={cn('flex flex-col items-center', className)}>
      <Tooltip>
        <TooltipTrigger>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={`/type-icon/${type.identifier}.png`}
              width={size}
              height={size}
              alt={type.identifier}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-foreground rounded-md text-background min-w-12 text-center px-3 py-0.5 font-semibold text-sm">
          {type.typeKo}
        </TooltipContent>
      </Tooltip>
    </div>;
  }
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`/type-icon/${type.identifier}.png`}
          width={size}
          height={size}
          alt={type.identifier}
        />
      </div>

      {isVisibleContent && (
        <div className="text-sm text-center text-muted-foreground">
          {type.typeKo}
        </div>
      )}
    </div>
  );
}
