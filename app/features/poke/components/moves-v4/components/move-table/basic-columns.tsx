import { ChevronDown } from 'lucide-react';
import { ColumnDef } from '@/app/hooks/useTable/type';
import Button from '@/app/components/ui/button';
import { cn } from '@/app/lib/utils';
import PokeTypeBadge from '@/app/components/badge/poke-type';
import DamageClassBadge from '@/app/components/badge/damage-class';
import { Move } from '../../types/move';

const safeStr = (s?: string) => s ?? '';

export const basicColumns: ColumnDef<Move>[] = [
  {
    id: 'name',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>기술</span>
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
    cell: ({ row }) => <div className="px-2 min-w-24">{row.name}</div>,
    sortable: true,
    sortFn: (a, b) => safeStr(a.name).localeCompare(safeStr(b.name)),
  },
  {
    id: 'type',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>타입</span>
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
      <div className="flex justify-center">
        <PokeTypeBadge type={row.type} />
      </div>
    ),
    sortable: true,
    sortFn: (a, b) => safeStr(a.type).localeCompare(safeStr(b.type)),
  },
  {
    id: 'damageClass',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>분류</span>
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
      <div className="flex justify-center">
        <DamageClassBadge damageClass={row.damageClass} />
      </div>
    ),
    sortable: true,
    sortFn: (a, b) =>
      safeStr(a.damageClass).localeCompare(safeStr(b.damageClass)),
  },
  {
    id: 'power',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>위력</span>
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
    cell: ({ row }) => <div className="text-right">{row.power || '—'}</div>,
    sortable: true,
    sortFn: (a, b) => (a.power ?? -1) - (b.power ?? -1),
  },
  {
    id: 'accuracy',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>명중률</span>
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
    cell: ({ row }) => <div className="text-right">{row.accuracy || '—'}</div>,
    sortable: true,
    sortFn: (a, b) => (a.accuracy ?? -1) - (b.accuracy ?? -1),
  },
  {
    id: 'pp',
    header: ({ column }) => (
      <Button
        className="flex justify-between w-full h-full hover:bg-accent px-2 active:bg-accent"
        onClick={column.toggleSorting}
      >
        <span>PP</span>
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
    cell: ({ row }) => <div className="text-right">{row.pp || '—'}</div>,
    sortable: true,
    sortFn: (a, b) => (a.pp ?? -1) - (b.pp ?? -1),
  },
];
