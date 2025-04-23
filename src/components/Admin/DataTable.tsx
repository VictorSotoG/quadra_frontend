import { Link, useLocation, useNavigate } from "react-router-dom";
import { formatCurrency, formateDate } from "../../utils/utils";

type Column = {
    key: string;
    label: string;
};

type DataTableProps = {
    columns: Column[];
    data: Record<string, any>[];
};

export default function DataTable({ columns, data }: DataTableProps) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className=" bg-slate-50 rounded-lg overflow-hidden border border-gray-300">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                scope="col"
                                className="bg-slate-700 px-4 py-2 text-left text-sm font-semibold text-white"
                            >
                                {col.label}
                            </th>
                        ))}
                        <th 
                            className="bg-slate-700 px-4 py-2 text-center text-sm font-semibold text-white"
                        >Acciones</th>
                    </tr>
                    
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((row, i) => (
                        <tr key={i} className="odd:bg-slate-200">
                            {columns.map((col) => (
                                <td key={col.key} className="p-2 border">
                                    {col.key.includes('fecha') || col.key.includes('At') && row[col.key] 
                                        ? ( 
                                            row[col.key] 
                                            ? formateDate(row[col.key]) 
                                            : "Fecha no disponible" 
                                        ) 
                                        : ( col.key.includes('confirmado')
                                            ? ( row[col.key] ? 'Si' : 'No')
                                            : ( col.key.includes('precio')
                                                ? ( formatCurrency(row[col.key]) )
                                                : ( row[col.key] || "N/A" ) 
                                            )
                                        )
                                    } 
                                </td>
                            ))}
                            <td className="p-2 flex gap-2 justify-center">
                                <button
                                    type="button"
                                    // to={`/admin/${row.}/details/${row.id}`} 
                                    className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
                                    onClick={() => navigate(location.pathname + `/details/${row.id || row._id}`)}
                                >
                                    Detalles
                                </button>
                                <Link 
                                    to={'/admin'} 
                                    className="bg-sky-500 hover:bg-sky-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
                                >Editar</Link>
                                <Link 
                                    to={'/'} 
                                    className="bg-red-500 hover:bg-red-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
                                >Eliminar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
