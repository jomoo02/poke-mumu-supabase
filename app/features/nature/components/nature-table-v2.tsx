'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@/app/components/table';
import { getNatureTableV2Data } from '../utils/get-data';

export default function NatureTableV2() {
  const { headerData, bodyData } = getNatureTableV2Data();

  return (
    <div className="mb-96">
      <Table tableData={bodyData}>
        <TableHeader>
          {headerData.map((d) => (
            <TableHeaderCell headerKey="d" key={d} sortAble={false}>
              {d}
            </TableHeaderCell>
          ))}
        </TableHeader>
        <TableBody>
          {(bodyData) =>
            bodyData.map((d) => (
              <TableRow key={d.nature as string}>
                <TableCell>{d.ko}</TableCell>
                <TableCell>{d.en}</TableCell>
                <TableCell className="text-green-800">
                  {d.increase || 'X'}
                </TableCell>
                <TableCell>{d.decrease || 'X'}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
