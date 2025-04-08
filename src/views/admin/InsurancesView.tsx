import DataTable from "../../components/Admin/DataTable";
import { getAllInsurances } from "../../api/InsurancesAPI";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

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
  
  if (isLoading) return 'Cargando...'
  
  if(data) return (
    <div className="px-6">
      <p className='p-4 font-semibold text-2xl'>Seguros</p>
      <Link
        to={'/admin/insurances/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
      >Agregar Seguro</Link>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
