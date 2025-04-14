import type { ConditionComponentProps } from '../../types';
import { getRecoilDamageText } from '../../lib/get-condition-text';

export function RecoildDamage({ value }: ConditionComponentProps) {
  const text = getRecoilDamageText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
