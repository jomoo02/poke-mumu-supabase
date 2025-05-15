interface GenListProps {
  gens: number[];
  targetGen: number;
  setTargetGen: (gen: number) => void;
}

export default function GenList({
  gens,
  targetGen,
  setTargetGen,
}: GenListProps) {
  const genList = gens.map((gen) => {
    return {
      gen,
      isActive: targetGen === gen,
    };
  });

  const handleGenClick = (gen: number) => {
    setTargetGen(gen);
  };

  return (
    <div className="flex gap-x-3 gap-y-2 items-center py-2 overflow-auto scroll-smooth">
      {genList.map(({ gen, isActive }) => {
        return (
          <button
            key={gen}
            type="button"
            onClick={() => handleGenClick(gen)}
            className={`flex border-2 border-slate-500 items-center justify-center hover:cursor-pointer rounded-md px-2 py-1 h-[30px] w-10 min-w-10 flex-shrink-0 md:min-w-11 md:max-w-11 transition-colors duration-200 ${
              isActive
                ? 'bg-slate-700 border-slate-700'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            <span
              className={`font-semibold c-text-sm ${
                isActive ? 'text-white' : ''
              }`}
            >
              {gen}
            </span>
            <span
              className={`font-semibold c-text-sm ${
                isActive ? 'text-white' : ''
              }`}
            >
              th
            </span>
          </button>
        );
      })}
    </div>
  );
}
