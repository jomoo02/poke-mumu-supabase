import { createPortal } from 'react-dom';
import useContent from './useContent';

export default function SelectContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, position, handleKeyDown, handleBlur, contentRef } =
    useContent();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      role="listbox"
      ref={contentRef}
      tabIndex={0}
      style={position}
      className="bg-white shadow-md my-1 w-full rounded border outline-none focus:outline-none max-h-60 overflow-auto"
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {children}
    </div>,
    document.body,
  );
}
