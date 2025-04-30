import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../../api/CarsAPI";
import { formatCurrency } from "../../../utils/utils";
import { getMaintenancesByVehicleId } from "../../../api/MaintenanceAPI";

export default function AdminCarDetails() {
    const params = useParams(); // Obtiene el ID de la URL
    const carId = +params.carId!;

    const { data: carData, isLoading: isCarLoading, isError: isCarError } = useQuery({
        queryKey: ['car', carId],
        queryFn: () => getCarById(carId), // Llama a la API para obtener los detalles
    });

    // Consulta para obtener los mantenimientos del vehículo
    const { data: maintenanceData, isLoading: isMaintenanceLoading, isError: isMaintenanceError } = useQuery({
        queryKey: ['maintenance', carId],
        queryFn: () => getMaintenancesByVehicleId(carId),
    });

    if (isCarLoading && isMaintenanceLoading) return <p className="text-center text-lg">Cargando...</p>;
    if (isCarError && isMaintenanceError) return <p className="text-center text-lg text-red-500">Error al cargar los detalles del auto.</p>;

    if (carData) {
        return (
            <>
                <h1 className="text-3xl font-bold text-gray-800 mx-6 mt-6">Detalles del Auto</h1>
                <div className="p-6 flex gap-6">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                        {/* Imagen del auto */}
                        <div className="bg-sky-100 p-2 flex justify-center">
                            <img
                                src={`/autos/${carData.imagen}.png`}
                                alt={carData.modelo}
                                className="max-h-40 object-contain"
                            />
                        </div>

                        {/* Información del auto */}
                        <div className="p-6">
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">{carData.modelo}</h2>
                                <p 
                                    className="text-2xl font-bold text-sky-800 mb-4"
                                >
                                    <span className="text-lg text-gray-800 font-normal px-2">Precio por dia: </span>
                                    {formatCurrency(carData.precio_por_dia)}
                                </p>
                            </div>
                            <div className="flex gap-6">
                                <div className="grid grid-cols-2  p-4 border-r border-gray-300">
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Marca:</strong> {carData.marca}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Año:</strong> {carData.anio}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Color:</strong> {carData.color}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Tipo:</strong> {carData.tipo}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Transmisión:</strong> {carData.transmision}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Puertas:</strong> {carData.puertas}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Asientos:</strong> {carData.asientos}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-600">Clima:</strong> {carData.clima ? 'Con Clima' : 'Sin Clima'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 p-4 space-y-2 rounded-lg">
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Tipo:</strong> {carData.seguro.tipo}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Cobertura:</strong> {carData.seguro.cobertura}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Descripcion:</strong> {carData.seguro.descripcion}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong className="text-gray-600">Precio:</strong> {formatCurrency(carData.seguro.precio)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Información adicional */}
                        <div className="bg-gray-200 p-4 flex justify-center gap-8">
                            <p className="text-gray-600 mb-1">
                                <strong>Creado en:</strong> {new Date(carData.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">
                                <strong>Actualizado en:</strong> {new Date(carData.updatedAt).toLocaleDateString()}
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