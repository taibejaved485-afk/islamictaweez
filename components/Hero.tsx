
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-48 pb-16 relative">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Professional Bismillah Calligraphy SVG */}
        <div className="mb-12 flex justify-center w-full max-w-md animate-pulse">
           <svg viewBox="0 0 400 120" className="w-full h-auto drop-shadow-2xl">
              <path d="M100 60 Q 150 20, 200 60 T 300 60" fill="none" stroke="#D4AF37" stroke-width="2" />
              <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" className="amiri-text fill-[#D4AF37] text-6xl font-bold">
                 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </text>
           </svg>
        </div>

        <div className="text-center max-w-4xl glass-card p-10 rounded-3xl border-2 border-gold/20 shadow-2xl">
          <h1 className="urdu-font text-4xl md:text-6xl font-bold text-emerald mb-8 leading-[1.6] tracking-tight">
            ہر مشکل کا مستند روحانی حل <br />
            <span className="text-gold text-2xl md:text-3xl font-normal italic block mt-4">قرآن و سنت کی روشنی میں مکمل رہنمائی</span>
          </h1>
          <p className="urdu-font text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-[3.5]">
            نبی کریم ﷺ کی تعلیمات اور قرآنی فیض کے ذریعے تمام مشکلات سے نجات۔ 
            حفاظت، کامیابی، اور گھریلو خوشحالی کے لیے مستند روحانی رہنمائی۔
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-6 mb-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald text-white px-12 py-4 rounded-full text-xl font-bold urdu-font hover:bg-emerald-dark transition-all shadow-xl border-2 border-gold/30"
            >
              رابطہ کریں
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gold border-2 border-gold px-12 py-4 rounded-full text-xl font-bold urdu-font hover:bg-gold/10 transition-all shadow-md"
            >
              خدمات دیکھیں
            </button>
          </div>
        </div>
      </div>
      <div className="gold-divider mt-20"></div>
    </section>
  );
};

export default Hero;
