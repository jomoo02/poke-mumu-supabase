interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function TableHeader({ children, className }: TableHeaderProps) {
  return <thead className={className}>{children}</thead>;
}

// export default function TableHeader({
//   children,
//   className,
//   // color,
// }: TableHeaderProps) {
//   // const bgColor = color ? color : 'bg-neutral-50';

//   return (
//     <thead className={className}>
//       <tr className={`text-nowrap border-b border-border`}>{children}</tr>
//     </thead>
//   );
// }
