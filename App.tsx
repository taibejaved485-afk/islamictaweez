
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
import ScrollToTop from './components/ScrollToTop';
import AdminPanel from './components/AdminPanel';
import BlogSection from './components/BlogSection';
import { BlogPost } from './types';

const App: React.FC = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  // Load data from local storage on mount
  useEffect(() => {
    const savedFavs = localStorage.getItem('islamic_taweez_favs');
    if (savedFavs) {
      try { setFavoriteIds(JSON.parse(savedFavs)); } catch (e) {}
    }

    const savedBlogs = localStorage.getItem('islamic_taweez_blogs');
    if (savedBlogs) {
      try { setBlogs(JSON.parse(savedBlogs)); } catch (e) {}
    }
  }, []);

  // Sync blogs to local storage
  useEffect(() => {
    localStorage.setItem('islamic_taweez_blogs', JSON.stringify(blogs));
  }, [blogs]);

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
        
        <Stats />

        <div className="container max-w-6xl mx-auto px-4 py-12 section-border text-center">
          <h2 className="text-xl md:text-2xl font-bold text-emerald mb-4">مستند روحانی رہنمائی کا سفر</h2>
          <p className="text-gray-600 text-base md:text-lg leading-[2.5] max-w-3xl mx-auto urdu-font">
            ہماری تمام خدمات قرآنی تعلیمات اور سلف صالحین کی مجرب روحانی روایات پر مبنی ہیں۔ ہم آپ کے روزمرہ کے پیچیدہ مسائل، گھریلو الجھنوں اور کاروباری بندشوں کو خالصتاً قرآنی آیات کی برکت سے حل کرنے کی کوشش کرتے ہیں۔
          </p>
        </div>

        <Process />

        <Services 
          favoriteIds={favoriteIds} 
          onToggleFavorite={toggleFavorite} 
        />
        
        {/* Dynamic Blog Section */}
        <BlogSection blogs={blogs} />

        <Wazaif />

        <DetailedContent />

        <Testimonials />

        <FAQ />

        <ContactForm />
      </main>

      <Footer onOpenAdmin={() => setIsAdminPanelOpen(true)} />
      <WhatsAppButton />
      <ScrollToTop />

      <FavoritesModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        favoriteIds={favoriteIds}
        onRemove={toggleFavorite}
      />

      {isAdminPanelOpen && (
        <AdminPanel 
          onClose={() => setIsAdminPanelOpen(false)} 
          blogs={blogs}
          onUpdateBlogs={setBlogs}
        />
      )}
    </div>
  );
};

export default App;
