import { useSelectContext } from './context';

interface SelectGroupProps {
  children: React.ReactNode;
}

export default function SelectGroup({ children }: SelectGroupProps) {
  const { elementsRef, labelsRef } = useSelectContext();
  console.log(elementsRef, labelsRef);
  return <>{children}</>;
}
