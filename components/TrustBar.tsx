import React from 'react';

const TrustBar: React.FC = () => {
    return (
        <section className="bg-brand-dark text-gray-300 py-8 border-b-4 border-brand-orange">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                    <div className="flex items-center flex-col md:flex-row gap-2 group cursor-default">
                        <i className="fas fa-drumstick-bite text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                        <span className="font-bold text-white">Comida abundante</span>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-2 group cursor-default">
                        <i className="fas fa-wallet text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                        <span className="font-bold text-white">Precios honestos</span>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-2 group cursor-default">
                        <i className="fas fa-thumbs-up text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                        <span className="font-bold text-white">Trato de siempre</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;