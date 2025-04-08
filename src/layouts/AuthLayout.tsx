import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Home/Logo";
import { ArrowTurnUpLeftIcon } from "@heroicons/react/20/solid";


export default function AuthLayout() {
  return (
    <>
        <div className="min-h-screen flex">
            {/* Lado izquierdo: Formulario de login */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 bg-gradient-to-r from-blue-200 to-white">
                <div className="bg-white border border-gray-300 px-10 py-8 rounded-xl flex flex-col items-center">
                    <div className="w-72 mb-10">
                        <Logo />
                    </div>
                    {/*Formularios de Auth*/}
                    <Outlet />
                    
                </div>
                
                <Link to={'/'} className="flex items-center text-sm text-gray-800 gap-2 font-semibold bg-slate-100 hover:bg-slate-200 transition-colors rounded-md p-2 mt-4 border border-slate-300">
                    <ArrowTurnUpLeftIcon className="size-5 text-gray-800 "/>
                    Regresar a Inicio
                </Link>
            </div>

            {/* Lado derecho: Imagen */}
            <div className="hidden md:block w-1/2">
                <img
                src="/heros/hero-5.avif"
                alt="Imagen de login"
                className="object-cover w-full h-full"
                />
            </div>
        </div>
    </>
  )
}
