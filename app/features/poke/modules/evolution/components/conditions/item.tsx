import ItemLink from '@/app/components/link/item/item-link';
import ItemLinkWithParticle from '@/app/components/link/item/item-link-with-particle';
import type { ConditionComponentProps } from '../../types';
import { getItemText, getSpinText } from '../../lib/get-condition-text';

export function HeldItem({ value }: ConditionComponentProps) {
  const item = getItemText(value);

  if (!item) {
    return null;
  }

  return (
    <>
      <ItemLinkWithParticle item={item} />
      지닌채
    </>
  );
}

export function UseItem({ value }: ConditionComponentProps) {
  const item = getItemText(value);

  if (!item) {
    return null;
  }

  return <ItemLink item={item} />;
}

export function Spin({ value }: ConditionComponentProps) {
  const text = getSpinText(value);
  const item = getItemText(value);

  if (!text || !item) {
    return null;
  }

  return (
    <>
      <ItemLinkWithParticle item={item} />
      <span className="ml-1">{text}</span>
    </>
  );
}
