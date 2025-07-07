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
      style={position ?? { position: 'fixed', transform: 'translate(0, 0)' }}
      className={`transition-opacity duration-200 ease-out transform z-100 bg-white top-0 left-0 flex flex-col
        max-w-[224px] max-h-52 overflow-hidden rounded-md border border-gray-300 shadow-xl
        ${hasPosition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}
      `}
      tabIndex={-1}
    >
      {children}
    </div>,
    document.body,
  );
}
