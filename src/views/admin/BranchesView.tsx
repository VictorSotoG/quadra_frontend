import { useQuery } from "@tanstack/react-query";
import DataTable from "../../components/Admin/DataTable";
import { getAllBranches } from "../../api/BranchesAPI";
import { Link } from "react-router-dom";

export default function BranchesView() {

  const columns = [
    { key: 'id', label: 'Id_Sucursal' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'direccion', label: 'Direccion' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'createdAt', label: 'Creado en' },
    { key: 'updatedAt', label: 'Actualizado en' },
  ]

  const { data } = useQuery({
    queryKey: ['branches'],
    queryFn: getAllBranches
  })


  if(data) return (
    <div className="px-6">
      <div className='p-4 font-semibold text-2xl'>Sucursales</div>
      <Link
        to={'/admin/branches/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 text-white rounded-md"
      >Agregar Sucursal</Link>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
