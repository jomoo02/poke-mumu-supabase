import useOptionBar from './useOptionBar';
import { OptionBarProvider } from '../option-bar.context';

interface OptionBarProps {
  initialValue?: string;
  onValueSelect?: (value: string) => void;
  children: React.ReactNode;
}

export default function OptionBar({
  initialValue,
  onValueSelect,
  children,
}: OptionBarProps) {
  const {
    selectedValue,
    handleValueSelect,
    registerOption,
    optionValues,
    optionValueRefMap,
    contentRef,
  } = useOptionBar(initialValue, onValueSelect);

  return (
    <OptionBarProvider
      selectedValue={selectedValue}
      onValueSelect={handleValueSelect}
      registerOption={registerOption}
      optionValues={optionValues}
      optionValueRefMap={optionValueRefMap}
      contentRef={contentRef}
    >
      {children}
    </OptionBarProvider>
  );
}
