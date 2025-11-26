import React from 'react';
import { IMAGES } from '../constants';

const ValueProp: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <h3 className="font-header text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-none">
                            COMES BIEN.<br />
                            COMES RÁPIDO.<br />
                            <span className="text-brand-orange">SIN COMPLICARTE.</span>
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Cal Catalán es el bar de referencia en el centro de Súria: cocina casera, raciones generosas y la garantía de un sitio donde te atienden rápido incluso en hora punta.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check-circle text-brand-orange mr-4 text-xl"></i> 
                                <span className="font-medium">Cocina ininterrumpida</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check-circle text-brand-orange mr-4 text-xl"></i> 
                                <span className="font-medium">Servicio ágil (sabemos que tienes prisa)</span>
                            </li>
                            <li className="flex items-center text-gray-700">
                                <i className="fas fa-check-circle text-brand-orange mr-4 text-xl"></i> 
                                <span className="font-medium">Producto local del Bages</span>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2 relative group">
                        {/* Decorative Background */}
                        <div className="absolute -inset-4 bg-brand-orange rounded-lg transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        <img 
                            src={IMAGES.tapas} 
                            alt="Tapas caseras Súria" 
                            className="relative rounded-lg shadow-2xl w-full object-cover aspect-video transform group-hover:scale-[1.02] transition duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;