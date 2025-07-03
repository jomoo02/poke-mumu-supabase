'use client';

import { useEffect, useRef, useState } from 'react';

export default function InputTest() {
  const [inputV, setInputV] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div>
      <input
        autoFocus={true}
        ref={inputRef}
        name="inputText"
        value={inputV}
        onChange={(e) => setInputV(e.target.value)}
      />
    </div>
  );
}
