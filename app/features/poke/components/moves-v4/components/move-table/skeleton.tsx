import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/app/components/ui/table';

export default function MoveTableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="my-9 w-32 h-7 bg-muted rounded-md" />
      <div className="max-w-2xl mx-auto w-full">
        <div className="border border-border rounded-lg overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border h-10 hover:bg-transparent">
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-10 h-5 rounded-sm" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-16 h-5 rounded-sm" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-12 h-5 rounded-sm" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-12 h-5 rounded-sm" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-12 h-5 rounded-sm" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex justify-center">
                    <div className="bg-muted w-12 h-5 rounded-sm" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 14 }, (_, i) => i + 1).map((i) => (
                <TableRow
                  key={i}
                  className="hover:bg-transparent h-10 border-border"
                >
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-10 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-20 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-14 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-14 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-14 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <div className="bg-muted w-14 h-5 rounded-sm" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
