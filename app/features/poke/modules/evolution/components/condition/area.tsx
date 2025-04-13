import type { ConditionComponentProps } from '../../types';
import {
  getLocationText,
  getRegionText,
  getNeedsOverworldRainText,
} from '../../lib/get-condition-text';

export function Location({ value }: ConditionComponentProps) {
  const location = getLocationText(value);

  if (!location) {
    return <span>특정 장소에서</span>;
  }

  return <span>{`${location}에서`}</span>;
}

export function Region({ value }: ConditionComponentProps) {
  const region = getRegionText(value);

  if (!region) {
    return <span>특정 지방에서</span>;
  }
  return <span>{region}</span>;
}

export function NeedsOverworldRain({ value }: ConditionComponentProps) {
  const text = getNeedsOverworldRainText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
