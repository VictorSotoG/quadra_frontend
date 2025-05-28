import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCarById } from "../../api/CarsAPI";
import ReservedCar from "../../components/Cars/ReservedCar";
import React, { useState } from "react";
import { createReservation } from "../../api/ReservationsAPI";
import { toast } from "react-toastify";
// import { ReservationFormDataType } from "../types";

type ReservationFormData = {
  nombre: string;
  email: string;
  telefono: string;
  fechaInicio: string;
  fechaFin: string;
  metodoPago: string;
};

export default function ReservationView() {
    const params = useParams(); 
    const carId = +params.carId!;

    const navigate = useNavigate()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['car', carId],
        queryFn: () => getCarById(carId), // Llama a la API para obtener los detalles
    });

    const initialValues : ReservationFormData = {
        nombre: '',
        telefono: '',
        email: '',
        fechaInicio: '',
        fechaFin: '',
        metodoPago: ''
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues});

    const [ fechaInicio, setFechaInicio ] = useState<string>("");
    const [ fechaFin, setFechaFin ] = useState<string>("");

    const handleFechaInicioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFechaInicio(e.target.value);
        console.log(fechaInicio)
    }

    const handleFechaFinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFechaFin(e.target.value);
        console.log(fechaFin)
    }

     // Calcular diferencia de dias
     const calcularDias = () => {
        if (!fechaInicio || !fechaFin) return 0;
        const inicio = new Date(fechaInicio);
        const fin = new Date(fechaFin);
        const diferencia = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
        return diferencia > 0 ? diferencia : 0;
    }

    const dias = calcularDias();
    const costoTotal = dias * (data?.precio_por_dia ?? 0);

    
    const { mutate } = useMutation({
        mutationFn: createReservation,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (response) => {
            toast.success(response.message)
            navigate(`/reservationDetails/${response.id}`);
        }
    })

    const onSubmit = async (formData: ReservationFormData) => {
        const data = {
            nombre: formData.nombre,
            email: formData.email,
            telefono: formData.telefono,
            vehiculo_id: carId,
            fecha_inicio: formData.fechaInicio,
            fecha_fin: formData.fechaFin,
            alquiler: {
                monto: costoTotal,
                metodo_pago: formData.metodoPago
            }
        }
        // console.log(data)
        mutate(data)
    };

    if (isLoading) return <p className="mt-10 text-center text-lg font-semibold">Cargando...</p>;
    if (isError) return <p className="mt-10 text-center text-lg font-semibold text-red-500">Error al cargar los datos.</p>;
  
    return (
        <div className="max-w-[1500px] flex gap-8 mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <div className="w-1/2">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Reservar Vehículo</h1>
                <p className="text-gray-600 mb-4">
                        Ingrese su informacion y confirme el vehiculo a rentar
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex gap-4">
                        {/* Nombre */}
                        <div className="w-1/2">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ingrese su nombre completo"
                                {...register("nombre", { 
                                    required: "El nombre es obligatorio" })}
                                    className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                                    errors.nombre ? "border-red-500" : ""
                                }`}
                            />
                            {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
                        </div>
                        {/* Teléfono */}
                        <div className="w-1/2">
                            <label 
                                htmlFor="telefono" 
                                className="block text-sm font-medium text-gray-700"
                            >Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                placeholder="Ingrese su telefono. Ej: 55456798"
                                {...register("telefono", 
                                    { required: "El teléfono es obligatorio", pattern: { value: /^[0-9]+$/, message: "Teléfono inválido" } })}
                                    className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.telefono ? "border-red-500" : ""}`    
                                }
                            />
                            {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingrese su correo electronico. Ej: correo@correo.com"
                            {...register("email", 
                                { required: "El correo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" } })}
                                className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${ errors.email ? "border-red-500" : ""
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    

                    {/* Fecha de inicio */}
                    <div>
                        <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-700">Fecha de Inicio</label>
                        <input
                            type="date"
                            id="fechaInicio"
                            {...register("fechaInicio", 
                                { required: "La fecha de inicio es obligatoria" })}
                                value={fechaInicio}
                                onChange={handleFechaInicioChange}
                                className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${errors.fechaInicio ? "border-red-500" : ""}`
                            }
                        />
                        {errors.fechaInicio && <p className="text-red-500 text-sm mt-1">{errors.fechaInicio.message}</p>}
                    </div>

                    {/* Fecha de fin */}
                    <div>
                        <label 
                            htmlFor="fechaFin" 
                            className="block text-sm font-medium text-gray-700"
                        >Fecha de Fin</label>
                        <input
                            type="date"
                            id="fechaFin"
                            {...register("fechaFin", { required: "La fecha final es obligatoria" })}
                            value={fechaFin}
                            onChange={handleFechaFinChange}
                            className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
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
                            className={`mt-2 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
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
                    <p className="text-center text-gray-700">Confirme sus datos antes de reservar</p>
                    {/* Botón de enviar */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className=" text-lg w-72 h-12 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                        >
                            Reservar Auto
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                {data && (
                    <ReservedCar 
                        data={data} 
                        fechaInicio={fechaInicio}
                        fechaFin={fechaFin}
                        dias={dias}
                        costoTotal={costoTotal}
                    />
                )}
            </div>
        </div>
    );
}
