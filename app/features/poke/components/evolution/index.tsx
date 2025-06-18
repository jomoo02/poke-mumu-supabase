import type { EvolutionTreeUI } from './types';
import ChainNode from './components/chain-node';
import SectionHeader from '../section-header';
import Area from './components/area';
import EvolutionSkeleton from './components/skeleton';

interface EvolutionProps {
  evolutionTree: EvolutionTreeUI;
}

export default function Evolution({ evolutionTree }: EvolutionProps) {
  const displayVariants = {
    default: 'flex lg:flex-col lg:items-center justify-center lg:gap-4 my-1',
    multiple: 'flex flex-col items-center justify-center gap-4 my-1',
  };

  const containerCN =
    evolutionTree.roots.length > 1
      ? displayVariants.multiple
      : displayVariants.default;

  return (
    <div>
      <SectionHeader id="evolution" sectionTitle="진화" />
      {/* <div>{evolutionTree.id}</div> */}
      <div className={containerCN}>
        {evolutionTree.roots.map((node) => (
          <ChainNode key={node.id} evolutionId={evolutionTree.id} node={node} />
        ))}
      </div>
      <EvolutionSkeleton />
      <Area evolutionId={evolutionTree.id} />
    </div>
  );
}
