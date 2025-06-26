import { getNatureTableData } from '../utils/get-data';

export default function NatureTable() {
  const { headerData, bodyData } = getNatureTableData();

  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-bold pb-3 mt-12 mb-6 scroll-mt-12 text-slate-900 pt-10 border-t border-gray-200">
        성격표
      </h2>
      <div className="overflow-auto">
        <table className="table-fixed border-separate border-spacing-0">
          <thead>
            <tr>
              {headerData.map((d, index) => (
                <th key={`${d}-${index}`} className="border min-w-20 w-20 h-10">
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((row) => (
              <tr key={row[0].ko}>
                {row.map((d, index) => (
                  <td
                    key={d.ko}
                    className="border min-w-20 h-14"
                    align="center"
                  >
                    <div>{d.ko}</div>
                    {index > 0 && <div>{d.en}</div>}
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
