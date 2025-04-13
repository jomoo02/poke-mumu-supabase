import { PARTY_SPECIES, TRADE_SPECIES } from '../data/species';
import { ConditionValue } from '../types';

export function setPartySpecies(value: ConditionValue) {
  if (typeof value !== 'string') {
    return null;
  }

  const targetPoke = PARTY_SPECIES.find(({ pokeKey }) => pokeKey === value);

  if (!targetPoke) {
    return null;
  }

  return targetPoke;
}

export function setTradeSpecies(value: ConditionValue) {
  if (typeof value !== 'string') {
    return null;
  }

  const targetPoke = TRADE_SPECIES.find(({ pokeKey }) => pokeKey === value);

  if (!targetPoke) {
    return null;
  }

  return targetPoke;
}
