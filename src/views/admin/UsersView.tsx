import { useQuery } from "@tanstack/react-query"
import { getAllUsers } from "../../api/UsersAPI"
import DataTable from "../../components/Admin/DataTable"
import { Link } from "react-router-dom"

export default function UsersView() {

  const columns = [
    { key: 'id', label: 'Id_Usuario' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'apellido', label: 'Apellido' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Rol' },
    { key: 'confirmado', label: 'Confirmado' },
  ]

  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  })

  if (data) return (
    <div className="px-6">
      <p className='p-4 font-semibold text-xl'>Usuarios</p>
      <Link
        to={'/admin/insurances/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
      >Agregar Usuario</Link>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}
