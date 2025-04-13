import { JSX } from 'react';

export type ConditionValue = string | number | null;

export interface ConditionComponentProps {
  value: ConditionValue;
}

export type ConditionComponent = (
  props: ConditionComponentProps,
) => JSX.Element | null;

export type TriggerKey = 'level-up' | 'use-item' | 'trade' | 'other';

export type ConditionKey =
  | 'other'
  | 'spin'
  | 'recoil_damage'
  | 'turn_upside_down'
  | 'needs_overworld_rain'
  | 'gender'
  | 'item'
  | 'held_item'
  | 'agile_style'
  | 'strong_style'
  | 'known_move'
  | 'known_move_type'
  | 'use_move'
  | 'min_affection'
  | 'min_beauty'
  | 'min_happiness'
  | 'min_level'
  | 'trade_species'
  | 'relative_nature'
  | 'relative_physical_stats'
  | 'party_species'
  | 'party_type'
  | 'time_of_day'
  | 'location'
  | 'area';
