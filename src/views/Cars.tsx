import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getAllCars } from '../api/CarsAPI';
import CardCars from '../components/Cars/CardCars';
import { Link } from 'react-router-dom';

export default function Cars() {
    const { data } = useQuery({
        queryKey: ['cars'],
        queryFn: getAllCars,
    });

    // Estado para los filtros
    const [filters, setFilters] = useState<{
        marcas: string[];
        anios: string[];
        colores: string[];
        tipos: string[];
        transmision: string[]

    }>({
        marcas: [],
        anios: [],
        colores: [],
        tipos: [],
        transmision: []
    });

    // Función para manejar los cambios en los checkboxes
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name as keyof typeof filters]: checked
                ? [...prevFilters[name as keyof typeof filters], value]
                : prevFilters[name as keyof typeof filters].filter((item: string) => item !== value),
        }));
    };

    // Obtener valores únicos para los filtros
    const uniqueMarcas = Array.from(new Set(data?.map((car) => car.marca) || []));
    const uniqueAnios = Array.from(new Set(data?.map((car) => car.anio.toString()) || []));
    const uniqueColores = Array.from(new Set(data?.map((car) => car.color) || []));
    const uniqueTipos = Array.from(new Set(data?.map((car) => car.tipo) || []));
    const uniqueTransmision = Array.from(new Set(data?.map((car) => car.transmision) || []));

    // Filtrar los datos según los filtros seleccionados
    const filteredCars = data?.filter((car) => {
        return (
            (filters.marcas.length === 0 || filters.marcas.includes(car.marca)) &&
            (filters.anios.length === 0 || filters.anios.includes(car.anio.toString())) &&
            (filters.colores.length === 0 || filters.colores.includes(car.color)) &&
            (filters.tipos.length === 0 || filters.tipos.includes(car.tipo)) &&
            (filters.transmision.length === 0 || filters.transmision.includes(car.transmision))
        );
    });

    if (data) {
        return (
            <div className="max-w-[1300px] mx-auto flex flex-col bg-white my-10 rounded-lg">
                <div className='bg-sky-100 mx-6 mt-6 p-4 rounded-md text-center text-xl font-bold text-sky-700'>
                    Vehiculos Disponibles
                </div>
                <div className='flex'>
                    <div className='w-1/4'>
                        {/* Filtros */}
                        <div className="flex flex-col bg-white p-6 m-6 border border-gray-300 rounded-lg">
                            <p className="text-xl font-semibold mb-4">Filtros de Búsqueda</p>

                            {/* Filtro por Marca */}
                            <div className="mb-6">
                                <p className="text-md font-bold text-gray-700 mb-2">Marca</p>
                                {uniqueMarcas.map((marca) => (
                                    <div key={marca} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`marca-${marca}`}
                                            name="marcas"
                                            value={marca}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`marca-${marca}`} className="ml-2 text-sm text-gray-700">
                                            {marca}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Filtro por Año */}
                            <div className="mb-6">
                                <p className="text-md font-bold text-gray-700 mb-2">Año</p>
                                {uniqueAnios.map((anio) => (
                                    <div key={anio} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`anio-${anio}`}
                                            name="anios"
                                            value={anio}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`anio-${anio}`} className="ml-2 text-sm text-gray-700">
                                            {anio}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Filtro por Color */}
                            <div className='mb-6'>
                                <p className="text-md font-bold text-gray-700 mb-2">Color</p>
                                {uniqueColores.map((color) => (
                                    <div key={color} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`color-${color}`}
                                            name="colores"
                                            value={color}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`color-${color}`} className="ml-2 text-sm text-gray-700">
                                            {color}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Filtro por Tipo */}
                            <div className='mb-6'>
                                <p className="text-md font-bold text-gray-700 mb-2">Tipo</p>
                                {uniqueTipos.map((tipo) => (
                                    <div key={tipo} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`tipo-${tipo}`}
                                            name="tipos"
                                            value={tipo}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`tipo-${tipo}`} className="ml-2 text-sm text-gray-700">
                                            {tipo}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Filtro por Transmision */}
                            <div>
                                <p className="text-md font-bold text-gray-700 mb-2">Transmision</p>
                                {uniqueTransmision.map((transmision) => (
                                    <div key={transmision} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`transmision-${transmision}`}
                                            name="transmisiones"
                                            value={transmision}
                                            onChange={handleCheckboxChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={`transmision-${transmision}`} className="ml-2 text-sm text-gray-700">
                                            {transmision}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lista de carros */}
                    <div className="flex-1 py-6 pr-6 flex flex-col gap-4">
                        {filteredCars && filteredCars.length > 0 ? (
                            filteredCars.map((car) => <CardCars key={car.id} car={car} />)
                        ) : (
                            <p className="text-center text-gray-600">No se encontraron resultados.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="bg-sky-100 py-20">
                <div className="mx-auto container">
                    <div className="flex flex-col items-center justify-center py-60">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página no encontrada</h1>
                        <p className="text-lg text-gray-600 mb-6">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
                        <Link
                            to="/"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
