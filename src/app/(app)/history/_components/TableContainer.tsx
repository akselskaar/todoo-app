'use client'

import { Task } from '@/db/schemas'
import { DataTable } from '@/components'
import { columns } from './tableColumns'

type TableContainerProps = {
  data: Task[]
}

const TableContainer = ({ data }: TableContainerProps) => {
  return (
    <div className='rounded-lg border-border border'>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
export default TableContainer
