'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import CloseIcon from '@/app/components/icon/close';
import { getNatureTableData } from '../utils/get-data';
import { Nature } from '../data/nature';

interface NatureTableProps {
  targetNature: Nature | null;
}

export default function NatureTable({ targetNature }: NatureTableProps) {
  const { headerData, bodyData } = getNatureTableData();

  const tableRows = targetNature
    ? bodyData.filter(({ nature }) => nature === targetNature)
    : bodyData;

  return (
    <div className="overflow-auto min-h-[300px]">
      <Table tableData={tableRows}>
        <TableHeader color="bg-transparent">
          {headerData.map(({ key, value, align }) => (
            <TableHeaderCell
              headerKey={key}
              key={key}
              sortAble={false}
              align={align}
              className="h-9 min-w-[5.5rem] md:min-w-28  md:w-28 w-[5.5rem] text-slate-700 font-medium px-2"
            >
              {value}
            </TableHeaderCell>
          ))}
        </TableHeader>
        <TableBody>
          {(bodyData) =>
            bodyData.map((d) => (
              <TableRow key={d.nature as string} className="h-9">
                <TableCell className="text-slate-800 px-2">{d.ko}</TableCell>
                <TableCell className="text-slate-800 px-2">{d.en}</TableCell>
                {d.increase ? (
                  <TableCell className="text-pink-800" align="center">
                    {d.increase}
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <CloseIcon size={18} />
                  </TableCell>
                )}
                {d.decrease ? (
                  <TableCell className="text-sky-800" align="center">
                    {d.decrease}
                  </TableCell>
                ) : (
                  <TableCell align="center">
                    <CloseIcon size={18} />
                  </TableCell>
                )}
                {d.like && d.dislike ? (
                  <>
                    <TableCell className="text-slate-800" align="center">
                      {d.like ? <>{d.like}</> : <CloseIcon size={18} />}
                    </TableCell>

                    <TableCell className="text-slate-800" align="center">
                      {d.dislike ? <>{d.dislike}</> : <CloseIcon size={18} />}
                    </TableCell>
                  </>
                ) : (
                  <TableCell
                    className="text-slate-800"
                    align="center"
                    colSpan={2}
                  >
                    아무거나 잘먹음
                  </TableCell>
                )}
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
