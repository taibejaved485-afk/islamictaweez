
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { 
      q: "کیا استخارہ کے لیے فیس لی جاتی ہے؟", 
      a: "جی نہیں، ہم اللہ کی رضا کے لیے ابتدائی استخارہ بالکل مفت کرتے ہیں تاکہ آپ کو صحیح رہنمائی مل سکے۔" 
    },
    { 
      q: "روحانی علاج میں کتنا وقت لگتا ہے؟", 
      a: "ہر مسئلے کی نوعیت الگ ہوتی ہے۔ عام طور پر 3 سے 7 دن کے اندر مثبت تبدیلی محسوس ہونا شروع ہو جاتی ہے۔" 
    },
    { 
      q: "کیا آپ کے تعویذات قرآنی آیات سے تیار کیے جاتے ہیں؟", 
      a: "جی ہاں، ہمارے تمام نقوش اور تعویذات مکمل طور پر قرآنی آیات، اسمائے الٰہیہ اور مسنون دعاؤں کی روشنی میں تیار کیے جاتے ہیں۔" 
    },
    { 
      q: "کیا رازداری کا خیال رکھا جاتا ہے؟", 
      a: "بالکل، آپ کی تمام معلومات اور مسائل کو مکمل طور پر صیغہ راز میں رکھا جاتا ہے۔" 
    },
  ];

  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent("السلام علیکم، مجھے مزید تفصیلات جاننی ہیں۔")}`;

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-urdu font-bold text-emerald mb-2">عام سوالات و جوابات</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 text-right bg-white hover:bg-beige/10 transition-colors"
              >
                <span className="text-base md:text-lg font-bold text-emerald urdu-font leading-[2.5]">{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={18} className="text-gold" /> : <ChevronDown size={18} className="text-gold" />}
              </button>
              {openIdx === idx && (
                <div className="p-4 bg-beige/5 border-t border-gray-50 text-base text-gray-700 urdu-font leading-[2.5]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 space-x-reverse bg-emerald text-white px-8 py-3 rounded-sm font-bold urdu-font text-lg hover:bg-emerald-dark transition-all shadow-md group"
          >
            <MessageCircle className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
            <span>مزید تفصیل کے لیے واٹس ایپ کریں</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
