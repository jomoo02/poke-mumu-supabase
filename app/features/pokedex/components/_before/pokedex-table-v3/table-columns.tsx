import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ColumnDef } from '@/app/hooks/useTable/type';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import Button from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';
import { getHomePokeSprtieSrc } from '@/app/utils/sprite';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import PokeImage from '../poke-image';
import { PokedexPoke } from '../../types';

export const pokedexTableColumns: ColumnDef<PokedexPoke>[] = [
  {
    id: 'no',
    header: ({ column }) => (
      <Button
        className="flex justify-center w-full h-full hover:bg-accent gap-1 px-1"
        onClick={column.toggleSorting}
      >
        <span>번호</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-center">{formatPokedexNumber(row.no)}</div>
    ),
    sortable: true,
  },
  {
    id: 'name',
    header: ({ column }) => (
      <Button
        className="flex justify-between px-2 w-full h-full hover:bg-accent gap-0"
        onClick={column.toggleSorting}
      >
        <span>이름</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex gap-4 pr-1">
        <Link href={`/pokedex/${row.no}/${row.pokeKey}`}>
          <PokeImage src={getHomePokeSprtieSrc(row.sprite)} alt={row.sprite} />
        </Link>

        <div className="flex flex-col justify-center w-[6.5rem] max-w-[6.5rem] overflow-hidden">
          <div>
            <Link
              href={`/pokedex/${row.no}/${row.pokeKey}`}
              className="hover:underline text-foreground truncate font-medium"
            >
              {row.name}
            </Link>
          </div>

          {row.form && (
            <div className="text-muted-foreground truncate">{row.form}</div>
          )}
        </div>
      </div>
    ),
    sortFn: (a, b) => a.name.localeCompare(b.name),
    sortable: true,
  },
  {
    id: 'type',
    header: () => <div className="text-center">타입</div>,
    cell: ({ row }) => (
      <div className="flex flex-col justify-center items-center gap-1">
        <PokeTypeBadge type={row.type1}></PokeTypeBadge>
        {row.type2 && <PokeTypeBadge type={row.type2}></PokeTypeBadge>}
      </div>
    ),
  },
  {
    id: 'total',
    header: ({ column }) => (
      <Button
        className="flex justify-center w-full h-full px-1 gap-1 hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>종족값</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.total}</div>
    ),
    sortable: true,
  },

  {
    id: 'hp',
    header: ({ column }) => (
      <Button
        className="flex justify-between gap-1 px-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>체력</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.hp}</div>,
    sortable: true,
  },
  {
    id: 'attack',
    header: ({ column }) => (
      <Button
        className="flex justify-center gap-1 px-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>공격</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.attack}</div>,
    sortable: true,
  },
  {
    id: 'defense',
    header: ({ column }) => (
      <Button
        className="flex justify-center px-1 gap-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>방어</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.defense}</div>,
    sortable: true,
  },
  {
    id: 'special_attack',
    header: ({ column }) => (
      <Button
        className="flex justify-center px-1 gap-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>특수공격</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.special_attack}</div>,
    sortable: true,
  },
  {
    id: 'special_defense',
    header: ({ column }) => (
      <Button
        className="flex justify-center px-1 gap-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>특수방어</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.special_defense}</div>,
    sortable: true,
  },
  {
    id: 'speed',
    header: ({ column }) => (
      <Button
        className="flex justify-center px-1 gap-1 w-full h-full hover:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>스피드</span>
        <span className="size-4">
          <ChevronDown
            data-state={column.getSortedDirection() ?? 'hidden'}
            className={cn(
              'size-4 ',
              'data-[state=hidden]:hidden data-[state=desc]:rotate-180 transition-transform transform duration-400 will-change-transform',
            )}
          />
        </span>
      </Button>
    ),
    cell: ({ row }) => <div className="text-right">{row.speed}</div>,
    sortable: true,
  },
];
