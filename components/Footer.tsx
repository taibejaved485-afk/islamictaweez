
import React from 'react';
import { Lock, Phone, Mail, Facebook, Youtube, MessageCircle, Heart, ShieldCheck, Book, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenAdmin?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-emerald text-white pt-32 pb-48 font-urdu relative overflow-hidden border-t-8 border-gold/40">
      {/* Premium Background Overlay */}
      <div className="absolute inset-0 pattern-emerald opacity-20 pointer-events-none"></div>
      
      {/* Decorative Arch Transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[2px] w-64 h-12 bg-gold/30 rounded-b-[60px] blur-xl opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-gold rounded-b-[40px] flex items-center justify-center shadow-gold-glow">
        <div className="w-2 h-2 rounded-full bg-emerald"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Identity & Soul */}
          <div className="flex flex-col space-y-8">
            <div className="text-right">
              <h3 className="text-3xl font-bold text-gold mb-4 border-r-4 border-gold pr-4">اسلامی تعویز</h3>
              <p className="text-white/80 text-lg leading-[3.5] text-justify">
                ہم پچھلی دو دہائیوں سے قرآن و سنت کے فیض سے انسانیت کی خدمت کر رہے ہیں۔ ہر نقش اور ہر وظیفہ مکمل شرعی تقاضوں کے مطابق تیار کیا جاتا ہے تاکہ آپ کی زندگی میں سکون اور برکت آئے۔
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-[30px] border border-gold/20 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500">
               <span className="amiri-text text-4xl text-gold font-bold mb-2 group-hover:scale-105 transition-transform">اللّٰہُ اَکْبَرُ</span>
               <p className="text-xs text-gold/60 font-sans tracking-widest uppercase">Spiritual Authority</p>
            </div>
          </div>

          {/* Column 2: Spiritual Services Links */}
          <div className="text-right">
            <h4 className="text-gold font-bold text-xl mb-10 flex items-center gap-3 justify-end">
              روحانی خدمات <ShieldCheck className="w-5 h-5" />
            </h4>
            <ul className="space-y-4 text-lg">
              {[
                { name: "آن لائن استخارہ", id: "contact" },
                { name: "جادو کا مکمل توڑ", id: "jadu-section" },
                { name: "حب و محبت کے نقوش", id: "mohabbat-section" },
                { name: "کاروباری بندش کا حل", id: "rizq-section" },
                { name: "حفاظتِ جان و مال", id: "sehat-section" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-white/70 hover:text-gold transition-all flex items-center gap-2 justify-end group">
                    <span className="border-b border-transparent group-hover:border-gold/30 pb-1">{link.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Knowledge */}
          <div className="text-right">
            <h4 className="text-gold font-bold text-xl mb-10 flex items-center gap-3 justify-end">
              علمی و روحانی خزانہ <Book className="w-5 h-5" />
            </h4>
            <ul className="space-y-4 text-lg">
              {[
                { name: "تازہ ترین بلاگز", id: "blogs" },
                { name: "مجرب وظائف", id: "wazaif" },
                { name: "خوابوں کی تعبیر", id: "khwab-section" },
                { name: "اسمِ اعظم کی تسبیح", id: "hajat-section" },
                { name: "اسلامی انگوٹھیاں", id: "rings-section" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-white/70 hover:text-gold transition-all flex items-center gap-2 justify-end group">
                    <span className="border-b border-transparent group-hover:border-gold/30 pb-1">{link.name}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Help Center */}
          <div className="text-right space-y-8">
            <h4 className="text-gold font-bold text-xl mb-2 flex items-center gap-3 justify-end">
              فوری مدد <Phone className="w-5 h-5" />
            </h4>
            
            <div className="space-y-4">
              <a href="tel:+923000000000" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-gold/10 hover:border-gold/40 transition-all group">
                <div className="flex-grow">
                  <p className="text-xs text-gold/60 font-sans">24/7 Call Support</p>
                  <p className="text-lg font-bold font-sans tracking-wider">+92 300 0000000</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold group-hover:text-emerald transition-all">
                  <Phone size={20} />
                </div>
              </a>

              <a href="mailto:help@islamictaweez.com" className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-gold/10 hover:border-gold/40 transition-all group">
                <div className="flex-grow">
                  <p className="text-xs text-gold/60 font-sans">Email Consultations</p>
                  <p className="text-base font-sans break-all">help@islamictaweez.com</p>
                </div>
                <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold group-hover:text-emerald transition-all">
                  <Mail size={20} />
                </div>
              </a>

              <div className="pt-6">
                <p className="text-gold font-bold urdu-font text-2xl animate-pulse mb-2">اللّٰہ پاک آپ کا حامی و ناصر ہو۔</p>
                <div className="w-full h-1 bg-gradient-to-l from-gold/40 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Admin Portal */}
        <div className="border-t border-gold/20 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-white/40 text-xs font-sans tracking-[0.2em] uppercase">
              &copy; {new Date().getFullYear()} ISLAMIC TAWEEZ • ESTABLISHED 2004 
            </p>
            
            {/* Highly Visible Admin Link */}
            <button 
              onClick={onOpenAdmin}
              className="group flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-gold/20 hover:border-gold hover:bg-gold/10 transition-all duration-500"
            >
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                <Lock size={12} className="text-gold group-hover:text-emerald" />
              </div>
              <span className="urdu-font text-sm font-bold text-gold/80 group-hover:text-gold transition-colors">ایڈمن لاگ ان پورٹل</span>
            </button>
          </div>

          {/* Enhanced Social Media Icons */}
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3 space-x-reverse items-center ml-4 border-l border-gold/20 pl-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald bg-gold/20 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Satisfied User" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="مطمئن سائل" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-emerald bg-gold text-[10px] font-bold text-emerald flex items-center justify-center shadow-lg">+10k</div>
            </div>
            
            <div className="flex gap-4">
               <a 
                href="https://facebook.com" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl border border-gold/20 flex items-center justify-center text-white/50 hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] transition-all duration-500 group"
                title="Facebook"
               >
                 <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </a>
               <a 
                href="https://youtube.com" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl border border-gold/20 flex items-center justify-center text-white/50 hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all duration-500 group"
                title="YouTube"
               >
                 <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </a>
               <a 
                href="https://wa.me/923000000000" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl border border-gold/20 flex items-center justify-center text-white/50 hover:bg-[#25D366] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-500 group"
                title="WhatsApp"
               >
                 <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </a>
               <a 
                href="https://instagram.com" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl border border-gold/20 flex items-center justify-center text-white/50 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(238,42,123,0.5)] transition-all duration-500 group"
                title="Instagram"
               >
                 <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
               </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Absolute Bottom Motif */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-dark/50 to-transparent flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-full max-w-4xl h-[1px] bg-gold/30"></div>
      </div>
    </footer>
  );
};

export default Footer;
