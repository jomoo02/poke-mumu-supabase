interface TableRowProps {
  className?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function TableRow({
  className,
  onMouseEnter,
  onMouseLeave,
  children,
}: TableRowProps) {
  //border-b last:border-b-0 border-b-border
  return (
    <tr
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${className} `}
    >
      {children}
    </tr>
  );
}
