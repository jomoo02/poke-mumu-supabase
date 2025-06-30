import useComboboxInput from './ussComboboxInput';

interface ComboboxInputProps {
  placeholder: string;
  className?: string;
}

export default function ComboboxInput({
  placeholder,
  className,
}: ComboboxInputProps) {
  const { inputRef, inputValue, handleChange, handleKeyDown } =
    useComboboxInput();

  return (
    <div>
      <input
        ref={inputRef}
        placeholder={placeholder}
        className={className}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
