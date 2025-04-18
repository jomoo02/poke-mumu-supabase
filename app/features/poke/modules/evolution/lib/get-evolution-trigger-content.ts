import type { TriggerKey } from '../types';
import type { EvolutionCondition } from '../types/evolution';

export function getEvolutionTriggerContent(
  trigger: TriggerKey,
  conditions: EvolutionCondition[],
): string {
  if (trigger === 'level-up') {
    const hasMinLevel = conditions.some(({ key }) => key === 'min_level');
    return hasMinLevel ? '' : '레벨 업';
  }

  if (trigger === 'use-item') {
    return '사용';
  }

  if (trigger === 'trade') {
    return '통신교환';
  }

  return '';
}
