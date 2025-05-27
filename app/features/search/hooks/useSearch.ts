import { useState, ChangeEvent } from 'react';
import useSWR from 'swr';
import { useDebouncedCallback } from 'use-debounce';
import { checkEmptyText } from '@/app/utils/check-type';
import { fetchSearchPoke } from '../api/search';
import useLocalStoragePoke from './useLocalStoragePoke';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';

export default function useSearch() {
  useLockBodyScroll(true);

  const [inputValue, setInputValue] = useState<string>('');

  const debounced = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  }, 300);

  const { data, error, isLoading } = useSWR(inputValue, fetchSearchPoke);

  const { localPokeList, isLoading: isLocalLoading } = useLocalStoragePoke();

  const isInputEmpty = checkEmptyText(inputValue);

  const result = isInputEmpty ? localPokeList : data || [];

  return {
    result,
    error: error as Error,
    isLoading: isLoading || isLocalLoading,
    inputValue,
    isInputEmpty,
    handleInputValue: debounced,
  };
}
