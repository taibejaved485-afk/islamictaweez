
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald text-white py-12 font-urdu relative pattern-geometric border-t-2 border-gold/40">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-right">
          <div>
            <span className="text-2xl font-bold text-gold mb-4 block">اسلامی تعویز</span>
            <p className="text-white/80 text-base leading-[3.2] pb-4">
              ہم قرآن و سنت کی روشنی میں امتِ مسلمہ کی خدمت کر رہے ہیں۔ ہر مسئلہ کا حل اللہ کی کتاب میں موجود ہے، ہم صرف آپ کی رہنمائی کا ذریعہ ہیں۔ یا اللہ! ہماری اس چھوٹی سی کوشش کو اپنی بارگاہ میں قبول فرما اور امتِ محمدیہ کے لیے اسے خیر کا باعث بنا۔
            </p>
          </div>

          <div>
            <h4 className="text-gold font-bold text-xl mb-4">لنکس</h4>
            <ul className="space-y-4 text-base text-white/90">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-gold transition-colors urdu-font">مرکزی صفحہ</button></li>
              <li><a href="#services" className="hover:text-gold transition-colors urdu-font">روحانی خدمات</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors urdu-font">آن لائن استخارہ</a></li>
              <li><a href="#dushman" className="hover:text-gold transition-colors urdu-font">دشمن سے نجات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold text-xl mb-4">رابطہ</h4>
            <div className="space-y-4 text-base">
              <p className="flex items-center space-x-3 space-x-reverse">
                <span className="text-gold text-xl">☏</span>
                <span className="font-sans">+92 300 0000000</span>
              </p>
              <p className="flex items-center space-x-3 space-x-reverse">
                <span className="text-gold text-xl">✉</span>
                <span className="font-sans">info@islamictaweez.com</span>
              </p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-gold/80 italic urdu-font leading-[3.2]">اللہ کریم آپ کا حامی و ناصر ہو۔ آمین</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs font-sans tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ISLAMIC TAWEEZ WEBSITE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
