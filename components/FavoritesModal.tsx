
import React from 'react';
import { X, Heart, MessageCircle, Star } from 'lucide-react';
import { services } from './Services';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: number[];
  onRemove: (id: number) => void;
}

const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose, favoriteIds, onRemove }) => {
  if (!isOpen) return null;

  const favoriteServices = services.filter(s => favoriteIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-emerald/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative glass-card w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl border-2 border-gold/30 shadow-2xl flex flex-col dropdown-animate">
        {/* Header */}
        <div className="p-6 border-b border-gold/20 flex justify-between items-center bg-white/50">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 fill-gold text-gold" />
            <h2 className="text-2xl font-bold text-emerald urdu-font">پسندیدہ خدمات</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gold/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-emerald" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-grow overflow-y-auto p-6 no-scrollbar">
          {favoriteServices.length === 0 ? (
            <div className="text-center py-12">
              <Star className="w-12 h-12 text-gold/20 mx-auto mb-4" />
              <p className="text-gray-500 urdu-font text-lg">آپ کی پسندیدہ فہرست ابھی خالی ہے۔</p>
              <button 
                onClick={onClose}
                className="mt-6 text-emerald font-bold urdu-font border-b border-emerald"
              >
                خدمات دیکھیں
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {favoriteServices.map(service => (
                <div key={service.id} className="bg-white/60 p-5 rounded-2xl border border-gold/10 flex items-center justify-between gap-4 group hover:border-gold/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-gold bg-emerald/5 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <h3 className="text-lg font-bold text-emerald urdu-font">{service.title}</h3>
                      <p className="text-xs text-gray-600 urdu-font leading-[2]">اس خدمت کے ذریعے آپ کا روحانی حل ممکن ہے۔</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemove(service.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favoriteServices.length > 0 && (
          <div className="p-6 border-t border-gold/20 bg-emerald/5">
            <a 
              href={`https://wa.me/923000000000?text=${encodeURIComponent("السلام علیکم، میں ان خدمات کے بارے میں مزید جاننا چاہتا ہوں: " + favoriteServices.map(s => s.title).join(", "))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald text-white py-4 rounded-xl font-bold text-lg urdu-font shadow-xl flex items-center justify-center gap-3 hover:bg-emerald-dark transition-all"
            >
              <MessageCircle className="w-6 h-6 text-gold" />
              تمام پسندیدہ پر بات کریں
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;
