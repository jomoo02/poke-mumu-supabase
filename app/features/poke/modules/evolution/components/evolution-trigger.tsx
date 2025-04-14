import type { TriggerKey } from '../types';
import type { EvolutionCondition } from '../types/evolution';
import { getEvolutionTriggerContent } from '../lib/get-evolution-trigger-content';

interface EvolutionTriigerProps {
  trigger: TriggerKey;
  conditions: EvolutionCondition[];
}

export default function EvolutionTrigger({
  trigger,
  conditions,
}: EvolutionTriigerProps) {
  const content = getEvolutionTriggerContent(trigger, conditions);

  if (!content) {
    return null;
  }

  return <span className="text-nowrap">{content}</span>;
}
