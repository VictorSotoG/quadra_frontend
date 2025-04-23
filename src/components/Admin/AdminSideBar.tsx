import { Link } from "react-router-dom";
import AdminRoute from "./AdminRoute"
import LogoAdmin from "./LogoAdmin";
import { ArrowTurnDownLeftIcon } from "@heroicons/react/24/outline";

type AdminNavegation = {
  url: string; 
  text: string; 
  icon: "ShieldCheckIcon" | "TruckIcon" | "UserIcon" | "CalendarIcon" | "WrenchIcon" | "BuildingStorefrontIcon" | "ArrowTurnDownLeftIcon"; 
  blank: boolean; 
}[]

const adminNavigation: AdminNavegation = [
  {url: '/admin/cars', text: 'Vehiculos', icon: "TruckIcon" , blank: false},
  {url: '/admin/insurances', text: 'Seguros', icon: "ShieldCheckIcon", blank: false},
  {url: '/admin/users', text: 'Usuarios', icon: "UserIcon", blank: false},
  {url: '/admin/reservations', text: 'Reservaciones', icon: "CalendarIcon", blank: false},
  {url: '/admin/branches', text: 'Sucursales', icon: "BuildingStorefrontIcon", blank: false}
]

export default function AdminSideBar() {
  return (
    <>
      <div className="flex flex-col h-screen"> {/* Asegura que el contenedor ocupe toda la altura */}
        <LogoAdmin /> 
        <p className="my-6 text-center text-xl font-semibold">Navegacion</p>
        <nav className="flex flex-col">
          {adminNavigation.map((link) => (
              <AdminRoute 
                key={link.url}
                link={link}
              />
          ))}
        </nav>
        <Link
          to={'/'}
          className="mt-auto px-8 py-4 flex justify-center gap-2 text-white hover:text-gray-300"
        >
          <ArrowTurnDownLeftIcon className="h-6 w-6" /> {/* Tamaño del ícono corregido */}
          Regresar al Inicio
        </Link>
      </div>
    </>
  );
}
