import type { EvolutionTreeUI, EvolutionNodeUI } from './types';
import ChainNode from './components/chain-node';
import SectionHeader from '../section-header';
import Area from './components/area';
import { cn } from '@/app/lib/utils';

interface EvolutionProps {
  evolutionTree: EvolutionTreeUI;
}

export default function EvolutionV2({ evolutionTree }: EvolutionProps) {
  const displayVariants = {
    default: 'flex lg:flex-col lg:items-center justify-center lg:gap-4 my-1',
    multiple: 'flex flex-col items-center justify-center gap-4 my-1',
  };

  const containerCN =
    evolutionTree.roots.length > 1
      ? displayVariants.multiple
      : displayVariants.default;
  console.log(evolutionTree);

  return (
    <div className="w-full">
      <div>{evolutionTree.id}</div>

      <div className="grid lg:justify-center w-full gap-8">
        {/* <EvolutionTree roots={evolutionTree.roots} /> */}
        {evolutionTree.roots.map((node) => (
          <div
            className="w-full bg-white  py-4 lg:p-4 rounded-xl"
            key={node.id}
          >
            <ChainNode
              evolutionId={evolutionTree.id}
              node={node}
              className={cn(
                node.next.length === 8
                  ? 'flex flex-col'
                  : 'flex flex-col lg:flex-row',
              )}
            />
          </div>
        ))}
      </div>

      <Area evolutionId={evolutionTree.id} />
    </div>
  );
}
