interface ItemLinkProps {
  item: string;
  children?: React.ReactNode;
}

export default function ItemLink({ item, children }: ItemLinkProps) {
  return (
    <span className="text-nowrap">
      {item}
      {children}
    </span>
  );
}
