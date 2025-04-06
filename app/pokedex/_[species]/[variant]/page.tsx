export default async function VariantPage({
  params,
}: {
  params: Promise<{ species: string; variant: string }>;
}) {
  const { species, variant } = await params;

  return (
    <div>
      {species} - {variant}
    </div>
  );
}
