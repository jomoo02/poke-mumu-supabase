export default function InfoHeader() {
  return (
    <div className="flex items-center py-1.5 border-b border-gray-200">
      <div className="min-w-[6.5rem] w-[6.5rem] sm:min-w-[150px] sm:w-[150px] font-semibold text-slate-800 mx-1">
        분류
      </div>
      <div className="flex-1 text-slate-800 font-semibold">상세</div>
    </div>
  );
}
