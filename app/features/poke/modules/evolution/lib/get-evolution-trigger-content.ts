import type { TriggerKey } from '../types';
import type { EvolutionCondition } from '../types/evolution';

export function getEvolutionTriggerContent(
  trigger: TriggerKey,
  conditions: EvolutionCondition[],
) {
  const triggerContent = (() => {
    if (
      trigger === 'level-up' &&
      !conditions.find(({ key }) => key === 'min_level')
    ) {
      return '레벨 업';
    }
    if (trigger === 'use-item') {
      return '사용';
    }
    if (trigger === 'trade') {
      return '통신교환';
    }
    return '';
  })();

  return triggerContent;
}
