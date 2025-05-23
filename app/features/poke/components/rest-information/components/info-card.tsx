interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="p-5 ">
      <div className="text-zinc-900 text-lg font-semibold pb-1">{title}</div>
      {children}
    </div>
  );
}
