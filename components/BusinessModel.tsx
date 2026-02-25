import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Standard",
    price: "Incluso",
    period: "con la macchina",
    description: "Aumenta il valore percepito dell'hardware e riduce i costi di assistenza.",
    features: [
      "Controllo Bluetooth Macchina",
      "Therapy Wizard (Base)",
      "Scheda Cliente Semplice",
      "Telemetry & Remote Service"
    ],
    cta: "Standard",
    highlight: false
  },
  {
    name: "Smart Clinic SaaS",
    price: "€49",
    period: "/mese per centro",
    description: "Genera Recurring Revenue trasformando il fornitore in partner business.",
    features: [
      "Tutto il pacchetto Standard",
      "Foto Ghosting Prima/Dopo",
      "WhatsApp Automation (Marketing)",
      "Cloud Storage Illimitato",
      "Business Intelligence Dashboard",
      "Formazione Just-in-Time"
    ],
    cta: "Modello Consigliato",
    highlight: true
  }
];

export const BusinessModel: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Modelli di Monetizzazione</h2>
          <p className="text-slate-600">
            Trasforma la vendita una tantum in un flusso di ricavi ricorrenti e aumenta il Customer Lifetime Value (LTV).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl transition-all duration-300 ${plan.highlight ? 'bg-slate-900 text-white shadow-2xl scale-105 border-2 border-panestetic-500' : 'bg-slate-50 text-slate-900 border border-slate-200'}`}>
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-panestetic-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  SCALABLE REVENUE
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`mt-0.5 ${plan.highlight ? 'text-panestetic-400' : 'text-panestetic-600'}`}>
                      <Check size={18} />
                    </div>
                    <span className="text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.highlight ? 'bg-panestetic-600 hover:bg-panestetic-500 text-white' : 'bg-white border border-slate-300 hover:bg-slate-50 text-slate-900'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};