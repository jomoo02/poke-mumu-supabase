import type {
  ConditionComponent,
  ConditionValue,
  ConditionKey,
} from '../../types';
import { Level, Gender, Affection, Beauty, Happiness } from './basic';
import { RecoildDamage } from './damage';
import { Location, Region, NeedsOverworldRain } from './area';
import { HeldItem, UseItem, Spin } from './item';
import { KnownMove, AgileStyle, StrongStyle, UsedMove } from './move';
import { Nature } from './nature';
import { TurnUpsideDown, Other } from './other';
import { TradeSpecies, PartySpecies } from './poke';
import { PhysicalStat } from './stat';
import { TimeOfDay } from './time';
import { KnownMoveType, PartyType } from './type';

interface ConditionProps {
  conditionKey: ConditionKey;
  value: ConditionValue;
}

const conditionKeyMap: Record<ConditionKey, ConditionComponent> = {
  min_level: Level,
  gender: Gender,
  min_affection: Affection,
  min_beauty: Beauty,
  min_happiness: Happiness,
  recoil_damage: RecoildDamage,
  location: Region,
  area: Location,
  needs_overworld_rain: NeedsOverworldRain,
  held_item: HeldItem,
  item: UseItem,
  spin: Spin,
  known_move: KnownMove,
  agile_style: AgileStyle,
  strong_style: StrongStyle,
  use_move: UsedMove,
  relative_nature: Nature,
  turn_upside_down: TurnUpsideDown,
  other: Other,
  trade_species: TradeSpecies,
  party_species: PartySpecies,
  relative_physical_stats: PhysicalStat,
  time_of_day: TimeOfDay,
  known_move_type: KnownMoveType,
  party_type: PartyType,
};

export default function Condition({ conditionKey, value }: ConditionProps) {
  const Component = conditionKeyMap[conditionKey];

  if (!Component) {
    return null;
  }

  return <Component value={value} />;
}
