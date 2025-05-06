import { useTriggerRef, useSelectOpen } from './select.context';

export default function useTrigger() {
  const { triggerRef } = useTriggerRef();
  const { onOpen, isOpen, onClose } = useSelectOpen();

  const handleOnClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return {
    triggerRef,
    handleOnClick,
  };
}
