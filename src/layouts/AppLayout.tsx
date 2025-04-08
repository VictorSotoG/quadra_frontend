import { Link, Outlet } from "react-router-dom"
import Logo from "../components/Home/Logo"
import NavMenu from "../components/Home/NavMenu"
import { UserCircleIcon } from "@heroicons/react/20/solid"

export default function AppLayout() {
  return (
    <>
        <header className="bg-white py-2">
            <div className="max-w-screen-xl mx-auto flex flex-row lg:flex-row justify-between items-center px-4">
                <div className="w-56">
                    <Logo/>
                </div>

                <nav className="hidden sm:block">
                  <div className="flex items-center space-x-4">
                    <a href='/about' >Nosotros</a>
                    <Link to={'/auth/login'} className="flex items-center text-gray-600 text-sm gap-2 font-semibold bg-gray-200 hover:bg-gray-300 transition-colors rounded-md p-2">
                      <UserCircleIcon className="size-8 text-gray-500 "/>
                      Iniciar Sesion / Registrarse
                    </Link>
                  </div>
                </nav>

                <div className="block sm:hidden">
                  <NavMenu />
                </div>
            </div>
        </header>

        <Outlet />

        <footer className="bg-gray-800 text-white flex">
          <div className="h-auto flex flex-col gap-8 text-center lg:flex-row mx-auto lg:w-[1200px] lg:justify-between">
            <div className="m-10 flex flex-col gap-8 sm:flex-row justify-center lg:flex-col">
              <div className="w-56 mx-auto">
                <img src="/logos/logo-1.png" alt="logo"/>
              </div>
              <div className="content-center">
                  <h3 className="font-bold text-lg mb-4">QUADRA</h3>
                  <h4 className="font-bold">Devs</h4>
                  <p>Edgar Javier Gomez Zapata</p>
                  <p>Luis Antonio Hernandez Camargo</p>
                  <p>Gilberto Damian Lozano Camacho</p>
                  <p>Jesus Abraham Loera Guardado</p>
                  <p>Victor Hugo Soto Gandara</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 m-10 font-bold uppercase text-sm justify-center">
                <a href="/">Inicio</a>
                <a href="">Servicios</a>
                <a href="/about">Nosotros</a>
                <a href="">Contacto</a>
                <a href="">Ayuda</a>
                <a href="">Convenio</a>
            </div>
            <div className="m-10 flex flex-col gap-4 justify-center items-center">
                <h3 className="font-bold text-lg">Oficinas Centrales</h3>
                <div style={{ width: "100%", height: "300px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4945.7813033699795!2d-103.53023362633054!3d25.5493296422658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd87de173db69%3A0x87065b2a1a823d00!2sTecNM%20-%20Campus%20Lerdo!5e0!3m2!1ses!2smx!4v1731287013308!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <p className="text-sm">Dudas o sugerencias, comunicate con nosotros!</p>
            </div>
          </div>
          
          
        </footer>
        <div className="bg-slate-950 p-6 flex flex-col gap-4 sm:flex-row justify-evenly items-center">
          <div className="flex gap-4 justify-center">
            <a href=""><img src="/iconos/redes_sociales/facebook2.png" alt="facebook" width="24px" height="24px"/></a>
            <a href=""><img src="/iconos/redes_sociales/instagram.png" alt="instagram" width="24px" height="24px"/></a>
            <a href=""><img src="/iconos/redes_sociales/whatsapp.png" alt="whatsapp" width="24px" height="24px"/></a>
            <a href=""><img src="/iconos/redes_sociales/x.png" alt="x" width="24px" height="24px"/></a>
          </div>
          <p className="text-white">Copyright © { new Date().getFullYear()} - QUADRA Car Rental</p>
        </div>
    </>
  )
}
