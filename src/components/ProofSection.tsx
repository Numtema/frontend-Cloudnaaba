import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, UserMinus, Layout } from 'lucide-react';

const proofBlocks = [
  {
    title: "Moins de dépendance humaine",
    description: "CloudNaaba réduit la dépendance à une expertise infra rare et difficile à maintenir dans une PME.",
    icon: <UserMinus className="w-6 h-6" />
  },
  {
    title: "Mise en ligne plus rapide",
    description: "Les déploiements sont cadrés, automatisés et reproductibles pour une agilité réelle.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Réduction des risques",
    description: "Moins d'interventions manuelles signifie moins d'erreurs humaines et plus de stabilité.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Socle structuré",
    description: "Vos projets reposent sur une base claire, stable et évolutive dès le premier jour.",
    icon: <Layout className="w-6 h-6" />
  }
];

const metrics = [
  { label: "Temps de mise en ligne", value: "-80%", sub: "en moyenne" },
  { label: "Incidents critiques", value: "Minimal", sub: "par design" },
  { label: "Temps de maintenance", value: "-60%", sub: "réduction" },
  { label: "Déploiement", value: "Minutes", sub: "vs heures" }
];

const caseStudies = [
  {
    type: "Plateforme métier PME",
    outcome: "Déploiement simplifié et exploitation stabilisée sans équipe infra dédiée."
  },
  {
    type: "Application SaaS B2B",
    outcome: "Migration vers un socle sécurisé et automatisé en moins de 48h."
  }
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 leading-[1.1] tracking-tight"
          >
            Une plateforme utile se juge sur ce qu’elle <span className="text-accent-primary">simplifie</span> et sur ce qu’elle <span className="text-accent-primary">sécurise.</span>
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

        {/* Proof Blocks Grid - Balanced 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {proofBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 premium-card group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-8 group-hover:scale-110 transition-transform duration-500 border border-accent-primary/20">
                  {block.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {block.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {block.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Row - Clean and data-focused */}
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

        {/* Case Studies Placeholders - Balanced 2 columns */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-text-secondary/40 whitespace-nowrap">
              Contextes d'application
            </h4>
            <div className="h-px flex-1 bg-gradient-to-r from-border-subtle via-border-subtle to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-12 rounded-3xl border border-dashed border-border-subtle flex flex-col justify-center items-center text-center hover:border-accent-primary/30 hover:bg-accent-primary/[0.02] transition-all duration-500 group"
              >
                <div className="text-text-primary font-bold mb-4 text-xl tracking-tight group-hover:text-accent-primary transition-colors">{item.type}</div>
                <p className="text-lg text-text-secondary italic leading-relaxed max-w-[350px]">
                  "{item.outcome}"
                </p>
              </motion.div>
            ))}
          </div>
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

function Counter({ value }: { value: string }) {
  const [count, setCount] = React.useState(0);
  const isInView = React.useRef(false);
  
  // Extract number from string (e.g., "-80%" -> 80)
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
    } else if (numericValue === 0) {
      // If not a number (like "Minutes"), just show the original string
      // This is handled by the component returning the value if numericValue is 0
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
