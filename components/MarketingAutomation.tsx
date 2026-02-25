
import React from 'react';
import { Clock, MessageCircle, Calendar, Heart, Zap, Database, Server, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

export const MarketingAutomation: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide mb-4">
            <MessageCircle size={14} /> WhatsApp Business API
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Automazione "Zero-Touch"
          </h2>
          <p className="text-slate-600 text-lg">
            L'estetista non deve alzare un dito. Il macchinario parla direttamente con il cliente attraverso WhatsApp, garantendo standardizzazione e retention.
          </p>
        </div>

        {/* WORKFLOW DIAGRAM */}
        <div className="mb-24 relative">
            <h3 className="text-xl font-bold text-slate-900 mb-10 text-center">Il Flusso Tecnico: Dal Macchinario al Cliente</h3>
            
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 font-bold relative">
                        1
                        <div className="absolute -right-2 -bottom-2 bg-red-500 rounded-full p-1 border-2 border-white">
                            <Zap size={10} />
                        </div>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Fine Trattamento</h4>
                    <p className="text-xs text-slate-500">Timer Macchina arriva a zero o Stop Manuale.</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center text-slate-300">
                    <ArrowRight size={24} />
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 font-bold">
                        2
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Event Detection</h4>
                    <p className="text-xs text-slate-500">L'App rileva: "RF Viso Completata" e interroga il CRM.</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center text-slate-300">
                    <ArrowRight size={24} />
                </div>

                 {/* Step 3 */}
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 font-bold">
                        3
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-2">API Send</h4>
                    <p className="text-xs text-slate-500">Invio Template WhatsApp specifico per quel trattamento.</p>
                </div>
            </div>
        </div>

        {/* PATIENT JOURNEY TIMELINE */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Patient Journey Automatizzato</h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                {/* Phase 1: Pre-Trattamento */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                        <Clock size={18} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">24h Prima</span>
                            <span className="text-slate-400 text-xs">Trigger: Appuntamento</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-3">Reminder & Preparazione</h4>
                        <div className="bg-[#e7fce3] p-3 rounded-lg rounded-tl-none text-sm text-slate-800 relative">
                           <div className="absolute -top-1.5 left-0 w-3 h-3 bg-[#e7fce3] transform rotate-45"></div>
                           "Ciao Anna! Ricorda domani alle 15:00 la tua Radiofrequenza. 💧 Bevi molta acqua oggi ed evita il sole diretto per preparare la pelle!"
                        </div>
                        <div className="mt-3 flex gap-2 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Riduzione No-Show</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Efficacia Clinica</span>
                        </div>
                    </div>
                </div>

                {/* Phase 2: Post-Trattamento */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                        <Zap size={18} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border-2 border-green-500/20 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-green-600 font-bold text-xs uppercase tracking-wider">Immediato (Zero-Touch)</span>
                            <span className="text-slate-400 text-xs">Trigger: Fine Sessione</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-3">Post-Care Safety</h4>
                        <div className="bg-[#e7fce3] p-3 rounded-lg rounded-tl-none text-sm text-slate-800 relative">
                           <div className="absolute -top-1.5 left-0 w-3 h-3 bg-[#e7fce3] transform rotate-45"></div>
                           "Speriamo il trattamento ti sia piaciuto! 🌟 Per le prossime 24h evita trucco pesante e sauna. Clicca qui per la tua guida di mantenimento."
                        </div>
                        <div className="mt-3 flex gap-2 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Sicurezza percepita</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Prevenzione effetti avversi</span>
                        </div>
                    </div>
                </div>

                {/* Phase 3: Follow Up */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                        <Heart size={18} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-purple-600 font-bold text-xs uppercase tracking-wider">3 Giorni Dopo</span>
                            <span className="text-slate-400 text-xs">Trigger: Timer</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-3">Monitoring & Feedback</h4>
                        <div className="bg-[#e7fce3] p-3 rounded-lg rounded-tl-none text-sm text-slate-800 relative">
                           <div className="absolute -top-1.5 left-0 w-3 h-3 bg-[#e7fce3] transform rotate-45"></div>
                           "Ciao Anna, come va la pelle? Rispondi 1 per 'Tutto Bene', 2 per 'Ho un dubbio'. Il tuo feedback è prezioso!"
                        </div>
                        <div className="mt-3 flex gap-2 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Monitoraggio Remoto</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Raccolta Dati Clinici</span>
                        </div>
                    </div>
                </div>

                {/* Phase 4: Retention */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-orange-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                        <Calendar size={18} />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-orange-600 font-bold text-xs uppercase tracking-wider">30 Giorni Dopo</span>
                            <span className="text-slate-400 text-xs">Trigger: Inattività</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-3">Retention Loop</h4>
                        <div className="bg-[#e7fce3] p-3 rounded-lg rounded-tl-none text-sm text-slate-800 relative">
                           <div className="absolute -top-1.5 left-0 w-3 h-3 bg-[#e7fce3] transform rotate-45"></div>
                           "È passato un mese! Per mantenere i risultati ottenuti, è ora del richiamo. Abbiamo uno slot libero Giovedì."
                        </div>
                        <div className="mt-3 flex gap-2 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Aumento LTV</span>
                            <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-green-500"/> Riempimento Agenda</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};
