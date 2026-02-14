
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald text-white pt-20 pb-40 font-urdu relative pattern-emerald border-t-4 border-gold">
      {/* Decorative Top Gradient for seamless transition */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-beige/20 to-transparent pointer-events-none"></div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-right">
          
          {/* Column 1: Intro & Calligraphy */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-3xl font-bold text-gold border-b-2 border-gold/30 pb-4 inline-block">اسلامی تعویز</span>
            </div>
            <p className="text-white/90 text-lg leading-[3.5] mb-10 text-justify">
              ہم قرآن و سنت کی روشنی میں امتِ مسلمہ کی خدمت کر رہے ہیں۔ ہر مسئلہ کا حل اللہ کی کتاب میں موجود ہے، ہم صرف آپ کی رہنمائی کا ذریعہ ہیں۔ یا اللہ! ہماری اس چھوٹی سی کوشش کو اپنی بارگاہ میں قبول فرما اور اسے خیر کا باعث بنا۔
            </p>
            
            {/* Stylized JazakAllah Motif */}
            <div className="mt-auto py-8 border-y border-gold/20 flex flex-col items-center justify-center bg-white/5 rounded-3xl group hover:bg-white/10 transition-all duration-500">
               <div className="mb-2 text-gold/40 text-xs tracking-[0.2em] uppercase font-sans">Spiritual Gratitude</div>
               <span className="amiri-text text-5xl md:text-6xl text-gold font-bold drop-shadow-[0_4px_12px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform duration-500">
                 جزاك الله خيرا
               </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <h4 className="text-gold font-bold text-2xl mb-10 border-r-4 border-gold/50 pr-4">فوری روابط</h4>
            <ul className="space-y-4 text-lg text-white/95">
              <li>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold/30 leading-[3.5] py-1">
                  مرکزی صفحہ (ہوم)
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold/30 leading-[3.5] py-1">
                  ہماری روحانی خدمات
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold/30 leading-[3.5] py-1">
                  مفت آن لائن استخارہ
                </a>
              </li>
              <li>
                <a href="#dushman" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold/30 leading-[3.5] py-1">
                  دشمن سے نجات کا حل
                </a>
              </li>
              <li>
                <a href="#rizq-section" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold/30 leading-[3.5] py-1">
                  رزق میں برکت کے نقوش
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Final Dua */}
          <div className="flex flex-col">
            <h4 className="text-gold font-bold text-2xl mb-10 border-r-4 border-gold/50 pr-4">رابطہ کی تفصیلات</h4>
            <div className="space-y-6 text-lg">
              <a 
                href="tel:+923000000000"
                className="flex items-center space-x-4 space-x-reverse bg-white/5 p-5 rounded-2xl border border-gold/10 hover:border-gold/40 hover:bg-white/10 transition-all group"
              >
                <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold group-hover:text-emerald transition-colors">
                  <span className="text-2xl">☏</span>
                </div>
                <span className="font-sans font-bold text-xl tracking-wider">+92 300 0000000</span>
              </a>
              
              <a 
                href="mailto:info@islamictaweez.com"
                className="flex items-center space-x-4 space-x-reverse bg-white/5 p-5 rounded-2xl border border-gold/10 hover:border-gold/40 hover:bg-white/10 transition-all group"
              >
                <div className="bg-gold/10 p-3 rounded-full group-hover:bg-gold group-hover:text-emerald transition-colors">
                  <span className="text-2xl">✉</span>
                </div>
                <span className="font-sans text-lg break-all">info@islamictaweez.com</span>
              </a>

              {/* Enhanced Final Dua Section */}
              <div className="mt-12 pt-10 border-t-2 border-gold/20 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald px-4">
                  <div className="w-2 h-2 bg-gold rotate-45"></div>
                </div>
                <p className="text-gold font-bold italic urdu-font text-3xl text-center leading-[3.5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-pulse">
                  اللہ کریم آپ کا حامی و ناصر ہو۔ آمین
                </p>
                <p className="text-white/60 text-sm text-center mt-4 urdu-font leading-[3.5]">
                  پوری امتِ محمدیہ ﷺ کی خیر و عافیت کی دعا کے ساتھ
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="border-t border-gold/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-sans tracking-widest uppercase text-center md:text-right">
            &copy; {new Date().getFullYear()} ISLAMIC TAWEEZ WEBSITE • SPIRITUAL EXCELLENCE SINCE 2004
          </p>
          <div className="flex gap-4 opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-xs">FB</div>
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-xs">YT</div>
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-xs">WA</div>
          </div>
        </div>
      </div>
      
      {/* Visual Safety Margin for Urdu Script Nuqtas at the very bottom */}
      <div className="h-20 bg-emerald/50 absolute bottom-0 left-0 right-0"></div>
    </footer>
  );
};

export default Footer;
