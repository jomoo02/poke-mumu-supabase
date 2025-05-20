import { Fragment } from 'react';
import type { EvolutionCondition } from '../../types/evolution';
import Condition from './condition';

interface ConditionListProps {
  conditions: EvolutionCondition[];
}

export default function ConditionList({ conditions }: ConditionListProps) {
  const sortedConditions = conditions;

  return (
    <>
      {sortedConditions.map(({ key, value }, index) => (
        <Fragment key={key}>
          {index > 0 && <span className="px-px">+</span>}
          <Condition conditionKey={key} value={value} />
        </Fragment>
      ))}
    </>
  );
}
