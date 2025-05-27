import { Fragment } from 'react';
import type { Detail } from '../../types/evolution';
// import { useChainMaxWidth, useChainMaxDepth } from './chain.context';
import ConditionList from '../conditions';
import Trigger from './trigger';
import ArrowIcon from './arrow-icon';

interface ChainPokeDetailProps {
  conditionDetails: Detail[];
}

export default function ChainPokeDetail({
  conditionDetails,
}: ChainPokeDetailProps) {
  // const chainMaxWidth = useChainMaxWidth();
  // const chainMaxDepth = useChainMaxDepth();

  const widthVariants: Record<number, string> = {
    2: 'w-full',
    4: 'w-full md:w-80',
    8: 'w-full',
    0: 'w-full md:max-w-52 md:w-40 lg:w-52 xl:max-w-72 xl:w-72',
  };

  const heightVariants: Record<number, string> = {
    8: 'min-h-40 md:min-h-36',
    0: 'min-h-24 md:min-h-28',
  };

  if (conditionDetails?.length === 0) {
    return null;
  }

  // const width = widthVariants[chainMaxWidth] || widthVariants[0];
  // console.log(width, chainMaxWidth);
  // const height = heightVariants[chainMaxDepth] || heightVariants[0];

  return (
    <div
      className={`flex flex-col items-center justify-center px-5 sm:px-1.5 lg:px-4`}
    >
      <div className="text-[15px] text-zinc-900 text-center break-words space-x-1 w-full xl:px-4">
        {conditionDetails.map(({ trigger, condition }, index) => (
          <Fragment
            key={`${trigger}-${condition
              .map(({ key, value }) => `${key}-${value}`)
              .join('/')}`}
          >
            {index > 0 && <div>or</div>}
            <ConditionList conditions={condition} />
            <Trigger trigger={trigger} conditions={condition} />
          </Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-2 md:mt-0.5">
        <ArrowIcon maxWidth={1} />
      </div>
    </div>
  );
}
