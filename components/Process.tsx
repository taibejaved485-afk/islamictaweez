
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: "رابطہ کریں", desc: "واٹس ایپ یا فارم کے ذریعے اپنا مسئلہ بتائیں۔", num: "۱" },
    { title: "استخارہ کروائیں", desc: "ہمارے ماہرین آپ کے لیے شرعی استخارہ کریں گے۔", num: "۲" },
    { title: "روحانی حل پائیں", desc: "قرآنی تعویذ اور وظائف کے ذریعے مکمل علاج۔", num: "۳" },
  ];

  return (
    <section className="py-12 bg-white section-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-urdu font-bold text-emerald mb-2">روحانی علاج کا طریقہ کار</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-emerald text-gold rounded-full flex items-center justify-center text-xl font-bold mb-4 border-2 border-gold shadow-md">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-emerald mb-2 urdu-font leading-[2.5]">{step.title}</h3>
              <p className="text-sm text-gray-600 urdu-font leading-[2.5]">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden md:block absolute top-12 -left-4 w-full h-[1px] bg-gold/20 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
