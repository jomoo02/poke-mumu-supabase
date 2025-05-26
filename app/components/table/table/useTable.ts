import { useEffect, useState } from 'react';
import type { SortState } from '../table.context';

export default function useTable(
  initialHeaderKey: string | undefined,
  resetTrigger: string | undefined,
) {
  const [sortState, setSortState] = useState<SortState | null>(
    initialHeaderKey ? { key: initialHeaderKey, direction: 'asc' } : null,
  );

  const [targetHeaderKey, setTargetHeaderKey] = useState<string>('');

  useEffect(() => {
    setSortState(
      initialHeaderKey ? { key: initialHeaderKey, direction: 'asc' } : null,
    );
    setTargetHeaderKey('');
  }, [resetTrigger, initialHeaderKey]);

  return {
    sortState,
    setSortState,
    targetHeaderKey,
    setTargetHeaderKey,
  };
}
