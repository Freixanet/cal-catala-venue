import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100" id="menu">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="font-header text-3xl font-bold text-brand-dark uppercase tracking-tight">Hecho para gente en movimiento</h3>
                    <div className="w-24 h-1 bg-brand-orange mx-auto mt-5 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-card hover:shadow-xl transition-all duration-300 text-center group border border-transparent hover:border-gray-100">
                            <div className="w-20 h-20 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                                <i className={`fas ${feature.icon} text-3xl`}></i>
                            </div>
                            <h4 className="font-header text-xl font-bold mb-3 text-brand-dark">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;