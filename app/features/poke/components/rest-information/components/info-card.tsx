interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="p-5">
      <h3 className="text-slate-900 text-lg font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}
