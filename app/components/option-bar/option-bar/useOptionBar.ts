import { useCallback, useState, useRef } from 'react';

export default function useOptionBar(
  initialValue?: string,
  onSelct?: (value: string) => void,
) {
  const [items, setItems] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue,
  );
  const itemRefs = useRef<Map<string, HTMLButtonElement | null>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  const registerItem = useCallback(
    (value: string, ref: HTMLButtonElement | null) => {
      setItems((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      });
      itemRefs.current.set(value, ref);
    },
    [],
  );

  const handleOnSelect = (value: string) => {
    if (onSelct) {
      onSelct(value);
    }

    setSelectedValue(value);
  };

  return {
    selectedValue,
    handleOnSelect,
    registerItem,
    items,
    itemRefs,
    containerRef,
  };
}
