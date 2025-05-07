import { useTriggerRef, useSelectOpen } from '../select.context';

export default function useSelectTrigger() {
  const { triggerRef } = useTriggerRef();
  const { onOpen, isOpen, onClose } = useSelectOpen();

  const handleOnMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === 'Enter' && !isOpen) {
      onOpen();
    }
  };
  return {
    isOpen,
    triggerRef,
    handleOnMouseDown,
    handleOnKeyDown,
  };
}
