import useComboboxList from './useComboboxList';
import ComboboxItem from '../combobox-item';

interface ComboboxProps {
  children: React.ReactNode;
}

export default function ComboboxList({ children }: ComboboxProps) {
  const { listRef, filteredItems, inputValue } = useComboboxList();

  return (
    <div
      role="listbox"
      ref={listRef}
      className="bg-white outline-none overflow-auto h-44"
      // className="bg-white shadow-xl p-1 w-full border border-gray-300 rounded-md outline-none focus:outline-none max-h-60 overflow-auto z-50"
    >
      {filteredItems.map((item) => (
        <ComboboxItem key={`${item.value}-${inputValue}`} item={item} />
      ))}
      <div className="hidden">{children}</div>
    </div>
  );

  // return createPortal(
  //   <div
  //     role="listbox"
  //     ref={listRef}
  //     tabIndex={0}
  //     style={position}
  //     onKeyDown={handleKeyDown}
  //     onBlur={handleBlur}
  //     className={`bg-white shadow-xl p-1 w-full border border-gray-300 rounded-md outline-none focus:outline-none max-h-60 overflow-auto
  //       transition-opacity duration-200 ease-out transform z-50 absolute
  //       scale-95 opacity-0 ${show && 'scale-100 opacity-100'}
  //     `}
  //   >
  //     {filteredItems.map((item) => (
  //       <ComboboxItem key={item.value} item={item} />
  //     ))}
  //     <div className="hidden">{children}</div>
  //   </div>,
  //   document.body,
  // );
}
