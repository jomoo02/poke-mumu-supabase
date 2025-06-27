import { useState, useEffect, type FocusEvent } from 'react';
import { useListOpen, useContainerRef } from '../combobox.context';

export default function useContentBlur() {
  const { containerRef } = useContainerRef();
  const { close, isOpen } = useListOpen();
  const [openAt, setOpenAt] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setOpenAt(Date.now());
    }
  }, [isOpen]);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (Date.now() - openAt < 300) {
      return;
    }

    const relatedTarget = e.relatedTarget as HTMLElement | null;
    const container = containerRef.current;

    if (!relatedTarget || !container?.contains(relatedTarget)) {
      close();
    }
  };

  return { handleBlur };
}
