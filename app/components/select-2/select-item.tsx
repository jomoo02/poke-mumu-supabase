import { useSelectContext } from './select.context';

export default function SelectItem({
  item,
  children,
}: {
  item: string;
  children: React.ReactNode;
}) {
  const { onSelect, selectedValue } = useSelectContext();

  const handleItemClick = () => {
    onSelect(item);
  };

  return (
    <div
      className="w-full h-full text-center hover:bg-blue-100 py-1 first:rounded-t-sm last:rounded-b-sm "
      onClick={handleItemClick}
      tabIndex={-1}
      aria-selected={selectedValue === item}
    >
      {children}
    </div>
  );
}
