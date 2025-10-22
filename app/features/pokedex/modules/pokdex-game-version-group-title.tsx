import Title from '../components/title';

interface PokedexGameVersionGroupTitleProps {
  versionGroup: string;
}

export default function PokedexGameVersionGroupTitle({
  versionGroup,
}: PokedexGameVersionGroupTitleProps) {
  return (
    <Title
      title="적 · 녹 · 청 & 피카츄 도감"
      content="적 녹 청 피카츄 버전의 도감"
    />
    // <div>
    //   <h1 className="scroll-m-20 text-3xl font-bold text-foreground">
    //     적 · 녹 · 청 & 피카츄 도감
    //   </h1>
    //   <div className="text-foreground my-6">적 녹 청 피카츄 버전의 도감</div>
    // </div>
  );
}
