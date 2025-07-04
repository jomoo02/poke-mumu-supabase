import useComboboxList from './useComboboxList';
import ComboboxItem from '../combobox-item';

interface ComboboxProps {
  children: React.ReactNode;
  className?: string;
}

export default function ComboboxList({ children, className }: ComboboxProps) {
  const { listRef, filteredItems, inputValue } = useComboboxList();

  return (
    <div
      role="listbox"
      ref={listRef}
      className={`outline-none overflow-auto p-1 relative ${className}`}
    >
      {filteredItems.length === 0 ? (
        <div className="absolute inset-1 flex items-center justify-center text-slate-700">
          해당되는 성격이 없습니다.
        </div>
      ) : (
        <>
          {filteredItems.map((item) => (
            <ComboboxItem key={`${item.value}-${inputValue}`} item={item} />
          ))}
        </>
      )}

      {}
      <div className="hidden">{children}</div>
    </div>
  );
}
