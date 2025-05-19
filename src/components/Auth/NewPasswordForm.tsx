
import type { ConfirmToken, NewPasswordForm } from '../../types'
import { useForm } from 'react-hook-form'
import ErrorMessage from '../ErrorMessage'
import { useMutation } from '@tanstack/react-query'
import { setNewPassword } from '../../api/AuthAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

type NewPasswordFormProps = {
    token: ConfirmToken['token']
}

export default function NewPasswordForm({token}: NewPasswordFormProps) {
    const navigate = useNavigate();
    const initialValues : NewPasswordForm = {
        password: '',
        password_confirmation: ''
    }

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ defaultValues: initialValues })

    const { mutate } = useMutation({
        mutationFn: setNewPassword,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
            reset()
            navigate('/auth/login');
        }
    })

    const handleNewPassword = (formData: NewPasswordForm) => {
        const data = {
            formData,
            token
        }
        mutate(data);
    }

    const password = watch('password');

    return (
        <>
            <form 
                onSubmit={handleSubmit(handleNewPassword)}
                className="space-y-8 p-10  bg-white mt-10 rounded-lg"
                noValidate
            >
                <div>
                    <label 
                        className=""
                    >Contraseña</label>

                    <input 
                        type="password" 
                        placeholder='Contraseña de Registro'
                        className='w-full p-3  border-gray-300 border'
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 8,
                                message: 'La contraseña debe tener un minimo de 8 caracteres'
                            }
                        })}
                    />
                    {errors.password && (
                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                    )}
                </div>

                <div className="flex flex-col gap-5">
                    <label
                        className="font-normal text-2xl"
                    >Repetir Contraseña</label>

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repite la contraseña de registro"
                        className="w-full p-3  border-gray-300 border"
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
                    className="relative group w-full text-white font-bold py-2 rounded-lg overflow-hidden">
                    {/* Capa de fondo inicial */}
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-400 to-blue-500 transition-opacity duration-1000 group-hover:opacity-0"></div>
                    {/* Capa de fondo para el hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
                    {/* Contenido del botón */}
                    <span className="relative z-10">Reestablecer Contraseña</span>
                </button>
            </form>
        </>
    )
}
