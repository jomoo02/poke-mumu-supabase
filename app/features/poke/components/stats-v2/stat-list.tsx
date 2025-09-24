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
  const { statData, maxStatValue, statKeys, total } = useStatContext();

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-border">
          <TableHead colSpan={4} className="text-center">
            종족값
          </TableHead>
          <TableHead className="text-right">MIN</TableHead>
          <TableHead className="text-right">MAX</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statKeys.map((stat) => {
          const { text, value, maxValue, minValue } = statData[stat];

          return (
            <TableRow key={stat} className="border-border">
              <TableCell className="text-right text-foreground">
                {text}
              </TableCell>
              <TableCell className="text-center text-foreground">
                {value}
              </TableCell>
              <TableCell className="px-2" colSpan={2}>
                <StatBar value={value} max={maxStatValue} />
              </TableCell>
              <TableCell className="text-right  text-foreground">
                {minValue}
              </TableCell>
              <TableCell className="text-right  text-foreground">
                {maxValue}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter className="border-border">
        <TableRow>
          <TableCell className="text-right text-foreground font-normal">
            총합
          </TableCell>
          <TableCell className="text-center text-foreground">{total}</TableCell>
          <TableCell colSpan={4} />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
