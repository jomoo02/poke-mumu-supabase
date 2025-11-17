import { DropdownMenuProvider, useDropdownMenuContext } from './context';

interface DropdownMenuSubProps {
  children: React.ReactNode;
}

export default function DropdownMenuSub({ children }: DropdownMenuSubProps) {
  const parent = useDropdownMenuContext();

  return (
    <DropdownMenuProvider parent={parent}>{children}</DropdownMenuProvider>
  );
}
