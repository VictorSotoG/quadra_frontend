

import { PinInput, PinInputField } from '@chakra-ui/pin-input'
import { ConfirmToken } from '../../types'
import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { validateToken } from '../../api/AuthAPI'

type NewPasswordTokenProps = {
    token: ConfirmToken['token']
    setToken: React.Dispatch<React.SetStateAction<string>>
    setValidToken: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NewPasswordToken({token, setToken, setValidToken} : NewPasswordTokenProps) {
    
    const { mutate } = useMutation({
        mutationFn: validateToken,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            toast.success(data)
            setValidToken(true);
        }
    })
    
    const handleChange = (token: string) => {
        setToken(token)
    }

    const handleComplete = (token: string) => mutate({token})
    
    return (
        <>
            <form 
                className="space-y-8 p-10 rounded-lg bg-white mt-10"
            >
                <label 
                    className="font-normal text-2xl text-center block"
                >Codigo de 6 digitos</label>
                <div className='flex justify-center gap-5'>
                    <PinInput value={token} onChange={handleChange} onComplete={handleComplete}>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                        <PinInputField className='h-15 w-10 p-3 rounded-lg border-gray-400 border placeholder-white text-center'/>
                    </PinInput>
                </div>
            </form>
            <nav className='mt-10 flex flex-col space-y-4'>
                <Link
                    to='/auth/forgot-password'
                    className='text-center text-gray-700 font-normal'
                >
                    Solicitar un nuevo Codigo
                </Link>
            </nav>
        </>
    )
}
