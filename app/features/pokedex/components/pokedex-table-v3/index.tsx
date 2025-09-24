'use client';

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import useTable from '@/app/hooks/useTable';
import { PokedexPoke } from '../../types';
import { pokedexTableColumns } from './table-columns';
import { cn } from '@/app/lib/utils';
import { useState } from 'react';

interface PokedexTableProps {
  pokes: PokedexPoke[];
}

export default function PokedexTableV3({ pokes }: PokedexTableProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const table = useTable({
    data: pokes,
    columns: pokedexTableColumns,
    sorting: { id: 'no', isDesc: false },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent h-11 border-border">
          {table.getVisibleColumns().map((header) => (
            <TableHead key={header.id} className="py-1">
              {header.render()}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.rows.map((row) => (
          <TableRow
            key={row.id}
            className={cn(
              'h-20',
              activeIndex === row.id
                ? 'bg-muted hover:bg-muted'
                : 'bg-transparent',
              'border-border',
            )}
            onClick={() => {
              if (activeIndex === row.id) {
                setActiveIndex(-1);
              } else {
                setActiveIndex(row.id);
              }
            }}
          >
            {table.getVisibleColumns().map((col) => (
              <TableCell key={col.id}>{col.cell({ row })}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
