import type {
  ConditionComponent,
  ConditionValue,
  ConditionKey,
} from '../../types';
import Gender from './gender';

const conditionKeyMap: Partial<Record<ConditionKey, ConditionComponent>> = {
  gender: Gender,
};

interface ConditionProps {
  conditionKey: ConditionKey;
  value: ConditionValue;
}

export default function Condition({ conditionKey, value }: ConditionProps) {
  const Component = conditionKeyMap[conditionKey];

  if (!Component) {
    return null;
  }

  return <Component value={value} />;
}
