function MoveTableRow() {
  return (
    <tr className="border-b border-gray-200">
      <td className="h-9">
        <div className="bg-neutral-200 min-w-11 max-w-11 h-5 rounded-md ml-2" />
      </td>
      <td className="h-9">
        <div className="bg-neutral-200 min-w-32 max-w-32 h-5 rounded-md" />
      </td>
      <td className="h-9">
        <div className="flex justify-center items-center">
          <div className="bg-neutral-200 min-w-14 max-w-14 h-5 rounded-md" />
        </div>
      </td>
      <td className="h-9">
        <div className="flex justify-center items-center">
          <div className="bg-neutral-200 min-w-14 max-w-14 h-5 rounded-md" />
        </div>
      </td>
      <td className="h-9">
        <div className="flex justify-center items-center">
          <div className="bg-neutral-200 min-w-11 max-w-11 h-5 rounded-md" />
        </div>
      </td>
      <td className="h-9">
        <div className="flex justify-center items-center">
          <div className="bg-neutral-200 min-w-11 max-w-11 h-5 rounded-md" />
        </div>
      </td>
    </tr>
  );
}

function MoveTable() {
  return (
    <div className="flex">
      <div className="border border-gray-200 rounded-md overflow-auto">
        <table>
          <thead>
            <tr className="border-b border-gray-200 bg-neutral-200">
              <th className="min-w-20 h-9"></th>
              <th className="min-w-44 h-9"></th>
              <th className="min-w-20 h-9"></th>
              <th className="min-w-20 h-9"></th>
              <th className="min-w-20 h-9"></th>
              <th className="min-w-20 h-9"></th>
            </tr>
          </thead>
          <tbody>
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
            <MoveTableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MovesSkeleton() {
  return (
    <div className="animate-pulse">
      {/* <div className="pb-3 mt-12 mb-6 pt-10 border-t border-gray-200">
        <div className="h-8 bg-neutral-200 rounded-md w-16" />
      </div>
      <div>
        <div className="w-40 h-6.5 bg-neutral-200 rounded-md my-2.5" />
      </div>
      <div>
        <div className="w-64 h-6.5 bg-neutral-200 rounded-md my-2.5" />
      </div> */}
      <div className="my-10 flex flex-col gap-y-10 w-full">
        <div className="overflow-hidden">
          <div className="w-44 h-6 bg-neutral-200 my-2 rounded-md" />
          <div className="overflow-x-auto">
            <MoveTable />
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="w-44 h-6 bg-neutral-200 my-2 rounded-md" />
          <div className="overflow-x-auto">
            <MoveTable />
          </div>
        </div>
      </div>
    </div>
  );
}
