interface InfoProps {
  subject: string;
  children: React.ReactNode;
}

export default function Info({ subject, children }: InfoProps) {
  return (
    <div className="flex min-h-9.5 items-center text-zinc-950 border-b border-slate-300 px-2 py-2">
      <div className="min-w-[4.5rem] w-[4.5rem] text-right pr-2">{subject}</div>
      <div className="pl-3">{children}</div>
    </div>
  );
}
