import { getNatureTableData } from '../utils/get-data';

export default function NatureTable() {
  const { headerData, bodyData } = getNatureTableData();

  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-slate-900 pt-10 border-t border-gray-200">
        성격표
      </h2>
      <div className="flex justify-center">
        <div className="overflow-auto border border-gray-300 rounded-xl">
          <table className="table-fixed">
            <thead>
              <tr>
                {headerData.map((d, index) => (
                  <th
                    key={`${d}-${index}`}
                    className={`border-b border-gray-200 min-w-28 w-28 h-16 text-red-900 font-medium bg-neutral-50 ${
                      index > 0 ? 'border-l' : ''
                    }`}
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyData.map((row, rowIndex) => (
                <tr
                  key={row[0].ko}
                  className={`${rowIndex >= 4 ? '' : 'border-b border-gray-200'}`}
                >
                  {row.map((d, index) => (
                    <td
                      key={d.ko}
                      align="center"
                      className={`h-16 ${index > 0 ? 'border-l border-gray-200' : ''}`}
                    >
                      {index === 0 ? (
                        <div className="text-blue-900 font-medium bg-neutral-50 h-full w-full flex items-center justify-center">
                          {d.ko}
                        </div>
                      ) : (
                        <div className="text-slate-800 font-normal">
                          <div>{d.ko}</div>
                          <div className="capitalize">{d.en}</div>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
