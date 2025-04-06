
export default function Benefits() {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center px-10 py-16 lg:text-left">
                    <h2 className="font-bold text-4xl text-gray-900">Beneficios de nuestro servicio al rentar tu auto con nosotros</h2>
                    <div className="mt-14 lg:flex">
                        <div className="flex flex-col my-10 gap-8">
                            <div className="card-benef">
                                <div className="flex justify-center gap-10 items-center lg:justify-start">
                                    <img src="/public/iconos/icono-herramientas.png" alt="herramientas"/>
                                    <h3 className="font-bold text-xl">Asistencia en Carretera 24/7</h3>
                                </div>
                                <p className="m-6 lg:ml-20">Viaja con tranquilidad con nuestra asistencia en carretera disponible las 24 horas del día, los 7 días de la semana. Ya sea un pinchazo de llanta o cualquier otro inconveniente, estamos a solo una llamada de distancia para ayudarte a volver a la carretera.</p>
                            </div>

                            <div className="card-benef">
                                <div className="flex justify-center gap-10 items-center lg:justify-start">
                                    <img src="/public/iconos/icono-carro2.png" alt="carro2"/>
                                    <h3 className="font-bold text-xl">Alquiler a Corto y Largo Plazo</h3>
                                </div>
                                <p className="m-6 lg:ml-20">Nuestros planes de alquiler están diseñados para brindarte la libertad de elegir la duración que mejor se ajuste a tu itinerario. Desde alquileres por horas hasta contratos mensuales, siempre encontrarás una solución a medida.</p>
                            </div>

                            <div className="card-benef">
                                <div className="flex justify-center gap-10 items-center lg:justify-start">
                                    <img src="/public/iconos/icono-seguro.png" alt="seguro"/>
                                    <h3 className="font-bold text-xl">Cobertura de Seguro Integral</h3>
                                </div>
                                <p className="m-6 lg:ml-20">Ofrecemos una gama completa de opciones de seguro para protegerte a ti y a tu vehículo. Desde cobertura básica hasta protección total contra daños y robo, puedes elegir el nivel de seguridad que prefieras.</p>
                            </div>
                        </div>
                        <img src="/public/beneficios.avif" alt="img-beneficios" className="mx-auto"/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
