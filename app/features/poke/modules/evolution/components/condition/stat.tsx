import type { ConditionComponentProps } from '../../types';
import { getPhysicalStatText } from '../../lib/get-condition-text';

export function PhysicalStat({ value }: ConditionComponentProps) {
  const text = getPhysicalStatText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
