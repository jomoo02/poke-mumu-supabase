import {
  useTriggerRef,
  useListOpen,
  useSelectedItem,
} from '../combobox.context';

export default function useComboboxTrigger() {
  const { triggerRef } = useTriggerRef();
  const { open, isOpen, close } = useListOpen();
  const { selectedItem } = useSelectedItem();
  const content = selectedItem ? selectedItem.label : '성격을 골라주세요...';

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' && !isOpen) {
      open();
    }
  };

  return {
    triggerRef,
    isOpen,
    selectedItem,
    handleMouseDown,
    handleKeyDown,
    content,
  };
}
