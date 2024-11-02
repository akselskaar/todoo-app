import { ColumnDef } from '@tanstack/react-table'
import { Task } from '@/db/schemas'
import { formatDate } from '@/lib/utils'

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => <div>{row.getValue('title')}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: ({ row }) => <div>{formatDate(row.getValue('createdAt'))}</div>,
  },
  {
    accessorKey: 'completedAt',
    header: 'Completed',
    cell: ({ row }) => (
      <div>{formatDate(row.getValue('completedAt')) ?? '-'}</div>
    ),
  },
]
