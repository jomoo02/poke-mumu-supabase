'use client';

import LoadingIcon from '@/app/components/icon/loading';
import SearchDescription from '../components/search-description';
import SearchInput from '../components/search-input';
import useSearch from '../hooks/useSearch';
import SearchResult from '../components/search-result';
import useCloseSearch from '../hooks/useCloseSearch';

export default function Search() {
  const {
    result,
    error,
    isLoading,
    inputValue,
    isInputEmpty,
    handleInputValue,
    handleKeyDown,
    inputRef,
  } = useSearch();

  const { closeSearch: handleCloseSearch } = useCloseSearch();

  return (
    <div
      aria-modal
      className="flex flex-col bg-white h-full border-2 border-gray-300 rounded-xl shadow-lg z-20 overflow-hidden relative"
      onKeyDown={handleKeyDown}
    >
      <SearchInput
        inputRef={inputRef}
        onChangeInput={handleInputValue}
        onClose={handleCloseSearch}
      />
      <div className="flex-1 overflow-y-auto h-full">
        <div className="px-1.5 lg:px-2 py-1 border-b border-gray-200">
          <SearchDescription inputValue={inputValue} isEmpty={isInputEmpty} />
        </div>
        {isLoading ? (
          <div className="relative top-52 lg:top-36 w-full flex items-center justify-center">
            <div className="animate-spin">
              <LoadingIcon size="1.5rem" />
            </div>
          </div>
        ) : (
          <SearchResult
            isEmptyInputText={isInputEmpty}
            result={result}
            isError={error ? true : false}
          />
        )}
      </div>
      <div className="h-6 border-gray-200 border-t bg-neutral-100" />
    </div>
  );
}
