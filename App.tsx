import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import Audience from './components/Audience';
import LocalVibe from './components/LocalVibe';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import BookingModal from './components/BookingModal';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={`relative ${isModalOpen ? 'overflow-hidden h-screen' : ''}`}>
            <Navbar onOpenModal={openModal} />
            
            <main>
                <Hero onOpenModal={openModal} />
                <TrustBar />
                <ValueProp />
                <Features />
                <Audience onOpenModal={openModal} />
                <LocalVibe onOpenModal={openModal} />
                <SocialProof />
            </main>

            <Footer />
            
            <StickyMobileCTA onOpenModal={openModal} />
            
            <BookingModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default App;