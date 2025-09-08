import { useSortState } from '../table.context';

export default function useTableHeaderCell(
  headerKey: string,
  sortAble: boolean,
) {
  const { sortState, setSortState } = useSortState();

  const isSorted = sortState?.key === headerKey;
  const direction = isSorted ? sortState?.direction : null;
  const ariaSort: 'ascending' | 'descending' | 'none' = isSorted
    ? direction === 'asc'
      ? 'ascending'
      : 'descending'
    : 'none';

  const handleOnClick = () => {
    if (!sortAble || !headerKey) {
      return;
    }

    const nextDirection = direction === 'asc' ? 'desc' : 'asc';

    setSortState({ key: headerKey, direction: nextDirection });
  };

  return {
    isSorted,
    direction,
    ariaSort,
    handleOnClick,
  };
}
