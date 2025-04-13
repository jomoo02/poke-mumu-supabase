import React from 'react';
import Link from 'next/link';
import {
  getSubjectParticle,
  getParticleForAnd,
} from '@/app/utils/word-particle';

interface PokeLinkProps {
  name: string;
  pokeKey: string;
  no: number;
  children?: React.ReactNode;
}

interface PokeLinkWithParticleProps {
  name: string;
  pokeKey: string;
  no: number;
}

export function PokeLink({ name, pokeKey, no, children }: PokeLinkProps) {
  const href = `/pokedex/${no}/${pokeKey}`;
  return (
    <>
      <Link href={href} className="underline hover:text-blue-400">
        {name}
      </Link>
      {children}
    </>
  );
}

export function PokeLinkWithSubjectParticle({
  name,
  pokeKey,
  no,
}: PokeLinkWithParticleProps) {
  const subjectParticle = getSubjectParticle(name);

  return (
    <PokeLink name={name} pokeKey={pokeKey} no={no}>
      {subjectParticle && <span>{subjectParticle}</span>}
    </PokeLink>
  );
}

export function PokeLinkWithParticleForAnd({
  name,
  pokeKey,
  no,
}: PokeLinkWithParticleProps) {
  const particleForAnd = getParticleForAnd(name);

  return (
    <PokeLink name={name} pokeKey={pokeKey} no={no}>
      {particleForAnd && <span>{particleForAnd}</span>}
    </PokeLink>
  );
}
