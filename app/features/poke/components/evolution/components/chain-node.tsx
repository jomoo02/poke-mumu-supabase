import type { EvolutionNodeUI } from '../types';
import ChainPoke from './chain-poke';
import Details from './details';

interface ChainNodeProps {
  evolutionId: number;
  node: EvolutionNodeUI;
}

export default function ChainNode({ evolutionId, node }: ChainNodeProps) {
  const { details, next, ...poke } = node;

  const nextNodeGridClassNames: Record<number, string> = {
    1: 'grid',
    2: 'grid grid-cols-2 lg:grid-cols-1 gap-1',
    3: 'grid grid-cols-3 lg:grid-cols-1 gap-1',
    8: 'grid grid-cols-2 sm:grid-cols-4 gap-1 lg:gap-10',
    0: '',
  };

  const nextNodeGridClassName = nextNodeGridClassNames[next.length];

  return (
    <div
      className={`flex flex-col ${evolutionId === 62 ? 'place-content-between ' : 'lg:flex-row '} items-center w-full lg:w-fit`}
    >
      <Details details={details} evolutionId={evolutionId} />
      <ChainPoke poke={poke} />
      {next && next.length > 0 && (
        <div className={nextNodeGridClassName}>
          {next.map((childNode) => (
            <ChainNode
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
