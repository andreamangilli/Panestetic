import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="https://panestetic.com/wp-content/uploads/2021/11/logo-panestetic.png" 
              alt="Panestetic" 
              className="h-10 w-auto brightness-0 invert"
            />
            <div className="h-6 w-px bg-slate-700"></div>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Digital Project</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Connected Aesthetic Clinic Project. Confidential Proposal.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};