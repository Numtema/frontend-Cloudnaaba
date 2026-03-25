import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, UserMinus, Layout, BarChart3, Users, Activity, Layers } from 'lucide-react';

const proofBlocks = [
  {
    title: "Moins de dépendance humaine",
    description: "CloudNaaba réduit la dépendance à une expertise infra rare et difficile à maintenir dans une PME.",
    icon: <UserMinus className="w-5 h-5" />,
    visual: "human"
  },
  {
    title: "Mise en ligne plus rapide",
    description: "Les déploiements sont cadrés, automatisés et reproductibles pour une agilité réelle.",
    icon: <Zap className="w-5 h-5" />,
    visual: "speed"
  },
  {
    title: "Réduction des risques",
    description: "Moins d'interventions manuelles signifie moins d'erreurs humaines et plus de stabilité.",
    icon: <ShieldCheck className="w-5 h-5" />,
    visual: "risk"
  },
  {
    title: "Socle structuré",
    description: "Vos projets reposent sur une base claire, stable et évolutive dès le premier jour.",
    icon: <Layout className="w-5 h-5" />,
    visual: "base"
  }
];

const metrics = [
  { label: "Temps de mise en ligne", value: "-80%", sub: "en moyenne" },
  { label: "Incidents critiques", value: "Minimal", sub: "par design" },
  { label: "Temps de maintenance", value: "-60%", sub: "réduction" },
  { label: "Déploiement", value: "Minutes", sub: "vs heures" }
];

export default function ProofSection() {
  return (
    <section className="py-48 bg-bg-primary relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <div className="max-w-[850px] mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 leading-[1.1] tracking-tight text-gradient"
          >
            Une plateforme utile se juge sur ce qu’elle simplifie et sur ce qu’elle sécurise.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-l-2 border-accent-primary/30 pl-10"
          >
            <p className="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-[750px] font-medium">
              CloudNaaba est conçu pour répondre à des besoins concrets : réduire la complexité, sécuriser l’exploitation et offrir un cadre plus fiable aux entreprises.
            </p>
          </motion.div>
        </div>

        {/* Proof Blocks Grid - Visual Dashboard Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {proofBlocks.map((block, index) => (
            <ProofCard key={index} block={block} index={index} />
          ))}
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y border-border-subtle mb-32 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/[0.02] to-transparent pointer-events-none" />
          
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-center relative z-10"
            >
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <Counter value={metric.value} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent-primary mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-text-secondary/40 font-medium">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center max-w-[700px] mx-auto"
        >
          <p className="text-text-secondary/60 text-xl md:text-2xl font-medium leading-relaxed">
            L’exploitation devient <span className="text-text-primary">plus simple</span>, <span className="text-text-primary">plus stable</span> et <span className="text-text-primary">plus défendable</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const ProofCard: React.FC<{ block: any; index: number }> = ({ block, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col premium-card overflow-hidden bg-bg-elevated/30 p-0"
    >
      {/* Visual Header Area */}
      <div className="h-[240px] relative bg-black/40 flex items-center justify-center overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-50" />
        <ProofVisual type={block.visual} />
      </div>

      {/* Content Area */}
      <div className="p-10 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center text-accent-primary border border-accent-primary/20">
            {block.icon}
          </div>
          <h3 className="text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent-primary transition-colors">
            {block.title}
          </h3>
        </div>
        <p className="text-text-secondary text-lg leading-relaxed">
          {block.description}
        </p>
      </div>
    </motion.div>
  );
};

function ProofVisual({ type }: { type: string }) {
  if (type === 'human') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative">
          {/* Central Hub */}
          <motion.div 
            className="w-16 h-16 rounded-2xl bg-accent-primary/20 border border-accent-primary/40 flex items-center justify-center z-20 relative"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Users className="text-accent-primary w-8 h-8" />
          </motion.div>
          
          {/* Orbiting Avatars (Simplified) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/10"
              animate={{
                rotate: 360,
                x: Math.cos((i * 60) * Math.PI / 180) * 80,
                y: Math.sin((i * 60) * Math.PI / 180) * 80,
              }}
              style={{ originX: "0px", originY: "0px" }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
          
          {/* Connecting Lines */}
          <svg className="absolute inset-[-100px] w-[200px] h-[200px] pointer-events-none opacity-20">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-accent-primary" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'speed') {
    return (
      <div className="w-full max-w-[300px] space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-text-secondary/40">
            <span>Avant CloudNaaba</span>
            <span>4-6 Heures</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-red-500/40"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-accent-primary">
            <span>Avec CloudNaaba</span>
            <span>3 Minutes</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent-primary shadow-[0_0_15px_rgba(124,58,237,0.5)]"
              initial={{ width: 0 }}
              whileInView={{ width: "15%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <motion.div 
            className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-[10px] font-black text-accent-primary uppercase tracking-widest"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Déploiement Automatisé
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === 'risk') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="w-full h-32 relative">
          {/* Stability Graph */}
          <svg className="w-full h-full overflow-visible">
            <motion.path
              d="M0,80 L40,70 L80,90 L120,40 L160,60 L200,20 L240,30 L280,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-accent-primary"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* Glow effect for path */}
            <motion.path
              d="M0,80 L40,70 L80,90 L120,40 L160,60 L200,20 L240,30 L280,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-accent-primary/20 blur-md"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
          
          {/* Floating Status Card */}
          <motion.div 
            className="absolute top-0 right-0 p-3 rounded-xl bg-bg-elevated border border-accent-primary/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-3 h-3 text-accent-primary" />
              <span className="text-[10px] font-bold text-white">Stabilité</span>
            </div>
            <div className="text-lg font-bold text-accent-primary tracking-tighter">99.9%</div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === 'base') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48 flex flex-col items-center justify-center gap-2">
          {[
            { label: "Application", color: "bg-accent-primary", delay: 0 },
            { label: "Sécurité", color: "bg-accent-primary/60", delay: 0.2 },
            { label: "Infrastructure", color: "bg-accent-primary/20", delay: 0.4 }
          ].map((layer, i) => (
            <motion.div
              key={i}
              className={`w-40 h-10 rounded-xl ${layer.color} border border-white/10 flex items-center justify-center shadow-xl`}
              initial={{ opacity: 0, y: 20, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 45 }}
              transition={{ delay: layer.delay, duration: 0.8 }}
            >
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{layer.label}</span>
            </motion.div>
          ))}
          
          <motion.div 
            className="absolute -bottom-4 w-48 h-4 bg-accent-primary/5 blur-xl rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </div>
      </div>
    );
  }

  return null;
}

function Counter({ value }: { value: string }) {
  const [count, setCount] = React.useState(0);
  const isInView = React.useRef(false);
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const prefix = value.startsWith('-') ? '-' : '';
  const suffix = value.replace(/[0-9-]/g, '');

  React.useEffect(() => {
    if (isInView.current && numericValue > 0) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [numericValue]);

  if (numericValue === 0) {
    return <span className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter">{value}</span>;
  }

  return (
    <motion.span 
      onViewportEnter={() => { isInView.current = true; }}
      className="text-4xl md:text-5xl font-bold text-text-primary tracking-tighter"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}
