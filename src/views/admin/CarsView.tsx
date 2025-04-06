import { useQuery } from "@tanstack/react-query"
import { getAllCars } from "../../api/CarsAPI"
import DataTable from "../../components/Admin/DataTable"

export default function CarsView() {

  const columns = [
    { key: 'id', label: 'Id_Vehiculo' },
    { key: 'marca', label: 'Marca' },
    { key: 'modelo', label: 'Modelo' },
    { key: 'color', label: 'Color' },
    { key: 'anio', label: 'Año' },
    { key: 'transmision', label: 'Transmision' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'precio_por_dia', label: 'Precio por Dia' },
    { key: 'seguroId', label: 'Seguro' },
    { key: 'imagen', label: 'Imagen' },
    { key: 'estado', label: 'Estado' },
    // { key: 'acciones', label: 'Acciones'},
    // { key: 'createdAt', label: 'Id_Seguro' },
    // { key: 'updatedAt', label: 'Id_Seguro' },
  ]

  const { data, isError, isLoading } = useQuery({
    queryKey: ['cars'],
    queryFn: getAllCars
  })

  if (isLoading) return 'Cargando...'
  
  if(data) return (
    <>
      <div className='p-4 font-semibold text-xl'>Vehiculos</div>
      <DataTable columns={columns} data={data} />
    </>
  )
}
