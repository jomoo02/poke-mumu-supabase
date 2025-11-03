import type { SearchPoke } from '../model';
import SearchResultPoke from './search-result-poke';

interface SearchResultProps {
  isEmptyInputText: boolean;
  result: SearchPoke[];
  isError: boolean;
}

export default function SearchResult({
  isEmptyInputText,
  result,
  isError,
}: SearchResultProps) {
  const errorText = '에러 발생! 다시 검색해 주세요';
  const noRecentSearchText = '최근 검색한 포켓몬이 없습니다';
  const noSearchResultText = '일치하는 포켓몬이 없습니다';
  const noPokeText = isEmptyInputText ? noRecentSearchText : noSearchResultText;

  if (isError) {
    return (
      <div className="px-1 lg:px-2 w-full relative top-52 lg:top-36 text-center text-slate-800">
        {errorText}
      </div>
    );
  }

  return (
    <>
      {result.length === 0 ? (
        <div className="px-1 lg:px-2 w-full relative top-52 lg:top-36 text-center text-slate-800">
          {noPokeText}
        </div>
      ) : (
        <div className=" divide-y divide-gray-200 z-1 border-b border-gray-200 mb-2.5">
          {result.map((poke) => (
            <div key={poke.id} className="h-[75px]">
              <SearchResultPoke poke={poke} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
