import Link from 'next/link';
import {
  getSubjectParticle,
  getParticleForAnd,
} from '@/app/utils/word-particle';
import { getPokedexPokeHref } from '@/app/utils/poke-link';
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

  const particleForAnd = getParticleForAnd(speciesName);
  const href = getPokedexPokeHref(speceisData);

  return (
    <>
      <Link href={href} className="underline hover:text-blue-400">
        {speciesName}
      </Link>
      {particleForAnd && <span>{particleForAnd}</span>}
    </>
  );
}

export function PartySpecies({ value }: ConditionComponentProps) {
  const speciesName = getPartySpeciesText(value);
  const speceisData = setPartySpecies(value);

  if (!speciesName || !speceisData) {
    return null;
  }

  const subjectParticle = getSubjectParticle(speciesName);
  const href = getPokedexPokeHref(speceisData);

  return (
    <>
      <Link href={href} className="underline hover:text-blue-400">
        {speciesName}
      </Link>
      {subjectParticle && <span>{subjectParticle}</span>}
      <span className="ml-1">있을 때</span>
    </>
  );
}
