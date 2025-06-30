import {
  useListOpen,
  useActiveIndex,
  useItems,
  useOnSelect,
  // useContainerRef,
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
        setActiveIndex((prev: number) => (prev + 1) % itemCount);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev: number) => (prev - 1 + itemCount) % itemCount);
        break;
      case 'Enter':
        e.preventDefault();
        const value = filteredItems[activeIndex];
        onSelect(value);
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

// export function useHandleBlur() {
//   const { containerRef } = useContainerRef();
//   const { close, isOpen } = useListOpen();
//   const [openAt, setOpenAt] = useState(0);

//   useEffect(() => {
//     if (isOpen) {
//       setOpenAt(Date.now());
//     }
//   }, [isOpen]);

//   const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
//     if (Date.now() - openAt < 300) {
//       return;
//     }

//     const relatedTarget = e.relatedTarget as HTMLElement | null;
//     const container = containerRef.current;

//     if (!relatedTarget || !container?.contains(relatedTarget)) {
//       close();
//     }
//   };

//   return { handleBlur };
// }
