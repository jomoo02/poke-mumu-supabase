import { getNatureText } from '../../lib/get-condition-text';
import type { ConditionComponentProps } from '../../types';

export function Nature({ value }: ConditionComponentProps) {
  const text = getNatureText(value);

  if (!text) {
    return null;
  }

  return (
    <span>
      성격에 따라 <span>{text}</span>
    </span>
  );
}
