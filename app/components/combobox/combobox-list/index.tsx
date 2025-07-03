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
    >
      {filteredItems.map((item) => (
        <ComboboxItem key={`${item.value}-${inputValue}`} item={item} />
      ))}
      <div className="hidden">{children}</div>
    </div>
  );
}
