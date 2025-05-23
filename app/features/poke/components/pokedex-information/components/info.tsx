interface InfoProps {
  subject: string;
  children: React.ReactNode;
}

export default function Info({ subject, children }: InfoProps) {
  return (
    <div className="flex min-h-9.5 items-center border-b border-zinc-200 p-1.5">
      <div className="min-w-[4.5rem] w-[4.5rem] text-right pr-2 text-zinc-900 font-medium">
        {subject}
      </div>
      <div className="pl-3 text-zinc-900 text-base">{children}</div>
    </div>
  );
}
