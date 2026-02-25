
import React from 'react';
import { ArrowRight, Activity, Smartphone, Database } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="vision" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-panestetic-100 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Next-Generation Clinic
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Dal Macchinario <br />
              all'<span className="text-transparent bg-clip-text bg-gradient-to-r from-panestetic-600 to-medical-accent">Ecosistema Intelligente</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Trasforma i tuoi dispositivi in nodi intelligenti. Offri ai centri estetici un "hub" di controllo che unisce protocolli clinici sicuri, marketing automatizzato e gestione avanzata. 
              Non vendere solo hardware, vendi il successo del centro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-panestetic-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-panestetic-700 transition-all shadow-xl shadow-panestetic-500/20 group">
                Scopri il Progetto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all">
                Vedi Demo App
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-2xl text-slate-900">Service</h4>
                <p className="text-sm text-slate-500">Oriented Architecture</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-slate-900">MDR</h4>
                <p className="text-sm text-slate-500">UE 2017/745 Compliant</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl text-slate-900">IoT</h4>
                <p className="text-sm text-slate-500">Telemetry & Data</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            {/* Visual Representation of the Connected Clinic */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
                 alt="Connected Clinic Dashboard" 
                 className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-all duration-500"
               />
               
               {/* Floating Badges */}
               <div className="absolute -left-6 top-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                 <div className="bg-green-100 p-2 rounded-lg text-green-600">
                   <Activity size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-400 font-medium">Performance Laser</p>
                   <p className="text-sm font-bold text-slate-800">Ottimale (98%)</p>
                 </div>
               </div>

               <div className="absolute -right-6 bottom-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                   <Smartphone size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-400 font-medium">Nuovo Lead</p>
                   <p className="text-sm font-bold text-slate-800">WhatsApp Inviato</p>
                 </div>
               </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute inset-0 bg-panestetic-600 rounded-2xl rotate-6 opacity-10 -z-10 scale-105"></div>
            <div className="absolute inset-0 bg-medical-accent rounded-2xl -rotate-3 opacity-10 -z-10 scale-105"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
