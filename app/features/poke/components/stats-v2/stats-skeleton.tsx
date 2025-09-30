import SectionHeaderSkeleton from '../section-header-skeleton';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';
import StatBar from './stat-bar';

export default function StatsSkeleton() {
  return (
    <div className="animate-pulse">
      <SectionHeaderSkeleton />
      <div>
        <div className="py-4 flex justify-end">
          <div className="min-w-24 h-7 bg-accent border-border rounded-md" />
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead colSpan={4}>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-20 rounded-md" />
                </div>
              </TableHead>
              <TableHead className="text-right">
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={30} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={50} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={50} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={40} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={60} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
              <TableCell colSpan={2} className="px-2">
                <StatBar value={50} max={120} color="#f4f4f5" />
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-9 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-border hover:bg-transparent">
              <TableCell>
                <div className="flex justify-end w-full">
                  <div className="bg-accent h-6 w-16 rounded-md" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-center w-full">
                  <div className="bg-accent h-6 w-10 rounded-md" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
