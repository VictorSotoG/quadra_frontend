import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../api/CarsAPI";

type ReservationFormData = {
  nombre: string;
  email: string;
  telefono: string;
  fechaInicio: string;
  fechaFin: string;
  metodoPago: string;
};

export default function Reserve() {
    const params = useParams(); 
    const carId = +params.carId!;

    const { data, isLoading, isError } = useQuery({
        queryKey: ['car', carId],
        queryFn: () => getCarById(carId), // Llama a la API para obtener los detalles
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm<ReservationFormData>();

    const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
        console.log("Datos de la reserva:", { ...data, vehiculoId: carId });
        // Aquí puedes enviar los datos al backend
    };

    // const { mutate } = useMutation({
    //     mutationFn: createProject,
    //     onError: (error) => {
    //         toast.error(error.message)
    //     },
    //     onSuccess: (response) => {
    //         toast.success(response)
    //         navigate('/')
    //     }
    // })

    // const handleForm = async (data : ProjectFormData) => mutate(data)


    return (
        <div className="max-w-4xl mx-auto my-20 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Reservar Vehículo</h1>
            <p 
                className="text-gray-600 mb-4"
            >
                    Estás reservando el vehículo: 
                    <strong>{` ${data?.marca} ${data?.modelo}`}</strong>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        {...register("nombre", { 
                            required: "El nombre es obligatorio" })}
                            className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                            errors.nombre ? "border-red-500" : ""
                        }`}
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", 
                            { required: "El correo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" } })}
                            className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${ errors.email ? "border-red-500" : ""
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        {...register("telefono", 
                            { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]+$/, message: "Teléfono inválido" } })}
                            className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.telefono ? "border-red-500" : ""}`    
                        }
                    />
                    {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
                </div>

                {/* Fecha de inicio */}
                <div>
                    <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
                    <input
                        type="date"
                        id="fechaInicio"
                        {...register("fechaInicio", 
                            { required: "La fecha de inicio es obligatoria" })}
                            className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.fechaInicio ? "border-red-500" : ""}`
                    }
                    />
                    {errors.fechaInicio && <p className="text-red-500 text-sm mt-1">{errors.fechaInicio.message}</p>}
                </div>

                {/* Fecha de fin */}
                <div>
                    <label htmlFor="fechaFin" className="block text-sm font-medium text-gray-700">Fecha de Fin</label>
                    <input
                        type="date"
                        id="fechaFin"
                        {...register("fechaFin", { required: "La fecha final es obligatoria" })}
                        className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                        errors.fechaFin ? "border-red-500" : ""
                        }`}
                    />
                    {errors.fechaFin && <p className="text-red-500 text-sm mt-1">{errors.fechaFin.message}</p>}
                </div>

                {/* Método de pago */}
                <div>
                    <label htmlFor="metodoPago" className="block text-sm font-medium text-gray-700">Método de Pago</label>
                    <select
                        id="metodoPago"
                        {...register("metodoPago", { required: "El método de pago es obligatorio" })}
                        className={`mt-2 p-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                        errors.metodoPago ? "border-red-500" : ""
                        }`}
                    >
                        <option value="">Selecciona un método de pago</option>
                        <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="transferencia">Transferencia Bancaria</option>
                    </select>
                    {errors.metodoPago && <p className="text-red-500 text-sm mt-1">{errors.metodoPago.message}</p>}
                </div>

                {/* Botón de enviar */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                    >
                        Reservar
                    </button>
                </div>
            </form>
        </div>
    );
}
