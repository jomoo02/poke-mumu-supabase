import { getNatureTableData } from '../utils/get-data';

export default function NatureTable() {
  const { headerData, bodyData } = getNatureTableData();

  return (
    <div className="flex">
      <div className="overflow-auto border border-gray-300 rounded-lg">
        <table className="table-fixed">
          <thead>
            <tr>
              {headerData.map((d, index) => (
                <th
                  key={`${d}-${index}`}
                  className={`border-b border-gray-200 min-w-20 w-20 sm:min-w-[5.5rem] sm:w-[5.5rem] h-14 sm:h-[3.75rem] text-red-800 text-[15px] sm:text-base font-medium bg-neutral-50 ${
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
                    className={`h-14 sm:h-[3.75rem] ${index > 0 ? 'border-l border-gray-200' : ''}`}
                  >
                    {index === 0 ? (
                      <div className="text-green-800 text-[15px] sm:text-base font-medium bg-neutral-50 h-full w-full flex items-center justify-center">
                        {d.ko}
                      </div>
                    ) : (
                      <div className="text-slate-800 font-normal text-[15px] sm:text-base">
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
  );
}
