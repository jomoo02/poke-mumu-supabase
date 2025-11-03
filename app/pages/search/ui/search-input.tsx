import { SearchIcon, XIcon } from 'lucide-react';

interface SearchInputProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  inputRef: React.ForwardedRef<HTMLInputElement>;
}

export default function SearchInput({
  onChangeInput,
  onClose,
  inputRef,
}: SearchInputProps) {
  const placeholderText = '도감 번호 또는 포켓몬 이름으로 검색';

  return (
    <div className="px-3 py-2 border-b border-gray-200">
      <div className=" flex rounded-lg justify-center items-center gap-x-0.5 px-2 bg-neutral-100 min-h-9.5 h-9.5 max-h-9.5">
        <SearchIcon className="size-4" />
        <input
          type="text"
          ref={inputRef}
          onChange={onChangeInput}
          placeholder={placeholderText}
          inputMode="search"
          className="flex-1 px-2 py-1 h-8 focus:outline-none text-slate-800"
        />
        <button
          type="button"
          className="cursor-pointer outline-gray-600"
          onClick={onClose}
          aria-label="close-input-btn"
        >
          <XIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
