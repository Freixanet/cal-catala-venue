import React from 'react';
import { SectionProps } from '../types';
import { IMAGES } from '../constants';

const Hero: React.FC<SectionProps> = ({ onOpenModal }) => {
    return (
        <header 
            className="h-[85vh] flex items-center justify-center text-center px-4 relative bg-cover bg-center bg-fixed bg-no-repeat group"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${IMAGES.hero}')`
            }}
        >
            <div className="max-w-4xl animate-fade-in-up">
                <span className="inline-block py-1 px-3 rounded bg-brand-orange text-white text-sm font-bold tracking-widest mb-6 uppercase shadow-lg">
                    Súria · Carretera Principal
                </span>
                <h1 className="font-header text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-text leading-tight">
                    LA PARADA BUENA<br />DE SÚRIA
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                    Tapas caseras, menú del día y servicio rápido. <br className="hidden md:block" />
                    Perfecto para entrar, comer bien y seguir ruta.
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button 
                        onClick={onOpenModal} 
                        className="w-full md:w-auto bg-brand-orange text-white text-lg font-header font-bold py-4 px-10 rounded shadow-lg hover:bg-red-600 transition transform hover:-translate-y-1 hover:shadow-xl uppercase tracking-wide"
                    >
                        Reservar Ahora
                    </button>
                    <a 
                        href="#menu" 
                        className="w-full md:w-auto bg-transparent border-2 border-white text-white text-lg font-header font-bold py-4 px-10 rounded hover:bg-white hover:text-brand-dark transition uppercase tracking-wide backdrop-blur-sm"
                    >
                        Ver Carta
                    </a>
                </div>
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 w-full text-center text-white animate-bounce pointer-events-none">
                <i className="fas fa-chevron-down text-2xl opacity-70"></i>
            </div>
        </header>
    );
};

export default Hero;