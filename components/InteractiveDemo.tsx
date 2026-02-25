import React, { useState, useEffect, useRef } from 'react';
import { TabView } from '../types';
import { 
  CheckCircle, MessageCircle, AlertCircle, Camera, 
  ScanFace, Zap, ChevronRight, 
  Send, Smartphone, RefreshCw, ShieldCheck, 
  Thermometer, Clock, Activity, User, Play, Loader2, Settings,
  Waves, Sun, Droplets, Move, Fingerprint
} from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.WIZARD);
  
  // Wizard State
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedHandpiece, setSelectedHandpiece] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [fototipo, setFototipo] = useState(3);

  // Marketing State
  const [marketingStep, setMarketingStep] = useState(0); // 0: Idle, 1: Treatment Running, 2: Finished & Sent

  // Ghosting State
  const [ghostOpacity, setGhostOpacity] = useState(50);

  // Reset wizard when tab changes
  useEffect(() => {
    if (activeTab === TabView.WIZARD) {
      setWizardStep(1);
      setSelectedHandpiece(null);
    }
  }, [activeTab]);

  const handleHandpieceSelect = (handpiece: string) => {
    setSelectedHandpiece(handpiece);
    setWizardStep(2);
  };

  const calculateParams = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setWizardStep(3);
    }, 1500);
  };

  const simulateTreatmentEnd = () => {
    setMarketingStep(1); // Treatment running
    setTimeout(() => {
      setMarketingStep(2); // Finished and msg sent
    }, 2000);
  };

  // Dynamic Parameters based on Haura Handpiece
  const getProposalParams = () => {
    switch(selectedHandpiece) {
      case 'Endo-Drain':
        return [
          { label: 'Suction', value: '450', unit: 'mBar' },
          { label: 'Rhythm', value: 'Continuous', unit: 'Mode' },
          { label: 'Power', value: '60', unit: '%' },
          { label: 'Duration', value: '30', unit: 'min' }
        ];
      case 'RF Multipolar':
        return [
          { label: 'Target Temp', value: '41', unit: '°C' },
          { label: 'Frequency', value: '1.2', unit: 'MHz' },
          { label: 'Power', value: '35', unit: 'W' },
          { label: 'Duration', value: '20', unit: 'min' }
        ];
      case 'Lipo Laser':
        return [
          { label: 'Wavelength', value: '650', unit: 'nm' },
          { label: 'Energy Density', value: '2.5', unit: 'J/cm²' },
          { label: 'Mode', value: 'Pulsed', unit: '10Hz' },
          { label: 'Duration', value: '25', unit: 'min' }
        ];
      case 'Bio-Lifting':
        return [
          { label: 'Intensity', value: '300', unit: 'µA' },
          { label: 'Waveform', value: 'Square', unit: 'Lift' },
          { label: 'Frequency', value: '50', unit: 'Hz' },
          { label: 'Duration', value: '15', unit: 'min' }
        ];
      case 'Electroporation':
        return [
          { label: 'Voltage', value: '45', unit: 'V' },
          { label: 'Depth', value: 'Dermis', unit: 'Mid' },
          { label: 'Serum', value: 'Hyaluron', unit: 'Active' },
          { label: 'Duration', value: '10', unit: 'min' }
        ];
      default:
        return [
           { label: 'Fluenza', value: '15', unit: 'J/cm²' },
           { label: 'Durata', value: '10', unit: 'ms' },
           { label: 'Frequenza', value: '2', unit: 'Hz' },
           { label: 'Manipolo', value: 'Generic', unit: '' }
        ];
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-panestetic-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-medical-accent/10 rounded-full blur-3xl mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Content / Controls */}
          <div className="lg:w-1/3 space-y-8 lg:sticky lg:top-24">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-panestetic-400 text-xs font-bold uppercase tracking-wide mb-4">
                <Activity size={14} className="animate-pulse" />
                Live App Simulation
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Il "Cervello" di <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-panestetic-400 to-medical-accent">Haura System</span>
              </h2>
              <p className="text-slate-400 text-lg mt-4">
                Non raccontarlo, mostralo. Ecco come l'applicazione gestisce i protocolli complessi della piattaforma Haura garantendo sicurezza ed efficacia.
              </p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => setActiveTab(TabView.WIZARD)}
                className={`w-full group text-left p-4 rounded-xl transition-all border relative overflow-hidden ${activeTab === TabView.WIZARD ? 'bg-panestetic-900/40 border-panestetic-500 shadow-[0_0_30px_rgba(14,165,233,0.15)]' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${activeTab === TabView.WIZARD ? 'bg-panestetic-500' : 'bg-transparent group-hover:bg-slate-600'}`}></div>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeTab === TabView.WIZARD ? 'bg-panestetic-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeTab === TabView.WIZARD ? 'text-white' : 'text-slate-300'}`}>Therapy Wizard</h4>
                    <p className="text-sm text-slate-500">Configurazione 5 Manipoli</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab(TabView.MARKETING)}
                className={`w-full group text-left p-4 rounded-xl transition-all border relative overflow-hidden ${activeTab === TabView.MARKETING ? 'bg-green-900/20 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.15)]' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${activeTab === TabView.MARKETING ? 'bg-green-500' : 'bg-transparent group-hover:bg-slate-600'}`}></div>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeTab === TabView.MARKETING ? 'bg-green-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeTab === TabView.MARKETING ? 'text-white' : 'text-slate-300'}`}>Marketing Automation</h4>
                    <p className="text-sm text-slate-500">Zero-Touch Retention</p>
                  </div>
                </div>
              </button>

              <button 
                 onClick={() => setActiveTab(TabView.ANALYTICS)}
                 className={`w-full group text-left p-4 rounded-xl transition-all border relative overflow-hidden ${activeTab === TabView.ANALYTICS ? 'bg-purple-900/20 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'bg-slate-800/50 border-transparent hover:bg-slate-800'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${activeTab === TabView.ANALYTICS ? 'bg-purple-500' : 'bg-transparent group-hover:bg-slate-600'}`}></div>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${activeTab === TabView.ANALYTICS ? 'bg-purple-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    <Camera size={24} />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeTab === TabView.ANALYTICS ? 'text-white' : 'text-slate-300'}`}>Ghosting & Data</h4>
                    <p className="text-sm text-slate-500">Risultati Visibili</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Demo UI - The "Tablet" */}
          <div className="lg:w-2/3 w-full flex justify-center perspective-1000">
            <div className="w-full max-w-[600px] aspect-[4/3] bg-slate-900 rounded-[2rem] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col ring-1 ring-white/10">
              
              {/* Tablet Status Bar */}
              <div className="bg-slate-950/80 backdrop-blur-sm h-8 flex justify-between items-center px-6 text-[10px] text-slate-400 font-medium z-20 absolute top-0 w-full border-b border-white/5">
                <span>Haura System OS</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-green-500"><Zap size={10} fill="currentColor"/> Connected</span>
                  <span>100%</span>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="flex-1 bg-slate-50 relative overflow-hidden pt-8 text-slate-900 font-sans">
                
                {/* === WIZARD SCENARIO === */}
                {activeTab === TabView.WIZARD && (
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="px-6 py-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
                       <div>
                         <h3 className="font-bold text-lg text-slate-800">Nuova Sessione</h3>
                         <p className="text-xs text-slate-500">Cliente: Giulia Bianchi</p>
                       </div>
                       <div className="flex gap-2">
                         {[1,2,3].map(step => (
                           <div key={step} className={`h-2 w-8 rounded-full transition-all ${wizardStep >= step ? 'bg-panestetic-500' : 'bg-slate-200'}`} />
                         ))}
                       </div>
                    </div>

                    <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
                      
                      {/* Step 1: Handpiece Selection (Haura Specific) */}
                      {wizardStep === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <h2 className="text-xl font-bold mb-6 text-center">Seleziona Manipolo Haura</h2>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto">
                             <button onClick={() => handleHandpieceSelect('RF Multipolar')} className="p-4 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-panestetic-500 hover:shadow-lg transition-all group text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-orange-50 rounded-full mb-3 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                  <Waves size={24} />
                                </div>
                                <span className="font-bold text-sm text-slate-700">RF Multipolar</span>
                             </button>

                             <button onClick={() => handleHandpieceSelect('Endo-Drain')} className="p-4 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-panestetic-500 hover:shadow-lg transition-all group text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full mb-3 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <Move size={24} />
                                </div>
                                <span className="font-bold text-sm text-slate-700">Endo-Drain</span>
                             </button>

                             <button onClick={() => handleHandpieceSelect('Lipo Laser')} className="p-4 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-panestetic-500 hover:shadow-lg transition-all group text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-red-50 rounded-full mb-3 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                  <Sun size={24} />
                                </div>
                                <span className="font-bold text-sm text-slate-700">Lipo Laser</span>
                             </button>

                             <button onClick={() => handleHandpieceSelect('Bio-Lifting')} className="p-4 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-panestetic-500 hover:shadow-lg transition-all group text-center flex flex-col items-center">
                                <div className="w-12 h-12 bg-green-50 rounded-full mb-3 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                  <Activity size={24} />
                                </div>
                                <span className="font-bold text-sm text-slate-700">Bio-Lifting</span>
                             </button>

                             <button onClick={() => handleHandpieceSelect('Electroporation')} className="p-4 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-panestetic-500 hover:shadow-lg transition-all group text-center flex flex-col items-center md:col-span-1 col-span-2">
                                <div className="w-12 h-12 bg-cyan-50 rounded-full mb-3 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                  <Droplets size={24} />
                                </div>
                                <span className="font-bold text-sm text-slate-700">Electroporation</span>
                             </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Anamnesi */}
                      {wizardStep === 2 && !analyzing && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-md mx-auto">
                          <h2 className="text-xl font-bold mb-2">Setup Clinico</h2>
                          <div className="flex items-center gap-2 mb-6">
                            <span className="text-sm text-slate-500">Tecnologia:</span>
                            <span className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-700 uppercase tracking-wide">{selectedHandpiece}</span>
                          </div>
                          
                          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                            <div>
                              <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold text-slate-700">Fototipo / Sensibilità</label>
                                <span className="text-panestetic-600 font-bold bg-blue-50 px-2 py-0.5 rounded text-sm">Livello {fototipo}</span>
                              </div>
                              <input 
                                type="range" min="1" max="6" step="1" 
                                value={fototipo} onChange={(e) => setFototipo(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-panestetic-600"
                              />
                              <div className="flex justify-between text-[10px] text-slate-400 mt-1 uppercase font-bold">
                                <span>1. Sensibile</span>
                                <span>6. Resiliente</span>
                              </div>
                            </div>

                            <div>
                               <label className="text-sm font-bold text-slate-700 block mb-2">Obiettivo Trattamento</label>
                               <div className="grid grid-cols-2 gap-2">
                                 <button className="px-3 py-2 rounded-lg border border-panestetic-500 bg-blue-50 text-panestetic-700 text-sm font-medium">Standard</button>
                                 <button className="px-3 py-2 rounded-lg border border-slate-200 text-slate-500 text-sm hover:bg-slate-50">Intensivo</button>
                                </div>
                            </div>

                            <button onClick={calculateParams} className="w-full py-3 bg-panestetic-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-panestetic-700 transition-all flex items-center justify-center gap-2">
                              <Zap size={18} /> Calcola Parametri Haura
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Loading State */}
                      {analyzing && (
                        <div className="flex flex-col items-center justify-center h-full animate-in fade-in zoom-in duration-300">
                           <Loader2 className="w-12 h-12 text-panestetic-600 animate-spin mb-4" />
                           <h3 className="text-lg font-bold text-slate-800">Analisi Protocollo Haura...</h3>
                           <p className="text-sm text-slate-500">Ottimizzazione parametri per {selectedHandpiece}</p>
                        </div>
                      )}

                      {/* Step 3: Proposal */}
                      {wizardStep === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-md mx-auto">
                           <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-3 mb-6">
                              <ShieldCheck className="text-green-600 shrink-0" />
                              <div>
                                <h4 className="font-bold text-green-800 text-sm">Safe-Guard Attivo</h4>
                                <p className="text-xs text-green-700">Parametri calibrati per la massima sicurezza su Livello {fototipo}.</p>
                              </div>
                           </div>

                           <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                              <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
                                <h3 className="font-bold">Setup {selectedHandpiece}</h3>
                                <Settings size={16} className="text-slate-400"/>
                              </div>
                              <div className="p-6 grid grid-cols-2 gap-4">
                                 {getProposalParams().map((param, i) => (
                                    <div key={i} className="text-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                                      <div className="text-slate-400 text-xs uppercase mb-1 font-bold">{param.label}</div>
                                      <div className="text-xl font-black text-slate-800">{param.value} <span className="text-xs font-normal text-slate-500">{param.unit}</span></div>
                                    </div>
                                 ))}
                              </div>
                              <div className="p-4 bg-slate-50 border-t border-slate-100">
                                <button onClick={() => {setWizardStep(1); setSelectedHandpiece(null);}} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2">
                                  <Fingerprint size={18} /> Conferma e Avvia
                                </button>
                                <p className="text-center text-[10px] text-slate-400 mt-2">
                                  L'operatore conferma la responsabilità clinica (Human-in-the-Loop)
                                </p>
                              </div>
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* === MARKETING SCENARIO === */}
                {activeTab === TabView.MARKETING && (
                  <div className="h-full flex flex-col md:flex-row bg-[#efeae2]">
                     
                     {/* LEFT: Machine Operator View (Simplified) */}
                     <div className="w-full md:w-1/2 bg-slate-800 p-6 flex flex-col items-center justify-center border-r border-slate-700 relative overflow-hidden">
                        <div className="absolute top-2 left-2 text-white/30 text-[10px] uppercase font-bold tracking-widest">Lato Macchina</div>
                        
                        {marketingStep === 0 && (
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center mx-auto text-white">
                              <span className="text-2xl font-bold">00:00</span>
                            </div>
                            <p className="text-slate-300 text-sm">Trattamento Haura in corso...</p>
                            <button 
                              onClick={simulateTreatmentEnd}
                              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm font-bold transition-colors shadow-lg shadow-red-500/20"
                            >
                              STOP TRATTAMENTO
                            </button>
                          </div>
                        )}

                        {marketingStep === 1 && (
                           <div className="text-center">
                              <Loader2 className="w-10 h-10 text-white animate-spin mx-auto mb-2" />
                              <p className="text-white font-bold">Salvataggio Telemetria...</p>
                           </div>
                        )}

                        {marketingStep === 2 && (
                           <div className="text-center animate-in zoom-in">
                              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-green-500/30">
                                <Send size={32} className="ml-1" />
                              </div>
                              <h3 className="text-white font-bold text-lg">Trigger Attivato</h3>
                              <p className="text-slate-400 text-sm">Evento "Fine Sessione" inviato al CRM</p>
                              <button onClick={() => setMarketingStep(0)} className="mt-6 text-xs text-slate-500 underline hover:text-white">Reset Demo</button>
                           </div>
                        )}
                     </div>

                     {/* RIGHT: Customer WhatsApp View */}
                     <div className="w-full md:w-1/2 flex flex-col relative">
                        <div className="absolute top-2 right-2 text-slate-400 text-[10px] uppercase font-bold tracking-widest z-10">Lato Cliente</div>
                        
                        <div className="bg-white p-3 shadow-sm flex items-center gap-3 z-10 border-b border-slate-100">
                            <div className="w-8 h-8 rounded-full bg-panestetic-100 flex items-center justify-center text-xs font-bold text-panestetic-600">P</div>
                            <div>
                              <h4 className="font-bold text-sm text-slate-800">Centro Estetico</h4>
                              <p className="text-[10px] text-green-600 font-bold">Business Account</p>
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]">
                           <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-xs text-slate-800 self-start">
                             <p>Ciao Giulia! Ricorda il tuo appuntamento Haura oggi alle 15:00. 🕒</p>
                             <span className="text-[9px] text-slate-400 block text-right mt-1">09:00</span>
                           </div>

                           {marketingStep === 2 && (
                             <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-xs text-slate-800 self-start animate-in slide-in-from-left-2 duration-500">
                               <p className="font-bold text-panestetic-600 mb-1">✨ Post-Trattamento Haura</p>
                               <p>Grazie per la visita! La tua pelle splende. 😍</p>
                               <p className="mt-2"><strong>Da fare per 24h:</strong></p>
                               <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-600">
                                 <li>Idratare bene l'area trattata</li>
                                 <li>Niente sauna o calore diretto</li>
                               </ul>
                               <span className="text-[9px] text-slate-400 block text-right mt-1">Adesso</span>
                             </div>
                           )}
                        </div>
                     </div>
                  </div>
                )}

                {/* === GHOSTING SCENARIO === */}
                {activeTab === TabView.ANALYTICS && (
                  <div className="h-full relative bg-black flex flex-col">
                    <div className="flex-1 relative overflow-hidden">
                       {/* Base Image (New Photo) */}
                       <img 
                        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Current View"
                       />
                       
                       {/* Overlay Image (Old Photo) */}
                       <img 
                        src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=80&w=2070&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay pointer-events-none transition-opacity duration-75"
                        style={{ opacity: ghostOpacity / 100 }}
                        alt="Reference View"
                       />

                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-48 h-64 border-2 border-white/30 rounded-full border-dashed"></div>
                       </div>
                       
                       <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                            <p className="text-[10px] text-slate-300 uppercase font-bold mb-0.5">Reference</p>
                            <p className="text-white text-xs font-mono">12 OTT 2023</p>
                          </div>
                          <div className="bg-red-500/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white animate-pulse">
                            LIVE CAMERA
                          </div>
                       </div>
                    </div>

                    {/* Controls */}
                    <div className="bg-slate-900/90 backdrop-blur-md p-6 border-t border-slate-700">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="text-xs text-slate-400 font-bold uppercase w-12">Current</span>
                           <input 
                              type="range" min="0" max="100" 
                              value={ghostOpacity} 
                              onChange={(e) => setGhostOpacity(parseInt(e.target.value))}
                              className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
                           />
                           <span className="text-xs text-slate-400 font-bold uppercase w-12 text-right">Ghost</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700"><Settings size={20}/></button>
                            <button className="w-16 h-16 rounded-full border-4 border-white bg-white/10 hover:bg-white/30 transition-all shadow-lg"></button>
                            <button className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700"><RefreshCw size={20}/></button>
                        </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
