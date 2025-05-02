'use client';

// import { createPortal } from 'react-dom';
import { SelectContext } from './select.context';
import useSelect from './useSelect';
import CaretDownIcon from '../icon/caret-down';

interface SelectProps {
  children: React.ReactNode;
  selectedValue: string;
  onSelect: (item: string) => void;
  renderItem: (item: string) => string;
}

export default function Select({
  children,
  selectedValue,
  onSelect,
  renderItem,
}: SelectProps) {
  const { isOpen, show, position, selectorRef, buttonRef, close, toggle } =
    useSelect();

  const handlClickItem = (value: string) => {
    onSelect(value);
    close();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    if (e.key === 'Tab') {
      console.log(e.key);
      e.preventDefault();
    }
  };

  return (
    <SelectContext.Provider
      value={{
        selectedValue,
        onSelect: handlClickItem,
        close,
        renderItem,
      }}
    >
      <div className="relative w-24 min-h-8" ref={selectorRef}>
        <button
          onClick={toggle}
          ref={buttonRef}
          className="relative cursor-pointer flex items-center w-full h-full border border-slate-500 text-sm font-medium text-slate-700 py-0.5 px-2 rounded-sm "
        >
          <span className="px-1">{renderItem(selectedValue)}</span>
          <div className="absolute right-1">
            <CaretDownIcon size="0.9rem" />
          </div>
        </button>

        {isOpen && (
          <div
            className={`absolute z-10 bg-white shadow-lg border border-slate-500 rounded-md grid gap-y-px p-1 my-0.5 w-full transition-all duration-200 origin-top
              ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              ${position === 'bottom' ? 'top-full' : 'bottom-full'}
            `}
            onKeyDown={handleKeyDown}
          >
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}
