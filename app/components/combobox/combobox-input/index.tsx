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
    <div className="border-b border-gray-300 px-2 py-1 flex items-center min-h-8 h-8">
      <div className="scale-[0.9375] origin-top-left w-full">
        <input
          ref={inputRef}
          name="combobox-input"
          placeholder={placeholder}
          className={`${className} w-full text-slate-800`}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
