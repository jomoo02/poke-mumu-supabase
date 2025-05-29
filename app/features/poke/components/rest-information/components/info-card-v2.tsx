interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCardV2({ title, children }: InfoCardProps) {
  return (
    <div>
      <h3 className="text-slate-900 text-lg font-semibold mb-2">{title}</h3>
      <div className="flex">
        <div className="border flex border-gray-300 rounded-md z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
