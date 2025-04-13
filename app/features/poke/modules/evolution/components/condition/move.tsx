import MoveLink from '@/app/components/link/move/move-link';
import type { ConditionComponentProps } from '../../types';
import { getMoveText } from '../../lib/get-condition-text';

export function KnownMove({ value }: ConditionComponentProps) {
  const move = getMoveText(value);

  if (!move) {
    return null;
  }

  return (
    <span>
      <MoveLink move={move} />
      <span className="ml-1">배운 상태에서</span>
    </span>
  );
}

export function AgileStyle({ value }: ConditionComponentProps) {
  const move = getMoveText(value);

  if (!move) {
    return null;
  }

  return (
    <span>
      <MoveLink move={move} />
      <span className="ml-1">속공으로 20번 사용</span>
    </span>
  );
}

export function StrongStyle({ value }: ConditionComponentProps) {
  const move = getMoveText(value);

  if (!move) {
    return null;
  }

  return (
    <span>
      <MoveLink move={move} />
      <span className="ml-1">강공으로 20번 사용</span>
    </span>
  );
}

export function UsedMove({ value }: ConditionComponentProps) {
  const move = getMoveText(value);

  if (!move) {
    return null;
  }

  return (
    <span>
      <MoveLink move={move} />
      <span className="ml-1">20번 사용 후</span>
    </span>
  );
}
