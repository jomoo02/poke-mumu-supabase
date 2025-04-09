import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useCloseSearch() {
  const router = useRouter();

  const closeSearch = () => router.back();

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
  }, []);

  return { closeSearch };
}
