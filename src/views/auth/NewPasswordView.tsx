
import { useState } from 'react'
import { ConfirmToken } from '../../types'
import NewPasswordToken from '../../components/Auth/NewPasswordToken'
import NewPasswordForm from '../../components/Auth/NewPasswordForm'

export default function NewPasswordView() {

    const [token, setToken] = useState<ConfirmToken['token']>('')
    const [isValidToken, setValidToken] = useState(false)

    return (
        <>
            <h1 className="text-2xl font-black">Reestablecer Contraseña</h1>
            <p className="text-xl font-light mt-5">
                Ingresa el codigo que recibiste {''}
                <span className='text-sky-500 font-bold'>por correo</span>
            </p>

            {!isValidToken ? 
                <NewPasswordToken token={token} setToken={setToken} setValidToken={setValidToken} />
            : <NewPasswordForm token={token} /> }
        </>
    )
}
