
import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  blogs: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  if (blogs.length === 0) return null;

  return (
    <section id="blogs" className="py-24 bg-beige/30 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-urdu font-bold text-emerald mb-6">تازہ ترین روحانی بلاگز</h2>
          <div className="gold-divider mx-auto w-48"></div>
          <p className="urdu-font text-xl text-gray-600 max-w-3xl mx-auto leading-[3.5]">
            قرآن و سنت کی روشنی میں علمی و روحانی مضامین، جو آپ کی زندگی میں سکون اور رہنمائی کا باعث بنیں گے۔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-gold/10 hover:shadow-gold-glow-subtle transition-all duration-500 group"
            >
              {/* Image Placeholder */}
              <div className="h-56 pattern-emerald relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-20 h-20 text-gold/20 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-4 py-1 rounded-full text-xs font-bold text-emerald urdu-font">
                  {blog.category}
                </div>
              </div>

              <div className="p-8 text-right">
                <div className="flex items-center gap-2 mb-4 justify-end text-gold">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-sans font-bold">{blog.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-emerald urdu-font mb-6 leading-[1.6]">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 urdu-font leading-[3.5] mb-8 line-clamp-3">
                  {blog.content}
                </p>

                <button className="flex items-center gap-3 text-emerald font-bold urdu-font group-hover:text-gold transition-colors ml-auto border-b-2 border-transparent hover:border-gold pb-1">
                  <span>مکمل مضمون پڑھیں</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
