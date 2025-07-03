import { useInputValue, useInputRef } from '../combobox.context';
import { useHandleKeyDown } from './useListHandle';
// import { isMobileDevice } from '@/app/utils/device';

export default function useComboboxInput() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const { inputRef } = useInputRef();
  const { inputValue, onChangeInputValue } = useInputValue();
  const { handleKeyDown } = useHandleKeyDown();
  // useEffect(() => {
  //   if (!isOpen || !hasPosition) return;

  //   if (typeof window === 'undefined') return;

  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  //   // 모바일은 사용자 interaction 이후만 허용
  //   if (isMobile) return;

  //   requestAnimationFrame(() => {
  //     inputRef.current?.focus({ preventScroll: true });
  //   });
  // }, [isOpen, hasPosition, inputRef]);

  // useEffect(() => {
  //   if (isOpen && hasPosition && !isMobileDevice()) {
  //     requestAnimationFrame(() => {
  //       requestAnimationFrame(() => {
  //         inputRef.current?.focus({ preventScroll: true });
  //       });
  //     });
  //   }
  // }, [isOpen, hasPosition]);

  return {
    inputRef,
    inputValue,
    handleChange: onChangeInputValue,
    handleKeyDown,
  };
}
