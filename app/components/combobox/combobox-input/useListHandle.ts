import {
  useListOpen,
  useActiveIndex,
  useItems,
  useOnSelect,
} from '../combobox.context';

export function useHandleKeyDown() {
  const { isOpen, close } = useListOpen();
  const { activeIndex, setActiveIndex } = useActiveIndex();
  const { filteredItems } = useItems();
  const { onSelect } = useOnSelect();
  const itemCount = filteredItems.length;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev: number) => {
          if (prev >= itemCount - 1) return itemCount - 1;
          return prev + 1;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev: number) => {
          if (prev <= 0) return 0;
          return prev - 1;
        });

        break;
      case 'Enter':
        e.preventDefault();
        const value = filteredItems[activeIndex];
        if (value) {
          onSelect(value);
        }
        break;
      case 'Escape':
        e.preventDefault();
        close();
        break;
      case 'Tab':
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  return { handleKeyDown };
}
