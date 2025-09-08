import {
  OptionBar,
  OptionBarContent,
  OptionBarItem,
} from '@/app/components/option-bar';

interface SelectGenProps {
  gens: string[];
  selectedGen: string;
  onSelect: (gen: string) => void;
}

export default function SelectGen({
  gens,
  selectedGen,
  onSelect,
}: SelectGenProps) {
  const handleGenSelect = (gen: string) => {
    onSelect(gen);
  };

  return (
    <div className="flex">
      <OptionBar initialValue={selectedGen} onValueSelect={handleGenSelect}>
        <OptionBarContent>
          {gens.map((gen) => (
            <OptionBarItem key={gen} value={gen}>
              {gen}th
            </OptionBarItem>
          ))}
        </OptionBarContent>
      </OptionBar>
    </div>
  );
}
