interface SpeciesTitleProps {
  pokeName: string;
  no: number;
}

export default function SpeciesTitle({ pokeName }: SpeciesTitleProps) {
  return (
    <h1 className="text-center mt-20 mb-12 text-slate-900 text-3xl font-bold">
      {pokeName}
    </h1>
  );
}
