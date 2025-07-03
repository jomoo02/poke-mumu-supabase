import { createPortal } from 'react-dom';
import useComboboxContent from './useComboboxContent';

interface ComboboxContentProps {
  children: React.ReactNode;
}

export default function ComboboxContent({ children }: ComboboxContentProps) {
  const { isOpen, position, contentRef, hasPosition } = useComboboxContent();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      ref={contentRef}
      style={{
        ...position,
        pointerEvents: 'auto',
        visibility: 'visible',
      }}
      className={`transition-opacity duration-200 ease-out transform z-50
            w-full max-h-52 overflow-hidden rounded-md border border-gray-300 shadow-xl flex flex-col
            ${hasPosition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      tabIndex={-1}
    >
      {children}
    </div>,
    document.body,
  );
}
