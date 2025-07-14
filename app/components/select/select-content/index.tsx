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
    <>
      <div className="fixed inset-0 z-100 pointer-events-auto" />
      <div
        role="listbox"
        ref={contentRef}
        tabIndex={0}
        style={position}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={`bg-white shadow-xl pointer-events-auto p-1 w-full border border-gray-300 rounded-md outline-none focus:outline-none max-h-60 overflow-auto
        transition-opacity duration-200 ease-out transform z-70 absolute
        scale-95 opacity-0 ${show && 'scale-100 opacity-100'}
      `}
      >
        {children}
      </div>
    </>,

    document.body,
  );
}
