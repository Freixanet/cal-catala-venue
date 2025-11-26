import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white" id="ubicacion">
            <div className="flex flex-col md:flex-row">
                {/* Text Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <h3 className="font-header text-3xl font-bold mb-6 text-brand-orange">DÓNDE ESTAMOS</h3>
                    <p className="text-xl mb-8 font-light text-gray-300">Calle principal de Súria. <br />Llegas fácil, aparcas fácil.</p>
                    
                    <div className="space-y-6 mb-10">
                        <div className="flex items-start">
                            <i className="fas fa-map-marker-alt text-brand-orange mt-1 mr-4 w-6 text-center"></i>
                            <span className="text-gray-300">{COMPANY_INFO.address}</span>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-phone text-brand-orange mt-1 mr-4 w-6 text-center"></i>
                            <a href={`tel:+${COMPANY_INFO.phone}`} className="hover:text-brand-orange transition text-gray-300">{COMPANY_INFO.displayPhone}</a>
                        </div>
                        <div className="flex items-start">
                            <i className="fas fa-clock text-brand-orange mt-1 mr-4 w-6 text-center"></i>
                            <div className="text-gray-300">
                                <p>{COMPANY_INFO.hours.week}</p>
                                <p>{COMPANY_INFO.hours.weekend}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <a href={COMPANY_INFO.social.facebook} className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-orange transition duration-300">
                            <i className="fab fa-facebook-f text-lg"></i>
                        </a>
                        <a href={COMPANY_INFO.social.instagram} className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-orange transition duration-300">
                            <i className="fab fa-instagram text-lg"></i>
                        </a>
                        <a href={COMPANY_INFO.social.reviews} className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-orange transition duration-300">
                            <i className="fas fa-comment-dots text-lg"></i>
                        </a>
                    </div>
                    
                    <p className="text-gray-500 text-sm mt-12">© {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
                </div>
                
                {/* Map */}
                <div className="w-full md:w-1/2 h-80 md:h-auto min-h-[400px] bg-gray-800 relative">
                    <iframe 
                        title="Ubicación Cal Catalán"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11925.327568582035!2d1.740879482869503!3d41.83296223403565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4505929d2f623%3A0x6c6e75924957e841!2zU8O6cmlhLCBCYXJjZWxvbmE!5e0!3m2!1ses!2ses!4v1629823456789!5m2!1ses!2ses" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        className="absolute inset-0 grayscale hover:grayscale-0 transition duration-700 ease-in-out"
                    >
                    </iframe>
                </div>
            </div>
        </footer>
    );
};

export default Footer;