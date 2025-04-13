import { getParticle } from '@/app/utils/word-particle';
import ItemLink from './item-link';

interface ItemLinkWithParticleProps {
  item: string;
}

export default function ItemLinkWithParticle({
  item,
}: ItemLinkWithParticleProps) {
  const particle = getParticle(item);

  return <ItemLink item={item}>{particle && <span>{particle}</span>}</ItemLink>;
}
