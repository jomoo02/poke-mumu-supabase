import { cn } from '@/app/lib/utils';
import type { EvolutionNodeUI } from '../types';
import ChainPoke from './chain-poke';
import Details from './details';

interface ChainNodeProps {
  evolutionId: number;
  className?: string;
  node: EvolutionNodeUI;
}

export default function ChainNode({
  evolutionId,
  node,
  className,
}: ChainNodeProps) {
  const { details, next, ...poke } = node;

  const nextNodeGridClassNames: Record<number, string> = {
    1: 'grid',
    2: 'grid grid-cols-2 lg:grid-cols-1 gap-1',
    3: 'grid grid-cols-2 lg:grid-cols-1 gap-1',
    8: 'grid grid-cols-2 sm:grid-cols-4 gap-1 lg:gap-10',
    0: '',
  };

  const nextNodeGridClassName = nextNodeGridClassNames[next.length];
  const grow = `grow-${next.length}`;
  // console.log(grow);
  console.log(next.length);

  return (
    <div
      className={cn(
        'flex items-center w-full',
        // next.length === 8 ? '' : 'lg:flex-row',
        className,
      )}
    >
      <>
        <Details
          details={details}
          evolutionId={evolutionId}
          className={cn('flex flex-col items-center')}
        />
        <ChainPoke poke={poke} />
      </>

      {next && next.length > 0 && (
        <div
          className={cn(
            ' grid w-full lg:w-auto',
            next.length === 1 && 'grid-cols-1',
            next.length >= 2 && next.length < 4 && 'grid-cols-2 lg:grid-cols-1',
            next.length === 8 && 'grid cols-2 lg:grid-cols-4 gap-4',
          )}
        >
          {next.map((childNode, i) => (
            <ChainNode
              className={cn(
                (i + 1) % 3 === 0 && 'col-span-2 lg:col-span-1',
                next.length === 8
                  ? 'flex flex-col justify-end'
                  : 'flex flex-col lg:flex-row',
              )}
              key={childNode.id}
              evolutionId={evolutionId}
              node={childNode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
