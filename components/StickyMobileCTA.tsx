import React from 'react';
import { SectionProps } from '../types';

const StickyMobileCTA: React.FC<SectionProps> = ({ onOpenModal }) => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 md:hidden z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <button 
                onClick={onOpenModal} 
                className="w-full bg-brand-orange text-white font-header font-bold text-lg py-3 rounded shadow-lg uppercase tracking-wide animate-pulse"
            >
                Reservar Mesa Ahora
            </button>
        </div>
    );
};

export default StickyMobileCTA;