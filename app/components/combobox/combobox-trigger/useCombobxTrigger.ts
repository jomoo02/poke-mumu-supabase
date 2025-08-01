import {
  useTriggerRef,
  useListOpen,
  useSelectedItem,
  //,
  useInputRef,
} from '../combobox.context';

export default function useComboboxTrigger(defaultLabel: string) {
  const { triggerRef } = useTriggerRef();
  const { open, isOpen, close } = useListOpen();
  const { selectedItem } = useSelectedItem();
  const content = selectedItem ? selectedItem.label : defaultLabel;

  //
  const { inputRef } = useInputRef();

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isOpen) {
      close();
    } else {
      open();

      inputRef.current?.focus({ preventScroll: true });
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
