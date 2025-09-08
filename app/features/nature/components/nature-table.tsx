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
        <TableHeader className="h-10 hover:bg-muted/50">
          {headerData.map(({ key, value, align }) => (
            <TableHeaderCell
              headerKey={key}
              key={key}
              sortAble={false}
              align={align}
              className="px-2 min-w-28 w-28 text-muted-foreground font-medium text-sm"
            >
              {value}
            </TableHeaderCell>
          ))}
        </TableHeader>
        <TableBody>
          {(bodyData) =>
            bodyData.map((d) => (
              <TableRow
                key={d.nature as string}
                className="h-10 hover:bg-muted/50 transition duration-100 text-sm"
              >
                <TableCell className="text-foreground px-2">{d.ko}</TableCell>
                <TableCell className="text-foreground px-2">{d.en}</TableCell>
                {d.increase ? (
                  <TableCell className="text-[#07090e] px-2">
                    {d.increase}
                  </TableCell>
                ) : (
                  <TableCell className="px-2 text-foreground">—</TableCell>
                )}
                {d.decrease ? (
                  <TableCell className="text-[#B80F53] px-2">
                    {d.decrease}
                  </TableCell>
                ) : (
                  <TableCell className="px-2 text-foreground">—</TableCell>
                )}
                {d.like && d.dislike ? (
                  <>
                    <TableCell className="text-foreground px-2">
                      {d.like ? <>{d.like}</> : <CloseIcon size={18} />}
                    </TableCell>

                    <TableCell className="text-foreground px-2">
                      {d.dislike ? <>{d.dislike}</> : <CloseIcon size={18} />}
                    </TableCell>
                  </>
                ) : (
                  <TableCell className="text-foreground px-2" colSpan={2}>
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
