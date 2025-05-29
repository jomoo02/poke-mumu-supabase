interface InfoCardItemV2Props {
  subject: string;
  children: React.ReactNode;
}

export default function InfoCardItemV2({
  subject,
  children,
}: InfoCardItemV2Props) {
  return (
    <div className="border-r last:border-r-0 border-r-gray-300 h-full flex flex-col">
      <div className="text-center font-medium text-[15px] text-slate-700 px-3 py-1 border-b border-gray-300 truncate bg-neutral-50 ">
        {subject}
      </div>
      <div className="text-slate-800 text-center p-2 text-[15px] flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
