import { useRouter } from 'next/navigation';
import { useEffect, useCallback } from 'react';

export default function useCloseSearch() {
  const router = useRouter();

  const closeSearch = useCallback(() => router.back(), [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.isComposing) {
        return;
      }

      if (e.key === 'Escape') {
        closeSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeSearch]);

  return { closeSearch };
}
