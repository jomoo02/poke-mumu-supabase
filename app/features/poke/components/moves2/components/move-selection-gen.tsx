// import {
//   OptionBar,
//   OptionBarItem,
//   OptionBarContent,
// } from '@/app/components/option-bar';
import {
  OptionBar,
  OptionBarContent,
  OptionBarItem,
} from '@/app/components/option-bar';

interface MoveSelectionGenProps {
  gens: string[];
  targetGen: string;
  onSelect: (gen: string) => void;
}

export default function MoveSelectGen({
  gens,
  targetGen,
  onSelect,
}: MoveSelectionGenProps) {
  const handleGenSelect = (gen: string) => {
    onSelect(gen);
  };

  return (
    <div className="flex">
      <OptionBar
        initialValue={String(targetGen)}
        onValueSelect={handleGenSelect}
      >
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
