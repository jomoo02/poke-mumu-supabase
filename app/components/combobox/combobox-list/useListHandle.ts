import {
  useListOpen,
  useActiveIndex,
  useItems,
  useOnSelect,
} from '../combobox.context';

export function useHandleKeyDown() {
  const { isOpen, close } = useListOpen();
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { items, itemCount } = useItems();
  const { onSelect } = useOnSelect();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev: number) => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev: number) => (prev - 1 + itemCount) % itemCount);
        break;
      case 'Enter':
        e.preventDefault();
        const value = items[activeIndex];
        onSelect(value);
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tap':
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  return { handleKeyDown };
}
