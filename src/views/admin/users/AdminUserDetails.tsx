import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../api/UsersAPI";
import { formateDate } from "../../../utils/utils";

export default function AdminUserDetails() {
    const params = useParams();
    const userId = +params.userId!;

    const { data: userData, isLoading, isError } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUserById(userId),
    });

    if (isLoading) return <p className="text-center text-lg">Cargando...</p>;
    if (isError) return <p className="text-center text-lg text-red-500">Error al cargar los detalles del Usuario.</p>;

    if (userData) {
        return (
            <>
                <div className="p-6 max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Detalles del Usuario</h1>
                    <div className="p-6 bg-white shadow-md rounded-lg">
                        <div className="flex gap-6 ">
                            {/* Imagen del usuario */}
                            <div className="w-1/3 flex justify-center items-center">
                                <img
                                    src={`/usuarios/${userData.imagen}`}
                                    alt={`${userData.nombre}`}
                                    className="w-64 h-64 rounded-full object-cover border border-gray-300"
                                />
                            </div>
                            {/* Información del usuario */}
                            <div className="flex-1">
                                <div className="">
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <strong className="text-gray-800">Nombre:</strong> {userData.nombre}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-800">Correo Electrónico:</strong> {userData.email}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-800">Rol:</strong> {userData.role}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong className="text-gray-800">Confirmado:</strong> {userData.confirmado ? "Sí" : "No"}
                                        </p>
                                    </div>
                                </div>

                                {/* Información adicional */}
                                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Adicional</h3>
                                    <p className="text-gray-600 mb-2">
                                        <strong>Creado en:</strong> {formateDate(userData.createdAt)}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Actualizado en:</strong> {formateDate(userData.updatedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
                
        );
    }

    return null;
}

