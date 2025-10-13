interface InfoProps {
  subject: string;
  children: React.ReactNode;
}

export default function InfoV2({ subject, children }: InfoProps) {
  return (
    <div className="p-4">
      <div className="text-muted-foreground font-semibold font-suite mb-1">
        {subject}
      </div>
      <div className="text-foreground font-suit font-medium">{children}</div>
    </div>
  );
}
