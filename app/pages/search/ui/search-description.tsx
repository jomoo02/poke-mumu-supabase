import { getDirectionalParticle } from '@/app/shared/lib';

import { checkTextIntergerType } from '../lib';

interface InputValue {
  inputValue: string;
}

interface SearchDescriptionProps extends InputValue {
  isEmpty: boolean;
}

function EmptyCase() {
  return <span className="text-foreground">최근 검색한 포켓몬</span>;
}

function PokedexNumberCase({ inputValue }: InputValue) {
  return (
    <>
      <span className=" text-foreground">도감 번호</span>
      <span className="underline mx-1  text-foreground underline-offset-2 decoration-foreground">
        {inputValue}
      </span>
      <span className=" text-foreground">포켓몬</span>
    </>
  );
}

function PokeNameCase({ inputValue }: InputValue) {
  return (
    <>
      <span className="underline text-foreground  underline-offset-2 decoration-foreground">
        {inputValue}
      </span>
      <span className="text-foreground ">{`${getDirectionalParticle(inputValue) || '(으)로'} 검색한 포켓몬`}</span>
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
