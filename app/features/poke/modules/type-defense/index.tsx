import PokeTypeDefense from './components/poke-type-defense';
import { isPokeType } from '@/app/lib/poke-type';

interface TypeDefenseProps {
  types: string[];
}

export default function TypeDefense({ types }: TypeDefenseProps) {
  const isEveryPokeType = types.every(isPokeType);

  if (!isEveryPokeType) {
    return null;
  }

  return <PokeTypeDefense pokeTypes={types} />;
}
