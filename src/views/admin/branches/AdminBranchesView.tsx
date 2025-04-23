import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import DataTable from "../../../components/Admin/DataTable";
import { getAllBranches } from "../../../api/BranchesAPI";

export default function AdminBranchesView() {

  const columns = [
    { key: 'id', label: 'Id_Sucursal' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'direccion', label: 'Direccion' },
    { key: 'telefono', label: 'Telefono' },
    { key: 'createdAt', label: 'Creado en' },
    { key: 'updatedAt', label: 'Actualizado en' },
  ]

  const { data: brancesData, isLoading, isError } = useQuery({
    queryKey: ['branches'],
    queryFn: getAllBranches
  })

  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar las Sucursales.</p>;


  if(brancesData) return (
    <div className="px-6">
      <div className='p-4 font-semibold text-2xl'>Sucursales</div>
      <Link
        to={'/admin/branches/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 text-white rounded-md"
      >Agregar Sucursal</Link>
      <DataTable columns={columns} data={brancesData} />
    </div>
  )
}
