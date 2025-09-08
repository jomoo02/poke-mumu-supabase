import type { Move } from './type';
// import type { Column } from '@/app/hooks/useTableData';
import { sortMoveTable } from './sort-move-table';
// import type { ColumnDef } from '../hooks/useTableData-3';
import type { ColumnDef } from '../hooks/useTable/type';
import Button from '../components/ui/button';

export const moveColumns: ColumnDef<Move>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        onChange={(v) => table.toggleAllPageRowsSelected(v.target.checked)}
        checked={table.getIsAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <button onClick={row.toggleSelect} className="">
        toggle
      </button>
    ),
    sortable: false,
  },
  {
    id: 'level',
    header: ({ column }) => (
      <Button
        onClick={column.toggleSorting}
        className="hover:bg-secondary px-2 py-1"
      >
        Level{' '}
        {column.getIsSorted()
          ? column.getSortedDirection() === 'asc'
            ? '▼'
            : '▲'
          : ''}
      </Button>
    ),
    cell: ({ row }) => <span>{row.level}</span>,
    sortable: true,
    sortFn: (a, b) => sortMoveTable(a, b, 'level'),
  },
  {
    id: 'name',
    header: ({ column }) => (
      <button onClick={column.toggleSorting} className="">
        Name{' '}
        {column.getIsSorted() && column.getSortedDirection
          ? column.getSortedDirection() === 'asc'
            ? '▼'
            : '▲'
          : ''}
      </button>
    ),
    cell: ({ row }) => <span>{row.name}</span>,
    sortable: true,
    filterable: true,
    sortFn: (a, b) => sortMoveTable(a, b, 'name'),
    enableHide: true,
  },
  {
    id: 'power',
    header: ({ column }) => (
      <button onClick={column.toggleSorting}>
        power{' '}
        {column.getIsSorted() && column.getSortedDirection
          ? column.getSortedDirection() === 'asc'
            ? '▼'
            : '▲'
          : ''}
      </button>
    ),
    cell: ({ row }) => <span>{row.power}</span>,
    sortable: true,
    sortFn: (a, b) => sortMoveTable(a, b, 'power'),
    enableHide: true,
  },
];

// export const moveColumns: ColumnDef<Move>[] = [
//   {
//     id: 'level',
//     header: ({ column }) => (
//       <button onClick={column.toggleSorting}>
//         Level{' '}
//         {column.getIsSorted() ? (column.sortOrder === 'asc' ? '▼' : '▲') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.level}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'level'),
//   },
//   {
//     id: 'name',
//     header: ({ column }) => (
//       <button onClick={column.toggleSorting}>
//         Name{' '}
//         {column.getIsSorted() ? (column.sortOrder === 'asc' ? '▼' : '▲') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.name}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'name'),
//   },
//   {
//     id: 'power',
//     header: ({ column }) => (
//       <button onClick={column.toggleSorting}>
//         power{' '}
//         {column.getIsSorted() ? (column.sortOrder === 'asc' ? '▼' : '▲') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.power}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'power'),
//   },
// ];

// export const moveColumns: Column<Move>[] = [
//   {
//     id: 'level',
//     header: ({ id, sortOrder, toggleSort }) => (
//       <button onClick={toggleSort}>
//         Level {id === 'level' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.level}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'level'),
//   },
//   {
//     id: 'name',
//     header: ({ id, sortOrder, toggleSort }) => (
//       <button onClick={toggleSort}>
//         Name {id === 'name' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.name}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'name'),
//   },
//   {
//     id: 'power',
//     header: ({ id, sortOrder, toggleSort }) => (
//       <button onClick={toggleSort}>
//         power {id === 'power' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
//       </button>
//     ),
//     cell: ({ row }) => <span>{row.power}</span>,
//     sortable: true,
//     sortFn: (a, b) => sortMoveTable(a, b, 'power'),
//   },
// ];
