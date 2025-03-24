import {
  isIntegerInputText,
  getPokeNameDirectionParticle,
} from '../utils/search-description';

interface SearchDescriptionProps {
  inputValue: string;
  isInputEmpty: boolean;
}

export default function SearchDescription({
  inputValue,
  isInputEmpty,
}: SearchDescriptionProps) {
  if (isInputEmpty) {
    return <span className="text-slate-600">최근 검색한 포켓몬</span>;
  }

  const isInterger = isIntegerInputText(inputValue);

  if (isInterger) {
    return (
      <>
        <span className="text-slate-600">도감 번호</span>
        <span className="underline mx-1 text-slate-800">{inputValue}</span>
        <span className="text-slate-600">포켓몬</span>
      </>
    );
  }

  const directionParticle = getPokeNameDirectionParticle(inputValue);

  return (
    <>
      <span className="underline text-slate-800">{inputValue}</span>
      <span className="text-slate-600">{`${directionParticle} 검색한 포켓몬`}</span>
    </>
  );
}
