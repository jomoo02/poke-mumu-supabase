import ItemLink from '@/app/components/link/item/item-link';
import ItemLinkWithParticle from '@/app/components/link/item/item-link-with-particle';
import type { ConditionComponentProps } from '../../types';
import { getItemText } from '../../lib/get-condition-text';

export function HeldItem({ value }: ConditionComponentProps) {
  const item = getItemText(value);

  if (!item) {
    return null;
  }

  return (
    <>
      <ItemLinkWithParticle item={item} />
      <span className="ml-1">지닌채</span>
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
