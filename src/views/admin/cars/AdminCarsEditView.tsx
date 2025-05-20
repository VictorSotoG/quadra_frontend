
import ErrorMessage from '../../../components/ErrorMessage'
import { useForm } from 'react-hook-form'

export default function AdminCarsEditView() {

    const initialValues = {
        marca: '',
        modelo: '',
        color: '',
        anio: 0,
        transmision: '',
        puertas: 0,
        asientos: 0,
        clima: '',
        tipo: '',
        precio_por_dia: 0,
        seguroId: 0,
        imagen: '',
        estado: '',
    }

    const { handleSubmit, register, formState: {errors}} = useForm({ defaultValues: initialValues})

    const handleRegister = (formData) => {}

    return (
        <>
            <div className=" max-w-2xl mx-auto p-10">
                <h2 className="text-2xl font-bold mb-8 text-gray-700">Editar Auto</h2>
                <div className="bg-white p-6 rounded-lg">
                    <form 
                        className="w-full"
                        noValidate
                        onSubmit={handleSubmit(handleRegister)}
                    >

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="marca"
                            >Marca</label>

                            <input
                                id="marca"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: Mazda Toyota"
                                {...register("marca", {
                                    required: "La marca del auto es obligatoria",
                                })}
                            />
                            {errors.marca && (
                                <ErrorMessage>{errors.marca.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="modelo"
                            >Modelo</label>

                            <input
                                id="modelo"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: Corolla, Focus"
                                {...register("modelo", {
                                    required: "El modelo es obligatorio"
                                })}
                            />
                            {errors.modelo && (
                                <ErrorMessage>{errors.modelo.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="color"
                            >Color</label>

                            <input
                                id="color"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: 4500"
                                {...register("color", {
                                    required: "El color es obligatorio"
                                })}
                            />
                            {errors.color && (
                                <ErrorMessage>{errors.color.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="anio"
                            >Año</label>

                            <input
                                id="anio"
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: 2023"
                                {...register("anio", {
                                    required: "El año del auto es obligatorio"
                                })}
                            />
                            {errors.anio && (
                                <ErrorMessage>{errors.anio.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="transmision"
                            >Transmision</label>

                            <select
                                id="transmision"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                {...register("transmision", {
                                    required: "La transmision del auto es obligatoria"
                                })}
                            >
                                <option>-- Seleccionar Transmision --</option>
                                <option>Manual</option>
                                <option>Automatica</option>
                            </select>
                            {errors.transmision && (
                                <ErrorMessage>{errors.transmision.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="puertas"
                            >Puertas</label>

                            <input
                                id="puertas"
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: 2, 4"
                                {...register("puertas", {
                                    required: "Las puertas del auto son obligatorias"
                                })}
                            />
                            {errors.puertas && (
                                <ErrorMessage>{errors.puertas.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="asientos"
                            >Asientos</label>

                            <input
                                id="asientos"
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: 2, 4"
                                {...register("asientos", {
                                    required: "Los asientos del auto son obligatorios"
                                })}
                            />
                            {errors.asientos && (
                                <ErrorMessage>{errors.asientos.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="clima"
                            >Clima</label>

                            <select
                                id="clima"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                {...register("clima", {
                                    required: "El clima es obligatorio"
                                })}
                            >
                                <option>-- Seleccione si o no --</option>
                                <option>Si</option>
                                <option>No</option>
                            </select>
                            {errors.clima && (
                                <ErrorMessage>{errors.clima.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="tipo"
                            >Tipo de Auto</label>

                            <input
                                id="tipo"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: Sedan, SUV"
                                {...register("tipo", {
                                    required: "El tipo de auto es obligatorio"
                                })}
                            />
                            {errors.tipo && (
                                <ErrorMessage>{errors.tipo.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="precio_por_dia"
                            >Precio por dia</label>

                            <input
                                id="precio_por_dia"
                                type="number"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ej: 2, 4"
                                {...register("precio_por_dia", {
                                    required: "El precio por dia es obligatorio"
                                })}
                            />
                            {errors.precio_por_dia && (
                                <ErrorMessage>{errors.precio_por_dia.message}</ErrorMessage>
                            )}
                        </div>

                        

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="tipo"
                            >Estado del Auto</label>

                            <select
                                id="estado"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                {...register("tipo", {
                                    required: "El tipo de auto es obligatorio"
                                })}
                            >
                                <option value="">-- Seleccionar estado del vehiculo --</option>
                                <option value="">Disponible</option>
                                <option value="">En espera</option>
                                <option value="">No disponible</option>
                            </select>
                            {errors.tipo && (
                                <ErrorMessage>{errors.tipo.message}</ErrorMessage>
                            )}
                        </div>

                        <button 
                            type="submit"
                            className="relative group w-full text-white font-bold py-3 rounded-lg overflow-hidden mt-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-blue-500 transition-opacity duration-1000 group-hover:opacity-0"></div>
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
                            
                            <span className="relative z-10">Editar Auto</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
