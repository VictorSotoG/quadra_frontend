import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getAllReservations } from "../../../api/ReservationsAPI"
import DataTable from "../../../components/Admin/DataTable"

export default function ReservationsView() {

  const columns = [
    { key: '_id', label: 'Id Reservacion'},
    { key: 'cliente_id', label: 'Id Cliente' },
    { key: 'vehiculo_id', label: 'Id Vehiculo' },
    { key: 'estado', label: 'Estado Reservacion' },
    { key: 'createdAt', label: 'Creado en' },
    { key: 'updatedAt', label: 'Actualizado en' },
  ]


  const { data } = useQuery({
    queryKey: ['reservations'],
    queryFn: getAllReservations
  })

  

  if (data) return (
    <>
      <div className="px-6">
        <p className='p-4 font-semibold text-xl'>Reservaciones</p>
        <Link
          to={'/admin/reservations/create'}
          className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
        >Agregar Reservacion</Link>
        <DataTable columns={columns} data={data?.data} />
      </div>
    </>
  )
}
