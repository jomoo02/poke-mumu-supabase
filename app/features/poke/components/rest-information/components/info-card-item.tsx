interface InfoCardItemProps {
  subject: string;
  children: React.ReactNode;
}

export default function InfoCardItem({ subject, children }: InfoCardItemProps) {
  return (
    <div className="grid grid-cols-[26px_1fr] my-1.5">
      <div className="translate-2 rounded-full bg-zinc-500 w-2 h-2" />
      <div>
        <p className="font-medium text-zinc-900">{subject}</p>
        <div className="text-zinc-900 my-px">{children}</div>
      </div>
    </div>
  );
}
