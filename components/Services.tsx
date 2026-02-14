
import React from 'react';
import { Shield, BookOpen, Moon, Eye, Heart } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "حفاظتِ جان و مال",
    urduTitle: "حفاظت",
    description: "گھر اور جان کو حاسدین کے شر سے بچانے کے لیے طاقتور روحانی حصار۔",
    icon: <Shield className="w-10 h-10" />
  },
  {
    id: 2,
    title: "پسند کی شادی",
    urduTitle: "پسند کی شادی",
    description: "شادی میں حائل رکاوٹ اور رشتوں کی تلخی دور کرنے کا قرآنی حل۔",
    icon: <Moon className="w-10 h-10" />
  },
  {
    id: 3,
    title: "رزق کی کشادگی",
    urduTitle: "رزق کی کشادگی",
    description: "کاروبار میں برکت اور مال کی تنگی دور کرنے کے لیے خاص نقوش۔",
    icon: <BookOpen className="w-10 h-10" />
  },
  {
    id: 4,
    title: "سحر و نظر کا توڑ",
    urduTitle: "نظربد کا علاج",
    description: "کالا جادو، سفلی عمل اور نظرِ بد کا جڑ سے خاتمہ کرنے کے لیے قرآنی دم۔",
    icon: <Eye className="w-10 h-10" />
  }
];

interface ServicesProps {
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

const Services: React.FC<ServicesProps> = ({ favoriteIds, onToggleFavorite }) => {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-urdu font-bold text-emerald mb-6">ہماری مخلصانہ روحانی خدمات</h2>
          <div className="gold-divider mx-auto w-48 opacity-100"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => {
            const isFav = favoriteIds.includes(service.id);
            return (
              <div 
                key={service.id} 
                className="glass-card p-10 mehrab-arch hover-gold-glow flex flex-col items-center text-center group relative"
              >
                <button 
                  onClick={() => onToggleFavorite(service.id)}
                  className="absolute top-6 left-6 z-10 p-2 rounded-full bg-white/50 hover:bg-gold/10 transition-colors group/heart"
                  aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart className={`w-5 h-5 transition-all ${isFav ? 'fill-gold text-gold' : 'text-emerald group-hover/heart:text-gold'}`} />
                </button>

                <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-500 bg-emerald/10 p-4 rounded-full">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-urdu font-bold text-emerald mb-6 border-b-2 border-gold/20 pb-2 w-full">{service.title}</h4>
                <p className="text-gray-700 text-lg urdu-font leading-[3.5]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
