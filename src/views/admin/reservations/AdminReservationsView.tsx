import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { getAllReservations } from "../../../api/ReservationsAPI"
import DataTable from "../../../components/Admin/DataTable"

export default function AdminReservationsView() {

  const columns = [
    { key: '_id', label: 'Id Reservacion'},
    { key: 'nombre', label: 'Nombre Usuario' },
    { key: 'vehiculo', label: 'Vehiculo' },
    { key: 'estado', label: 'Estado Reservacion' },
    { key: 'fecha_inicio', label: 'Fecha de Inicio' },
    { key: 'fecha_fin', label: 'Fecha Entrega' },
  ]


  const { data: reservationsData, isLoading, isError } = useQuery({
    queryKey: ['reservations'],
    queryFn: getAllReservations
  })

  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar las Reservaciones.</p>;


  if (reservationsData) {
    return (
      <>
        <div className="px-6">
          <p className='p-4 font-semibold text-xl'>Reservaciones</p>
          <Link
            to={'/admin/reservations/create'}
            className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
          >Agregar Reservacion</Link>
          <DataTable columns={columns} data={reservationsData?.data} />
        </div>
      </>
    )
  }
  return null;
}
