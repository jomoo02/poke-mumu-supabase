import type { EvolutionCondition } from '../../types/evolution';

interface TriggerProps {
  trigger: string;
  conditions: EvolutionCondition[];
}

const getEvolutionTriggerContent = (
  trigger: string,
  conditions: EvolutionCondition[],
): string => {
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
};

export default function Trigger({ trigger, conditions }: TriggerProps) {
  const content = getEvolutionTriggerContent(trigger, conditions);

  if (!content) {
    return null;
  }

  return <span className="text-nowrap">{content}</span>;
}
