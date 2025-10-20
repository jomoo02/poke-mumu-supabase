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

export default function StatList() {
  const { statData, maxStatValue, statKeys, total, level } = useStatContext();

  return (
    <Table className="">
      <TableHeader>
        <TableRow className="border-border hover:bg-transparent">
          <TableHead colSpan={3} className="text-center text-base ">
            종족값
          </TableHead>
          <TableHead className="text-center text-base">MIN-MAX</TableHead>
          {/* <TableHead className="text-right text-base">Lv.100</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {statKeys.map((stat) => {
          const { text, value, maxValue, minValue } = statData[stat];

          return (
            <TableRow
              key={stat}
              className="border-border odd:bg-muted/60 odd:hover:bg-muted/60 even:hover:bg-transparent"
            >
              <TableCell className="text-right text-foreground text-base">
                {text}
              </TableCell>
              <TableCell className="text-center text-foreground text-base px-3">
                {value}
              </TableCell>
              <TableCell>
                <StatBar value={value} max={maxStatValue} />
              </TableCell>
              <TableCell className="text-center text-foreground text-base">
                {minValue}-{maxValue}
              </TableCell>
              {/* <TableCell className="text-right text-foreground text-base">
                {minValue}-{maxValue}
              </TableCell> */}
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter className="border-border">
        <TableRow className="hover:bg-transparent">
          <TableCell className="text-right text-foreground font-normal text-base">
            총합
          </TableCell>
          <TableCell className="text-center text-foreground text-base ">
            {total}
          </TableCell>
          <TableCell colSpan={4} />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
