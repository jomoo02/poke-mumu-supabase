import type { ConditionComponentProps } from '../../types';
import { getPhysicalStatText } from './condition.utils';

export function PhysicalStat({ value }: ConditionComponentProps) {
  const text = getPhysicalStatText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
