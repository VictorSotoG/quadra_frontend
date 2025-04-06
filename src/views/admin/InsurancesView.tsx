import DataTable from "../../components/Admin/DataTable";
import { getAllInsurances } from "../../api/InsurancesAPI";
import { useQuery } from "@tanstack/react-query";

export default function InsurancesView() {

  const columns = [
    { key: 'id', label: 'Id_Seguro' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'cobertura', label: 'Cobertura' },
    { key: 'precio', label: 'Precio' },
    { key: 'descripcion', label: 'Descripcion' },
  ]

  const { data, isError, isLoading } = useQuery({
    queryKey: ['insurances'],
    queryFn: getAllInsurances
  })

  console.log(data)
  if (isLoading) return 'Cargando...'
  
  return (
    <div>
      <p className='p-4 font-semibold text-xl'>Seguros</p>
      {/* <DataTable columns={columns}  /> */}
    </div>
  )
}
