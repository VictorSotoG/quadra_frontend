import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";
import { ForgotPasswordForm } from "../../types";
import { forgotPassword } from "../../api/AuthAPI";

export default function ForgotPasswordView() {

  const initialValues : ForgotPasswordForm = {
    email: ''
  }

  const { register, handleSubmit, reset, formState: {errors} } = useForm({ defaultValues: initialValues })

  const { mutate } = useMutation({
    mutationFn: forgotPassword,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
      reset()
    }
  })

  const handleForgotPassword = (formData : ForgotPasswordForm) => mutate(formData)

  return (
    <>
      <h1 className="text-center font-black text-xl text-gray-800">Reestablecer Contraseña</h1>
      <p className="text-md text-gray-700 text-center mt-8">
        ¿Olvidaste tu contraseña? Introduce tu correo y {''}
        <span className="text-blue-400 font-bold">reestablecela ahora</span>
      </p>

      <form 
        onSubmit={handleSubmit(handleForgotPassword)}
        className="space-y-5 w-full my-8 text-md"
        noValidate
      >
        <div className="flex flex-col">
          <label 
            htmlFor="email"
            className="mb-2"
          >
            Correo Electronico
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Correo Electronico de registro"
            className="border border-gray-300 p-2 placeholder:text-gray-400 w-full"
            {...register("email", {
              required: "Ingrese un correo electronico valido",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              }
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </div>

        <input 
          type="submit" 
          value="Enviar Instrucciones" 
          className="bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white py-3 px-6 rounded-lg font-bold w-full"
        />
      </form>
      <Link 
        to={'/auth/register'}
        className="text-gray-700"
        >¿No estas registrado aun? {''}
        <span className="text-blue-400 font-bold">Crea una cuenta</span>
      </Link>
    </>
  );
}
