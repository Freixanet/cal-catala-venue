import React from 'react';
import { SectionProps } from '../types';

const Audience: React.FC<SectionProps> = ({ onOpenModal }) => {
    return (
        <section className="py-20 bg-brand-dark text-white">
            <div className="container mx-auto px-4">
                <h3 className="font-header text-3xl md:text-4xl font-bold text-center mb-12 text-white uppercase tracking-wider">
                    Ideal si vienes de ruta
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Card 1 */}
                    <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 hover:border-brand-orange/50 transition duration-300 group">
                        <div className="text-brand-orange text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h4 className="font-header text-2xl font-bold mb-3">Turistas</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Parada auténtica en el Bages, sin sorpresas ni precios para guiris. Comida real.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 hover:border-brand-orange/50 transition duration-300 group">
                        <div className="text-brand-orange text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                            <i className="fas fa-truck-moving"></i>
                        </div>
                        <h4 className="font-header text-2xl font-bold mb-3">Transportistas</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Platos abundantes (de los que llenan), servicio rápido y trato preferente.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 hover:bg-gray-800 hover:border-brand-orange/50 transition duration-300 group">
                        <div className="text-brand-orange text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">
                            <i className="fas fa-car-side"></i>
                        </div>
                        <h4 className="font-header text-2xl font-bold mb-3">De Paso</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Rápido, bueno y con mesas disponibles. La parada técnica perfecta.</p>
                    </div>
                </div>
                
                <div className="text-center">
                    <button 
                        onClick={onOpenModal} 
                        className="inline-block border-2 border-brand-orange text-brand-orange font-bold py-3 px-10 rounded hover:bg-brand-orange hover:text-white transition duration-300 uppercase tracking-widest text-sm md:text-base"
                    >
                        Ver carta y reservar
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Audience;