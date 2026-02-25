import React from 'react';
import { ShieldCheck, TrendingUp, Users, Workflow } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: "Connected Aesthetic Clinic",
    description: "Il macchinario non è più un'isola. Diventa un nodo intelligente che orchestra protocolli clinici, gestisce il paziente e invia telemetria in tempo reale."
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "Design 'Human-in-the-Loop' conforme MDR. Algoritmi di supporto decisionale che riducono l'errore umano e tutelano la responsabilità dell'operatore."
  },
  {
    icon: Users,
    title: "CRM Aumentato",
    description: "Non solo anagrafica: storico trattamenti automatizzato, foto 'Ghosting' prima/dopo e consenso informato digitale con firma biometrica."
  },
  {
    icon: TrendingUp,
    title: "Marketing Automation",
    description: "Workflow 'Zero-Touch': invio automatico di reminder pre-seduta e consigli post-care via WhatsApp Business API senza intervento manuale."
  }
];

export const ValueProposition: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-panestetic-600 uppercase tracking-wider mb-2">Perché evolvere ora?</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Risolvi le sfide critiche dei centri estetici moderni
          </h3>
          <p className="text-slate-600 text-lg">
            I tuoi clienti chiedono standardizzazione, sicurezza e marketing automatico. 
            Rispondi con una piattaforma integrata che aumenta il valore dei tuoi macchinari.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-slate-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-panestetic-600 mb-6 group-hover:bg-panestetic-600 group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};