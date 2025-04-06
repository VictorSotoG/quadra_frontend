
export default function About() {
  return (
    <div className="bg-blue-50 py-20">
        <div className="container mx-auto w-11/12 lg:w-3/4">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center space-y-8">
                <h1 className="text-3xl font-bold text-blue-400">¿Quienes Somos?</h1>
                <p>En Quadra, nos dedicamos a ofrecer un servicio de renta y reserva de vehículos confiable y eficiente. Nuestro objetivo es facilitarte la movilidad en cualquier momento y lugar.</p>
                <div className="text-slate-800 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 lg:w-3/4 md:mx-auto md:h-72">
                    <div className="border-2 shadow-lg p-8 rounded-lg content-center space-y-4 transition duration-500 ease-in-out transform hover:-translate-y-2 ">
                        <h2 className="font-bold text-xl">Nuestra Mision</h2>
                        <p>Brindar soluciones de transporte accesibles y de calidad, adaptándonos a las necesidades de nuestros clientes, promoviendo la confianza y la innovación.</p>
                    </div>
                    <div className="border-2 shadow-lg  p-8 rounded-lg content-center space-y-4 transition duration-500 ease-in-out transform hover:-translate-y-2 ">
                        <h2 className="font-bold text-xl">Nuestra Vision</h2>
                        <p>Convertirnos en la empresa líder en servicios de renta de vehículos, destacándonos por nuestra excelencia, sostenibilidad y compromiso con el cliente.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
