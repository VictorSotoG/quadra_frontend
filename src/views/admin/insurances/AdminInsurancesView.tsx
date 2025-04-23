
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAllInsurances } from "../../../api/InsurancesAPI";
import DataTable from "../../../components/Admin/DataTable";

export default function AdminInsurancesView() {

  const columns = [
    { key: 'id', label: 'Id_Seguro' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'cobertura', label: 'Cobertura' },
    { key: 'precio', label: 'Precio' },
    { key: 'descripcion', label: 'Descripcion' },
  ]

  const { data: insurancesData, isError, isLoading } = useQuery({
    queryKey: ['insurances'],
    queryFn: getAllInsurances
  })
  
  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar los Seguros.</p>;

  
  if(insurancesData) return (
    <div className="px-6">
      <p className='p-4 font-semibold text-2xl'>Seguros</p>
      <Link
        to={'/admin/insurances/create'}
        className="inline-block mb-4 px-6 py-2 bg-sky-600 hover:bg-sky-800 transition-colors text-white rounded-md"
      >Agregar Seguro</Link>
      <DataTable columns={columns} data={insurancesData} />
    </div>
  )
}
