import { createPortal } from 'react-dom';
import useSelectContent from './useSelectContent';

interface SelectContentProps {
  children: React.ReactNode;
}

export default function SelectContent({ children }: SelectContentProps) {
  const { isOpen, position, show, contentRef, handleKeyDown, handleBlur } =
    useSelectContent();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      role="listbox"
      ref={contentRef}
      tabIndex={0}
      style={position}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      className={`bg-white shadow-xl p-1 w-full border border-slate-300 rounded-md outline-none focus:outline-none max-h-60 overflow-auto
        transition-opacity duration-300 ease-out transform z-50 absolute
        scale-95 opacity-0 ${show && 'scale-100 opacity-100'}
      `}
    >
      {children}
    </div>,
    document.body,
  );
}
