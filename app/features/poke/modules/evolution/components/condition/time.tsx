import { getTimeOfDayText } from '../../lib/get-condition-text';
import type { ConditionComponentProps } from '../../types';

export function TimeOfDay({ value }: ConditionComponentProps) {
  const text = getTimeOfDayText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
