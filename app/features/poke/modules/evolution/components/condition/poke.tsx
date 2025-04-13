import {
  PokeLinkWithParticleForAnd,
  PokeLinkWithSubjectParticle,
} from '@/app/components/link/poke/poke-link';
import type { ConditionComponentProps } from '../../types';
import {
  getTradeSpeciesText,
  getPartySpeciesText,
} from '../../lib/get-condition-text';
import { setTradeSpecies, setPartySpecies } from '../../lib/set-condition-poke';

export function TradeSpecies({ value }: ConditionComponentProps) {
  const speciesName = getTradeSpeciesText(value);
  const speceisData = setTradeSpecies(value);

  if (!speciesName || !speceisData) {
    return null;
  }

  return (
    <PokeLinkWithParticleForAnd
      name={speciesName}
      no={speceisData.no}
      pokeKey={speceisData.pokeKey}
    />
  );
}

export function PartySpecies({ value }: ConditionComponentProps) {
  const speciesName = getPartySpeciesText(value);
  const speceisData = setPartySpecies(value);

  if (!speciesName || !speceisData) {
    return null;
  }

  return (
    <>
      <PokeLinkWithSubjectParticle
        name={speciesName}
        no={speceisData.no}
        pokeKey={speceisData.pokeKey}
      />
      <span className="ml-1">있을 때</span>
    </>
  );
}
