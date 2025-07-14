function NavButton() {
  return (
    <div className="w-[100px] sm:w-[130px]">
      <div className="w-full h-10 bg-neutral-100 rounded-lg" />
    </div>
  );
}

export default function SpeciesLayoutSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center">
        <NavButton />
        <NavButton />
      </div>
      <div className="mt-20 mb-12 h-9 w-full flex justify-center">
        <div className="bg-neutral-100 w-[100px] rounded-lg h-full" />
      </div>

      <div className="flex border-b border-gray-200 relative">
        <div className="flex min-h-10 w-full items-center">
          <div className="w-16 h-7 bg-neutral-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
