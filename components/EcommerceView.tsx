import React from 'react';
import { ShoppingBag, MapPin, Globe, Share2, Search, BarChart3, ArrowRight, Store, Truck, Layout, Smartphone, Zap, Code, Database, Cpu, Layers, CheckCircle2, Banknote } from 'lucide-react';

export const EcommerceView: React.FC = () => {
  return (
    <div className="pt-24 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-900/20 skew-x-12 transform origin-top-right"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wide mb-6">
              <ShoppingBag size={14} />
              Nuova Linea Cosmetica
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Shopify B2B2C: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">L'Equilibrio Phygital</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Un e-commerce evoluto che non compete con i tuoi centri estetici, ma li premia. 
              Vendi la nuova linea prodotti online con una logica territoriale intelligente che riconosce provvigioni agli affiliati e integra il Click & Collect.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-600/30">
                Visualizza Strategia Tecnica
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logic Section: The Core Value */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2">Smart Geolocation Logic</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tutelare la Rete Vendita Fisica
            </h3>
            <p className="text-slate-600 text-lg">
              Il sistema Shopify identificherà la posizione del cliente al momento dell'acquisto (tramite CAP di spedizione o geolocalizzazione browser) per instradare l'ordine secondo regole di business precise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Scenario A: Covered Territory */}
            <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
               <div className="absolute top-0 right-0 bg-indigo-100 px-4 py-2 rounded-bl-2xl font-bold text-indigo-700 text-xs">SCENARIO A</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                 <Store size={32} />
               </div>
               <h4 className="text-2xl font-bold text-slate-900 mb-4">Territorio Coperto</h4>
               <p className="text-slate-600 mb-6">
                 Il cliente acquista online da un CAP assegnato a un Centro Estetico partner Panestetic.
               </p>
               
               <ul className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 text-green-500 bg-green-50 p-1 rounded"><Share2 size={16}/></div>
                   <div>
                     <strong className="block text-slate-800 text-sm">Provvigione Automatica</strong>
                     <span className="text-xs text-slate-500">Il sistema calcola la % e la assegna al wallet dell'estetista di zona.</span>
                   </div>
                 </li>
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 text-indigo-500 bg-indigo-50 p-1 rounded"><MapPin size={16}/></div>
                   <div>
                     <strong className="block text-slate-800 text-sm">Opzione Click & Collect</strong>
                     <span className="text-xs text-slate-500">Il cliente ritira al centro. Questo genera traffico fisico e opportunità di up-selling per l'estetista.</span>
                   </div>
                 </li>
               </ul>
            </div>

            {/* Scenario B: Uncovered Territory */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
               <div className="absolute top-0 right-0 bg-slate-200 px-4 py-2 rounded-bl-2xl font-bold text-slate-600 text-xs">SCENARIO B</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 mb-6 shadow-sm">
                 <Globe size={32} />
               </div>
               <h4 className="text-2xl font-bold text-slate-900 mb-4">Territorio Scoperto</h4>
               <p className="text-slate-600 mb-6">
                 Il cliente acquista da una zona libera, dove non sono presenti centri affiliati attivi.
               </p>
               
               <ul className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 text-slate-800 bg-slate-100 p-1 rounded"><Truck size={16}/></div>
                   <div>
                     <strong className="block text-slate-800 text-sm">Fulfillment Centrale</strong>
                     <span className="text-xs text-slate-500">Spedizione diretta dal magazzino centrale Panestetic tramite corriere espresso.</span>
                   </div>
                 </li>
                 <li className="flex gap-3 items-start">
                   <div className="mt-1 text-slate-800 bg-slate-100 p-1 rounded"><BarChart3 size={16}/></div>
                   <div>
                     <strong className="block text-slate-800 text-sm">Full Margin</strong>
                     <span className="text-xs text-slate-500">L'azienda trattiene l'intero margine della vendita per reinvestirlo in marketing nazionale.</span>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DETTAGLIO 1: CUSTOM TEMPLATE & UX */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Custom Template & UX Design</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Non useremo un tema pre-confezionato. Svilupperemo un'interfaccia <strong>Shopify 2.0 Custom</strong> progettata per elevare la percezione del brand cosmetico Panestetic, garantendo al contempo le massime performance tecniche.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                                <Smartphone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Mobile First & Conversion Focused</h4>
                                <p className="text-sm text-slate-500 mt-1">
                                    Il 75% del traffico beauty è mobile. Il checkout sarà ottimizzato per ridurre i clic, con Apple Pay/Google Pay nativi e un'esperienza di navigazione fluida come un'app.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                                <Layout size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Storytelling Visivo (Shopify Sections)</h4>
                                <p className="text-sm text-slate-500 mt-1">
                                    Creazione di sezioni modulari trascinabili ("Before/After slider", "Ingredient Spotlight", "Video Texture") che permettono al team marketing di creare landing page senza toccare codice.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">Core Web Vitals Optimization</h4>
                                <p className="text-sm text-slate-500 mt-1">
                                    Codice liquido pulito, caricamento asincrono degli script e immagini WebP di nuova generazione. Obiettivo: Score 90+ su Google PageSpeed per favorire il ranking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl rotate-3 opacity-20 blur-lg"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop" 
                        alt="E-commerce Design" 
                        className="relative rounded-3xl shadow-2xl border border-white/50"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-bold text-slate-800 text-sm">LCP: 0.8s (Ultra Fast)</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* DETTAGLIO 2: SEO & GEO */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    SEO & GEO: <br/> <span className="text-indigo-400">Search & Generative Optimization</span>
                </h2>
                <p className="text-slate-400 text-lg">
                    Il mercato è cambiato. Non basta più posizionarsi su Google. Oggi dobbiamo essere la risposta preferita delle Intelligenze Artificiali.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional SEO */}
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Search className="text-blue-400" size={28} />
                        <h3 className="text-xl font-bold">SEO Tradizionale (Google)</h3>
                    </div>
                    <ul className="space-y-4 text-slate-300 text-sm">
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                            <span><strong>Keyword Transactional:</strong> Ottimizzazione schede prodotto per intenti di acquisto ("crema anti-age professionale").</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                            <span><strong>Technical SEO:</strong> Sitemap XML dinamica, canonical tags per evitare duplicati, struttura URL pulita.</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                            <span><strong>Rich Snippets:</strong> Markup per mostrare stelle recensioni, prezzo e disponibilità direttamente in SERP.</span>
                        </li>
                    </ul>
                </div>

                {/* GEO / AI Optimization */}
                <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 bg-indigo-500 text-white text-[10px] font-bold uppercase rounded-bl-xl">New Standard</div>
                    <div className="flex items-center gap-3 mb-6">
                        <Cpu className="text-purple-400" size={28} />
                        <h3 className="text-xl font-bold">GEO (AI Optimization)</h3>
                    </div>
                    <ul className="space-y-4 text-slate-300 text-sm">
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-purple-400 shrink-0" size={18} />
                            <span><strong>Structured Data (JSON-LD):</strong> Nutriamo gli LLM (ChatGPT, Gemini) con dati strutturati profondi (Ingredienti, Benefici, Target Pelle) per essere citati come fonte.</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-purple-400 shrink-0" size={18} />
                            <span><strong>Content Context:</strong> Creazione di FAQ semantiche che rispondono esattamente a come l'utente interroga l'AI ("Qual è la migliore crema Panestetic per pelli mature?").</span>
                        </li>
                        <li className="flex gap-3">
                            <CheckCircle2 className="text-purple-400 shrink-0" size={18} />
                            <span><strong>Brand Authority Graph:</strong> Collegamento del Knowledge Graph aziendale per assicurare che le AI riconoscano Panestetic come entità autorevole.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* DETTAGLIO 3: TRACKING & DATA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Tracking Ecosystem & Attribution</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6">
                        <Database size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Server-Side GTM</h4>
                    <p className="text-sm text-slate-600">
                        Implementazione di Google Tag Manager Server-Side. I dati non partono dal browser dell'utente (spesso bloccati da AdBlock o iOS), ma dal server Shopify. Questo garantisce un <strong>+20% di accuratezza dati</strong>.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                        <BarChart3 size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">GA4 E-commerce Avanzato</h4>
                    <p className="text-sm text-slate-600">
                        Configurazione granulare del funnel di acquisto: 
                        <span className="block mt-2 font-mono text-xs bg-slate-100 p-2 rounded">View Item List → View Item → Add to Cart → Begin Checkout → Purchase</span>
                        Essenziale per capire dove perdiamo clienti.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
                        <Code size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-3">Commission Attribution Logic</h4>
                    <p className="text-sm text-slate-600">
                        Script custom che persiste l'associazione "Utente - Estetista" nei cookie di prima parte e nei metafields cliente. Anche se l'utente torna dopo 30 giorni, la provvigione viene riconosciuta correttamente.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Roadmap di Sviluppo</h2>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Phase 1 */}
                <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">1</div>
                        <div className="h-full w-px bg-slate-300 my-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="font-bold text-lg text-slate-900">Setup & Strategy (Settimana 1-2)</h4>
                        <p className="text-sm text-slate-600 mt-1">Configurazione Shopify Plus/Advanced, Definizione regole territoriali (CAP database), Setup GA4 & GTM Server Container.</p>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                        <div className="h-full w-px bg-slate-300 my-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="font-bold text-lg text-slate-900">UX/UI Design & Development (Settimana 3-6)</h4>
                        <p className="text-sm text-slate-600 mt-1">Design del tema custom, Sviluppo sezioni modulari, Integrazione logica "Store Locator" nel checkout, Mobile optimization.</p>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">3</div>
                        <div className="h-full w-px bg-slate-300 my-2"></div>
                    </div>
                    <div className="pb-8">
                        <h4 className="font-bold text-lg text-slate-900">Data Population & SEO (Settimana 7-8)</h4>
                        <p className="text-sm text-slate-600 mt-1">Importazione catalogo prodotti, Scrittura metadati SEO, Implementazione Schema.org (GEO), Setup flussi email transazionali.</p>
                    </div>
                </div>

                 {/* Phase 4 */}
                 <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">4</div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-900">Testing & Go-Live (Settimana 9)</h4>
                        <p className="text-sm text-slate-600 mt-1">Test ordini su vari scenari geografici, Verifica tracciamento provvigioni, Lancio ufficiale.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* INVESTMENT SECTION */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-800 border border-indigo-700 text-indigo-200 text-xs font-bold uppercase tracking-wide mb-6">
                       <Banknote size={14} /> Budget & Costi
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Investimento Progetto <span className="text-indigo-400">All-in-One</span></h2>
                    <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                        Una soluzione chiavi in mano. Dal design custom alla logica complessa di attribuzione provvigioni, tutto è incluso in un unico pacchetto trasparente per garantire un Time-to-Market rapido e senza sorprese.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-indigo-900 font-bold text-xs">✓</div>
                            <span className="font-medium">Setup Tecnico & Shopify Configuration</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-indigo-900 font-bold text-xs">✓</div>
                            <span className="font-medium">Sviluppo Tema Custom & Mobile UX</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-indigo-900 font-bold text-xs">✓</div>
                            <span className="font-medium">Logica Territoriale Avanzata & Scripting</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-indigo-900 font-bold text-xs">✓</div>
                            <span className="font-medium">SEO, GEO (AI) e Server-Side Tracking</span>
                        </li>
                    </ul>
                </div>
                
                <div className="lg:w-1/2 w-full">
                    <div className="bg-white text-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative">
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-2 rounded-bl-3xl font-bold uppercase text-sm">Pacchetto Completo</div>
                        <h3 className="text-xl font-bold text-slate-500 mb-2">Totale Progetto Una Tantum</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-6xl font-extrabold tracking-tight text-slate-900">€ 15.000</span>
                        </div>
                        <p className="text-sm text-slate-500 mb-8 border-t border-slate-100 pt-4">
                            Il canone mensile Shopify e le eventuali app di terze parti sono esclusi e verranno fatturati direttamente dalla piattaforma.
                        </p>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-xl shadow-indigo-600/20">
                            Avvia Sviluppo E-commerce
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};