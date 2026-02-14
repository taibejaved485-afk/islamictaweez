
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Services from './components/Services';
import Wazaif from './components/Wazaif';
import DetailedContent from './components/DetailedContent';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FavoritesModal from './components/FavoritesModal';

const App: React.FC = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('islamic_taweez_favs');
    if (saved) {
      try {
        setFavoriteIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse favorites");
      }
    }
  }, []);

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem('islamic_taweez_favs', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col min-h-screen text-right font-urdu bg-white" dir="rtl">
      <Navbar 
        favoriteCount={favoriteIds.length} 
        onOpenFavorites={() => setIsModalOpen(true)} 
      />
      
      <main className="flex-grow pt-10">
        <Hero />
        
        {/* Authority Section */}
        <Stats />

        <div className="container max-w-6xl mx-auto px-4 py-12 section-border text-center">
          <h2 className="text-xl md:text-2xl font-bold text-emerald mb-4">مستند روحانی رہنمائی کا سفر</h2>
          <p className="text-gray-600 text-base md:text-lg leading-[2.5] max-w-3xl mx-auto urdu-font">
            ہماری تمام خدمات قرآنی تعلیمات اور سلف صالحین کی مجرب روحانی روایات پر مبنی ہیں۔ ہم آپ کے روزمرہ کے پیچیدہ مسائل، گھریلو الجھنوں اور کاروباری بندشوں کو خالصتاً قرآنی آیات کی برکت سے حل کرنے کی کوشش کرتے ہیں۔
          </p>
        </div>

        {/* How it Works */}
        <Process />

        <Services 
          favoriteIds={favoriteIds} 
          onToggleFavorite={toggleFavorite} 
        />
        
        {/* Bulk Content - Wazaif */}
        <Wazaif />

        <DetailedContent />

        {/* Social Proof */}
        <Testimonials />

        {/* Helpful Info */}
        <FAQ />

        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />

      <FavoritesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        favoriteIds={favoriteIds}
        onRemove={toggleFavorite}
      />
    </div>
  );
};

export default App;
