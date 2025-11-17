import Button from '@/app/shared/ui/button';

function TypeSelectSkeleton() {
  return (
    <div className="flex items-center justify-centr relative mb-2">
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        타입
      </span>
      <div className="w-28 border border-border shadow-xs flex cursor-default items-center rounded-md h-8.5 px-2.5 py-1.5 text-sm outline-hidden select-none bg-accent"></div>
    </div>
  );
}

const sortByData = [
  { id: 'dexNumber', children: <>번호</> },
  { id: 'name', children: <>이름</> },
  { id: 'total', children: <>종족값</> },
  { id: 'hp', children: <>HP</> },
  { id: 'attack', children: <>공격</> },
  { id: 'defense', children: <>방어</> },
  { id: 'specialAttack', children: <>특수공격</> },
  { id: 'specialDefense', children: <>특수방어</> },
  { id: 'speed', children: <>스피드</> },
];

function SortButtonGroupSkeleton() {
  return (
    <div className="flex transition-opacity min-w-0 flex-wrap gap-2 relative my-2">
      <span className="absolute -top-5 left-0.5 font-medium z-20 text-xs bg-background text-muted-foreground">
        정렬
      </span>
      {sortByData.map((d) => (
        <Button
          key={d.id}
          className="border bg-accent border-border rounded-lg px-2 py-1.5 flex items-center text-sm shadow-sm gap-1"
        >
          <span className="text-nowrap text-accent">{d.children}</span>
          <div className="size-4"></div>
        </Button>
      ))}
    </div>
  );
}

export default function Skeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse opacity-70">
      <TypeSelectSkeleton />
      <SortButtonGroupSkeleton />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
        {Array.from({ length: 101 }, (_, i) => i).map((idx) => (
          <div
            key={idx}
            className="bg-accent border border-border rounded-xl shadow-sm p-4 h-42"
          />
        ))}
      </div>
    </div>
  );
}
