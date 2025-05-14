import { useQuery } from "@tanstack/react-query"
import { getAllCars } from "../../../api/CarsAPI"
import DataTable from "../../../components/Admin/DataTable"
import { Link } from "react-router-dom"

export default function AdminCarsView() {

  const columns = [
    { key: 'id', label: 'Id_Vehiculo' },
    { key: 'marca', label: 'Marca' },
    { key: 'modelo', label: 'Modelo' },
    { key: 'color', label: 'Color' },
    { key: 'anio', label: 'Año' },
    { key: 'transmision', label: 'Transmision' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'precio_por_dia', label: 'Precio por Dia' }
  ]

  const { data: carsData, isLoading, isError } = useQuery({
    queryKey: ['cars'],
    queryFn: getAllCars
  })

  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar los Autos.</p>;
  
  if(carsData) return (
    <div className="px-6">
      <div className='p-4 font-semibold text-2xl'>Vehiculos</div>
      <Link
        to={'/admin/cars/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 text-white rounded-md"
      >Agregar Auto</Link>
      <DataTable columns={columns} data={carsData} />
    </div>
  )
}
