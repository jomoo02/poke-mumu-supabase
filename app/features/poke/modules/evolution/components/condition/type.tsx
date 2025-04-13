import type { ConditionComponentProps } from '../../types';
import { getTypeText } from '../../lib/get-condition-text';

export function KnownMoveType({ value }: ConditionComponentProps) {
  const type = getTypeText(value);

  if (!type) {
    return null;
  }

  return <span>{type} 타입 기술을 배우고</span>;
}

export function PartyType({ value }: ConditionComponentProps) {
  const type = getTypeText(value);

  if (!type) {
    return null;
  }

  return <span>{type} 타입 포켓몬을 지니고 있는 상태</span>;
}
