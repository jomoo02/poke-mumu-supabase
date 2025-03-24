import SearchIcon from '@/app/components/icon/search';
import CloseIcon from '@/app/components/icon/close';

interface SearchInputProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeSearch: () => void;
}

export default function SearchInput({
  onChangeInput,
  closeSearch,
}: SearchInputProps) {
  const placeholderText = '도감 번호 또는 포켓몬 이름으로 검색';

  const handleInputTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeInput(e);

  const handleCloseOnClick = () => closeSearch();

  return (
    <div className="min-h-9 max-h-9 flex justify-center border-b border-slate-300 px-2 gap-x-0.5 items-center text-base">
      <SearchIcon size="1.45rem" />
      <input
        type="text"
        onChange={handleInputTextOnChange}
        placeholder={placeholderText}
        className="flex-1 px-2 py-1 h-8 focus:outline-none font-medium"
      />
      <button
        type="button"
        className="cursor-pointer"
        onClick={handleCloseOnClick}
        aria-label="close-input-btn"
      >
        <CloseIcon size="1.75rem" />
      </button>
    </div>
  );
}
