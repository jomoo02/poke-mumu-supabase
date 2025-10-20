import StatBar from './stat-bar';
import { useStatContext } from './context';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import { Fragment } from 'react';
function Stat({
  stat,
  value,
  maxStatValue,
}: {
  stat: string;
  value: number;
  maxStatValue: number;
}) {
  return (
    <div className="p-2">
      <div className="">
        <div className="flex items-center">
          <div>{stat}</div>
          <div>{value}</div>
          <StatBar value={value} max={maxStatValue} />
        </div>

        <div className="flex items-center"></div>
      </div>
    </div>
  );
}

export default function StatList() {
  const { statData, maxStatValue, statKeys, total } = useStatContext();

  return (
    <div className="max-w-4xl mx-auto">
      <Table className="">
        <colgroup>
          <col className="w-auto" />
          <col className="w-auto" />
          <col className="w-full" />
        </colgroup>
        <TableBody>
          {statKeys.map((stat) => (
            <TableRow
              key={stat}
              className="border-0 h-11.5 hover:bg-transparent"
            >
              <TableCell className="text-base text-right lg:px-4">
                {statData[stat].text}
              </TableCell>
              <TableCell className="text-base text-center ">
                {statData[stat].value}
              </TableCell>
              <TableCell className="flex-1 relative">
                <div className="absolute flex -top-1 right-3 gap-4.5 text-sm">
                  <div>min {statData[stat].minValue}</div>
                  <div>max {statData[stat].maxValue}</div>
                </div>

                <StatBar value={statData[stat].value} max={maxStatValue} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="border-0 bg-transparent">
          <TableRow className="h-11.5 hover:bg-transparent">
            <TableCell className="text-base text-right lg:px-4">총합</TableCell>
            <TableCell className="text-center text-base">{total}</TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
