
import React from 'react';
import { BookOpen } from 'lucide-react';

const Wazaif: React.FC = () => {
  const wazaif = [
    { title: "صبح و شام کے مسنون اذکار", tag: "حفاظت" },
    { title: "رزق میں برکت کا خاص وظیفہ", tag: "رزق" },
    { title: "بیماریوں سے شفاء کی دعا", tag: "صحت" },
    { title: "دشمن کے شر سے بچنے کا عمل", tag: "حفاظت" },
  ];

  return (
    <section className="py-12 bg-beige/5 section-border pattern-geometric">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-urdu font-bold text-emerald mb-2">منتخب وظائف و اذکار</h2>
          <p className="text-sm text-gray-500 urdu-font leading-[2.5]">روزمرہ زندگی کے لیے مجرب قرآنی عمل</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wazaif.map((item, idx) => (
            <div key={idx} className="bg-white golden-border-card p-5 rounded-sm hover:border-gold transition-colors flex flex-col items-start shadow-sm">
              <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full mb-3 font-bold urdu-font">{item.tag}</span>
              <h3 className="text-md font-bold text-emerald mb-4 urdu-font leading-[2.5] min-h-[50px]">{item.title}</h3>
              <button className="text-emerald text-xs font-bold urdu-font border-b border-emerald/20 hover:border-emerald transition-all flex items-center space-x-1 space-x-reverse">
                <span>مزید پڑھیں</span>
                <BookOpen size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wazaif;
