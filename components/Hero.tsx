
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-16 bg-white/80">
      <div className="container max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Constrained Bismillah */}
        <div className="mb-10 flex justify-center w-full max-h-[180px] overflow-hidden">
           <h2 className="amiri-text text-4xl md:text-6xl text-gold font-bold calligraphy-shadow text-center">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
           </h2>
        </div>

        <div className="text-center max-w-4xl">
          <h1 className="urdu-font text-3xl md:text-5xl font-bold text-emerald mb-6 leading-[1.4] tracking-tight">
            ہر مشکل کا مستند روحانی حل <br />
            <span className="text-gold text-xl md:text-2xl font-normal italic">قرآن و سنت کی روشنی میں مکمل رہنمائی</span>
          </h1>
          <p className="urdu-font text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-[3.2]">
            نبی کریم ﷺ کی تعلیمات اور قرآنی فیض کے ذریعے تمام مشکلات سے نجات۔ 
            حفاظت، کامیابی، اور گھریلو خوشحالی کے لیے مستند روحانی رہنمائی۔
          </p>

          <div className="flex flex-row justify-center space-x-6 space-x-reverse mb-10">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald text-white px-10 py-3 rounded-sm text-lg font-bold urdu-font hover:bg-emerald-dark transition-all shadow-xl"
            >
              رابطہ کریں
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gold border-2 border-gold px-10 py-3 rounded-sm text-lg font-bold urdu-font hover:bg-beige transition-all"
            >
              خدمات دیکھیں
            </button>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Hero;
