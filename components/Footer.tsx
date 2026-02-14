
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald text-white py-20 font-urdu relative pattern-emerald border-t-4 border-gold">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-right">
          <div>
            <span className="text-3xl font-bold text-gold mb-8 block border-b border-gold/20 pb-2">اسلامی تعویز</span>
            <p className="text-white/90 text-lg leading-[3.5] mb-8">
              ہم قرآن و سنت کی روشنی میں امتِ مسلمہ کی خدمت کر رہے ہیں۔ ہر مسئلہ کا حل اللہ کی کتاب میں موجود ہے، ہم صرف آپ کی رہنمائی کا ذریعہ ہیں۔ یا اللہ! ہماری اس چھوٹی سی کوشش کو اپنی بارگاہ میں قبول فرما اور اسے خیر کا باعث بنا۔
            </p>
            <div className="mt-8 pt-4 border-t border-gold/10 text-center">
               <span className="amiri-text text-4xl text-gold font-bold drop-shadow-lg">جزاك الله خيرا</span>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-bold text-2xl mb-8">لنکس</h4>
            <ul className="space-y-6 text-lg text-white/90">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold">مرکزی صفحہ</button></li>
              <li><a href="#services" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold">روحانی خدمات</a></li>
              <li><a href="#contact" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold">آن لائن استخارہ</a></li>
              <li><a href="#dushman" className="hover:text-gold transition-all urdu-font border-b border-transparent hover:border-gold">دشمن سے نجات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold text-2xl mb-8">رابطہ</h4>
            <div className="space-y-8 text-lg">
              <p className="flex items-center space-x-4 space-x-reverse bg-white/5 p-4 rounded-lg border border-gold/10">
                <span className="text-gold text-2xl">☏</span>
                <span className="font-sans font-bold">+92 300 0000000</span>
              </p>
              <p className="flex items-center space-x-4 space-x-reverse bg-white/5 p-4 rounded-lg border border-gold/10">
                <span className="text-gold text-2xl">✉</span>
                <span className="font-sans">info@islamictaweez.com</span>
              </p>
              <div className="mt-8 pt-6 border-t border-gold/30">
                <p className="text-gold font-bold italic urdu-font text-xl text-center leading-[3.5]">اللہ کریم آپ کا حامی و ناصر ہو۔ آمین</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-10 text-center">
          <p className="text-white/40 text-sm font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ISLAMIC TAWEEZ WEBSITE • ESTABLISHED FOR SPIRITUAL GUIDANCE
          </p>
        </div>
      </div>
      
      {/* Decorative Arch Overlay for Footer */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F9F7F2] to-transparent opacity-10"></div>
    </footer>
  );
};

export default Footer;
