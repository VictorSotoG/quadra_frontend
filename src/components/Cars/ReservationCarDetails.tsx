import { formatCurrency, formateDate } from "../../utils/utils";

type ReservationCarDetailsProps = {
    data: {
        _id: string;
        nombre: string;
        telefono: string;
        email: string;
        vehiculo_id: number;
        fecha_inicio: string;
        fecha_fin: string;
        estado: string;
        alquiler: {
            estado: string;
            monto: number;
            metodo_pago: string;
        };
        vehiculo: {
            modelo: string;
            marca: string;
            color: string;
            imagen: string;
            anio: number;
            transmision: string;
            tipo: string;
            puertas: number;
            asientos: number;
            clima: boolean;
            precio_por_dia: number;
            seguro: {
                tipo: string;
                id: number;
                cobertura: string;
                precio: number;
                descripcion: string;
            };
        };
        createdAt: string;
        updatedAt: string;
    }
}

export default function ReservationCarDetails({data}: ReservationCarDetailsProps) {
  return (
        <div className="">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Detalles del Auto
            </h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                {/* Imagen del auto */}
                <div className="bg-sky-100 p-6 flex justify-center">
                <img
                    src={`/autos/${data.vehiculo.imagen}.png`}
                    alt={data.vehiculo.modelo}
                    className="max-h-32 object-contain"
                />
                </div>

                {/* Información del auto */}
                <div className="p-6">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {data.vehiculo.modelo}
                    </h2>
                    <p className="text-3xl font-bold text-sky-800 mb-4">
                    <span className="text-lg text-gray-800 font-normal px-2">
                        Precio por dia:{" "}
                    </span>
                    {formatCurrency(data.vehiculo.precio_por_dia)}
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="grid grid-cols-2 rounded-md gap-2">
                    <div className="space-y-2">
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Marca:</strong>{" "}
                        {data.vehiculo.marca}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Año:</strong> {data.vehiculo.anio}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Color:</strong>{" "}
                        {data.vehiculo.color}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Tipo:</strong> {data.vehiculo.tipo}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Transmisión:</strong>{" "}
                        {data.vehiculo.transmision}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Puertas:</strong>{" "}
                        {data.vehiculo.puertas}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Asientos:</strong>{" "}
                        {data.vehiculo.asientos}
                        </p>
                        <p className="text-gray-600">
                        <strong className="text-gray-600">Clima:</strong>{" "}
                        {data.vehiculo.clima ? "Con Clima" : "Sin Clima"}
                        </p>
                    </div>
                    </div>
                    <div className="flex-1 space-y-2  rounded-lg">
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Tipo:</strong>{" "}
                        {data.vehiculo.seguro.tipo}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Cobertura:</strong>{" "}
                        {data.vehiculo.seguro.cobertura}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Descripcion:</strong>{" "}
                        {data.vehiculo.seguro.descripcion}
                    </p>
                    <p className="text-gray-600">
                        <strong className="text-gray-600">Precio:</strong>{" "}
                        {formatCurrency(data.vehiculo.seguro.precio)}
                    </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Información de Cobro */}
            <div className="mt-4 rounded-md flex gap-4 justify-end">
                <div className="bg-indigo-100 border border-indigo-300 px-6 py-2 rounded-md w-full content-center ">
                    <p className="text-md text-indigo-800">
                        <strong>Del:</strong> { data.fecha_inicio ? formateDate(data.fecha_inicio) : ''} {' '}
                    </p>
                    <p className="text-md text-indigo-800 ">
                        <strong>Al:</strong> { data.fecha_fin ? formateDate(data.fecha_fin) : ''}
                    </p>
                </div>
                {/* <div className=" bg-sky-100 border border-sky-300 px-4 py-3 rounded-md w-96 content-center text-center">
                    <p className="text-xl font-semibold text-sky-800">
                        <span className="text-sm">Dias de Renta:</span> {dias}
                    </p>
                </div> */}
                <div className="bg-green-100 border border-green-300 px-6 py-3 rounded-md w-full content-center text-center">
                    <p className="text-xl font-semibold text-green-800 ">
                        <span className="text-sm">Total a Pagar:</span> {formatCurrency(data.alquiler.monto)}
                    </p>
                </div>
            </div>
        </div>
    );
}
