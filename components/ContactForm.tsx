
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mothersName: '',
    phone: '',
    problem: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', mothersName: '', phone: '', problem: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-12 bg-white section-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white border border-gold p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-emerald text-center mb-6 urdu-font">آن لائن روحانی تشخیص و استخارہ</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-emerald font-bold mb-1 text-sm urdu-font">نام</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 focus:border-gold outline-none transition-all text-sm urdu-font"
                />
              </div>
              <div>
                <label className="block text-emerald font-bold mb-1 text-sm urdu-font">والدہ کا نام</label>
                <input 
                  type="text" 
                  required
                  value={formData.mothersName}
                  onChange={(e) => setFormData({...formData, mothersName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 focus:border-gold outline-none transition-all text-sm urdu-font"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-emerald font-bold mb-1 text-sm urdu-font">واٹس ایپ نمبر</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                dir="ltr"
                className="w-full px-4 py-2 border border-gray-200 focus:border-gold outline-none transition-all text-sm text-right font-sans"
              />
            </div>

            <div>
              <label className="block text-emerald font-bold mb-1 text-sm urdu-font">اپنا مسئلہ لکھیں</label>
              <textarea 
                rows={3} 
                required
                value={formData.problem}
                onChange={(e) => setFormData({...formData, problem: e.target.value})}
                className="w-full px-4 py-2 border border-gray-200 focus:border-gold outline-none transition-all text-sm urdu-font resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-emerald text-white py-3 rounded font-bold text-base urdu-font shadow hover:bg-emerald-dark transition-all flex items-center justify-center space-x-3 space-x-reverse"
            >
              <span>درخواست ارسال کریں</span>
              <Send size={18} />
            </button>
            {status === 'success' && (
              <p className="text-center text-green-600 text-xs urdu-font mt-2">آپ کا پیغام کامیابی سے موصول ہو گیا ہے، جلد رابطہ کیا جائے گا۔</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
