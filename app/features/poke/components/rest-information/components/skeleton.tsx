export default function RestInformationSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="pb-3 mt-12 mb-6 pt-10 border-t border-gray-200">
        <div className="h-8 bg-neutral-200 rounded-md w-20" />
      </div>
      <div className="grid gap-20">
        <div className="my-4">
          <div className="mb-3 mx-1 h-6 bg-neutral-200 rounded-md w-18" />
          <div className="border-b border-gray-200 ml-1 w-full max-w-2xl">
            <div className="bg-neutral-200 w-1/3 my-3 rounded-md h-5" />
          </div>
          <div className="border-b border-gray-200 ml-1 w-full max-w-2xl">
            <div className="bg-neutral-200 w-1/2 my-3 rounded-md h-5" />
          </div>
          <div className="ml-1 w-ful max-w-2xll">
            <div className="bg-neutral-200 w-1/2 my-3 rounded-md h-5 " />
          </div>
        </div>
        <div className="my-4">
          <div className="mb-3 mx-1 h-6 bg-neutral-200 rounded-md w-18" />
          <div className="border-b border-gray-200 ml-1 w-full max-w-2xl">
            <div className="bg-neutral-200 w-1/3 my-3 rounded-md h-5" />
          </div>
          <div className="border-b border-gray-200 ml-1 w-full max-w-2xl">
            <div className="bg-neutral-200 w-1/2 my-3 rounded-md h-5" />
          </div>
          <div className="border-b border-gray-200 ml-1 w-full max-w-2xl">
            <div className="bg-neutral-200 w-2/3 my-3 rounded-md h-5" />
          </div>
          <div className="ml-1 w-ful max-w-2xll">
            <div className="bg-neutral-200 w-2/3 my-3 rounded-md h-5 " />
          </div>
        </div>
      </div>
    </div>
  );
}
