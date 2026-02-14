
import React from 'react';
import { Award, Users, ShieldCheck, Globe } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: "سالہ تجربہ", value: "20+", icon: <Award className="text-gold w-6 h-6" /> },
    { label: "مطمئن صارفین", value: "10,000+", icon: <Users className="text-gold w-6 h-6" /> },
    { label: "روحانی رہنمائی", value: "100%", icon: <ShieldCheck className="text-gold w-6 h-6" /> },
    { label: "عالمی سپورٹ", value: "برطانیہ، امریکہ، دبئی", icon: <Globe className="text-gold w-6 h-6" /> },
  ];

  return (
    <section className="py-10 bg-white section-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 border border-gray-50 rounded-sm hover:shadow-sm transition-shadow">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-emerald font-sans">{stat.value}</div>
              <div className="text-sm text-gray-600 urdu-font leading-[2.5]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
