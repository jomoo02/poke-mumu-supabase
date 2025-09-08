import { useCallback, useState, useRef, useEffect } from 'react';

export default function useOptionBar(
  initialValue?: string,
  onSelct?: (value: string) => void,
) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue,
  );

  const [optionValues, setOptionValues] = useState<string[]>([]);

  const optionValueRefMap = useRef<Map<string, HTMLDivElement | null>>(
    new Map(),
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const registerOption = useCallback(
    (value: string, ref: HTMLDivElement | null) => {
      setOptionValues((prev) => {
        if (!prev.includes(value)) {
          return [...prev, value];
        }
        return prev;
      });
      optionValueRefMap.current.set(value, ref);
    },
    [],
  );

  const handleValueSelect = useCallback(
    (value: string) => {
      if (onSelct) {
        onSelct(value);
      }

      setSelectedValue(value);
    },
    [onSelct],
  );

  useEffect(() => {
    setSelectedValue(initialValue);
  }, [initialValue]);

  return {
    selectedValue,
    handleValueSelect,
    registerOption,
    optionValues,
    optionValueRefMap,
    contentRef,
  };
}
