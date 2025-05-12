import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserRegistrationForm } from "../../types";
import ErrorMessage from "../../components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { createAccount } from "../../api/AuthAPI";
import { toast } from "react-toastify";

export default function RegisterView() {

    const initialValues: UserRegistrationForm = {
        name: "",
        email: "",
        telefono: "",
        password: "",
        password_confirmation: ""
    }

    const { register, handleSubmit, watch, reset, formState: {errors} } = useForm({ defaultValues: initialValues})

    const { mutate } = useMutation({
        mutationFn: createAccount,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data);
            reset()
        }
    })

    const password = watch('password');

    const handleRegister = (formData: UserRegistrationForm) => mutate(formData)

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Registro de Cuenta</h2>
            <p className="text-lg font-light text-gray-900 mb-10">
                Llena el formulario para {''}
                <span className=" text-blue-500 font-bold"> crear tu cuenta</span>
            </p>
            <form 
                className="w-full max-w-md"
                noValidate
                onSubmit={handleSubmit(handleRegister)}
            >

                <div className="mb-4">
                    <label 
                        className="block text-gray-700 mb-2" 
                        htmlFor="name"
                    >Nombre</label>

                    <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese su nombre"
                        {...register("name", {
                            required: "El Nombre de Usuario es obligatorio",
                        })}
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </div>

                <div className="mb-4">
                    <label 
                        className="block text-gray-700 mb-2" 
                        htmlFor="email"
                    >Correo electrónico</label>

                    <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="correo@ejemplo.com"
                        {...register("email", {
                            required: "El Correo Electronico es obligatorio",
                            pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Correo Electronico no valido"
                            }
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <div className="mb-4">
                    <label 
                        className="block text-gray-700 mb-2" 
                        htmlFor="telefono"
                    >Telefono</label>

                    <input
                        id="telefono"
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese su telefono"
                        {...register("telefono", {
                            required: "El Telefono es obligatorio",
                        })}
                    />
                    {errors.telefono && (
                        <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                    )}
                </div>

                <div className="mb-4">
                    <label 
                        className="block text-gray-700 mb-2" 
                        htmlFor="password"
                    >Contraseña</label>

                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese una contraseña"
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe ser de minimo 8 caracteres"
                            }
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <div className="mb-6">
                    <label 
                        className="block text-gray-700 mb-2" 
                        htmlFor="password_confirmation"
                    >Repetir Contraseña</label>

                    <input
                        type="password"
                        id="password_confirmation"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingrese nuevamente la contraseña"
                        {...register("password_confirmation", {
                            required: "Repetir la contraseña es obligatorio",
                            validate: value => value === password || 'Las contraseñas no son iguales'
                        })}
                    />
                    {errors.password_confirmation && (
                        <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                    )}
                </div>


                <button 
                    type="submit"
                    className="relative group w-full text-white font-bold py-2 rounded-lg overflow-hidden"
                >
                    {/* Capa de fondo inicial */}
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-blue-500 transition-opacity duration-1000 group-hover:opacity-0"></div>
                    {/* Capa de fondo para el hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
                    {/* Contenido del botón */}
                    <span className="relative z-10">Crear Cuenta</span>
                </button>
            </form>

            <nav className="flex flex-col text-sm text-gray-700 mt-8">
                {/* <Link
                    to={'/auth/forgot-password'}
                    className="text-blue-500 font-semibold text-center mb-6"
                >Olvide mi contraseña</Link> */}
                <Link
                    to={'/auth/login'}
                >¿Ya tienes una cuenta? <span className="text-blue-500 font-semibold">Inicia Sesion</span></Link>
            </nav>
        </>
    )
}
