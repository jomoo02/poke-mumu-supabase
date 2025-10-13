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
    <div className="flex-1 lg:col-span-2 border-border rounded-xl">
      <div className="text-lg font-suite h-8 my-4">종족값</div>
      <Table className="table-fixed">
        {/* <TableHeader>
          <TableRow className="border-border">
            <TableHead />
            <TableHead />
            <TableHead />
          </TableRow>
        </TableHeader> */}
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="w-1/4" />
            <TableHead className="w-1/4" />
            <TableHead className="w-1/2" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {statKeys.map((stat) => (
            <TableRow
              key={stat}
              className="border-border odd:bg-muted/60 odd:hover:bg-muted/60 even:hover:bg-transparent"
            >
              <TableCell className="text-base text-right">
                {statData[stat].text}
              </TableCell>
              <TableCell className="text-base text-center">
                {statData[stat].value}
              </TableCell>
              <TableCell className="">
                <div className="flex">
                  <StatBar value={statData[stat].value} max={maxStatValue} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="border-border">
          <TableRow>
            <TableCell className="text-base text-right">총합</TableCell>
            <TableCell className="text-center text-base">{total}</TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
      {/* <div className="grid divide-y divide-border">
        {statKeys.map((stat) => (
          <Stat
            key={stat}
            maxStatValue={maxStatValue}
            stat={statData[stat].text}
            value={statData[stat].value}
          />
        ))}
        <div className="flex justify-between">
          <div>총합</div>
          <div>{total}</div>
        </div>
      </div> */}
    </div>
  );
}
