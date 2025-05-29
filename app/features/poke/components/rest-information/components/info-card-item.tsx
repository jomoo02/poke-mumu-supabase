interface InfoCardItemProps {
  subject: string;
  children: React.ReactNode;
}

export default function InfoCardItem({ subject, children }: InfoCardItemProps) {
  return (
    <div className="grid grid-cols-[26px_1fr] my-1.5">
      <div className="translate-2 rounded-full bg-gray-500 w-2 h-2" />
      <div>
        <div className="font-medium text-slate-700">{subject}</div>
        <div className="text-slate-800 my-px">{children}</div>
      </div>
    </div>
  );
}
