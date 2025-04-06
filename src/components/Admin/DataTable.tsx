
type Column = {
    key: string;
    label:string;
}

type DataTableProps = {
    columns: Column[],
    data: Record<string,any>[]
}


export default function DataTable({ columns, data }: DataTableProps) {
  return (
    <div className='px-4 sm:px-6 lg:px-8 mt-10'>
        <div className='mt-8 flow-root'>
            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-300'>
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th 
                                        key={col.key}
                                        scope='col' 
                                        className='bg-slate-700 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0'
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                            {data.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                {columns.map((col) => (
                                  <td key={col.key} className="p-2 border">
                                    {row[col.key]}
                                  </td>
                                ))}
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
