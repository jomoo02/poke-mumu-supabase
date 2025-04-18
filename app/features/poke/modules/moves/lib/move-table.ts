import type { MoveMethod } from '../types';

export function getMoveTableTitle(
  method: MoveMethod,
  machineType?: 'TM' | 'HM' | 'TR',
) {
  const moveMethodTitle: Record<string, string> = {
    'level-up': '레벌 업으로 익히는 기술',
    egg: '교배를 통해 유전 받을 수 있는 기술',
    tutor: 'NPC로부터 배울 수 있는 기술',
    reminder: '떠올리기로 익히는 기술',
    pre: '이전 진화에서만 얻을 수 있는 기술',
    hm: '기술머신 HM으로 익히는 기술',
    tm: '기술머신 TM으로 익히는 기술',
    tr: '기술머신 TR로 익히는 기술',
    default: '기술',
  } as const;

  if (method === 'machine' && machineType) {
    return (
      moveMethodTitle[machineType.toLowerCase()] || moveMethodTitle.default
    );
  }

  return moveMethodTitle[method] || moveMethodTitle.default;
}

// export function getTableHeaderItemList(method: MoveMethod) {
//   if (method)
// }
