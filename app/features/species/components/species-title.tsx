interface SpeciesTitleProps {
  pokeName: string;
}

export default function SpeciesTitle({ pokeName }: SpeciesTitleProps) {
  return (
    <h1 className="text-center my-4 text-slate-800 text-3xl font-bold">
      {pokeName}
    </h1>
  );
}
