
import React, { useState, useRef, useEffect } from 'react';
import { 
  LogOut, Plus, Trash2, LayoutDashboard, FileText, X, 
  Image as ImageIcon, Bold, Italic, Underline, AlignLeft, 
  AlignCenter, AlignRight, List, ListOrdered, Save, Send, 
  Eye, Edit3, Tag, Search, CheckCircle, AlertCircle
} from 'lucide-react';
import { BlogPost } from '../types';

interface AdminPanelProps {
  onClose: () => void;
  blogs: BlogPost[];
  onUpdateBlogs: (blogs: BlogPost[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, blogs, onUpdateBlogs }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  const [view, setView] = useState<'dashboard' | 'editor'>('dashboard');
  const [showPreview, setShowPreview] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error'} | null>(null);

  // Editor State
  const [editorData, setEditorData] = useState({
    title: '',
    category: 'وظائف',
    content: '',
    tags: '',
    isDraft: false
  });

  const editorRef = useRef<HTMLDivElement>(null);

  const categories = ['وظائف', 'استخارہ', 'روحانی علاج', 'حفاظت', 'محبت', 'رزق', 'جادو', 'صحت'];

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'taweez123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('غلط صارف نام یا پاس ورڈ');
    }
  };

  const handleExecCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setEditorData(prev => ({ ...prev, content: editorRef.current?.innerHTML || '' }));
    }
  };

  const openEditor = (blog?: BlogPost) => {
    if (blog) {
      setEditingBlogId(blog.id);
      setEditorData({
        title: blog.title,
        category: blog.category,
        content: blog.content,
        tags: blog.tags?.join(', ') || '',
        isDraft: blog.isDraft || false
      });
      // Content will be set via dangerouslySetInnerHTML in the render
    } else {
      setEditingBlogId(null);
      setEditorData({
        title: '',
        category: 'وظائف',
        content: '',
        tags: '',
        isDraft: false
      });
    }
    setView('editor');
  };

  const saveBlog = (asDraft: boolean = false) => {
    const finalContent = editorRef.current?.innerHTML || '';
    if (!editorData.title || !finalContent) {
      setNotification({ msg: 'براہ کرم عنوان اور مواد درج کریں', type: 'error' });
      return;
    }

    const blog: BlogPost = {
      id: editingBlogId || Date.now().toString(),
      title: editorData.title,
      category: editorData.category,
      content: finalContent,
      tags: editorData.tags.split(',').map(t => t.trim()).filter(t => t),
      isDraft: asDraft,
      date: new Date().toLocaleDateString('ur-PK'),
    };

    if (editingBlogId) {
      onUpdateBlogs(blogs.map(b => b.id === editingBlogId ? blog : b));
      setNotification({ msg: 'بلاگ کامیابی سے اپ ڈیٹ ہو گیا', type: 'success' });
    } else {
      onUpdateBlogs([blog, ...blogs]);
      setNotification({ msg: 'نیا بلاگ کامیابی سے شائع ہو گیا', type: 'success' });
    }

    setView('dashboard');
  };

  const deleteBlog = (id: string) => {
    if (window.confirm('کیا آپ واقعی یہ بلاگ حذف کرنا چاہتے ہیں؟')) {
      onUpdateBlogs(blogs.filter(b => b.id !== id));
      setNotification({ msg: 'بلاگ حذف کر دیا گیا', type: 'success' });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[500] bg-beige flex items-center justify-center p-4 islamic-pattern">
        <div className="w-full max-w-md glass-card p-10 rounded-[40px] border-2 border-gold shadow-2xl relative animate-in fade-in zoom-in duration-300">
          <button onClick={onClose} className="absolute top-6 left-6 text-emerald hover:text-gold transition-colors"><X /></button>
          <div className="text-center mb-10">
            <div className="w-24 h-24 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-gold/30 shadow-inner">
              <span className="text-gold text-4xl">🕌</span>
            </div>
            <h2 className="text-3xl font-bold text-emerald urdu-font">ایڈمن کنٹرول پینل</h2>
            <p className="text-gray-500 urdu-font mt-2 text-sm">محفوظ لاگ ان سسٹم</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-emerald font-bold mb-2 urdu-font pr-2">صارف نام</label>
              <input 
                type="text" 
                className="w-full px-6 py-4 rounded-2xl border border-gold/20 focus:border-gold outline-none text-right font-sans"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                placeholder="Username"
              />
            </div>
            <div>
              <label className="block text-emerald font-bold mb-2 urdu-font pr-2">پاس ورڈ</label>
              <input 
                type="password" 
                className="w-full px-6 py-4 rounded-2xl border border-gold/20 focus:border-gold outline-none text-right font-sans"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Password"
              />
            </div>
            {loginError && <p className="text-red-500 text-center urdu-font bg-red-50 py-2 rounded-lg border border-red-100">{loginError}</p>}
            <button className="w-full bg-emerald text-white py-5 rounded-2xl font-bold urdu-font text-xl shadow-xl hover:bg-emerald-dark hover:shadow-gold-glow transition-all active:scale-95">
              داخل ہوں
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[500] bg-beige flex flex-col md:flex-row overflow-hidden font-urdu" dir="rtl">
      {/* Notifications */}
      {notification && (
        <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-top duration-300 ${notification.type === 'success' ? 'bg-emerald text-white' : 'bg-red-600 text-white'}`}>
          {notification.type === 'success' ? <CheckCircle /> : <AlertCircle />}
          <span className="urdu-font font-bold text-lg">{notification.msg}</span>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-full md:w-72 pattern-emerald p-8 flex flex-col text-white shadow-2xl border-l-2 border-gold/30 z-20">
        <div className="mb-12 text-center group cursor-pointer" onClick={() => setView('dashboard')}>
          <div className="w-16 h-16 bg-white/10 rounded-2xl border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
            <span className="text-gold text-2xl font-bold">IT</span>
          </div>
          <h2 className="text-2xl font-bold text-gold urdu-font mb-2">ایڈمن ڈیش بورڈ</h2>
          <div className="w-12 h-1 bg-gold/50 mx-auto rounded-full"></div>
        </div>
        
        <nav className="space-y-4 flex-grow">
          <button 
            onClick={() => setView('dashboard')}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${view === 'dashboard' ? 'bg-gold text-emerald font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="urdu-font">کنٹرول پینل</span>
          </button>
          <button 
            onClick={() => openEditor()}
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${view === 'editor' && !editingBlogId ? 'bg-gold text-emerald font-bold shadow-lg' : 'hover:bg-white/10'}`}
          >
            <Plus className="w-5 h-5" />
            <span className="urdu-font">نیا مضمون</span>
          </button>
        </nav>

        <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
          <button className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-colors">
            <Eye className="w-5 h-5 opacity-50" />
            <span className="urdu-font text-white/70">ویب سائٹ دیکھیں</span>
          </button>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/20 border border-red-500/30 text-red-200 rounded-2xl hover:bg-red-500/40 transition-all urdu-font"
          >
            <LogOut className="w-5 h-5" /> لاگ آؤٹ
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto no-scrollbar islamic-pattern relative">
        <div className="container max-w-6xl mx-auto p-6 md:p-12">
          
          {view === 'dashboard' ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 bg-white/60 p-8 rounded-[40px] border border-gold/20 shadow-xl">
                <div>
                  <h1 className="text-4xl font-bold text-emerald urdu-font mb-2">مضامین کی فہرست</h1>
                  <p className="text-gray-500 urdu-font">آپ کے شائع کردہ تمام روحانی بلاگز یہاں موجود ہیں۔</p>
                </div>
                <div className="flex gap-4">
                  <div className="relative">
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="تلاش کریں..." className="pr-12 pl-4 py-4 rounded-2xl border border-gold/10 focus:border-gold outline-none urdu-font w-64 bg-white shadow-inner" />
                  </div>
                  <button 
                    onClick={() => openEditor()}
                    className="flex items-center gap-3 bg-emerald text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-gold-glow transition-all urdu-font font-bold active:scale-95"
                  >
                    <Plus className="w-5 h-5" /> نیا بلاگ
                  </button>
                </div>
              </header>

              <div className="bg-white/80 rounded-[40px] border border-gold/20 overflow-hidden shadow-2xl">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-emerald text-white">
                      <th className="p-6 urdu-font border-l border-white/10">عنوان</th>
                      <th className="p-6 urdu-font border-l border-white/10">کیٹیگری</th>
                      <th className="p-6 urdu-font border-l border-white/10">تاریخ</th>
                      <th className="p-6 urdu-font border-l border-white/10">اسٹیٹس</th>
                      <th className="p-6 urdu-font">ایکشن</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-20 text-center">
                          <FileText className="w-16 h-16 text-gold/20 mx-auto mb-4" />
                          <p className="urdu-font text-xl text-gray-400">کوئی بلاگ موجود نہیں ہے</p>
                        </td>
                      </tr>
                    ) : (
                      blogs.map(blog => (
                        <tr key={blog.id} className="border-b border-gold/5 hover:bg-gold/5 transition-colors">
                          <td className="p-6 urdu-font font-bold text-emerald text-lg">{blog.title}</td>
                          <td className="p-6 urdu-font"><span className="bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-bold">{blog.category}</span></td>
                          <td className="p-6 font-sans text-sm text-gray-500">{blog.date}</td>
                          <td className="p-6 urdu-font">
                            {blog.isDraft ? (
                              <span className="text-orange-500 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-500"></div> ڈرافٹ</span>
                            ) : (
                              <span className="text-emerald flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald"></div> شائع شدہ</span>
                            )}
                          </td>
                          <td className="p-6">
                            <div className="flex gap-3">
                              <button onClick={() => openEditor(blog)} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors shadow-sm"><Edit3 className="w-5 h-5" /></button>
                              <button onClick={() => deleteBlog(blog.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors shadow-sm"><Trash2 className="w-5 h-5" /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Professional Rich Text Editor Dashboard */
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 pb-32">
              <header className="flex justify-between items-center mb-10">
                <div>
                  <button onClick={() => setView('dashboard')} className="text-emerald hover:text-gold flex items-center gap-2 urdu-font font-bold mb-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-gold/10">
                    <X className="w-4 h-4" /> واپسی
                  </button>
                  <h1 className="text-4xl font-bold text-emerald urdu-font">
                    {editingBlogId ? 'مضمون ایڈٹ کریں' : 'نیا روحانی مضمون لکھیں'}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowPreview(true)}
                    className="flex items-center gap-3 bg-white border border-gold/30 text-emerald px-8 py-4 rounded-2xl shadow-lg hover:bg-beige transition-all urdu-font font-bold"
                  >
                    <Eye className="w-5 h-5" /> لائیو پریویو
                  </button>
                  <button 
                    onClick={() => saveBlog(true)}
                    className="flex items-center gap-3 bg-white border border-gold text-gold px-8 py-4 rounded-2xl shadow-lg hover:bg-gold hover:text-white transition-all urdu-font font-bold"
                  >
                    <Save className="w-5 h-5" /> ڈرافٹ محفوظ کریں
                  </button>
                  <button 
                    onClick={() => saveBlog(false)}
                    className="flex items-center gap-3 bg-emerald text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-gold-glow transition-all urdu-font font-bold"
                  >
                    <Send className="w-5 h-5" /> ابھی شائع کریں
                  </button>
                </div>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Editor Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white rounded-[40px] border border-gold/20 shadow-2xl overflow-hidden p-10">
                    <input 
                      type="text"
                      className="w-full text-4xl font-bold text-emerald urdu-font mb-8 outline-none border-b-2 border-gold/10 focus:border-gold pb-4 leading-relaxed"
                      placeholder="مضمون کا عنوان یہاں درج کریں..."
                      value={editorData.title}
                      onChange={(e) => setEditorData({...editorData, title: e.target.value})}
                    />

                    {/* Toolbar */}
                    <div className="flex flex-wrap gap-2 p-3 bg-beige/50 border border-gold/20 rounded-2xl mb-6 sticky top-0 z-10 backdrop-blur-md">
                      <button onClick={() => handleExecCommand('bold')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Bold"><Bold size={20} /></button>
                      <button onClick={() => handleExecCommand('italic')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Italic"><Italic size={20} /></button>
                      <button onClick={() => handleExecCommand('underline')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Underline"><Underline size={20} /></button>
                      <div className="w-px h-10 bg-gold/20 mx-2"></div>
                      <button onClick={() => handleExecCommand('justifyLeft')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Align Left"><AlignLeft size={20} /></button>
                      <button onClick={() => handleExecCommand('justifyCenter')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Align Center"><AlignCenter size={20} /></button>
                      <button onClick={() => handleExecCommand('justifyRight')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Align Right"><AlignRight size={20} /></button>
                      <div className="w-px h-10 bg-gold/20 mx-2"></div>
                      <button onClick={() => handleExecCommand('insertUnorderedList')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Bullets"><List size={20} /></button>
                      <button onClick={() => handleExecCommand('insertOrderedList')} className="p-3 hover:bg-gold/10 rounded-xl transition-colors text-emerald" title="Numbered List"><ListOrdered size={20} /></button>
                      <div className="w-px h-10 bg-gold/20 mx-2"></div>
                      <select 
                        onChange={(e) => handleExecCommand('fontName', e.target.value)}
                        className="bg-transparent outline-none urdu-font text-sm border-r border-gold/10 pr-4"
                      >
                        <option value="Noto Nastaliq Urdu">نوری نستعلیق</option>
                        <option value="Amiri">امیری فانٹ</option>
                        <option value="Inter">انٹر (جدید)</option>
                      </select>
                      <select 
                        onChange={(e) => handleExecCommand('fontSize', e.target.value)}
                        className="bg-transparent outline-none text-sm px-4"
                      >
                        <option value="3">نارمل سائز</option>
                        <option value="4">میڈیم سائز</option>
                        <option value="5">بڑا سائز</option>
                        <option value="6">بہت بڑا</option>
                      </select>
                    </div>

                    {/* Content Editable Area */}
                    <div 
                      ref={editorRef}
                      contentEditable
                      className="min-h-[600px] outline-none urdu-font text-xl leading-[3.5] text-gray-800 text-justify"
                      onInput={(e) => setEditorData({...editorData, content: e.currentTarget.innerHTML})}
                      dangerouslySetInnerHTML={editingBlogId ? { __html: editorData.content } : undefined}
                    >
                      {!editingBlogId && !editorData.content && <p className="text-gray-300">روحانی مواد یہاں لکھنا شروع کریں...</p>}
                    </div>
                  </div>
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-8">
                  {/* Metadata Card */}
                  <div className="bg-white rounded-[40px] border border-gold/20 shadow-2xl p-8">
                    <h3 className="text-xl font-bold text-emerald urdu-font mb-6 border-b border-gold/10 pb-4 flex items-center gap-3">
                      <Tag className="w-5 h-5 text-gold" /> اضافی معلومات
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-emerald font-bold mb-2 urdu-font pr-2">کیٹیگری منتخب کریں</label>
                        <select 
                          className="w-full px-6 py-4 rounded-2xl border border-gold/20 outline-none urdu-font bg-beige/30"
                          value={editorData.category}
                          onChange={(e) => setEditorData({...editorData, category: e.target.value})}
                        >
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-emerald font-bold mb-2 urdu-font pr-2 flex items-center justify-between">
                          <span>ٹیگز (الگ الگ کریں)</span>
                          <span className="text-[10px] text-gray-400 font-sans uppercase">SEO Keywords</span>
                        </label>
                        <input 
                          type="text"
                          className="w-full px-6 py-4 rounded-2xl border border-gold/20 outline-none text-right font-sans text-sm bg-beige/30"
                          placeholder="Mohabbat, Rizq, Wazaif..."
                          value={editorData.tags}
                          onChange={(e) => setEditorData({...editorData, tags: e.target.value})}
                        />
                      </div>

                      <div className="pt-4">
                        <label className="block text-emerald font-bold mb-4 urdu-font pr-2">تھمب نیل تصویر</label>
                        <div className="p-8 border-2 border-dashed border-gold/30 rounded-[30px] bg-gold/5 flex flex-col items-center justify-center group cursor-pointer hover:bg-gold/10 transition-colors">
                          <ImageIcon className="w-12 h-12 text-gold opacity-50 mb-3 group-hover:scale-110 transition-transform" />
                          <p className="urdu-font text-gray-500 text-sm">تصویر ڈریگ کریں یا کلک کریں</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tips Card */}
                  <div className="bg-emerald text-white rounded-[40px] p-8 shadow-2xl border border-gold/30 relative overflow-hidden pattern-emerald">
                    <h3 className="text-xl font-bold text-gold urdu-font mb-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5" /> روحانی نصیحت
                    </h3>
                    <p className="urdu-font leading-[3] text-white/90">
                      مضمون لکھتے وقت اس بات کا خیال رکھیں کہ تمام آیاتِ مبارکہ اور وظائف کا ترجمہ بالکل درست ہو۔ فونٹ سائز ایسا رکھیں کہ پڑھنے والوں کو مشکل نہ ہو۔
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Live Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-5xl h-[90vh] bg-beige rounded-[50px] overflow-hidden flex flex-col relative animate-in zoom-in fade-in duration-300 shadow-gold-glow">
            <header className="pattern-emerald p-6 flex justify-between items-center text-white border-b border-gold/30">
              <div className="flex items-center gap-4">
                <Eye className="w-6 h-6 text-gold" />
                <h2 className="text-2xl font-bold urdu-font">لائیو ویب سائٹ پریویو</h2>
              </div>
              <button 
                onClick={() => setShowPreview(false)}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X />
              </button>
            </header>
            
            <div className="flex-grow overflow-y-auto no-scrollbar bg-white p-12 islamic-pattern">
              <div className="max-w-3xl mx-auto text-right">
                <span className="bg-gold/10 text-gold px-4 py-1 rounded-full text-sm font-bold urdu-font mb-6 inline-block">{editorData.category}</span>
                <h1 className="text-5xl font-bold text-emerald urdu-font mb-10 leading-[1.4]">{editorData.title || 'بلا عنوان مضمون'}</h1>
                <div className="h-1 w-24 bg-gold mb-12 rounded-full"></div>
                
                <div 
                  className="urdu-font text-2xl leading-[3.8] text-gray-800 text-justify quranic-style"
                  dangerouslySetInnerHTML={{ __html: editorData.content || '<p class="text-gray-300 italic">کوئی مواد درج نہیں کیا گیا...</p>' }}
                />

                <div className="mt-20 pt-10 border-t border-gold/20 flex gap-3">
                  {editorData.tags.split(',').map(tag => tag.trim()).filter(t => t).map(t => (
                    <span key={t} className="bg-gray-100 text-gray-500 text-xs font-sans px-4 py-2 rounded-full border border-gray-200">#{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <footer className="p-6 bg-beige border-t border-gold/20 flex justify-center">
              <button 
                onClick={() => setShowPreview(false)}
                className="bg-emerald text-white px-12 py-4 rounded-2xl urdu-font font-bold shadow-xl hover:shadow-gold-glow-subtle transition-all"
              >
                پریویو بند کریں
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
