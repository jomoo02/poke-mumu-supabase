import { FloatingTree } from '@floating-ui/react';
import { DropdownMenuProvider } from './context';

interface DropdownMenuRootProps {
  children: React.ReactNode;
}

export default function DropdownMenuRoot({ children }: DropdownMenuRootProps) {
  return (
    <FloatingTree>
      <DropdownMenuProvider>{children}</DropdownMenuProvider>
    </FloatingTree>
  );
}
