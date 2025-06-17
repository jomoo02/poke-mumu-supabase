export default function AbilitiesLoading() {
  return (
    <div className="animate-pulse">
      <div className="my-4">
        <div className="flex items-center mb-2">
          <div className="w-24 h-5 bg-gray-200 rounded" />
        </div>
        <div className="space-y-1">
          <div className="w-2/5 sm:w-1/5 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="my-4">
        <div className="flex items-center mb-2">
          <div className="w-32 h-5 bg-gray-200 rounded" />
        </div>
        <div className="space-y-1">
          <div className="w-1/3 sm:w-2/5  h-4 bg-gray-200 rounded" />
          <div className="w-2/3 sm:w-1/2 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
