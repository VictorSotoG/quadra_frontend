import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserLoginForm } from "../../types";
import ErrorMessage from "../../components/ErrorMessage";

export default function LoginView() {

  const initialValues: UserLoginForm = {
    email: "",
    password: ""
  }

  const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: initialValues})

  const handleLogin = (formData: UserLoginForm) => {

  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Inicia sesión</h2>
      <form 
        className="w-96 max-w-md"
        noValidate
        onSubmit={handleSubmit(handleLogin)}
      >
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

        <div className="mb-6">
            <label 
              className="block text-gray-700 mb-2" 
              htmlFor="password"
            >Contraseña</label>

            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es obligatoria"
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
        </div>

        {/* <button
            type="submit"
            className="w-full bg-gradient-to-l from-blue-300 to-blue-500 hover:bg-gradient-to-r transition-colors duration-1000 text-white font-bold py-2 rounded-lg "
        >
            Iniciar sesión
        </button> */}

        <button 
          type="submit"
          className="relative group w-full text-white font-bold py-2 rounded-lg overflow-hidden">
          {/* Capa de fondo inicial */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-blue-500 transition-opacity duration-1000 group-hover:opacity-0"></div>
          {/* Capa de fondo para el hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
          {/* Contenido del botón */}
          <span className="relative z-10">Iniciar sesión</span>
        </button>
      </form>
      <nav className="flex flex-col text-sm text-gray-700 mt-4">
        <Link
          to={'/auth/forgot-password'}
          className="text-blue-500 font-semibold text-center mb-6"
        >Olvide mi contraseña</Link>
        <Link
          to={'/auth/register'}
        >¿No tienes una cuenta? <span className="text-blue-500 font-semibold">Registrarse</span></Link>
      </nav>
    </>
  )
}
