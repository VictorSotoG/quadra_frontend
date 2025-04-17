import { Car } from "../../types";
import { formatCurrency, formateDate } from "../../utils/utils";

type ReservedCarProp = {
    data: Car,
    fechaInicio: string,
    fechaFin: string,
    dias: number,
    costoTotal: number
}

export default function ReservedCar({data, fechaInicio, fechaFin, dias, costoTotal} : ReservedCarProp) {
    // // Calcular diferencia de dias
    // const calcularDias = () => {
    //     if (!fechaInicio || !fechaFin) return 0;
    //     const inicio = new Date(fechaInicio);
    //     const fin = new Date(fechaFin);
    //     const diferencia = Math.ceil((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    //     return diferencia > 0 ? diferencia : 0;
    // }

    // const dias = calcularDias();
    // const costoTotal = dias * data.precio_por_dia
    
    return (
        <div className="">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Detalles del Auto
            </h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                {/* Imagen del auto */}
                <div className="bg-sky-100 p-6 flex justify-center">
                <img
                    src={`/autos/${data.imagen}.png`}
                    alt={data.modelo}
                    className="max-h-32 object-contain"
                />
                </div>

                {/* Información del auto */}
                <div className="p-6">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {data.modelo}
                    </h2>
                    <p className="text-3xl font-bold text-sky-800 mb-4">
                    <span className="text-lg text-gray-800 font-normal px-2">
                        Precio por dia:{" "}
                    </span>
                    {formatCurrency(data.precio_por_dia)}
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="grid grid-cols-2 rounded-md gap-2">
                    <div className="space-y-2">
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Marca:</strong>{" "}
                        {data.marca}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Año:</strong> {data.anio}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Color:</strong>{" "}
                        {data.color}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Tipo:</strong> {data.tipo}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Transmisión:</strong>{" "}
                        {data.transmision}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Puertas:</strong>{" "}
                        {data.puertas}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Asientos:</strong>{" "}
                        {data.asientos}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Clima:</strong>{" "}
                        {data.clima ? "Con Clima" : "Sin Clima"}
                        </p>
                    </div>
                    </div>
                    <div className="flex-1 space-y-2  rounded-lg">
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Tipo:</strong>{" "}
                        {data.seguro.tipo}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Cobertura:</strong>{" "}
                        {data.seguro.cobertura}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Descripcion:</strong>{" "}
                        {data.seguro.descripcion}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Precio:</strong>{" "}
                        {formatCurrency(data.seguro.precio)}
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Información de Cobro */}
            <div className="mt-4 rounded-md flex gap-4 justify-end">
                <div className="bg-indigo-100 border border-indigo-300 px-6 py-2 rounded-md w-full content-center ">
                    <p className="text-md text-indigo-800">
                        <strong>Del:</strong> { fechaInicio ? formateDate(fechaInicio) : ''} {' '}
                    </p>
                    <p className="text-md text-indigo-800 ">
                        <strong>Al:</strong> { fechaFin ? formateDate(fechaFin) : ''}
                    </p>
                </div>
                <div className=" bg-sky-100 border border-sky-300 px-4 py-3 rounded-md w-96 content-center text-center">
                    <p className="text-xl font-semibold text-sky-800">
                        <span className="text-sm">Dias de Renta:</span> {dias}
                    </p>
                </div>
                <div className="bg-green-100 border border-green-300 px-6 py-3 rounded-md w-full content-center text-center">
                    <p className="text-xl font-semibold text-green-800 ">
                        <span className="text-sm">Total a Pagar:</span> {formatCurrency(costoTotal)}
                    </p>
                </div>
            </div>
        </div>
    );
}
