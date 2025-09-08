'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/app/components/table';
import ArrowUpIcon from '@/app/components/icon/arrow-up';
import ArrowDownIcon from '@/app/components/icon/arrow-down';
import { getNatureTableRawData } from './nature-table.utils';
// import type { Nature } from '../../data/nature';

interface NatureTableProps {
  selectedNature: string;
}

export default function NatureTable({ selectedNature }: NatureTableProps) {
  const tableRows = getNatureTableRawData(selectedNature);

  return (
    <div className="overflow-auto w-full min-h-[300px] border border-border rounded-md shadow">
      <Table tableData={tableRows} className="w-full">
        <TableHeader>
          <TableRow className="h-9.5 hover:bg-muted/50 border-b border-border">
            <TableHead
              align="left"
              headerKey="nature"
              sortAble={false}
              className="px-4  text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              성격
            </TableHead>
            <TableHead
              align="left"
              headerKey="nature-en"
              id="nature-en"
              sortAble={false}
              className="px-4  text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              영칭
            </TableHead>
            <TableHead
              align="left"
              headerKey="increase"
              sortAble={false}
              className="px-4  text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              상승
            </TableHead>
            <TableHead
              headerKey="decrease"
              align="left"
              sortAble={false}
              className="px-4  text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              하락
            </TableHead>
            <TableHead
              align="left"
              headerKey="like"
              sortAble={false}
              className="px-4  text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              좋아하는맛
            </TableHead>
            <TableHead
              align="left"
              headerKey="dislike"
              sortAble={false}
              className="px-4 text-muted-foreground font-medium text-sm whitespace-nowrap"
            >
              싫어하는맛
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(rows) =>
            rows.length > 0 ? (
              rows.map((row) => (
                <TableRow
                  key={row.nature as string}
                  className="h-10 hover:bg-muted/50 transition duration-200 border-b border-border last:border-b-0"
                >
                  <TableCell className="text-foreground px-4 text-sm font-medium whitespace-nowrap">
                    {row.ko}
                  </TableCell>
                  <TableCell className="text-foreground px-4 text-sm whitespace-nowrap">
                    {row.en}
                  </TableCell>
                  <TableCell className="text-foreground px-4 text-sm whitespace-nowrap">
                    {row.increase ? (
                      <div className="flex items-center gap-x-1">
                        {row.increase}
                        <ArrowUpIcon />
                      </div>
                    ) : (
                      <>—</>
                    )}
                  </TableCell>
                  <TableCell className="text-foreground px-4 text-sm whitespace-nowrap">
                    {row.decrease ? (
                      <div className="flex items-center gap-x-1">
                        {row.decrease}
                        <ArrowDownIcon />
                      </div>
                    ) : (
                      <>—</>
                    )}
                  </TableCell>

                  {row.like && row.dislike ? (
                    <>
                      <TableCell className="text-foreground px-4 text-sm whitespace-nowrap">
                        {row.like}
                      </TableCell>
                      <TableCell className="text-foreground px-4 text-sm whitespace-nowrap">
                        {row.dislike}
                      </TableCell>
                    </>
                  ) : (
                    <TableCell
                      className="text-foreground px-4 text-sm whitespace-nowrap"
                      colSpan={2}
                    >
                      아무거나 잘먹음
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow className="h-64">
                <TableCell
                  colSpan={6}
                  className="text-foreground whitespace-nowrap"
                  align="center"
                >
                  검색 결과 x
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  );
}
