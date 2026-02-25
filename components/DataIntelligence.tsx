import React from 'react';
import { Database, LineChart, Globe, Lightbulb, TrendingUp } from 'lucide-react';

export const DataIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background elements */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wide mb-4">
            <Database size={14} /> Big Data & Analytics
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Il Valore Nascosto: <br/> <span className="text-blue-400">Data Asset Strategico</span>
          </h2>
          <p className="text-slate-400 text-lg">
            L'accumulo di dati anonimizzati su scala globale trasforma Panestetic da produttore hardware a data-company, offrendo insight unici per R&D, Marketing e consulenza business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* 1. R&D Loop */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-colors group flex flex-col">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                    <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">R&D Guidato dai Dati</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    Basta supposizioni. I dati di telemetria rivelano quali protocolli sono realmente più usati ed efficaci, guidando lo sviluppo dei futuri macchinari.
                </p>
                {/* Visual */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mt-auto">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-3 font-bold uppercase tracking-wider">Utilizzo Protocolli Reali</div>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-xs text-slate-300 mb-1 font-medium">
                                <span>Anti-Age Deep</span>
                                <span className="text-blue-400">85%</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[85%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs text-slate-300 mb-1 font-medium">
                                <span>Drain Massage</span>
                                <span className="text-slate-500">42%</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-slate-600 w-[42%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Marketing Evidence */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-purple-500 transition-colors group flex flex-col">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-900/20">
                    <Globe size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Marketing "Evidence-Based"</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    Pubblica case study basati su milioni di trattamenti reali. Trasforma i dati in claim commerciali inattaccabili: "98% di efficacia provata".
                </p>
                {/* Visual */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex items-center gap-4 mt-auto">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                                className="text-slate-700"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                            <path
                                className="text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"
                                strokeDasharray="98, 100"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                        </svg>
                        <div className="absolute text-sm font-bold text-white">98%</div>
                    </div>
                    <div>
                        <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Success Rate</div>
                        <div className="text-slate-400 text-xs mt-0.5">Su 50k+ sessioni.</div>
                    </div>
                </div>
            </div>

            {/* 3. Benchmarking */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-green-500 transition-colors group flex flex-col">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/20">
                    <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Benchmarking Clienti</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    Offri ai centri report che confrontano le loro performance con la media del settore. Uno strumento di consulenza potentissimo per vendere di più.
                </p>
                {/* Visual */}
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 relative h-32 flex items-end justify-around px-2 pb-2 mt-auto">
                    <div className="w-16 flex flex-col justify-end h-full gap-2 group/bar">
                         <div className="w-full bg-slate-700 rounded-t-md relative transition-all group-hover/bar:bg-slate-600" style={{height: '60%'}}></div>
                         <span className="text-[10px] text-slate-500 text-center font-bold">MEDIA</span>
                    </div>
                    <div className="w-16 flex flex-col justify-end h-full gap-2 group/bar">
                         <div className="w-full bg-green-500 rounded-t-md relative shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all group-hover/bar:shadow-[0_0_20px_rgba(34,197,94,0.5)]" style={{height: '85%'}}>
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">+25%</div>
                         </div>
                         <span className="text-[10px] text-white text-center font-bold">TUO CENTRO</span>
                    </div>
                    <div className="absolute top-3 left-3 text-[9px] text-slate-500 uppercase font-bold tracking-wider">Trattamenti / Mese</div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};