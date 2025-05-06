import useItem from './useItem';

interface SelectItemProps {
  item: string;
  children: React.ReactNode;
}

export default function SelectItem({ item, children }: SelectItemProps) {
  const { itemRef, handleOnClick, isActive, isSelected } = useItem(item);

  return (
    <div
      ref={itemRef}
      role="option"
      aria-selected={isSelected}
      onClick={handleOnClick}
      className={`cursor-pointer px-3 py-1  flex items-center my-0.5 hover:bg-blue-100 ${
        isActive ? 'bg-blue-100' : isSelected ? 'bg-blue-50' : ''
      }`}
    >
      {children}
    </div>
  );
}
