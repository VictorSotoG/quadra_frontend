import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReservationById } from "../../../api/ReservationsAPI";

export default function ReservationDetails() {
    const params = useParams(); // Obtiene el ID de la URL
    const reservationId = params.reservationId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ['reservation', reservationId],
        queryFn: () => getReservationById(reservationId), // Llama a la API para obtener los detalles
    });

    if (isLoading) return <p>Cargando...</p>;
    if (isError) return <p>Error al cargar los detalles de la reserva.</p>;

    if( data ) return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Detalles de la Reserva</h1>
            <div className="bg-white shadow rounded-lg p-4">
                <p><strong>ID:</strong> {data._id}</p>
                <p><strong>Cliente ID:</strong> {data.cliente_id}</p>
                <p><strong>Vehículo ID:</strong> {data.vehiculo_id}</p>
                <p><strong>Estado:</strong> {data.estado}</p>
                <p><strong>Alquiler:</strong> {JSON.stringify(data.alquiler)}</p>
                <p><strong>Creado en:</strong> {data.createdAt}</p>
                <p><strong>Actualizado en:</strong> {data.updatedAt}</p>
            </div>
        </div>
    );
}