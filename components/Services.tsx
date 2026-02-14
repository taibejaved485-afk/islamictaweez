
import React from 'react';
import { Shield, BookOpen, Moon, Eye } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "حفاظتِ جان و مال",
    urduTitle: "حفاظت",
    description: "گھر اور جان کو حاسدین کے شر سے بچانے کے لیے طاقتور روحانی حصار۔",
    icon: <Shield className="w-8 h-8" />
  },
  {
    id: 2,
    title: "پسند کی شادی",
    urduTitle: "پسند کی شادی",
    description: "شادی میں حائل رکاوٹ اور رشتوں کی تلخی دور کرنے کا قرآنی حل۔",
    icon: <Moon className="w-8 h-8" />
  },
  {
    id: 3,
    title: "رزق کی کشادگی",
    urduTitle: "رزق کی کشادگی",
    description: "کاروبار میں برکت اور مال کی تنگی دور کرنے کے لیے خاص نقوش۔",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    id: 4,
    title: "سحر و نظر کا توڑ",
    urduTitle: "نظربد کا علاج",
    description: "کالا جادو، سفلی عمل اور نظرِ بد کا جڑ سے خاتمہ کرنے کے لیے قرآنی دم۔",
    icon: <Eye className="w-8 h-8" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-urdu font-bold text-emerald mb-2">ہماری مخلصانہ روحانی خدمات</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 border border-gray-100 shadow-sm hover:border-gold transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="text-emerald mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-urdu font-bold text-emerald mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm urdu-font leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
