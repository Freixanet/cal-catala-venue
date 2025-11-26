import React, { useState, useEffect } from 'react';
import { ReservationForm } from '../types';
import { COMPANY_INFO } from '../constants';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<ReservationForm>({
        name: '',
        pax: '2',
        time: '14:00',
        day: 'Hoy'
    });

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const { name, pax, time, day } = formData;
        
        // Template:
        // 👋 Hola Cal Catalán, quiero asegurar mesa.
        // 📅 Día: Hoy
        // 🕒 Hora: 14:00
        // 👥 Personas: 2
        // 👤 Nombre: Marc
        
        const message = `👋 Hola ${COMPANY_INFO.name}, quiero asegurar mesa.\n\n📅 Día: ${day}\n🕒 Hora: ${time}\n👥 Personas: ${pax}\n👤 Nombre: ${name}\n\n(Espero confirmación, gracias)`;
        
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${COMPANY_INFO.phone}?text=${encodedMessage}`;
        
        window.open(url, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-gray-900 bg-opacity-70 transition-opacity backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            {/* Content */}
            <div className="bg-white w-full max-w-md mx-auto rounded-lg shadow-2xl z-50 overflow-y-auto max-h-[90vh] relative animate-fade-in-up">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
                        <p className="text-2xl font-header font-bold text-brand-dark">Reservar Mesa</p>
                        <button 
                            onClick={onClose} 
                            className="text-gray-400 hover:text-red-500 transition focus:outline-none p-2"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-6 bg-blue-50 p-3 rounded-md border-l-4 border-blue-400">
                        <i className="fas fa-info-circle mr-2"></i>
                        Te responderemos al momento por WhatsApp con la confirmación.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Tu Nombre
                            </label>
                            <input 
                                className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent bg-gray-50 transition-all"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ej. Marc"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pax">
                                    Personas
                                </label>
                                <select 
                                    className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-gray-50 transition-all"
                                    id="pax"
                                    name="pax"
                                    value={formData.pax}
                                    onChange={handleChange}
                                >
                                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                                    <option value="6+">6+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                                    Hora
                                </label>
                                <input 
                                    className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-brand-orange bg-gray-50 transition-all"
                                    id="time"
                                    name="time"
                                    type="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="day">
                                Día
                            </label>
                            <select 
                                className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-gray-50 transition-all"
                                id="day"
                                name="day"
                                value={formData.day}
                                onChange={handleChange}
                            >
                                <option value="Hoy">Hoy</option>
                                <option value="Mañana">Mañana</option>
                                <option value="Otro día">Otro día</option>
                            </select>
                        </div>

                        {/* Footer */}
                        <div className="pt-4">
                            <button 
                                type="submit" 
                                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline flex justify-center items-center gap-3 text-lg shadow-md transform active:scale-[0.98] transition-all duration-200"
                            >
                                <i className="fab fa-whatsapp text-2xl"></i> Enviar por WhatsApp
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;