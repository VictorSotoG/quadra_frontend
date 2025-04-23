import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../../api/CarsAPI";
import { formatCurrency } from "../../../utils/utils";
import { getMaintenancesByVehicleId } from "../../../api/MaintenanceAPI";

export default function AdminCarDetails() {
    const params = useParams(); // Obtiene el ID de la URL
    const carId = +params.carId!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['car', carId],
        queryFn: () => getCarById(carId), // Llama a la API para obtener los detalles
    });

    // Consulta para obtener los mantenimientos del vehículo
    const { data: maintenanceData, isLoading: isMaintenanceLoading, isError: isMaintenanceError } = useQuery({
        queryKey: ['maintenance', carId],
        queryFn: () => getMaintenancesByVehicleId(carId),
    });

    if (isLoading) return <p className="text-center text-lg">Cargando...</p>;
    if (isError) return <p className="text-center text-lg text-red-500">Error al cargar los detalles del auto.</p>;

    if (data) {
        return (
            <>
                <h1 className="text-3xl font-bold text-gray-800 mx-10 mt-10">Detalles del Auto</h1>
                <div className="p-10 flex gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                        {/* Imagen del auto */}
                        <div className="bg-sky-100 p-6 flex justify-center">
                            <img
                                src={`/autos/${data.imagen}.png`}
                                alt={data.modelo}
                                className="max-h-60 object-contain"
                            />
                        </div>

                        {/* Información del auto */}
                        <div className="p-6">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.modelo}</h2>
                                <p 
                                    className="text-3xl font-bold text-sky-800 mb-4"
                                >
                                    <span className="text-lg text-gray-800 font-normal px-2">Precio por dia: </span>
                                    {formatCurrency(data.precio_por_dia)}
                                </p>
                            </div>
                            <div className="flex gap-6">
                                <div className="grid grid-cols-2  p-4 border-r border-gray-300">
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Marca:</strong> {data.marca}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Año:</strong> {data.anio}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Color:</strong> {data.color}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Tipo:</strong> {data.tipo}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Transmisión:</strong> {data.transmision}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Puertas:</strong> {data.puertas}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Asientos:</strong> {data.asientos}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Clima:</strong> {data.clima ? 'Con Clima' : 'Sin Clima'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 space-y-2  rounded-lg">
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Tipo:</strong> {data.seguro.tipo}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Cobertura:</strong> {data.seguro.cobertura}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Descripcion:</strong> {data.seguro.descripcion}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Precio:</strong> {formatCurrency(data.seguro.precio)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Información adicional */}
                        <div className="bg-gray-200 p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Adicional</h3>
                            <p className="text-gray-600 mb-2">
                                <strong>Creado en:</strong> {new Date(data.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                                <strong>Actualizado en:</strong> {new Date(data.updatedAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    {/* Información de mantenimientos */}
                    <div className="p-6 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 overflow-y-scroll">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mantenimientos</h3>
                        {maintenanceData?.mantenimientos?.length > 0 ? (
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tipo</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Costo</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Kilometraje</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Estado</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Notas</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {maintenanceData.mantenimientos.map((mantenimiento: any) => (
                                        <tr key={mantenimiento._id}>
                                            <td className="px-4 py-2 text-gray-600">{mantenimiento.tipo}</td>
                                            <td className="px-4 py-2 text-gray-600">{formatCurrency(mantenimiento.costo)}</td>
                                            <td className="px-4 py-2 text-gray-600">{mantenimiento.kilometraje} km</td>
                                            <td className="px-4 py-2 text-gray-600">{mantenimiento.status}</td>
                                            <td className="px-4 py-2 text-gray-600">{mantenimiento.notas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-gray-600">No hay mantenimientos registrados para este vehículo.</p>
                        )}
                    </div>
                </div>
            </>
            
        );
    }

    return null;
}