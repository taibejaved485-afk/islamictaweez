
import React from 'react';
import { Quote, MessageCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "سلمیٰ خان - لاہور", 
      text: "میری شادی میں بہت رکاوٹیں تھیں، لیکن یہاں سے رہنمائی اور دعا کے بعد الحمدللہ تمام مسائل حل ہو گئے اور اب میں خوشحال زندگی گزار رہی ہوں۔" 
    },
    { 
      name: "احمد رضا - کراچی", 
      text: "کاروبار بالکل ٹھپ ہو چکا تھا۔ استخارہ کروانے کے بعد معلوم ہوا کہ نظرِ بد کا مسئلہ ہے۔ تعویذِ رزق سے اللہ نے بہت برکت عطا فرمائی۔" 
    },
    { 
      name: "محمد عمر - دبئی", 
      text: "بیرونِ ملک سفر کے لیے بہت پریشان تھا۔ یہاں سے کیے گئے وظائف کی بدولت میرے ویزا کے تمام مسائل غائبانہ طور پر حل ہو گئے۔" 
    },
  ];

  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent("السلام علیکم، مجھے دیگر لوگوں کے تجربات اور اپنے مسئلے کے حل کے بارے میں جاننا ہے۔")}`;

  return (
    <section className="py-12 bg-beige/5 section-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-urdu font-bold text-emerald mb-2">لوگوں کی آراء</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 border border-gold/20 bg-white relative rounded-sm shadow-md hover:shadow-lg transition-all">
              <Quote className="text-gold/10 absolute top-4 left-4 w-10 h-10 -scale-x-100" />
              <p className="text-base md:text-lg text-gray-700 urdu-font leading-[2.5] mb-6 relative z-10 italic">
                "{rev.text}"
              </p>
              <div className="text-sm font-bold text-emerald urdu-font border-t border-gold/10 pt-4 flex items-center justify-between">
                <span>{rev.name}</span>
                <span className="text-gold">★★★★★</span>
              </div>
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

export default Testimonials;
