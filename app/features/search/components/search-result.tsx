import type { SearchPoke } from '../types';
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
  const noRecentSearchText = '최근 검색한 포켓몬이 없습니다';
  const noSearchResultText = '일치하는 포켓몬이 없습니다';
  const noPokeText = isEmptyInputText ? noRecentSearchText : noSearchResultText;

  if (isError) {
    return (
      <div className="px-1 lg:px-2 w-full relative top-52 lg:top-36 text-center text-zinc-900">
        에러 발생! 다시 검색해 주세요.
      </div>
    );
  }

  return (
    <>
      {result.length === 0 ? (
        <div className="px-1 lg:px-2 w-full relative top-52 lg:top-36 text-center text-zinc-900">
          {noPokeText}
        </div>
      ) : (
        <div className="divide-y divide-zinc-200 border-b border-zinc-200 z-1">
          {result.map((poke) => (
            <div key={poke.id} className="h-[75px] px-0.5">
              <SearchResultPoke poke={poke} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
