import { cn } from '@/app/lib/utils';
import { useSelectContext } from './context';
import { useListItem } from '@floating-ui/react';

interface SelectTriggerProps {
  children?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

export default function SelectTrigger({
  children,
  placeholder,
  className,
}: SelectTriggerProps) {
  const {
    refs,
    getReferenceProps,
    getSelectedItem,
    selectedLabel,
    getItemProps,
    selectedItemRef,
  } = useSelectContext();

  // const { ref } = useListItem({ label: selectedLabel });

  // console.log(getSelectedItem());
  // console.log(getItemProps(), getReferenceProps());
  // console.log(getSelectedItem());

  return (
    <div
      ref={refs.setReference}
      tabIndex={0}
      {...getReferenceProps()}
      className={cn(className)}
    >
      {/* <div>{getSelectedItem()}</div> */}
      {/* {getSelectedItem() ? getSelectedItem() : ''} */}
      {getSelectedItem() ?? placeholder}
    </div>
  );
}
