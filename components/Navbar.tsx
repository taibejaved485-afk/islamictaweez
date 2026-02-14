
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const asmaUlHusna = "الله • الرَّحْمَنُ • الرَّحِيمُ • الْمَلِکُ • الْقُدُّوسُ • السَّلَامُ • الْمُؤْمِنُ • الْمُهَيْمِنُ • الْعَزِيزُ • الْجَبَّارُ • الْمُتَکَبِّرُ • الْخَالِقُ • الْبَارِئُ • الْمُصَوِّرُ • الْغَفَّارُ • الْقَهَّارُ • الْوَهَّابُ • الرَّزَّاقُ • الْفَتَّاحُ • الْعَلِيمُ • الْقَابِضُ • الْبَاسِطُ • الْخَافِضُ • الرَّافِعُ • الْمُعِزُّ • الْمُذِلُّ • السَّمِيعُ • الْبَصِيرُ • الْحَکَمُ • الْعَدْلُ • اللَّطِيفُ • الْخَبِيرُ • الْحَلِيمُ • الْعَظِيمُ • الْغَفُورُ • الشَّکُورُ • الْعَلِيُّ • الْکَبِيرُ • الْحَفِيظُ • الْمُقِيتُ • الْحَسِيبُ • الْجَلِيلُ • الْکَرِيمُ • الرَّقِيبُ • الْمُجِيبُ • الْوَاسِعُ • الْکَحِيمُ • الْوَدُودُ • الْمَجِيدُ • الْبَاعِثُ • الشَّهِيدُ • الْحَقُّ • الْوَکِيلُ • الْقَوِيُّ • الْمَتِينُ • الْوَلِيُّ • الْحَمِيدُ • الْمُحْصِي • الْمُبْدِئُ • الْمُعِيدُ • الْمُحْيِي • الْمُمِيتُ • الْحَيُّ • الْقَيُّومُ • الْوَاجِدُ • الْمَاجِدُ • الْوَاحِدُ • الْأَحَدُ • الصَّمَدُ • الْقَادِرُ • الْمُقْتَدِرُ • الْمُقَدِّمُ • الْمُؤَخِّرُ • الْأَوَّلُ • الْآخِرُ • الظَّاهِرُ • الْبَاطِنُ • الْوَالِي • الْمُتَعَالِي • الْبَرُّ • التَّوَّابُ • الْمُنْتَقِمُ • الْعَفُوُّ • الرَّؤُوفُ • مَالِکُ الْمُلْکِ • ذُو الْجَلَالِ وَالْإِکْرَامِ • الْمُقْسِطُ • الْجَامِعُ • الْغَنِيُّ • الْمُغْنِي • الْمَانِعُ • الضَّارُّ • النَّافِعُ • النُّورُ • الْهَادِي • الْبَدِيعُ • الْبَاقِي • الْوَارِثُ • الرَّشِيدُ • الصَّبُورُ";

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
      const offset = 80;
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
      {/* Top Asma-ul-Husna Slider */}
      <div className="pattern-emerald h-10 flex items-center overflow-hidden border-b border-gold/40 shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="amiri-text text-gold text-sm px-4 tracking-widest">{asmaUlHusna}</span>
          <span className="amiri-text text-gold text-sm px-4 tracking-widest">{asmaUlHusna}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="h-16 bg-white border-b border-gray-100 shadow-md flex items-center">
        <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-emerald urdu-font text-xl font-bold border-l-2 border-gold pl-3 ml-3">اسلامی تعویز</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2 space-x-reverse text-sm font-medium">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-gold transition-colors urdu-font px-3">ہوم</button>
            {menuItems.map((cat) => (
              <div key={cat.title} className="relative group py-5">
                <button className="flex items-center space-x-1 space-x-reverse hover:text-gold transition-colors px-3">
                  <span className="urdu-font font-bold text-emerald group-hover:text-gold">{cat.title}</span>
                  <ChevronDown className="w-3 h-3 text-gold" />
                </button>
                <div className="dropdown-menu absolute right-0 top-full hidden w-64 bg-white border-t-4 border-gold shadow-2xl py-2">
                  {cat.items.map(item => (
                    <button 
                      key={item.name}
                      onClick={() => scrollToId(item.target)}
                      className="block w-full text-right px-4 py-3 hover:bg-beige hover:text-emerald text-sm urdu-font border-b border-gray-50 last:border-0 leading-[3.2]"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => scrollToId('contact')} className="hover:text-gold transition-colors urdu-font px-3">رابطہ</button>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse">
            <button 
              onClick={() => scrollToId('contact')}
              className="bg-emerald text-white px-5 py-2 rounded-sm text-sm urdu-font font-bold hover:bg-emerald-dark transition-all shadow-sm flex items-center gap-2"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              مفت استخارہ
            </button>
            <button className="lg:hidden text-emerald" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl py-6 flex flex-col items-center max-h-[85vh] overflow-y-auto no-scrollbar">
            {menuItems.map(cat => (
              <div key={cat.title} className="w-full text-center py-3 border-b border-gray-50">
                <div className="font-bold text-emerald urdu-font mb-2 text-base px-4">{cat.title}</div>
                <div className="grid grid-cols-2 gap-2 px-6">
                  {cat.items.map(item => (
                    <button 
                      key={item.name}
                      onClick={() => scrollToId(item.target)}
                      className="py-3 text-gray-700 urdu-font text-xs bg-beige/10 rounded border border-gray-100 leading-[3.2]"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => scrollToId('contact')} className="w-full py-5 text-emerald font-bold urdu-font text-center bg-beige/20 mt-4">رابطہ کریں</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
