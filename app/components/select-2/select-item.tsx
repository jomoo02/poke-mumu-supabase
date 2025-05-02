import CheckIcon from '../icon/check';
import { useSelectContext } from './select.context';

export default function SelectItem({
  item,
  children,
}: {
  item: string;
  children: React.ReactNode;
}) {
  const { onSelect, selectedValue } = useSelectContext();

  const isSelectedItem = selectedValue === item;

  const handleItemClick = () => {
    onSelect(item);
  };

  return (
    <div
      className="w-full h-full text-center text-slate-700 font-medium text-sm py-1 rounded-sm flex px-2 items-center relative cursor-pointer bg-white hover:bg-blue-100"
      onClick={handleItemClick}
      tabIndex={-1}
      role="option"
      aria-selected={isSelectedItem}
    >
      <span>{children}</span>
      {isSelectedItem && (
        <div className="absolute right-1">
          <CheckIcon size="0.9rem" stroke={2.5} color="#1d293d" />
        </div>
      )}
    </div>
  );
}
