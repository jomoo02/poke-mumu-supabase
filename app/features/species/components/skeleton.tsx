function NavButton() {
  return (
    <div className="w-[100px] sm:w-[120px] p-1 sm:p-2">
      <div className="w-full h-7.5 bg-neutral-100 rounded-lg" />
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
        <div className="flex w-full h-8 items-center">
          <div className="w-16 h-6 bg-neutral-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
