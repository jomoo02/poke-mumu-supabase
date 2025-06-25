import { useRef, useEffect } from 'react';
import useSWR from 'swr';
import { checkEmptyText } from '@/app/utils/check-type';
import useLocalStoragePoke from './useLocalStoragePoke';
import useInputBlur from './useInputBlur';
import useDebouncedInput from './useDebouncedInput';
import { fetchSearchPoke } from '../api/search';

export default function useSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const { value: inputValue, handleChange } = useDebouncedInput();

  const { data, error, isLoading } = useSWR(inputValue, fetchSearchPoke);

  const { localPokeList, isLoading: isLocalLoading } = useLocalStoragePoke();

  const isInputEmpty = checkEmptyText(inputValue);

  const result = isInputEmpty ? localPokeList : data || [];

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key !== 'Tab') return;

    const container = e.currentTarget as HTMLElement;
    // 조건: <a>, <input>, tabindex가 있는 <svg>
    const selector = `
      a[href],
      input:not([disabled]),
      button:not([disabled])
    `;

    const nodeList = container.querySelectorAll<HTMLElement>(selector);

    const focusable = Array.from(nodeList).filter((el) => {
      // display: none, visibility: hidden 제외
      const style = window.getComputedStyle(el);
      return (
        el.tabIndex >= 0 &&
        !el.hasAttribute('disabled') &&
        style.display !== 'none' &&
        style.visibility !== 'hidden'
      );
    });

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    const isShift = e.shiftKey;

    if (isShift) {
      if (active === first || !container.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last || !container.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  useInputBlur();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return {
    result,
    inputValue,
    isInputEmpty,
    handleKeyDown,
    inputRef,
    error: error as Error,
    isLoading: isLoading || isLocalLoading,
    handleInputValue: handleChange,
  };
}
