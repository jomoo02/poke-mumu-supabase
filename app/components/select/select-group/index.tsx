interface SelectGroupProps {
  children: React.ReactNode;
}

export default function SelectGroup({ children }: SelectGroupProps) {
  return <div className="grid">{children}</div>;
}
