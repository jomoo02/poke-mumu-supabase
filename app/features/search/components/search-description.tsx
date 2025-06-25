import { checkTextIntergerType } from '@/app/utils/check-type';
import { getDirectionalParticle } from '@/app/utils/word-particle';

interface InputValue {
  inputValue: string;
}

interface SearchDescriptionProps extends InputValue {
  isEmpty: boolean;
}

function EmptyCase() {
  return <span className="text-slate-700 text-[15px]">최근 검색한 포켓몬</span>;
}

function PokedexNumberCase({ inputValue }: InputValue) {
  return (
    <>
      <span className="text-[15px] text-slate-700">도감 번호</span>
      <span className="underline mx-1 text-[15px] text-slate-800 underline-offset-2 decoration-slate-900">
        {inputValue}
      </span>
      <span className="text-[15px] text-slate-700">포켓몬</span>
    </>
  );
}

function PokeNameCase({ inputValue }: InputValue) {
  return (
    <>
      <span className="underline text-slate-800 text-[15px] underline-offset-2 decoration-slate-800">
        {inputValue}
      </span>
      <span className="text-slate-700 text-[15px]">{`${getDirectionalParticle(inputValue) || '(으)로'} 검색한 포켓몬`}</span>
    </>
  );
}

export default function SearchDescription({
  inputValue,
  isEmpty,
}: SearchDescriptionProps) {
  if (isEmpty) {
    return <EmptyCase />;
  }

  if (checkTextIntergerType(inputValue)) {
    return <PokedexNumberCase inputValue={inputValue} />;
  }

  return <PokeNameCase inputValue={inputValue} />;
}
