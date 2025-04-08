

export default function CallAction() {
    return (
        <section className="bg-blue-100">
            <div className="max-w-6xl mx-auto">
                <div className="p-8">
                    <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-white rounded-lg p-6 sm:flex  sm:p-0">
                        <div className="rounded-lg overflow-hidden flex-1">
                            <img src="/one-way-banner.webp" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center p-6 sm:bg-gradient-to-r from-blue-200 to-blue-400 text-center rounded-lg items-center">
                            <h2 className="font-bold text-2xl">Alquila un vehículo, no lo pienses mas!!</h2>
                            <p className="mt-6">No esperes mas para alquilar tu auto favorito con nosotros, visita nuestra pagina de renta para que puedas escoger el auto que se adapte mas a tus necesidades.</p>
                            <button 
                                className="bg-gray-900 hover:bg-gray-800 rounded-lg px-6 py-4 mt-6 w-full sm:w-72 transition-colors"
                            >¡Reserva ya!</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
