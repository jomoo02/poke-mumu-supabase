export default function StatsSkeleton() {
  return (
    <div>
      <div className="flex mx-auto max-w-4xl w-full flex-col gap-2 sm:gap-4">
        <div className="w-full flex justify-end gap-2 items-center">
          <div className="bg-accent rounded-lg h-8.5 w-16" />
          <div className="bg-accent rounded-lg h-8.5 w-18" />
        </div>
        <div className="rounded-b-xl bg-accent h-[324.5px] sm:h-[328.5px] w-full"></div>
      </div>
    </div>
  );
}
