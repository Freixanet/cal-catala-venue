import React from 'react';
import { SectionProps } from '../types';
import { IMAGES } from '../constants';

const LocalVibe: React.FC<SectionProps> = ({ onOpenModal }) => {
    return (
        <section className="relative py-20 px-4 flex items-center justify-center bg-brand-orange overflow-hidden">
            <div 
                className="absolute inset-0 opacity-20" 
                style={{ backgroundImage: `url('${IMAGES.texture}')` }}
            ></div>
            <div className="relative max-w-4xl text-center text-white z-10">
                <h3 className="font-header text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Y PARA LOS DE AQUÍ: <br className="md:hidden" />TU BAR DE SIEMPRE, AHORA ONLINE
                </h3>
                <p className="text-lg md:text-xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
                    Evita llamar, evita esperas. Vermuts, comidas de diario, cenas de finde, partidos… asegura tu mesa con dos clics desde el móvil.
                </p>
                <button 
                    onClick={onOpenModal} 
                    className="bg-white text-brand-orange font-bold py-4 px-10 rounded shadow-lg hover:bg-gray-50 transition uppercase transform hover:scale-105"
                >
                    Reservar Mesa Vecino
                </button>
            </div>
        </section>
    );
};

export default LocalVibe;