import React from 'react';
import { CheckCircle2, Star, Zap, Shield } from 'lucide-react';

const tiers = [
  {
    name: "Essential Connected",
    price: "€ 14.500",
    description: "L'ingresso nel mondo IoT. Un'app di controllo solida per modernizzare il macchinario.",
    icon: Zap,
    features: [
      "App Controllo Bluetooth (iPad/Tablet)",
      "Wizard Protocolli Standard",
      "Scheda Cliente Locale",
      "Export Dati Base (CSV)",
      "UI/UX Branding Panestetic"
    ],
    color: "blue"
  },
  {
    name: "Smart Ecosystem",
    price: "€ 14.500 - 25.000",
    description: "Il best-seller. Integra marketing e cloud per giustificare il modello SaaS.",
    icon: Star,
    features: [
      "Tutto il pacchetto Essential",
      "Cloud Database & Sync",
      "WhatsApp Automation (Marketing)",
      "Camera Ghosting (Prima/Dopo)",
      "Dashboard Statistiche Web",
      "Telemetria Service Remoto"
    ],
    color: "panestetic",
    highlight: true
  },
  {
    name: "AI & MDR Full Suite",
    price: "€ 27.000 - 35.000",
    description: "La soluzione definitiva. Algoritmi predittivi e massima compliance normativa.",
    icon: Shield,
    features: [
      "Tutto il pacchetto Smart",
      "Algoritmi AI Human-in-the-Loop",
      "Supporto Documentazione Tecnica MDR",
      "Integrazione Gestionale Esterno (API)",
      "Multi-Device Orchestration",
      "Predictive Maintenance AI"
    ],
    color: "purple"
  }
];

export const ClinicInvestment: React.FC = () => {
  return (
    <section id="investment" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-panestetic-600 uppercase tracking-wider mb-2">Piano di Investimento</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Scalabilità Modulare
          </h3>
          <p className="text-slate-600 text-lg">
            Il budget per il progetto "Next-Gen Clinic" varia in base alla profondità delle funzionalità AI, all'integrazione Cloud e al livello di supporto alla compliance MDR richiesto.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto align-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-white shadow-2xl scale-105 border-2 border-panestetic-500 z-10' 
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-panestetic-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  Consigliato
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                tier.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                tier.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                'bg-panestetic-50 text-panestetic-600'
              }`}>
                <tier.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-2xl font-bold text-slate-900 mb-4">{tier.price}</div>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                {tier.description}
              </p>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${
                      tier.color === 'blue' ? 'text-blue-500' :
                      tier.color === 'purple' ? 'text-purple-500' :
                      'text-panestetic-500'
                    }`} />
                    <span className="text-sm text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                tier.highlight 
                  ? 'bg-panestetic-600 hover:bg-panestetic-700 text-white shadow-lg shadow-panestetic-500/20' 
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
              }`}>
                Seleziona Piano
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-slate-400">
                * I budget sono stimati e verranno confermati dopo la fase di analisi tecnica dettagliata dei macchinari specifici.
            </p>
        </div>
      </div>
    </section>
  );
};