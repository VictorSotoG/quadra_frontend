
import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getInsuranceById } from "../../../api/InsurancesAPI";
import AdminEditInsuranceForm from "../../../components/Insurances/AdminEditInsuranceForm";

export default function AdminInsuranceEditView() {

    const params  = useParams();
    const insuranceId = +params.insuranceId!


    const { data, isError, isLoading } = useQuery({
        queryKey: ['editInsurance', insuranceId],
        queryFn: () => getInsuranceById(insuranceId)
    })

    console.log(data)
    if (isLoading) return 'Cargando...'
    if (isError) return <Navigate to='/404' />
    if (data) return <AdminEditInsuranceForm data={data} insuranceId={insuranceId} />
}
