type PokeMuMuLogoProps = {
  className?: string;
};

export default function Logo({
  className = 'w-36 h-11', // 기본값: width: 11rem (176px), height: 3rem (48px)
}: PokeMuMuLogoProps) {
  return <div className={className}>POKE MUMU</div>;
}
