interface InfoProps {
  subject: string;
  children: React.ReactNode;
  isTop?: boolean;
}

export default function Info({ subject, isTop, children }: InfoProps) {
  return (
    <div
      className={`flex min-h-9.5 items-center border-b border-slate-300 p-1.5 ${
        isTop && 'border-t'
      }`}
    >
      <div className="w-24 min-w-24 text-right pr-2 text-zinc-900 font-medium">
        {subject}
      </div>
      <div className="pl-3 text-zinc-900 text-base">{children}</div>
    </div>
  );
}
