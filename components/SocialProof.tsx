import React from 'react';
import { REVIEWS } from '../constants';

const SocialProof: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 mb-10 bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-bold shadow-sm">
                    <i className="fab fa-google"></i> 
                    <span>4.4 / 5.0 en Reseñas</span>
                </div>
                <h3 className="font-header text-3xl font-bold text-brand-dark mb-12">LO QUE DICEN DE NOSOTROS</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-soft border-t-4 border-brand-orange text-left flex flex-col h-full hover:shadow-card transition-shadow">
                            <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                            </div>
                            <p className="text-gray-700 italic mb-6 flex-grow">"{review.text}"</p>
                            <p className="text-brand-dark font-bold text-sm uppercase tracking-wide">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;