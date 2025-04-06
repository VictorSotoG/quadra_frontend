import { useEffect, useState } from "react";
import SearchFormHome from "./SearchFormHome";

export default function Hero() {
    // Lista de imágenes que se encuentran en la carpeta public
    const images = [
        "/heros/hero-6.webp",
        "/heros/hero-4.avif",
        "/heros/hero-5.avif",
        "/heros/hero-2.jpg",
    ]; 

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 7000); // Cambia la imagen cada 7 segundos

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <section
            className="h-auto relative bg-cover bg-center flex items-center"
            style={{ 
                backgroundImage: `url(${images[currentImage]})`,
                transition: "background-image 2s ease-in-out" 
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center w-full mx-auto flex flex-col items-center px-8 py-8">
                <h1 className="text-4xl font-bold mb-4 text-white">Explora el mundo con nuestros Autos</h1>
                <p className="mb-6 text-white">
                Encuentra el vehículo perfecto para cada ocasión. Disfruta de tarifas competitivas y un servicio excepcional.
                </p>
                
                <SearchFormHome />
            </div>

        </section>
    )
}
