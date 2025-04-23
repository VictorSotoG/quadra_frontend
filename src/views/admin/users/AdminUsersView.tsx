import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import DataTable from "../../../components/Admin/DataTable"
import { getAllUsers } from "../../../api/UsersAPI"

export default function AdminUsersView() {

  const columns = [
    { key: 'id', label: 'Id_Usuario' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellido', label: 'Apellido' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rol' },
    { key: 'confirmado', label: 'Confirmado' },
  ]

  const { data: usersData, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar a los Usuarios.</p>;

  if (usersData) return (
    <div className="px-6">
      <p className='p-4 font-semibold text-xl'>Usuarios</p>
      <Link
        to={'/admin/users/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
      >Agregar Usuario</Link>
      <DataTable columns={columns} data={usersData}/>
    </div>
  )
}
