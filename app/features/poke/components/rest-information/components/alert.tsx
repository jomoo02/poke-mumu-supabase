import { Info } from 'lucide-react';

interface AlertProps {
  children: React.ReactNode;
}
export default function Alert({ children }: AlertProps) {
  return (
    <div className="p-4 border border-border rounded-lg bg-secondary flex gap-2">
      <div className="h-6 flex items-center">
        <Info className="size-5 text-muted-foreground" />
      </div>

      <div>{children}</div>
    </div>
  );
}
