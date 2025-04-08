interface SpeciesTitleProps {
  pokeName: string;
}

export default function SpeciesTitle({ pokeName }: SpeciesTitleProps) {
  return (
    <h2 className="text-center text-3xl font-bold text-slate-800 my-4">
      {pokeName}
    </h2>
  );
}
