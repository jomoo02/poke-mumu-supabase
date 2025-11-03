import { useState, ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useDebouncedInput(delay = 300) {
  const [value, setValue] = useState('');

  const handleChange = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value.trim());
    },
    delay,
  );

  return { value, handleChange };
}
