import VariantButton from './components/variant-button';
import { fetchVariantPokeList } from './lib/poke';

interface PokeVariantProps {
  ndex: number;
}

export default async function PokeVariant({ ndex }: PokeVariantProps) {
  const variantPokeList = await fetchVariantPokeList(ndex);

  if (!variantPokeList) {
    return null;
  }

  return (
    <div className="my-4 flex gap-x-2">
      {variantPokeList.map(({ name_ko, form, poke_key }) => (
        <VariantButton
          key={poke_key}
          ndex={ndex}
          name={name_ko}
          formText={form}
          form={poke_key}
        />
      ))}
    </div>
  );
}
