import { getDirectionalParticle } from '@/app/utils/word-particle';

export function isIntegerInputText(input: string) {
  const numericValue = Number(input);

  if (Number.isNaN(numericValue)) {
    return false;
  }

  if (/^-?\d+$/.test(input)) {
    return true;
  }

  return false;
}

export function getPokeNameDirectionParticle(inputText: string) {
  if (!inputText) {
    return '';
  }

  return getDirectionalParticle(inputText) || '(으)로';
}
