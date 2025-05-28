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
    modalRef,
  } = useSearch();

  const { closeSearch } = useCloseSearch();

  return (
    <div
      aria-modal
      className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-xl py-0.5 lg:shadow-lg z-20 overflow-hidden"
      onKeyDown={handleKeyDown}
      ref={modalRef}
    >
      <SearchInput onChangeInput={handleInputValue} closeSearch={closeSearch} />
      <div className="flex-1 overflow-y-auto min-h-0 mb-1">
        <div className="px-1.5 lg:px-2 py-1 border-b border-zinc-200">
          <SearchDescription
            inputValue={inputValue}
            isInputEmpty={isInputEmpty}
          />
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
    </div>
  );
}
