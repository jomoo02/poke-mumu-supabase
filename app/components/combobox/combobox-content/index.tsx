import { createPortal } from 'react-dom';
import useComboboxContent from './useComboboxContent';
import { CSSProperties } from 'react';

interface ComboboxContentProps {
  children: React.ReactNode;
}

export default function ComboboxContent({ children }: ComboboxContentProps) {
  const { isOpen, position, show, contentRef, hasPosition } =
    useComboboxContent();

  const hiddenStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      ref={contentRef}
      style={hasPosition ? position : hiddenStyle}
      tabIndex={-1}
      className={`bg-white shadow-xl w-full border border-gray-300 rounded-md outline-none focus:outline-none h-52 max-h-52 overflow-hidden flex flex-col
        transition-opacity duration-200 ease-out transform z-50
        scale-95 opacity-0 ${show && 'scale-100 opacity-100 '}
      `}
    >
      {children}
    </div>,
    document.body,
  );
}
