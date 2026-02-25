import React, { useState, useEffect } from 'react';
import { ClinicView } from './components/ClinicView';
import { EcommerceView } from './components/EcommerceView';
import { Footer } from './components/Footer';
import { Menu, X, Smartphone, ShoppingBag } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<'clinic' | 'ecommerce'>('clinic');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://panestetic.com/wp-content/uploads/2021/11/logo-panestetic.png" 
              alt="Panestetic - Future for Beauty" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Project Switcher */}
          <div className="hidden md:flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
            <button 
              onClick={() => { setActiveProject('clinic'); scrollToTop(); }}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeProject === 'clinic' 
                  ? 'bg-white text-panestetic-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Smartphone size={16} />
              Next Gen Clinic
            </button>
            <button 
              onClick={() => { setActiveProject('ecommerce'); scrollToTop(); }}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeProject === 'ecommerce' 
                  ? 'bg-white text-indigo-600 shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <ShoppingBag size={16} />
              E-commerce Shopify
            </button>
          </div>

          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors hidden md:block">
            Contattaci
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
             <button 
               onClick={() => { setActiveProject('clinic'); setMobileMenuOpen(false); scrollToTop(); }}
               className={`flex items-center gap-3 p-3 rounded-xl ${activeProject === 'clinic' ? 'bg-panestetic-50 text-panestetic-700' : 'text-slate-600'}`}
             >
               <Smartphone size={20} />
               <span className="font-bold">Next Gen Clinic</span>
             </button>
             <button 
               onClick={() => { setActiveProject('ecommerce'); setMobileMenuOpen(false); scrollToTop(); }}
               className={`flex items-center gap-3 p-3 rounded-xl ${activeProject === 'ecommerce' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'}`}
             >
               <ShoppingBag size={20} />
               <span className="font-bold">E-commerce Shopify</span>
             </button>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {activeProject === 'clinic' ? <ClinicView /> : <EcommerceView />}
      </main>

      <Footer />
    </div>
  );
}