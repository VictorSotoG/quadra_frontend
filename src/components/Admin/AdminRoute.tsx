import { Link, useLocation } from "react-router-dom";
import * as Icons from "@heroicons/react/24/outline"; // Importa todos los íconos

type AdminRouteProps = {
    link: {
        url: string;
        text: string;
        icon: keyof typeof Icons; // Nombre del ícono como string
        blank: boolean;
    }
}

export default function AdminRoute({ link }: AdminRouteProps) {
    const location = useLocation();
    const { pathname } = location;

    const isActive = pathname === link.url;

    // Obtén el ícono dinámicamente
    const IconComponent = Icons[link.icon];

    return (
        <Link
            className={`${isActive ? 'bg-sky-800 hover:bg-sky-800 border-l-4 rounded-sm' : ''} hover:bg-[#1c3c5d] py-4 px-8 cursor-pointer flex items-center gap-2`}
            to={link.url}
        >
            {IconComponent && <IconComponent className="h-5 w-5 text-white" />} {/* Renderiza el ícono dinámico */}
            {link.text}
            
        </Link>
    );
}
