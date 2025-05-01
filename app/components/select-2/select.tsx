'use client';

// import { createPortal } from 'react-dom';
import { SelectContext } from './select.context';
import useSelect from './useSelect';

interface SelectProps {
  height: number;
  children: React.ReactNode;
  defaultValue: string;
  onSelect: (item: string) => void;
}

export default function Select({
  height,
  children,
  defaultValue,
  onSelect,
}: SelectProps) {
  const {
    isOpen,
    show,
    position,
    selectorRef,
    buttonRef,
    open,
    close,
    // selectedItem,
    // setSelectedItem,
  } = useSelect(height);

  const handlClickItem = (value: string) => {
    onSelect(value);
    close();
  };

  return (
    <SelectContext.Provider
      value={{
        selectedValue: defaultValue,
        onSelect: handlClickItem,
        close,
      }}
    >
      <div className="relative" ref={selectorRef}>
        <button
          onClick={open}
          ref={buttonRef}
          className="flex justify-center w-full c-border-outer py-0.5 rounded-sm"
        >
          Lv.{defaultValue}
        </button>

        {isOpen && (
          <div
            className={`absolute z-10 bg-white shadow-md border mt-1 w-full transition-all duration-200 origin-top
              ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              ${position === 'bottom' ? 'top-full' : 'bottom-full'}
            `}
          >
            {children}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}
