import type { ConditionComponentProps } from '../../types';
import {
  getLevelText,
  getGenderText,
  getAffectionText,
  getBeautyText,
  getHappinessText,
} from '../../lib/get-condition-text';

export function Level({ value }: ConditionComponentProps) {
  const text = getLevelText(value);

  if (!text) {
    return null;
  }
  return <span>{text}</span>;
}

export function Gender({ value }: ConditionComponentProps) {
  const gender = getGenderText(value);

  if (!gender) {
    return null;
  }

  return <span>{gender}</span>;
}

export function Affection({ value }: ConditionComponentProps) {
  const text = getAffectionText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}

export function Beauty({ value }: ConditionComponentProps) {
  const text = getBeautyText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}

export default function Happiness({ value }: ConditionComponentProps) {
  const text = getHappinessText(value);

  if (!text) {
    return null;
  }

  return <span>{text}</span>;
}
