
export default function Services() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-200">
            <div className="max-w-6xl mx-auto">
                <div className="text-center px-10 py-16">
                    <h2 className="font-bold text-4xl text-gray-900">Descubre Nuestros Servicios Exclusivos de Renta de Autos</h2>
                    <p className="my-8">Se parte de nuestros servicios amplios, completos y exclusivos que te brindamos, te garantizamos el mejor servicio!!</p>
                    <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
                        <div className=" bg-white p-10 rounded-lg shadow-lg max-w-72">
                            <img 
                                src="/public/iconos/icono-tabla.png" 
                                alt="tabla"
                                className="mx-auto"
                            />
                            <h3 className="text-xl font-bold my-6">Reserva</h3>
                            <p>Reserve el vehiculo de su preferencia con anticipación, y disfrute de excelentes precios y exclusividad!!</p>
                        </div>
                        
                        <div className="bg-white p-10 rounded-lg shadow-lg max-w-72">
                            <img 
                                src="/public/iconos/icono-carro.png" 
                                alt="icono-carro" 
                                className="mx-auto"/>
                            <h3 className="text-xl font-bold my-6">Alquiler</h3>
                            <p>Rente el vehículo de su gusto, que se ajuste a sus necesidades, contamos con amplia variedad</p>
                        </div>
            
                        <div className="bg-white p-10 rounded-lg shadow-lg max-w-72">
                            <img 
                                src="/public/iconos/icono-camion.png" 
                                alt="icono-camion"
                                className="mx-auto"
                            />
                            <h3 className="text-xl font-bold my-6">Flotillas</h3>
                            <p>Servicio de control de flotillas para empresas medianas y grandes, brindándoles servicios exclusivos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
