import AbilitiesSkeleton from './abilities/components/skeleton';
import EvolutionSkeleton from './evolution/components/skeleton';
import MovesSkeleton from './moves/components/skeleton';
import PokedexInformationSkeleton from './pokedex-information/components/skeleton';
import RestInformationSkeleton from './rest-information/components/skeleton';
import StatsSkeleton from './stats/components/skeleton';
import TypeDefenseSkeleton from './type-defense/components/skeleton';

export default function NdexFormPageSkeleton() {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <PokedexInformationSkeleton />
        <RestInformationSkeleton />
        <AbilitiesSkeleton />
        <StatsSkeleton />
        <TypeDefenseSkeleton />
        <EvolutionSkeleton />
        <MovesSkeleton />
      </div>
    </div>
  );
}
