
import React from 'react';

const Hero: React.FC = () => {
  const bgImage = "https://i.pinimg.com/1200x/90/ab/43/90ab43219204e8329a85c8fa99f5c657.jpg";

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-beige/95 via-beige/80 to-beige/95"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center relative z-10">
        
        {/* Professional Bismillah Calligraphy SVG */}
        <div className="mb-8 flex justify-center w-full max-w-2xl animate-pulse">
           <svg viewBox="0 0 800 150" className="w-full h-auto drop-shadow-2xl overflow-visible">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <path d="M150 75 Q 400 10, 650 75" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.4" />
              <text 
                x="400" 
                y="85" 
                dominant-baseline="middle" 
                text-anchor="middle" 
                className="amiri-text fill-[#D4AF37] text-7xl font-bold"
                style={{ filter: 'url(#glow)' }}
              >
                 بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </text>
           </svg>
        </div>

        <div className="text-center max-w-4xl glass-card p-8 md:p-12 rounded-[40px] border-2 border-gold/30 shadow-2xl relative">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-gold/20 rounded-tr-[40px]"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-gold/20 rounded-bl-[40px]"></div>

          <h1 className="urdu-font text-4xl md:text-6xl font-bold text-emerald mb-8 leading-[1.6] tracking-tight">
            ہر مشکل کا مستند روحانی حل <br />
            <span className="text-gold text-2xl md:text-3xl font-normal italic block mt-4">قرآن و سنت کی روشنی میں مکمل رہنمائی</span>
          </h1>
          
          <p className="urdu-font text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-[3.5] font-medium">
            نبی کریم ﷺ کی تعلیمات اور قرآنی فیض کے ذریعے تمام مشکلات سے نجات۔ 
            حفاظت، کامیابی، اور گھریلو خوشحالی کے لیے مستند روحانی رہنمائی۔
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-6 mb-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald text-white px-12 py-4 rounded-full text-xl font-bold urdu-font hover:bg-emerald-dark hover:shadow-gold-glow transition-all duration-300 shadow-xl border-2 border-gold/30 transform hover:-translate-y-1"
            >
              رابطہ کریں
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gold border-2 border-gold px-12 py-4 rounded-full text-xl font-bold urdu-font hover:bg-gold/10 hover:shadow-gold-glow transition-all duration-300 shadow-md transform hover:-translate-y-1"
            >
              خدمات دیکھیں
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom transition divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gold-divider opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
