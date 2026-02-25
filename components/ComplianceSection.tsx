import React from 'react';
import { Shield, FileCheck, Lock, Award } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Software as a Medical Device (SaMD)</h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                 Nel rispetto del Regolamento (UE) 2017/745 (MDR), l'applicazione non è un semplice accessorio lifestyle, ma un dispositivo medico software qualificato.
               </p>
               <p className="text-slate-600 mb-8 leading-relaxed">
                 Il ciclo di vita dello sviluppo (SDLC) segue lo standard <strong>IEC 62304</strong>, garantendo tracciabilità, gestione del rischio e sicurezza del paziente in ogni riga di codice.
               </p>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Shield className="text-panestetic-600" size={24} />
                    <div>
                        <div className="font-bold text-slate-900 text-sm">MDR 2017/745</div>
                        <div className="text-xs text-slate-500">Classe IIa / IIb</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Lock className="text-panestetic-600" size={24} />
                    <div>
                        <div className="font-bold text-slate-900 text-sm">GDPR Secure</div>
                        <div className="text-xs text-slate-500">Encrypted Data</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <FileCheck className="text-panestetic-600" size={24} />
                    <div>
                        <div className="font-bold text-slate-900 text-sm">IEC 62304</div>
                        <div className="text-xs text-slate-500">Medical Software</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    <Award className="text-panestetic-600" size={24} />
                    <div>
                        <div className="font-bold text-slate-900 text-sm">ISO 13485</div>
                        <div className="text-xs text-slate-500">Quality Mgmt</div>
                    </div>
                  </div>
               </div>
            </div>
            
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-panestetic-500">
                <h3 className="text-xl font-bold mb-4">MDCG 2019-11: La Nostra Bussola</h3>
                <p className="text-sm text-slate-600 mb-4 italic">
                  "Se un software fornisce informazioni utilizzate per prendere decisioni a fini diagnostici o terapeutici, si qualifica come dispositivo medico."
                </p>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold shrink-0">X</div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">Black Box Automation (Vietato)</h4>
                            <p className="text-xs text-slate-500">L'app decide e la macchina esegue senza controllo umano. Alto rischio regolatorio.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold shrink-0">✓</div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-800">Human-in-the-Loop (Proposto)</h4>
                            <p className="text-xs text-slate-500">L'app suggerisce parametri validati. L'operatore conferma esplicitamente. Responsabilità bilanciata e conformità garantita.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </section>
  );
};