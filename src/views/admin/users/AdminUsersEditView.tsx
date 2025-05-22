
import ErrorMessage from '../../../components/ErrorMessage'
import { useForm } from 'react-hook-form'

export default function AdminUsersEditView() {

    const initialValues = {
        nombre: '',
        email: '',
        password: '',   
        password_confirmation: '',   
        role: ''
    }

    const { handleSubmit, register, formState: {errors}} = useForm({ defaultValues: initialValues})

    const handleRegister = (formData) => { console.log(formData)}

    return (
        <>
            <div className=" max-w-2xl mx-auto p-10">
                <h2 className="text-2xl font-bold mb-8 text-gray-700">Editar Usuario</h2>
                <div className="bg-white p-6 rounded-lg">
                    <form 
                        className="w-full"
                        noValidate
                        onSubmit={handleSubmit(handleRegister)}
                    >

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="nombre"
                            >Nombre</label>

                            <input
                                id="nombre"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ingrese su nombre"
                                {...register("nombre", {
                                    required: "El nombre es obligatorio",
                                })}
                            />
                            {errors.nombre && (
                                <ErrorMessage>{errors.nombre.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="email"
                            >Correo Electronico</label>

                            <input
                                id="email"
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ingrese su correo electronico"
                                {...register("email", {
                                    required: "El correo electronico es obligatorio"
                                })}
                            />
                            {errors.email && (
                                <ErrorMessage>{errors.email.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="password"
                            >Contraseña</label>

                            <input
                                id="color"
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ingrese una contraseña"
                                {...register("password", {
                                    required: "La contraseña es obligatoria"
                                })}
                            />
                            {errors.password && (
                                <ErrorMessage>{errors.password.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="password_confirmation"
                            >Confirmar Contraseña</label>

                            <input
                                id="password_confirmation"
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                placeholder="Ingrese una contraseña"
                                {...register("password", {
                                    required: "La confirmacion de la contraseña es obligatoria"
                                })}
                            />
                            {errors.password_confirmation && (
                                <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="mb-4">
                            <label 
                                className="block text-gray-700 mb-2" 
                                htmlFor="role"
                            >Rol</label>

                            <select
                                id="role"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                {...register("role", {
                                    required: "El Rol del Usuario es obligatorio"
                                })}
                            >
                                <option>-- Seleccionar Transmision --</option>
                                <option>Administrador</option>
                                <option>Cliente</option>
                            </select>
                            {errors.role && (
                                <ErrorMessage>{errors.role.message}</ErrorMessage>
                            )}
                        </div>


                        <button 
                            type="submit"
                            className="relative group w-full text-white font-bold py-3 rounded-lg overflow-hidden mt-6"
                        >
                            <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-blue-500 transition-opacity duration-1000 group-hover:opacity-0"></div>
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
                            
                            <span className="relative z-10">Editar Usuario</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
