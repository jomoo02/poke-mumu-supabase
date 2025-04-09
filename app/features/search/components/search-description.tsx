import { checkTextIntergerType } from '@/app/utils/check-type';
import { getDirectionalParticle } from '@/app/utils/word-particle';

interface SearchDescriptionProps {
  inputValue: string;
  isInputEmpty: boolean;
}

export default function SearchDescription({
  inputValue,
  isInputEmpty,
}: SearchDescriptionProps) {
  if (isInputEmpty) {
    return (
      <span className="c-text-base text-slate-600">최근 검색한 포켓몬</span>
    );
  }

  if (checkTextIntergerType(inputValue)) {
    return (
      <>
        <span className="c-text-base text-slate-600">도감 번호</span>
        <span className="underline mx-1 c-text-base text-slate-800">
          {inputValue}
        </span>
        <span className="c-text-base text-slate-600">포켓몬</span>
      </>
    );
  }
  const directionParticle = !inputValue
    ? ''
    : getDirectionalParticle(inputValue) || '(으)로';

  return (
    <>
      <span className="underline c-text-base text-slate-800">{inputValue}</span>
      <span className="c-text-base text-slate-600">{`${directionParticle} 검색한 포켓몬`}</span>
    </>
  );
}
