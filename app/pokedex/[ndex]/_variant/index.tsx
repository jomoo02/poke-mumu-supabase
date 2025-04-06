import VariantButton from './components/variant-button';
import { fetchVariantPokeList } from './lib/poke';

interface PokeVariantProps {
  species: string;
}

export default async function PokeVariant({ species }: PokeVariantProps) {
  const variantPokeList = await fetchVariantPokeList(species);

  if (!variantPokeList) {
    return null;
  }

  return (
    <div className="my-4 flex gap-x-2">
      {variantPokeList.map(({ name_ko, form, poke_key }) => (
        <VariantButton
          key={poke_key}
          name={name_ko}
          form={form}
          variant={poke_key}
          species={species}
        />
      ))}
    </div>
  );
}
