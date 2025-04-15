// import { Link } from "react-router-dom";
// import { formateDate } from "../../utils/utils";
// import { Reservation } from "../../types";

// type Column = {
//     key: string;
//     label: string;
// };

// type DataTableProps = {
//     columns: Column[];
//     data: Reservation[];
// };

// export default function DataTableMongo({ columns, data }: DataTableProps) {
//     // Filtrar los datos para excluir las filas donde row.tipo sea "alquiler"

//     console.log(data)
//     // const filteredData = data.filter((row) => row. !== "alquiler");

//     return (
//         <div className="bg-slate-50 rounded-lg overflow-hidden border border-gray-300">
//             <table className="min-w-full divide-y divide-gray-300">
//                 <thead>
//                     <tr>
//                         {columns.map((col) => (
//                             <th
//                                 key={col.key}
//                                 scope="col"
//                                 className="bg-slate-700 px-4 py-2 text-left text-sm font-semibold text-white"
//                             >
//                             {col.label}
//                             </th>
//                         ))}
//                         <th className="bg-slate-700 px-4 py-2 text-center text-sm font-semibold text-white">
//                             Acciones
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                     {data.map((row, i) => (
//                         <tr key={i} className="odd:bg-slate-200">
//                             {columns.map((col) => (
//                                 <td key={col.key} className="p-2 border">
//                                     {col.key.includes("At") && col.key.includes("fecha") && row[col.key]
//                                     ? formateDate(row[col.key]) // Formatea las fechas
//                                     : col.key.includes("alquiler") ? 
//                                     ( <Link
//                                         to={`/admin/reservations/alquiler/${row._id}`}
//                                         className="bg-sky-500 hover:bg-sky-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
//                                     >

//                                         Ver Alquiler
//                                     </Link> ) : row[col.key]} 
//                                 </td>
//                             ))}
//                             <td className="p-2 flex gap-2 items-center">
//                                 <Link
//                                     to={`/admin/reservations/edit/${row._id}`}
//                                     className="bg-sky-500 hover:bg-sky-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
//                                 >
//                                     Editar
//                                 </Link>
//                                 <Link
//                                     to={`/admin/reservations/delete/${row._id}`}
//                                     className="bg-red-500 hover:bg-red-600 transition-colors text-white text-sm py-1 px-4 rounded-md"
//                                 >
//                                     Eliminar
//                                 </Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
