import { PokeDetailAbility } from '../../model';
import Ability from './ability';

interface PokeAbilityProps {
  abilities: PokeDetailAbility[];
}

export default function PokeAbilities({ abilities }: PokeAbilityProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold pb-3 mb-6 scroll-mt-12 text-foreground pt-10">
        특성
      </h2>
      <div className="grid gap-6 xl:gap-8 lg:grid-cols-3">
        {abilities.map((ability) => (
          <Ability key={ability.id} {...ability} />
        ))}
      </div>
    </div>
  );
}
