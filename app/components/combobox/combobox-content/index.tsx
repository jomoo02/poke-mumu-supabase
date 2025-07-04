import { createPortal } from 'react-dom';
import useComboboxContent from './useComboboxContent';

interface ComboboxContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function ComboboxContent({
  children,
  className,
}: ComboboxContentProps) {
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
            ${className} overflow-hidden rounded-md border border-gray-300 shadow-xl flex flex-col
            ${hasPosition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      tabIndex={-1}
    >
      {children}
    </div>,
    document.body,
  );
}
