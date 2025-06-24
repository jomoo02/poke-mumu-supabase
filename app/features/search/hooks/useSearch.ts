import { useState, ChangeEvent, useRef, useEffect } from 'react';
import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';
import { checkEmptyText } from '@/app/utils/check-type';
import { fetchSearchPoke } from '../api/search';
import useLocalStoragePoke from './useLocalStoragePoke';
import useLockBodyScroll from './useLockScroll';

export default function useSearch() {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLockBodyScroll(modalRef);

  const [inputValue, setInputValue] = useState<string>('');

  const debounced = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  }, 300);

  const { data, error, isLoading } = useSWR(inputValue, fetchSearchPoke);

  const { localPokeList, isLoading: isLocalLoading } = useLocalStoragePoke();

  const isInputEmpty = checkEmptyText(inputValue);

  const result = isInputEmpty ? localPokeList : data || [];

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key !== 'Tab') {
      return;
    }

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

    if (focusable.length === 0) {
      return;
    }

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

  return {
    result,
    error: error as Error,
    isLoading: isLoading || isLocalLoading,
    inputValue,
    isInputEmpty,
    handleInputValue: debounced,
    handleKeyDown,
    modalRef,
    inputRef,
  };
}
