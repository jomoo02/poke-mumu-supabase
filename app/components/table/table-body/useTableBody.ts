import { useMemo } from 'react';
import {
  useSortFn,
  useSortState,
  useTableData,
  type TableRow,
} from '../table.context';

export default function useTableBody<T extends TableRow>() {
  const { sortState } = useSortState();
  const { tableData } = useTableData();
  const { sortFn } = useSortFn();

  const sorted = useMemo(() => {
    if (!sortState) {
      return tableData as T[];
    }

    const { key, direction } = sortState;

    if (sortFn) {
      const sorted = [...(tableData as T[])].sort((a, b) => sortFn(a, b, key));

      if (direction === 'desc') {
        return [...sorted].reverse();
      }
      return [...sorted];
    }

    return [...(tableData as T[])].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return direction === 'asc'
          ? (aVal ?? '').localeCompare(bVal ?? '')
          : (bVal ?? '').localeCompare(aVal ?? '');
      }

      // 숫자 또는 boolean으로 처리 (boolean은 false: 0, true: 1로 처리됨)
      const aNum =
        typeof aVal === 'number' || typeof aVal === 'boolean'
          ? Number(aVal ?? -1)
          : -1;
      const bNum =
        typeof bVal === 'number' || typeof bVal === 'boolean'
          ? Number(bVal ?? -1)
          : -1;

      return direction === 'asc' ? aNum - bNum : bNum - aNum;
    });
  }, [tableData, sortState, sortFn]);

  return { sorted };
}
