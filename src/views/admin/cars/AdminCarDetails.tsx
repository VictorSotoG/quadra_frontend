import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../../../api/CarsAPI";

export default function AdminCarDetails() {
    const params = useParams(); // Obtiene el ID de la URL
    const carId = +params.carId!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['car', carId],
        queryFn: () => getCarById(carId), // Llama a la API para obtener los detalles
    });

    if (isLoading) return <p className="text-center text-lg">Cargando...</p>;
    if (isError) return <p className="text-center text-lg text-red-500">Error al cargar los detalles del auto.</p>;

    if (data) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Detalles del Auto</h1>
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
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{data.modelo}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <p className="text-gray-600">
                                <strong>Marca:</strong> {data.marca}
                            </p>
                            <p className="text-gray-600">
                                <strong>Año:</strong> {data.anio}
                            </p>
                            <p className="text-gray-600">
                                <strong>Color:</strong> {data.color}
                            </p>
                            <p className="text-gray-600">
                                <strong>Tipo:</strong> {data.tipo}
                            </p>
                            <p className="text-gray-600">
                                <strong>Transmisión:</strong> {data.transmision}
                            </p>
                            <p className="text-gray-600">
                                <strong>Combustible:</strong> {data.combustible}
                            </p>
                            <p className="text-gray-600">
                                <strong>Puertas:</strong> {data.puertas}
                            </p>
                            <p className="text-gray-600">
                                <strong>Asientos:</strong> {data.asientos}
                            </p>
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
            </div>
        );
    }

    return null;
}