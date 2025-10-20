import Link from 'next/link';
import React from 'react';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import PokeTypeIcon from '@/app/components/poke-type/icon';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import type { PokedexPoke } from '../types';
import PokeImage from './poke-image';
import { cn } from '@/app/lib/utils';

interface PokeCardProps {
  poke: PokedexPoke;
}

function StatItem({ content, value }: { content: string; value: number }) {
  return (
    <div className="grid grid-cols-2">
      <div className="text-sm text-muted-foreground text-right">{content}</div>
      <div className="text-sm text-center">{value}</div>
    </div>
  );
}

// ✅ 변경 시작
const PokeCard = React.memo(
  function PokeCard({ poke }: PokeCardProps) {
    return (
      <div
        className={cn(
          'relative  rounded-xl py-2 transition hover:-translate-y-0.5 shadow-sm hover:shadow-md',
        )}
      >
        {/* 내부 링크 - 카드 전체 클릭 영역 */}
        <Link
          href={`/pokedex/${poke.no}/${poke.pokeKey}`}
          className={cn(
            'absolute inset-0 z-10',
            'outline-none focus-visible:border-ring border border-border rounded-xl focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'active:bg-accent/50',
          )}
          aria-label={`${poke.name} 상세 페이지로 이동`}
        />

        <div className="grid grid-cols-4 py-1 w-full items-center relative z-0">
          <div className="flex justify-center">
            <PokeImage
              src={getHomePokeSprtieSrc(poke.sprite)}
              alt={poke.name}
            />
          </div>

          <div className="flex items-center">
            <div className="overflow-hidden min-w-0 truncate flex-1 h-full flex flex-col">
              <div className="text-muted-foreground text-sm">
                No.{formatPokedexNumber(poke.no)}
              </div>
              <div className="text-foreground min-w-0 truncate text-sm">
                {poke.name}
              </div>
              <div className="text-muted-foreground text-xs truncate min-w-0">
                {poke.form}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-center">
            <PokeTypeIcon type={poke.type1} size={26} isVisibleContent />
            {poke.type2 && (
              <PokeTypeIcon size={26} type={poke.type2} isVisibleContent />
            )}
          </div>

          <div className="flex flex-col items-center">
            <div className="text-sm text-muted-foreground">총합</div>
            <div className="text-sm">{poke.total}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 pb-1 pt-2 relative z-0">
          <StatItem content="HP" value={poke.hp} />
          <StatItem content="공격" value={poke.attack} />
          <StatItem content="방어" value={poke.defense} />
          <StatItem content="특수공격" value={poke.specialAttack} />
          <StatItem content="특수방어" value={poke.specialDefense} />
          <StatItem content="스피드" value={poke.speed} />
        </div>
      </div>
    );
  },
  (prev, next) =>
    prev.poke.no === next.poke.no && prev.poke.pokeKey === next.poke.pokeKey,
);
// ✅ 변경 끝

export default PokeCard;
