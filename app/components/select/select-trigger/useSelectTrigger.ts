import {
  useTriggerRef,
  useSelectOpen,
  useSelectedValue,
} from '../select.context';

export default function useSelectTrigger() {
  const { triggerRef } = useTriggerRef();
  const { onOpen, isOpen, onClose } = useSelectOpen();
  const { selectedValue, selectedContent } = useSelectedValue();

  const triggerContent = selectedContent ?? 'select';

  const handleOnMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' && !isOpen) {
      onOpen();
    }
  };

  return {
    isOpen,
    triggerRef,
    selectedValue,
    handleOnMouseDown,
    handleOnKeyDown,
    triggerContent,
  };
}
