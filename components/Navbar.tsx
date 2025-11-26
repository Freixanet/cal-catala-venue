import React from 'react';
import { SectionProps } from '../types';

const Navbar: React.FC<SectionProps> = ({ onOpenModal }) => {
    return (
        <nav className="bg-brand-dark text-white p-4 sticky top-0 z-40 shadow-soft">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="font-header text-2xl font-bold tracking-wider text-brand-orange uppercase flex items-center gap-2 group">
                    <i className="fas fa-utensils transform group-hover:rotate-12 transition-transform duration-300"></i>
                    <span>Cal Catalán</span>
                </a>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-semibold items-center">
                    <a href="#menu" className="hover:text-brand-orange transition duration-200">La Carta</a>
                    <a href="#ubicacion" className="hover:text-brand-orange transition duration-200">Ubicación</a>
                    <button 
                        onClick={onOpenModal} 
                        className="bg-brand-orange hover:bg-red-600 text-white px-5 py-2 rounded font-header uppercase tracking-wide transition transform hover:scale-105 shadow-md"
                    >
                        Reservar Mesa
                    </button>
                </div>

                {/* Mobile Trigger (Icon only) */}
                <button 
                    className="md:hidden text-2xl p-2 hover:bg-gray-800 rounded transition" 
                    onClick={onOpenModal}
                    aria-label="Abrir reserva"
                >
                    <i className="fas fa-calendar-check text-brand-orange"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;