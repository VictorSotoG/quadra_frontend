import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReservationById } from "../../../api/ReservationsAPI";

export default function ReservationDetails() {
  const params = useParams(); // Obtiene el ID de la URL
  const reservationId = params.reservationId!;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["reservation", reservationId],
    queryFn: () => getReservationById(reservationId), // Llama a la API para obtener los detalles
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar los detalles de la reserva.</p>;

  if (data)
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-sky-700 mb-6 flex items-center">
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
              data.estado === "pendiente"
                ? "bg-amber-100"
                : data.estado === "pagado"
                ? "bg-green-100"
                : "bg-red-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">
                Reserva #{data._id}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  data.estado === "pendiente"
                    ? "bg-amber-500 text-white"
                    : data.estado === "pagado"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {data.estado}
              </span>
            </div>
          </div>

          {/* Cuerpo de la tarjeta */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sección izquierda - Información básica */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Cliente</h3>
                  <p className="text-lg font-semibold">ID: {data.cliente_id}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Período de alquiler
                  </h3>
                  <p className="text-lg font-semibold">
                    {new Date(data.fecha_inicio).toLocaleDateString()} -{" "}
                    {new Date(data.fecha_fin).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    (
                    {Math.floor(
                      (new Date(data.fecha_fin).getTime() -
                        new Date(data.fecha_inicio).getTime()) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    días)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Seguro</h3>
                  <p className="text-lg font-semibold">ID: {data.seguro_id}</p>
                </div>
              </div>
            </div>

            {/* Sección derecha - Información de pago */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  Información de Pago
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monto:</span>
                    <span className="font-bold text-green-700">
                      ${data.alquiler.monto.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Método:</span>
                    <span className="font-medium capitalize">
                      {data.alquiler.metodo_pago}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estado:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        data.alquiler.estado === "pendiente"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {data.alquiler.estado}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fecha pago:</span>
                    <span>
                      {new Date(data.alquiler.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Metadatos
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Creado:</span>
                    <span>{new Date(data.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Actualizado:</span>
                    <span>{new Date(data.updatedAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer con acciones */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
            <button className="px-4 py-2 bg-sky-600 rounded-lg text-white hover:bg-sky-700 transition">
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
