import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Activity, 
  Layout, 
  Globe, 
  Cpu,
  RefreshCw,
  Search,
  Lock,
  ChevronRight,
  Plus,
  Eye,
  Layers,
  Filter,
  ArrowUp
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HybridInfra({ 
  onLogoClick, 
  onMarketplaceClick, 
  onHybridClick 
}: { 
  onLogoClick: () => void;
  onMarketplaceClick: () => void;
  onHybridClick: () => void;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary/30">
      <Header 
        onLogoClick={onLogoClick} 
        onMarketplaceClick={onMarketplaceClick}
        onHybridClick={onHybridClick}
      />
      
      <main>
        <Hero />
        <ProblemHybrid />
        <SolutionControlLayer />
        <HowItWorksHybrid />
        <BenefitsHybrid />
        <ConnectExisting />
        <MigrationOptions />
        <CompatibilityGrid />
        <WhyProgressive />
        <HybridFAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/20 mb-8"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
                  Gestion hybride de l'infrastructure
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight mb-8 text-gradient"
              >
                Une interface unique pour piloter toute votre infrastructure.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-text-secondary leading-relaxed mb-6 max-w-[540px]"
              >
                Connectez vos serveurs existants à CloudNaaba, centralisez leur gestion et modernisez progressivement, sans migration forcée.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg font-medium text-text-primary/80 mb-10 italic"
              >
                Connectez l'existant. Gagnez en visibilité. Modernisez ensuite à votre rythme.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-5 mb-12"
              >
                <button className="group relative px-8 py-4 bg-accent-primary text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2">
                    Connecter l'existant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-8 py-4 text-text-primary font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all">
                  Voir comment ça marche
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex flex-col gap-4"
              >
                {[
                  "Compatible avec les environnements courants",
                  "Déploiement progressif",
                  "Accompagnement possible en cas de migration"
                ].map((chip, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-text-secondary/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    {chip}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <InfraMapVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraMapVisual() {
  const nodes = [
    { id: 'aws', label: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/FFFFFF', pos: { top: '10%', left: '15%' } },
    { id: 'ovh', label: 'OVH', icon: 'https://cdn.simpleicons.org/ovh/FFFFFF', pos: { top: '5%', left: '50%' } },
    { id: 'gcp', label: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/FFFFFF', pos: { top: '10%', right: '15%' } },
    { id: 'local', label: 'Local Server', icon: 'https://cdn.simpleicons.org/linux/FFFFFF', pos: { bottom: '15%', left: '10%' } },
    { id: 'onprem', label: 'On-Prem', icon: 'https://cdn.simpleicons.org/serverfault/FFFFFF', pos: { bottom: '5%', left: '50%' } },
    { id: 'legacy', label: 'Legacy', icon: 'https://cdn.simpleicons.org/windows/FFFFFF', pos: { bottom: '15%', right: '10%' } },
  ];

  return (
    <div className="relative aspect-square w-full max-w-[600px] mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Central Hub */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative group">
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] bg-accent-primary flex flex-col items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.4)] border-4 border-white/10 relative z-10 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://cdn.simpleicons.org/cloudways/FFFFFF" 
              alt="CloudNaaba Core" 
              className="w-12 h-12 md:w-20 md:h-20 object-contain mb-3"
              referrerPolicy="no-referrer"
            />
            <div className="text-center">
              <span className="block text-white font-black text-[10px] uppercase tracking-[0.2em]">CloudNaaba</span>
              <span className="block text-white/60 font-bold text-[8px] uppercase tracking-widest mt-1">Unified Control Layer</span>
            </div>
          </div>
          
          {/* Animated Glow Rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-[2.5rem] border border-accent-primary/30"
              animate={{ 
                scale: [1, 1.4 + i * 0.2], 
                opacity: [0.6, 0],
                rotate: i * 45
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 1.2,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(124,58,237,0)" />
            <stop offset="50%" stopColor="rgba(124,58,237,0.4)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0)" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) => (
          <motion.path
            key={node.id}
            d={`M 250 250 L ${i < 3 ? (i === 0 ? 75 : (i === 1 ? 250 : 425)) : (i === 3 ? 50 : (i === 4 ? 250 : 450))} ${i < 3 ? (i === 1 ? 25 : 50) : (i === 4 ? 475 : 425)}`}
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 + i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
          className="absolute z-10 group"
          style={node.pos}
        >
          <div className="relative flex flex-col items-center">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg-elevated/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-accent-primary/50 transition-all duration-500"
            >
              <img src={node.icon} alt={node.label} className="w-8 h-8 md:w-10 md:h-10 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" referrerPolicy="no-referrer" />
              
              {/* Status Indicator */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)]" 
              />
            </motion.div>
            <span className="mt-3 text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] group-hover:text-accent-primary transition-colors">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Floating UI Panels */}
      {/* Panel 1: Connected Servers */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute top-[20%] -left-[10%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[180px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center">
              <Server className="w-4 h-4 text-accent-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Connected Servers</span>
          </div>
          <div className="space-y-1">
            <div className="text-xl font-bold text-text-primary">18 Servers</div>
            <div className="text-[10px] text-text-secondary/60 font-medium">5 Environments • 1 Interface</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Panel 2: Health Status */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute top-[40%] -right-[15%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[180px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Activity className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Health Status</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-sm font-bold text-green-400">14</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">OK</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-amber-400">3</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">WARN</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-red-400">1</div>
              <div className="text-[8px] text-text-secondary/40 uppercase font-bold">CRIT</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Panel 3: Operations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute -bottom-[5%] left-[20%] z-30 hidden xl:block"
      >
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl min-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Operations</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Updates pending</span>
              <span className="text-[9px] font-bold text-accent-primary">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Monitoring active</span>
              <span className="text-[9px] font-bold text-green-400">LIVE</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-text-secondary font-medium">Agent status</span>
              <span className="text-[9px] font-bold text-text-primary">ONLINE</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProblemHybrid() {
  const infraLayers = [
    { icon: Globe, label: "Cloud Public (AWS, GCP, Azure)", status: "Siloed" },
    { icon: Cpu, label: "Serveurs Locaux & Edge", status: "Isolated" },
    { icon: Server, label: "Environnements Legacy", status: "Legacy" },
    { icon: Database, label: "Bases de données externes", status: "External" },
    { icon: Layout, label: "Outils tiers & SaaS", status: "Fragmented" },
  ];

  const problems = [
    { 
      id: "01",
      title: "Cécité Opérationnelle", 
      desc: "Aucune vue d'ensemble. Vous pilotez votre infrastructure à l'aveugle, console par console." 
    },
    { 
      id: "02",
      title: "Maintenance Hétérogène", 
      desc: "Chaque environnement a ses propres règles, ses propres scripts et ses propres failles." 
    },
    { 
      id: "03",
      title: "Rétention de Savoir", 
      desc: "La compréhension du système est verrouillée chez quelques experts. Un risque majeur de continuité." 
    },
    { 
      id: "04",
      title: "Inertie Technique", 
      desc: "La complexité accumulée freine chaque nouveau déploiement. L'innovation devient impossible." 
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Diagnostic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-red-500/80">Diagnostic de l'existant</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-display tracking-tight leading-[1.1] text-gradient"
            >
              Le problème n'est pas votre infra. <br />
              C'est sa fragmentation.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block text-right"
          >
            <div className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest mb-2 text-right">System_Entropy_Level</div>
            <div className="flex gap-1 justify-end">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`w-4 h-1.5 rounded-full ${i > 5 ? 'bg-red-500/40' : 'bg-accent-primary/20'}`} />
              ))}
            </div>
            <div className="mt-2 text-[10px] font-mono text-red-500/60 font-bold uppercase tracking-widest">Critical_Fragmentation</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          {/* Left: Editorial & Layers */}
          <div className="lg:col-span-5 space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-text-secondary leading-relaxed"
            >
              Votre infrastructure s'est construite par sédimentation. Chaque couche était une solution, leur ensemble est devenu un fardeau.
            </motion.p>
            
            <div className="space-y-3">
              {infraLayers.map((layer, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-primary/10 transition-colors">
                      <layer.icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-text-primary/80">{layer.label}</span>
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-text-secondary/40 group-hover:text-red-500/60 transition-colors">
                    [{layer.status}]
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]"
            >
              <p className="text-sm text-text-secondary italic leading-relaxed">
                "On finit par passer 80% de notre temps à maintenir l'existant au lieu de construire le futur."
              </p>
            </motion.div>
          </div>

          {/* Right: Advanced Visual */}
          <div className="lg:col-span-7">
            <FragmentedInfraVisual />
          </div>
        </div>

        {/* Problem Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent-primary/30 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/[0.02] group-hover:text-accent-primary/5 transition-colors">
                {p.id}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">{p.title}</h3>
                <p className="text-text-secondary leading-relaxed max-w-[400px]">{p.desc}</p>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Final Statement - Ultra Premium */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-black/40 backdrop-blur-xl border border-white/10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            
            <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-8 leading-tight">
              Vous n’avez pas besoin de tout remplacer. <br />
              <span className="text-accent-primary">Vous avez besoin de reprendre le contrôle.</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Zéro Migration Forcée</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Centralisation Immédiate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Modernisation à la carte</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FragmentedInfraVisual() {
  const nodes = [
    { id: 1, label: "AWS_PROD", pos: { top: '15%', left: '15%' }, status: 'warning', data: "82% LOAD" },
    { id: 2, label: "LOCAL_DB", pos: { top: '25%', left: '60%' }, status: 'ok', data: "SYNC_LATENCY" },
    { id: 3, label: "LEGACY_APP", pos: { top: '55%', left: '10%' }, status: 'critical', data: "ERROR_404" },
    { id: 4, label: "GCP_WORKER", pos: { top: '70%', left: '75%' }, status: 'ok', data: "IDLE" },
    { id: 5, label: "EDGE_NODE", pos: { top: '85%', left: '35%' }, status: 'warning', data: "RETRYING..." },
    { id: 6, label: "SAAS_API", pos: { top: '45%', left: '85%' }, status: 'ok', data: "CONNECTED" },
  ];

  return (
    <div className="relative aspect-[16/10] w-full bg-black/40 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl group/visual">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent z-10 pointer-events-none"
      />

      {/* Disconnected Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="absolute z-20"
          style={node.pos}
        >
          <div className="relative group/node">
            {/* Glitch effect on hover or warning */}
            <div className={`p-4 rounded-xl bg-bg-elevated/80 backdrop-blur-md border transition-all duration-500 shadow-2xl min-w-[140px] ${
              node.status === 'ok' ? 'border-white/10 group-hover/node:border-green-500/50' : 
              node.status === 'warning' ? 'border-amber-500/30 animate-pulse' : 'border-red-500/40'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] font-mono font-bold text-text-secondary/60 uppercase tracking-widest">{node.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  node.status === 'ok' ? 'bg-green-500' : 
                  node.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                }`} />
              </div>
              
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: node.status === 'ok' ? '40%' : '85%' }}
                    className={`h-full ${node.status === 'ok' ? 'bg-green-500/40' : 'bg-red-500/40'}`}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-mono text-text-secondary/40 uppercase">{node.data}</span>
                  <span className="text-[8px] font-mono text-text-secondary/20">ID: {node.id}0X</span>
                </div>
              </div>
            </div>

            {/* Warning Icon Overlay */}
            {node.status !== 'ok' && (
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center backdrop-blur-sm"
              >
                <Activity className="w-3 h-3 text-red-500" />
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Broken Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 500 300">
        <motion.path 
          d="M 100 60 Q 180 100 250 80" 
          stroke="white" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
          fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M 350 200 Q 400 150 450 220" 
          stroke="white" 
          strokeWidth="1" 
          strokeDasharray="4,4" 
          fill="none"
          animate={{ strokeDashoffset: [0, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      
      {/* Center Warning */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/5 blur-[60px] rounded-full" />
          <div className="text-[12px] font-mono text-red-500/20 font-black uppercase tracking-[1em] rotate-[-15deg] select-none">
            FRAGMENTATION_ALERT
          </div>
        </div>
      </div>

      {/* Bottom Bar Info */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-md border-t border-white/5 flex justify-between items-center z-30">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest">3 Critical Silos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-[8px] font-mono text-text-secondary uppercase tracking-widest">2 Sync Warnings</span>
          </div>
        </div>
        <div className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Diagnostic_Mode: Active</div>
      </div>
    </div>
  );
}

function SolutionControlLayer() {
  const blocks = [
    { 
      title: "Centralisez la supervision", 
      desc: "Tous vos environnements remontent dans une interface unique.",
      icon: Layout
    },
    { 
      title: "Simplifiez les opérations", 
      desc: "Vous réduisez la dispersion des outils et des pratiques.",
      icon: Zap
    },
    { 
      title: "Suivez vos environnements", 
      desc: "Vous savez ce qui tourne, où, et dans quel état.",
      icon: Search
    },
    { 
      title: "Réduisez la complexité", 
      desc: "Vous apportez de la cohérence sans tout reconstruire.",
      icon: Shield
    },
    { 
      title: "Évolution progressive", 
      desc: "Améliorez votre infrastructure sans repartir de zéro.",
      icon: RefreshCw
    },
  ];

  return (
    <section className="py-32 bg-bg-elevated/30 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
                  Couche de pilotage unifiée
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight text-gradient">
                CloudNaaba devient votre couche de pilotage unifiée.
              </h2>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Au lieu d’imposer une rupture, CloudNaaba vous permet de partir de ce que vous avez déjà.
              </p>

              <div className="p-8 rounded-3xl bg-accent-primary/5 border border-accent-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Plus className="w-12 h-12 text-accent-primary" />
                </div>
                <p className="relative z-10 text-lg font-medium text-text-primary leading-relaxed">
                  Vous connectez vos serveurs existants à une interface centrale. 
                  <span className="block mt-4 text-accent-primary">
                    Vous obtenez une vue plus claire, une gestion plus homogène et une base plus saine pour évoluer.
                  </span>
                </p>
              </div>

              <div className="space-y-4 pt-8">
                {blocks.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-accent-primary/50 transition-colors">
                      <block.icon className="w-5 h-5 text-text-secondary group-hover:text-accent-primary transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">{block.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{block.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Transformation Visual */}
          <div className="lg:col-span-7 sticky top-32">
            <UnifiedDashboardVisual />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 rounded-2xl border border-white/5 bg-white/[0.02] text-center"
            >
              <p className="text-xl font-bold text-text-primary/80 italic">
                "Le sujet n’est pas seulement de gérer des serveurs. <br />
                Le sujet est de rendre votre infrastructure <span className="text-accent-primary">lisible, maîtrisée et exploitable.</span>"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UnifiedDashboardVisual() {
  const [isCentralized, setIsCentralized] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsCentralized(prev => !prev);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const servers = [
    { name: "prod-aws-01", env: "AWS", status: "Online", health: 98, cpu: "12%" },
    { name: "local-db-main", env: "Local", status: "Online", health: 94, cpu: "45%" },
    { name: "legacy-vps-old", env: "On-Prem", status: "Warning", health: 72, cpu: "82%" },
    { name: "worker-gcp-04", env: "GCP", status: "Online", health: 99, cpu: "08%" },
    { name: "backup-node", env: "Local", status: "Online", health: 100, cpu: "02%" },
  ];

  return (
    <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent shadow-2xl">
      <div className="bg-bg-primary rounded-[2rem] overflow-hidden border border-white/10">
        {/* Dashboard Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-primary flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-text-primary">CloudNaaba Core</div>
              <div className="text-[10px] text-text-secondary/60 font-mono">v2.4.0-stable</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-bold text-text-secondary/40 uppercase tracking-widest">Global Health</span>
              <span className="text-sm font-black text-green-400">92.4%</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Connected Servers", val: "24", icon: Server },
              { label: "Environments", val: "6", icon: Globe },
              { label: "Active Alerts", val: "2", icon: Activity, color: "text-amber-400" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="w-3 h-3 text-text-secondary/40" />
                  <span className="text-[9px] font-bold text-text-secondary/40 uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className={`text-xl font-black ${stat.color || 'text-text-primary'}`}>{stat.val}</div>
              </div>
            ))}
          </div>

          {/* Server List */}
          <div className="space-y-2 relative">
            <AnimatePresence mode="wait">
              {!isCentralized ? (
                <motion.div 
                  key="fragmented"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-bg-primary/80 backdrop-blur-sm z-20 rounded-xl border border-dashed border-white/10"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mb-4"
                  >
                    <RefreshCw className="w-8 h-8 text-accent-primary/40" />
                  </motion.div>
                  <span className="text-xs font-mono text-text-secondary/60 uppercase tracking-[0.3em]">Discovering_Infrastructure...</span>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="text-[10px] font-black text-text-secondary/40 uppercase tracking-widest mb-4 px-2">Active Nodes</div>
            
            {servers.map((server, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-accent-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${server.status === 'Online' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <div>
                    <div className="text-xs font-bold text-text-primary group-hover:text-accent-primary transition-colors">{server.name}</div>
                    <div className="text-[9px] text-text-secondary/40 font-medium">{server.env} • Node_ID: {i}04-AF</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden sm:flex flex-col items-end">
                    <span className="text-[8px] font-bold text-text-secondary/30 uppercase">CPU Load</span>
                    <span className="text-[10px] font-mono text-text-secondary/80">{server.cpu}</span>
                  </div>
                  <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${server.health}%` }}
                      className={`h-full ${server.health > 90 ? 'bg-green-500/40' : 'bg-amber-500/40'}`}
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-text-secondary/60 w-8 text-right">
                    {server.health}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="p-3 bg-accent-primary/5 border-t border-white/5 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-[8px] font-mono text-accent-primary font-bold uppercase tracking-widest">System_Status: Optimal</span>
            <span className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Last_Sync: Just Now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-accent-primary" />
            <span className="text-[8px] font-mono text-text-secondary/40 uppercase tracking-widest">Secure_Tunnel: Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksHybrid() {
  const steps = [
    {
      id: "connect",
      icon: <Globe className="w-6 h-6 text-accent-primary" />,
      title: "Connectez vos serveurs actuels",
      description: "Instances cloud, machines locales, serveurs physiques ou environnements existants.",
      visual: "nodes"
    },
    {
      id: "agent",
      icon: <Terminal className="w-6 h-6 text-accent-primary" />,
      title: "Installez l’agent CloudNaaba",
      description: "Un agent léger remonte les informations dans votre tableau de bord central.",
      visual: "terminal"
    },
    {
      id: "centralize",
      icon: <Layout className="w-6 h-6 text-accent-primary" />,
      title: "Centralisez la visibilité",
      description: "Tous vos environnements apparaissent dans une interface unique.",
      visual: "dashboard"
    },
    {
      id: "manage",
      icon: <Zap className="w-6 h-6 text-accent-primary" />,
      title: "Simplifiez la gestion",
      description: "Vous appliquez une logique plus homogène à vos opérations.",
      visual: "actions"
    },
    {
      id: "evolve",
      icon: <RefreshCw className="w-6 h-6 text-accent-primary" />,
      title: "Évoluez progressivement",
      description: "Vous conservez, améliorez ou migrez selon vos besoins.",
      visual: "transition"
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-accent-primary/5 border border-accent-primary/20 mb-8"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-primary">
              Mise en place progressive
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8 text-gradient max-w-4xl mx-auto"
          >
            Commencez avec l’existant. Transformez ensuite ce qui mérite de l’être.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            CloudNaaba vous permet de connecter vos serveurs actuels et de centraliser leur gestion en quelques étapes simples.
          </motion.p>
        </div>

        {/* Pipeline Visual */}
        <div className="relative">
          {/* Animated Flow Line */}
          <div className="absolute top-[40px] left-0 w-full h-px hidden lg:block overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-30"
            />
            <div className="absolute inset-0 bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Step Icon Node */}
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-3xl bg-bg-elevated border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-accent-primary/50 transition-all duration-500 relative z-10">
                    {step.icon}
                  </div>
                  {/* Pulse Effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute inset-0 rounded-3xl bg-accent-primary/20 -z-0"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 mb-10">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>

                {/* Mini Visual */}
                <div className="w-full aspect-video rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden p-4 flex items-center justify-center group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500">
                  <StepVisual type={step.visual} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <button className="group inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors font-bold">
            Voir comment connecter vos serveurs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StepVisual({ type }: { type: string }) {
  if (type === 'nodes') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center"
            >
              <Server className="w-4 h-4 text-accent-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className="w-full h-full bg-black/40 rounded-lg p-3 font-mono text-[10px] overflow-hidden text-left">
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/40" />
          <div className="w-2 h-2 rounded-full bg-amber-500/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>
        <div className="text-green-400/80">
          <span className="text-white/40">$</span> curl -sL get.cloudnaaba.io/agent | sh
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-1.5 h-3 bg-green-400 ml-1 translate-y-0.5"
          />
        </div>
        <div className="text-white/20 mt-1">
          &gt; Initializing agent...<br />
          &gt; Connecting to core...<br />
          &gt; Success.
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className="w-full h-full flex flex-col gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="h-6 rounded bg-white/5 border border-white/5 flex items-center px-2 gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
            <div className="h-1.5 w-16 bg-white/10 rounded-full" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === 'actions') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20"
        >
          <Zap className="w-8 h-8 text-accent-primary" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                x: i % 2 === 0 ? [0, 40] : [0, -40],
                y: i < 3 ? [0, 40] : [0, -40],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-1 h-1 bg-accent-primary rounded-full"
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === 'transition') {
    return (
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          <Server className="w-5 h-5 text-text-secondary/40" />
        </div>
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4 text-accent-primary/40" />
        </motion.div>
        <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
          <RefreshCw className="w-6 h-6 text-accent-primary" />
        </div>
      </div>
    );
  }

  return null;
}

function BenefitsHybrid() {
  const benefits = [
    {
      icon: <Layout className="w-6 h-6 text-accent-primary" />,
      title: "Une seule interface de pilotage",
      description: "Vous évitez de gérer chaque environnement comme un système isolé. Simplification mentale immédiate."
    },
    {
      icon: <Eye className="w-6 h-6 text-accent-primary" />,
      title: "Une vision claire de l’existant",
      description: "Vous savez ce qui tourne, où, et dans quel état. Réduction drastique du flou technique."
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-primary" />,
      title: "Des opérations plus cohérentes",
      description: "Vous appliquez une logique homogène à vos interventions et à vos mises à jour sur tout votre parc."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent-primary" />,
      title: "Une surveillance unifiée",
      description: "Votre monitoring ne dépend plus d’outils dispersés ou d’habitudes individuelles par serveur."
    },
    {
      icon: <Filter className="w-6 h-6 text-accent-primary" />,
      title: "Réduction du chaos",
      description: "Vous réduisez les frictions liées à une infrastructure fragmentée et aux accès disparates."
    },
    {
      icon: <ArrowUp className="w-6 h-6 text-accent-primary" />,
      title: "Une trajectoire de modernisation",
      description: "Vous pouvez améliorer votre infrastructure sans tout reconstruire, de façon réaliste et progressive."
    }
  ];

  return (
    <section className="py-48 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient"
          >
            Une meilleure maîtrise, sans transformation brutale.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            CloudNaaba vous apporte des bénéfices immédiats, sans vous imposer de refonte complète de votre infrastructure.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 rounded-[14px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-accent-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Gradient Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-accent-primary/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold font-display text-text-primary/80 italic">
            "Vous n’avez pas besoin de tout refaire pour reprendre le contrôle."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ConnectExisting() {
  const [typed, setTyped] = useState('');
  const fullText = "curl -sL get.cloudnaaba.io/agent | sh";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-gradient">Connectez votre infra en 30 secondes.</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              L'agent CloudNaaba est léger, sécurisé et s'installe sur n'importe quel système Linux ou Windows.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-primary font-medium">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-accent-primary" />
                </div>
                Installation sans redémarrage
              </div>
              <div className="flex items-center gap-3 text-text-primary font-medium">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-accent-primary" />
                </div>
                Consommation CPU/RAM négligeable
              </div>
              <div className="flex items-center gap-3 text-text-primary font-medium">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-accent-primary" />
                </div>
                Communication chiffrée de bout en bout
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-text-secondary/40 uppercase tracking-widest">Terminal</span>
                </div>
                <div className="p-8 font-mono text-sm md:text-base">
                  <div className="flex gap-3 mb-4">
                    <span className="text-accent-primary">$</span>
                    <span className="text-white">{typed}</span>
                    <motion.span 
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-5 bg-accent-primary"
                    />
                  </div>
                  
                  <AnimatePresence>
                    {typed === fullText && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        <div className="text-text-secondary/60">Checking system compatibility... [OK]</div>
                        <div className="text-text-secondary/60">Downloading CloudNaaba Agent v2.4... [OK]</div>
                        <div className="text-text-secondary/60">Establishing secure tunnel... [OK]</div>
                        <div className="text-green-400 font-bold mt-4">✓ Server connected to CloudNaaba Core Hub</div>
                        <div className="text-text-secondary/40 text-xs mt-2">Node ID: infra-node-772-af</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MigrationOptions() {
  const options = [
    { title: "Garder", desc: "Conservez vos serveurs actuels et profitez simplement de la couche de gestion CloudNaaba.", icon: Server },
    { title: "Migrer", desc: "Déplacez progressivement vos services vers des infrastructures plus modernes à votre rythme.", icon: RefreshCw },
    { title: "Restructurer", desc: "Réorganisez votre parc pour optimiser les coûts et la performance globale.", icon: Layout },
  ];

  return (
    <section className="py-32 bg-bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">On ne force rien.</h2>
          <p className="text-text-secondary text-lg max-w-[700px] mx-auto">Choisissez la stratégie qui correspond à vos objectifs métier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((o, i) => (
            <div key={i} className="p-10 premium-card text-center group">
              <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mx-auto mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all">
                <o.icon className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{o.title}</h3>
              <p className="text-text-secondary leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompatibilityGrid() {
  const items = [
    { name: "Ubuntu", icon: "https://cdn.simpleicons.org/ubuntu/E9430F" },
    { name: "Debian", icon: "https://cdn.simpleicons.org/debian/A81D33" },
    { name: "CentOS", icon: "https://cdn.simpleicons.org/centos/262577" },
    { name: "Windows", icon: "https://cdn.simpleicons.org/windows/0078D4" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
    { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
    { name: "OVH", icon: "https://cdn.simpleicons.org/ovh/00539E" },
    { name: "Hetzner", icon: "https://cdn.simpleicons.org/hetzner/D50C2D" },
    { name: "DigitalOcean", icon: "https://cdn.simpleicons.org/digitalocean/0080FF" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="text-center mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-secondary/40 mb-6">Compatibilité Totale</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">Fonctionne avec votre stack actuelle.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4 hover:bg-white/[0.04] transition-all group">
              <img src={item.icon} alt={item.name} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
              <span className="text-xs font-bold text-text-secondary group-hover:text-text-primary transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyProgressive() {
  const steps = [
    { label: "Observe", desc: "Connectez et visualisez votre infra actuelle sans rien changer." },
    { label: "Understand", desc: "Identifiez les goulots d'étranglement et les risques de sécurité." },
    { label: "Improve", desc: "Optimisez les performances et sécurisez les accès critiques." },
    { label: "Evolve", desc: "Faites évoluer votre architecture vers le futur de façon sereine." },
  ];

  return (
    <section className="py-32 bg-bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gradient">Pourquoi cette approche ?</h2>
          <p className="text-text-secondary text-lg max-w-[700px] mx-auto">Parce que la modernisation "Big Bang" est souvent un échec coûteux.</p>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {steps.map((s, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-center md:text-right">
                  {i % 2 === 0 && (
                    <>
                      <h3 className="text-3xl font-bold mb-4 text-accent-primary">{s.label}</h3>
                      <p className="text-text-secondary text-lg leading-relaxed">{s.desc}</p>
                    </>
                  )}
                </div>
                
                <div className="relative z-10 w-12 h-12 rounded-full bg-bg-primary border-4 border-accent-primary flex items-center justify-center font-black text-accent-primary">
                  {i + 1}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  {i % 2 !== 0 && (
                    <>
                      <h3 className="text-3xl font-bold mb-4 text-accent-primary">{s.label}</h3>
                      <p className="text-text-secondary text-lg leading-relaxed">{s.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HybridFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Est-ce que l'agent ralentit mes serveurs ?", a: "Non. L'agent CloudNaaba est conçu pour être extrêmement léger. Il consomme moins de 1% de CPU et quelques Mo de RAM." },
    { q: "Mes données sont-elles en sécurité ?", a: "Oui. L'agent n'accède pas à vos données applicatives. Il ne communique que des métadonnées système via un tunnel chiffré TLS 1.3." },
    { q: "Puis-je déconnecter l'agent à tout moment ?", a: "Absolument. La réversibilité est totale. Si vous désinstallez l'agent, votre serveur retrouve son état initial sans aucune trace." },
    { q: "Quels systèmes d'exploitation sont supportés ?", a: "Toutes les distributions Linux majeures (Ubuntu, Debian, CentOS, RHEL) ainsi que Windows Server 2016 et plus récents." },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-[800px] px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-display mb-6 text-gradient">FAQ Hybride.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="premium-card overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronRight className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-text-secondary leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="relative p-16 md:p-24 rounded-[3rem] bg-accent-primary overflow-hidden text-center">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '30px 30px' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-8 tracking-tight">
              Gardez votre infrastructure. <br className="hidden md:block" />
              Reprenez la main sur sa gestion.
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-[700px] mx-auto font-medium">
              Commencez à centraliser vos serveurs dès aujourd'hui. L'installation prend moins de 5 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              <button className="px-10 py-5 rounded-2xl bg-white text-accent-primary font-black text-lg shadow-2xl hover:scale-105 transition-transform">
                Connecter l'existant
              </button>
              <button className="px-10 py-5 rounded-2xl bg-black/20 text-white border border-white/20 font-black text-lg hover:bg-black/30 transition-all">
                Demander un accompagnement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
