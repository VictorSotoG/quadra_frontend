import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReservationById } from "../../../api/ReservationsAPI";
import { formatCurrency, formateDate } from "../../../utils/utils";

export default function AdminReservationDetails() {
  const params = useParams(); // Obtiene el ID de la URL
  const reservationId = params.reservationId!;

  const { data: reservationData, isLoading, isError } = useQuery({
    queryKey: ["reservation", reservationId],
    queryFn: () => getReservationById(reservationId), // Llama a la API para obtener los detalles
  });

  if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
  if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar los detalles de las reservas.</p>;

  if (reservationData) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-sky-700 mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Detalles de la Reserva
        </h1>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header con estado */}
          <div
            className={`px-6 py-4 ${
              reservationData.estado === "Vehiculo En Proceso de Entrega"
                ? "bg-amber-100"
                : reservationData.estado === "Vehiculo Entregado"
                ? "bg-green-100"
                : "bg-red-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-md font-semibold text-gray-800">
                Reserva #{reservationData._id}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  reservationData.estado === "Vehiculo En Proceso de Entrega"
                    ? "bg-amber-500 text-white"
                    : reservationData.estado === "Vehiculo Entregado"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {reservationData.estado}
              </span>
            </div>
          </div>

          {/* Cuerpo de la tarjeta */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sección izquierda - Información básica */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <img src="/iconos/icono-usuario-purple.png" width={24}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Cliente</h3>
                  <p className="text-sm"><strong>Nombre:</strong> {reservationData.usuario.nombre}</p>
                  <p className="text-sm"><strong>Email:</strong> {reservationData.usuario.email}</p>
                  <p className="text-sm"><strong>Telefono:</strong> {reservationData.usuario.telefono}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-lg mr-4">
                  <img src="/iconos/icono-carro-blue.png" alt="" width={24}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Vehiculo</h3>
                  <div className="flex gap-8">
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Marca:</strong> {reservationData.vehiculo.marca}</p>
                      <p className="text-sm"><strong>Modelo:</strong> {reservationData.vehiculo.modelo}</p>
                      <p className="text-sm"><strong>Año:</strong> {reservationData.vehiculo.anio}</p>
                      <p className="text-sm"><strong>Color:</strong> {reservationData.vehiculo.color}</p>
                      <p className="text-sm"><strong>Transmision:</strong> {reservationData.vehiculo.transmision}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Tipo:</strong> {reservationData.vehiculo.tipo}</p>
                      <p className="text-sm"><strong>Puertas:</strong> {reservationData.vehiculo.puertas}</p>
                      <p className="text-sm"><strong>Asientos:</strong> {reservationData.vehiculo.asientos}</p>
                      <p className="text-sm"><strong>Clima:</strong> {reservationData.vehiculo.clima ? 'Con Clima' : 'Sin Clima'}</p>
                      <p className="text-sm"><strong>Precio Por Dia:</strong> {formatCurrency(reservationData.vehiculo.precio_por_dia)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-lg mr-4">
                  <img src="/iconos/icono-seguro-sky.png" alt="" width={32}/>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Seguro</h3>
                  <p className="text-sm"><strong>Tipo:</strong> {reservationData.vehiculo.seguro.tipo}</p>
                  <p className="text-sm"><strong>Cobertura:</strong> {reservationData.vehiculo.seguro.cobertura}</p>
                  <p className="text-sm"><strong>Precio:</strong> {formatCurrency(reservationData.vehiculo.seguro.precio)}</p>
                  <p className="text-sm"><strong>Descripcion:</strong> {reservationData.vehiculo.seguro.descripcion}</p>
                </div>
              </div>
            </div>

            {/* Sección derecha - Información de pago */}
            <div className="space-y-4">
            <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 ">
                  <img src="/iconos/icono-calendario-green.png" alt="" width={24}/>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Período de alquiler
                  </h3>
                  <p className="text-md font-semibold">
                    {formateDate(reservationData.fecha_inicio)} -{" "} {formateDate(reservationData.fecha_fin)}
                  </p>
                  <p className="text-sm text-gray-500">
                    (
                    {Math.floor(
                      (new Date(reservationData.fecha_fin).getTime() -
                        new Date(reservationData.fecha_inicio).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    días)
                  </p>
                </div>
              </div>
              <div 
                // className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
                className={`px-4 py-3 rounded-xl font-medium ${
                        reservationData.alquiler.estado === "No Pagado"
                          ? "border border-amber-200 bg-amber-50 text-amber-800"
                          : "border border-green-200 bg-green-100 text-green-800"
                      }`}>
                <h3 
                  className={`text-md font-semibold mb-3
                    ${reservationData.alquiler.estado === "No Pagado"
                      ? "text-amber-800"
                      : "text-green-800"}
                  `}
                >
                  Información de Pago
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monto:</span>
                    <span 
                      // className="font-bold text-green-700"
                      className={`text-md font-semibold
                        ${reservationData.alquiler.estado === "No Pagado"
                          ? "text-amber-800"
                          : "text-green-800"}
                      `}
                    >
                      {formatCurrency(reservationData.alquiler.monto)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Método:</span>
                    <span className="font-medium capitalize">
                      {reservationData.alquiler.metodo_pago}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Estado:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        reservationData.alquiler.estado === "No Pagado"
                          ? "bg-amber-200 text-amber-800"
                          : "bg-green-200 text-green-800"
                      }`}
                    >
                      {reservationData.alquiler.estado}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    {reservationData.alquiler.estado === "No Pagado" ? (
                      ''
                    ) : (
                      <div>
                        <span className="text-sm text-gray-600">Fecha pago:</span>
                        <span>
                          {formateDate(reservationData.updatedAt)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="text-md font-semibold text-gray-800 mb-3">
                  Informacion
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Creado:</span>
                    <span>{new Date(reservationData.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Actualizado:</span>
                    <span>{new Date(reservationData.updatedAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer con acciones */}
          <div className="px-6 py-2 bg-gray-50 border-t flex justify-end space-x-3">
            <button className="text-sm px-4 py-2 bg-sky-600 rounded-lg text-white hover:bg-sky-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Editar reserva
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
