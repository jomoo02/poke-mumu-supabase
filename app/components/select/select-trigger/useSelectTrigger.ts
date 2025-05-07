import { useEffect, useRef, useState } from 'react';
import { useTriggerRef, useSelectOpen } from '../select.context';

export default function useSelectTrigger() {
  const { triggerRef } = useTriggerRef();
  const { onOpen, isOpen, onClose } = useSelectOpen();

  const [shouldShowFocusRing, setShouldShowFocusRing] = useState(true);
  const prevIsOpenRef = useRef<boolean>(isOpen);

  const handleOnClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleOnMouseDown = () => {
    setShouldShowFocusRing(false);
  };

  useEffect(() => {
    const wasOpen = prevIsOpenRef.current;
    const isNowClosed = !isOpen;

    if (wasOpen && isNowClosed) {
      setShouldShowFocusRing(true);

      requestAnimationFrame(() => {
        triggerRef.current?.focus({ preventScroll: true });
      });
    }

    prevIsOpenRef.current = isOpen;
  }, [isOpen, triggerRef]);

  return {
    isOpen,
    triggerRef,
    shouldShowFocusRing,
    handleOnClick,
    handleOnMouseDown,
  };
}
