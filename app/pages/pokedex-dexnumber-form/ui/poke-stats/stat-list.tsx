import {
  Table,
  TableBody,
  TableFooter,
  TableRow,
  TableHeader,
  TableCell,
} from '@/app/components/ui/table';

import StatBar from './stat-bar';
import { useStatContext } from './context';

export default function StatList() {
  const { stats } = useStatContext();

  const total = stats.find(({ id }) => id === 'total');
  const basicStats = stats.filter(({ id }) => id !== 'total');

  return (
    <div className="w-full">
      <Table className="rounded-b-xl overflow-hidden">
        <colgroup>
          <col className="w-auto" />
          <col className="w-auto" />
          <col className="w-full" />
          <col className="w-auto min-w-11 max-w-11 sm:min-w-14 sm:max-w-14" />
          <col className="w-auto min-w-11 max-w-11 sm:min-w-14 sm:max-w-14" />
        </colgroup>
        <TableHeader>
          <TableRow className="border-border" />
        </TableHeader>
        <TableBody>
          {basicStats.map((stat) => (
            <TableRow
              key={stat.id}
              className="border-border h-12 hover:bg-transparent"
            >
              <TableCell className="text-sm sm:text-base text-right lg:px-4">
                {stat.text}
              </TableCell>
              <TableCell className="text-sm sm:text-base text-center ">
                {stat.value}
              </TableCell>
              <TableCell className="flex-1 relative">
                <StatBar value={stat.value} max={255} />
              </TableCell>
              <TableCell className="text-right sm:text-base lg:px-3">
                {stat.min || 0}
              </TableCell>
              <TableCell className="text-right sm:text-base lg:px-3">
                {stat.max || 0}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="border-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell className="sm:text-base text-right lg:px-4">
              {total?.text || '총합'}
            </TableCell>
            <TableCell className="text-center sm:text-base">
              {total?.value || 0}
            </TableCell>
            <TableCell colSpan={1} />
            <TableCell className="sm:text-base text-right lg:px-3">
              min
            </TableCell>
            <TableCell className="sm:text-base text-right lg:px-3">
              max
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
