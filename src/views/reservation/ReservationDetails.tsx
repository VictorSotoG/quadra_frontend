import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReservationById } from "../../api/ReservationsAPI";
import { formatCurrency, formateDate } from "../../utils/utils";

export default function ReservationDetailsView() {
    const { reservationId } = useParams(); // Obtener el ID de la reserva desde la URL

    const { data, isLoading, isError } = useQuery({
        queryKey: ["reservation", reservationId],
        queryFn: () => getReservationById(reservationId!), // Llama a la API para obtener los detalles
    });

    if (isLoading) return <p>Cargando detalles de la reserva...</p>;
    if (isError) return <p>Error al cargar los detalles de la reserva.</p>;

   if (data)  
        return (
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-xl rounded-2xl space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Detalles de la Reserva</h2>

                {/* Información del Cliente */}
                <div className="p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Información del Cliente</h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                        <p><span className="font-medium">Nombre:</span> {data.nombre}</p>
                        <p><span className="font-medium">Teléfono:</span> {data.telefono}</p>
                        <p><span className="font-medium">Email:</span> {data.email}</p>
                        <p><span className="font-medium">Estado de la reserva:</span> {data.estado}</p>
                    </div>
                </div>

                {/* Información del Alquiler */}
                <div className="p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Detalles del Alquiler</h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                        <p><span className="font-medium">Fecha inicio:</span> {formateDate(data.fecha_inicio)}</p>
                        <p><span className="font-medium">Fecha fin:</span> {formateDate(data.fecha_fin)}</p>
                        <p><span className="font-medium">Estado:</span> {data.alquiler.estado}</p>
                        <p><span className="font-medium">Método de pago:</span> {data.alquiler.metodo_pago}</p>
                        <p><span className="font-medium">Monto:</span> {formatCurrency(data.alquiler.monto)}</p>
                    </div>
                </div>

                
                {/* Información del auto */}
                <div className="p-6 border border-gray-200 space-y-4">
                    {/* Imagen del auto */}
                    <div className="bg-sky-100 p-6 flex justify-center">
                        <img
                            src={`/autos/${data.vehiculo.imagen}.png`}
                            alt={data.vehiculo.modelo}
                            className="max-h-32 object-contain"
                        />
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        {data.vehiculo.modelo}
                        </h2>
                        <p className="text-3xl font-bold text-sky-800 mb-4">
                        <span className="text-lg text-gray-800 font-normal px-2">
                            Precio por dia:{" "}
                        </span>
                        {formatCurrency(data.vehiculo.precio_por_dia)}
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <div className="grid grid-cols-2 rounded-md gap-2">
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Marca:</strong>{" "}
                                    {data.vehiculo.marca}
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Año:</strong> {data.vehiculo.anio}
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Color:</strong>{" "}
                                    {data.vehiculo.color}
                                </p>
                                    <p className="text-gray-600">
                                    <strong className="text-gray-600">Tipo:</strong> {data.vehiculo.tipo}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Transmisión:</strong>{" "}
                                    {data.vehiculo.transmision}
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Puertas:</strong>{" "}
                                    {data.vehiculo.puertas}
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Asientos:</strong>{" "}
                                    {data.vehiculo.asientos}
                                </p>
                                <p className="text-gray-600">
                                    <strong className="text-gray-600">Clima:</strong>{" "}
                                    {data.vehiculo.clima ? "Con Clima" : "Sin Clima"}
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-2  rounded-lg">
                            <p className="text-gray-600">
                                <strong className="text-gray-600">Tipo:</strong>{" "}
                                {data.vehiculo.seguro.tipo}
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-gray-600">Cobertura:</strong>{" "}
                                {data.vehiculo.seguro.cobertura}
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-gray-600">Descripcion:</strong>{" "}
                                {data.vehiculo.seguro.descripcion}
                            </p>
                            <p className="text-gray-600">
                                <strong className="text-gray-600">Precio:</strong>{" "}
                                {formatCurrency(data.vehiculo.seguro.precio)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}