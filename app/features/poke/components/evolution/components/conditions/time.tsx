import { getTimeOfDayText } from './condition.utils';
import type { ConditionComponentProps } from '../../types';

export function TimeOfDay({ value }: ConditionComponentProps) {
  const text = getTimeOfDayText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
