import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllCars } from '../api/CarsAPI';
import CardCars from '../components/Cars/CardCars';
import { Link } from 'react-router-dom';

export default function Cars() {

    const { data } = useQuery({
        queryKey: ['cars'],
        queryFn: getAllCars
    });



    if (data) {
        return (
            <>
                <div className='max-w-7xl mx-auto flex flex-col bg-white my-10 rounded-lg'>
                    <div className='bg-gray-200 my-8 mx-8 p-4 rounded-md'>
                        <p>Filtros de Busqueda</p>
                    </div>
                    <div className='flex'>
                        <div className='w-1/3 border border-gray-300 m-6 rounded-md'>

                        </div>
                        <div className='flex-1 p-6 flex flex-col gap-4'>
                            {data.map((car) => (
                                <CardCars car={car} />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="bg-sky-100 py-20">
                <div className='mx-auto container'>
                    <div className='flex flex-col items-center justify-center py-60'>
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
        )
    }
}
