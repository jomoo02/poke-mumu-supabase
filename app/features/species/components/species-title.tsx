interface SpeciesTitleProps {
  pokeName: string;
}

export default function SpeciesTitle({ pokeName }: SpeciesTitleProps) {
  return <h2 className="text-center my-4">{pokeName}</h2>;
}
