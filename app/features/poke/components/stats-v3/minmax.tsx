import LevelSelect from './level-select';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import { useStatContext } from './context';

export default function MinMax() {
  const { statData, maxStatValue, statKeys, total } = useStatContext();

  return (
    <div className="flex flex-col border-border rounded-xl">
      <div className="flex justify-between h-8 my-4">
        <div className="text-lg font-suite">능력치 범위</div>
        <LevelSelect />
      </div>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow className="border-border  hover:bg-transparent">
            <TableHead className="lg:hidden w-1/4 lg:w-auto"></TableHead>

            <TableHead className="text-right text-base w-3/8">MIN</TableHead>
            <TableHead className="text-right text-base w-3/8">MAX</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statKeys.map((stat) => {
            const { text, maxValue, minValue } = statData[stat];
            return (
              <TableRow
                key={stat}
                className="border-border odd:bg-muted/60 odd:hover:bg-muted/60 even:hover:bg-transparent"
              >
                <TableCell className="table-cell text-base lg:hidden text-right min-w-24 max-w-24 w-24">
                  {text}
                </TableCell>

                <TableCell className="text-base text-right">
                  {minValue}
                </TableCell>
                <TableCell className="text-base text-right">
                  {maxValue}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter className="border-border">
          <TableRow>
            <TableCell className="table-cell lg:hidden" />
            <TableCell className="text-base text-right text-muted/60 select-none">
              -
            </TableCell>
            <TableCell className="text-base text-right"></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
