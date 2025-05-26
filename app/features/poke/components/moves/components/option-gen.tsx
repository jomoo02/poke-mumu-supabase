import {
  OptionBar,
  OptionBarItem,
  OptionBarContent,
} from '@/app/components/option-bar';

interface OptionGenProps {
  gens: number[];
  targetGen: number;
  handleTargetGen: (gen: number) => void;
}

export default function OptionGen({
  gens,
  targetGen,
  handleTargetGen,
}: OptionGenProps) {
  const genStrigList = gens.map((gen) => String(gen));

  const handleOnSelect = (gen: string) => {
    handleTargetGen(Number(gen));
  };

  return (
    <OptionBar
      initialValue={String(targetGen)}
      onSelect={handleOnSelect}
      layoutId="gen-indicator"
    >
      <OptionBarContent>
        {genStrigList.map((gen) => (
          <OptionBarItem key={gen} value={gen}>
            {gen}th
          </OptionBarItem>
        ))}
      </OptionBarContent>
    </OptionBar>
  );
}
