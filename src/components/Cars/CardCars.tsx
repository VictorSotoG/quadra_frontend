import { Car } from "../../types";

type CardCarsProps = {
    car: Car;
};

export default function CardCars({ car }: CardCarsProps) {
    return (
        <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row bg-white">
            {/* Imagen del auto */}
            <div className="w-full md:w-1/3 bg-gray-100 p-4 flex items-center justify-center">
                <img
                    src={`/autos/${car.imagen}.png`}
                    alt={car.modelo}
                    className="max-h-40 object-contain"
                />
            </div>

            {/* Información del auto */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-xl font-bold text-gray-800 mb-2">{car.modelo}</h1>
                    <p className="text-gray-600 mb-1">
                        <strong>Marca:</strong> {car.marca}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <strong>Año:</strong> {car.anio}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <strong>Color:</strong> {car.color}
                    </p>
                    <p className="text-gray-600 mb-1">
                        <strong>Tipo:</strong> {car.tipo}
                    </p>
                </div>

                {/* Características adicionales */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <img
                            src="/iconos-carros/transmision-manual.png"
                            alt="Transmisión"
                            width={24}
                        />
                        <p className="text-sm text-gray-600">{car.transmision}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="/iconos-carros/combustible.png"
                            alt="Combustible"
                            width={24}
                        />
                        <p className="text-sm text-gray-600">{car.combustible}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="/iconos-carros/puertas.png"
                            alt="Puertas"
                            width={24}
                        />
                        <p className="text-sm text-gray-600">{car.puertas} puertas</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img
                            src="/iconos-carros/asientos.png"
                            alt="Asientos"
                            width={24}
                        />
                        <p className="text-sm text-gray-600">{car.asientos} asientos</p>
                    </div>
                </div>
            </div>

            {/* Botones de acción */}
            <div className="p-4 flex flex-col gap-2 justify-center items-center bg-gray-50">
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-md w-full">
                    Ver Detalles
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-4 rounded-md w-full">
                    Reservar
                </button>
            </div>
        </div>
    );
}
