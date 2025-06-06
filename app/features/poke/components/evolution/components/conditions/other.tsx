import type { ConditionComponentProps } from '../../types';
import { getOtherText, getTurnUpsideDownText } from './condition.utils';

export function TurnUpsideDown({ value }: ConditionComponentProps) {
  const text = getTurnUpsideDownText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}

export function Other({ value }: ConditionComponentProps) {
  const text = getOtherText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
