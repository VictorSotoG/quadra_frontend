
import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfirmToken } from '../../types'
import { useMutation } from '@tanstack/react-query'
import { confirmAccount } from '../../api/AuthAPI'
import { toast } from 'react-toastify'

export default function ConfirmAccountView() {

    const [token, setToken] = useState<ConfirmToken['token']>('')

    const { mutate } = useMutation({
        mutationFn: confirmAccount,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
        }
    })

    const handleChange = (token: ConfirmToken['token']) => {
        setToken(token)
    }

    const handleComplete = (token: ConfirmToken['token']) => mutate({token})

    return (
        <> 
            <h1 className="text-2xl font-bold text-gray-800">Confirma tu Cuenta</h1>
            <p className="text-xl font-light text-slate-800 mt-5">
                Ingresa el código que recibiste {''}
                <span className="text-sky-600 font-bold">por e-mail</span>
            </p>
            <form
                className="space-y-8 p-6 bg-white mt-10 rounded-lg"
            >
                <label
                    className="font-normal text-xl text-center block"
                >Código de 6 dígitos</label>

                <div className="flex justify-center gap-5">
                    <PinInput value={token} onChange={handleChange} onComplete={handleComplete}>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                        <PinInputField className="w-10 h-15 p-3 rounded-lg border-gray-400 border placeholder-white text-center"/>
                    </PinInput>
                </div>

            </form>

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    to='/auth/request-code'
                    className="bg-slate-100 hover:bg-slate-200 transition-colors py-1 px-4 rounded-md text-center text-gray-800 font-normal"
                >
                    Solicitar un nuevo Código
                </Link>
            </nav>
        </>
    )
}
