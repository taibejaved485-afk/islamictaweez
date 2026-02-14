
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Star, Heart } from 'lucide-react';

interface NavbarProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ favoriteCount, onOpenFavorites }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const asmaUlHusna = "الله • الرَّحْمَنُ • الرَّحِيمُ • الْمَلِکُ • الْقُدُّوسُ • السَّلَامُ • الْمُؤْمِنُ • الْمُهَيْمِنُ • الْعَزیزُ • الْجَبَّارُ • الْمُتَکَبِّرُ • الْخَالِقُ • الْبَارِئُ • الْمُصَوِّرُ • الْغَفَّارُ • الْقَهَّارُ • الْوَهَّابُ • الرَّزَّاقُ • الْفَتَّاحُ • الْعَلِيمُ • الْقَابِضُ • الْبَاسِطُ • الْخَافِضُ • الرَّافِعُ • الْمُعِزُّ • الْمُذِلُّ • السَّمِيعُ • الْبَصِيرُ • الْحَکَمُ • الْعَدْلُ • اللَّطِيفُ • الْخَبِيرُ • الْحَلِيمُ • الْعَظِيمُ • الْغَفُورُ • الشَّکُورُ • الْعَلِيُّ • الْکَبِيرُ • الْحَفِيظُ • الْمُقِيتُ • الْحَسِيبُ • الْجَلِيلُ • الْکَرِيمُ • الرَّقِيبُ • الْمُجِيبُ • الْوَاسِعُ • الْحَکِيمُ • الْوَدُودُ • الْمَجِيدُ • الْبَاعِثُ • الشَّهِيدُ • الْحَقُّ • الْوَکِيلُ • الْقَوِيُّ • الْمَتِينُ • الْوَلِيُّ • الْحَمِيدُ • الْمُحْصِي • الْمُبْدِئُ • الْمُعِيدُ • الْمُحْيِي • الْمُمِیتُ • الْحَيُّ • الْقَيُّومُ • الْوَاجِدُ • الْمَاجِدُ • الْوَاحِدُ • الْأَحَدُ • الصَّمَدُ • الْقَادِرُ • الْمُقْتَدِرُ • الْمُقَدِّمُ • الْمُؤَخِّرُ • الْأَوَّلُ • الْآخِرُ • الظَّاهِرُ • الْبَاطِنُ • الْوَالِي • الْمُتَعَالِي • الْبَرُّ • التَّوَّابُ • الْمُنْتَقِمُ • الْعَفُوُّ • الرَّؤُوفُ • مَالِکُ الْمُلْکِ • ذُو الْجَلَالِ وَالْإِکْرَامِ • الْمُقْسِطُ • الْجَامِعُ • الْغَنِيُّ • الْمُغْنِي • الْمَانِعُ • الضَّارُّ • النَّافِعُ • النُّورُ • الْهَادِي • الْبَدِيعُ • الْبَاقِي • الْوَارِثُ • الرَّشِيدُ • الصَّبُورُ";

  const menuItems = [
    {
      title: "تعویذات",
      items: [
        { name: "صحت و شفا", target: "sehat-section" },
        { name: "حب و محبت", target: "mohabbat-section" },
        { name: "جادو کا توڑ", target: "jadu-section" },
        { name: "حفاظتِ حمل", target: "hamal-section" },
        { name: "رزق کی برکت", target: "rizq-section" },
        { name: "دشمن سے نجات", target: "dushman" }
      ]
    },
    {
      title: "روحانی استخارہ",
      items: [
        { name: "شادی کا استخارہ", target: "istikhara-shadi-detail" },
        { name: "سفر کی رہنمائی", target: "safar-section" },
        { name: "نوکری و ملازمت", target: "mulazmat-section" },
        { name: "کاروبار کا استخارہ", target: "rizq-section" },
        { name: "خوابوں کی تعبیر", target: "khwab-section" }
      ]
    },
    {
      title: "وظائف",
      items: [
        { name: "رزق کی دعا", target: "rizq-section" },
        { name: "بیماری سے شفا", target: "sehat-section" },
        { name: "حاجت کی دعا", target: "hajat-section" }
      ]
    },
    {
      title: "اسلامی انگوٹھیاں",
      items: [
        { name: "عقیق یمنی", target: "rings-section" },
        { name: "فیروزہ", target: "rings-section" },
        { name: "یاقوت", target: "rings-section" }
      ]
    }
  ];

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[200]">
      <div className="pattern-emerald h-12 flex items-center overflow-hidden border-b border-gold/40 shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="amiri-text text-gold text-lg px-4 tracking-widest">{asmaUlHusna}</span>
          <span className="amiri-text text-gold text-lg px-4 tracking-widest">{asmaUlHusna}</span>
        </div>
      </div>

      <nav className="h-16 glass-card border-b border-gold/20 flex items-center relative">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-emerald urdu-font text-2xl font-bold border-l-2 border-gold pl-4 ml-4">اسلامی تعویز</span>
          </div>
          
          <div className="hidden lg:flex items-center h-full space-x-2 space-x-reverse">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-gold transition-colors urdu-font px-4 font-bold text-emerald">ہوم</button>
            {menuItems.map((cat) => (
              <div key={cat.title} className="relative group h-full flex items-center">
                <button className="flex items-center space-x-1 space-x-reverse hover:text-gold transition-colors px-4 group h-full">
                  <span className="urdu-font font-bold text-emerald group-hover:text-gold">{cat.title}</span>
                  <ChevronDown className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform" />
                </button>
                <div className="dropdown-menu absolute right-0 top-full hidden group-hover:block w-64 glass-card border-t-4 border-gold shadow-2xl py-2 rounded-b-lg dropdown-animate">
                  {cat.items.map(item => (
                    <button 
                      key={item.name}
                      onClick={() => scrollToId(item.target)}
                      className="block w-full text-right px-4 py-3 hover:bg-gold/10 hover:text-emerald text-sm urdu-font border-b border-gray-50 last:border-0 leading-[3.2] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => scrollToId('contact')} className="hover:text-gold transition-colors urdu-font px-4 font-bold text-emerald">رابطہ</button>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse">
            <button 
              onClick={onOpenFavorites}
              className="relative p-2 text-emerald hover:text-gold transition-colors group"
              aria-label="Favorites"
            >
              <Heart className={`w-6 h-6 ${favoriteCount > 0 ? 'fill-gold text-gold' : ''}`} />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white shadow-sm">
                  {favoriteCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => scrollToId('contact')}
              className="bg-emerald text-white px-6 py-2 rounded-full text-sm urdu-font font-bold hover:bg-emerald-dark hover:shadow-gold-glow transition-all duration-300 shadow-lg flex items-center gap-2 border border-gold/30"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              مفت استخارہ
            </button>
            <button className="lg:hidden text-emerald" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-t border-gold/20 shadow-2xl py-6 flex flex-col items-center max-h-[85vh] overflow-y-auto no-scrollbar">
             <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setMobileMenuOpen(false);}} className="w-full py-3 text-emerald font-bold urdu-font text-lg border-b border-gold/10">ہوم</button>
            {menuItems.map(cat => (
              <div key={cat.title} className="w-full text-center py-3 border-b border-gold/10">
                <div className="font-bold text-emerald urdu-font mb-2 text-lg px-4">{cat.title}</div>
                <div className="grid grid-cols-2 gap-3 px-6">
                  {cat.items.map(item => (
                    <button 
                      key={item.name}
                      onClick={() => scrollToId(item.target)}
                      className="py-3 text-gray-700 urdu-font text-xs bg-white/50 rounded-lg border border-gold/20 leading-[3.2] shadow-sm"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={onOpenFavorites} className="w-full py-4 text-gold font-bold urdu-font text-lg bg-gold/5 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 fill-gold" /> پسندیدہ خدمات ({favoriteCount})
            </button>
            <button onClick={() => scrollToId('contact')} className="w-full py-5 text-emerald font-bold urdu-font text-lg bg-gold/10 mt-2">رابطہ کریں</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
