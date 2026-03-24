import React from 'react';
import { motion } from 'motion/react';
import { Plug, Scan, Rocket, Shield, LayoutDashboard, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connectez votre projet",
    description: "Votre application entre dans un cadre de déploiement structuré et prêt à être exploité.",
    icon: <Plug className="w-6 h-6 text-violet-400" />
  },
  {
    number: "02",
    title: "Environnement détecté automatiquement",
    description: "CloudNaaba identifie votre stack et prépare l’infrastructure adaptée sans configuration manuelle.",
    icon: <Scan className="w-6 h-6 text-violet-400" />
  },
  {
    number: "03",
    title: "Déploiement automatisé",
    description: "Votre application est installée, configurée et mise en ligne sans manipulation serveur complexe.",
    icon: <Rocket className="w-6 h-6 text-violet-400" />
  },
  {
    number: "04",
    title: "Sécurité et continuité intégrées",
    description: "Certificats, supervision et base d’exploitation sont activés par défaut dès la mise en ligne.",
    icon: <Shield className="w-6 h-6 text-violet-400" />
  },
  {
    number: "05",
    title: "Vous gardez une vision claire",
    description: "Suivez vos services, gérez sereinement et faites évoluer votre projet sans repartir de zéro.",
    icon: <LayoutDashboard className="w-6 h-6 text-violet-400" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Une mise en ligne plus simple, <span className="text-violet-400 text-glow">de bout en bout.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[720px] mx-auto leading-relaxed">
            CloudNaaba structure chaque étape, du projet à la production, dans un cadre clair et automatisé.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative p-7 rounded-[18px] bg-[#0D0D11] border border-white/5 hover:border-violet-main/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                  
                  {/* Soft Halo Effect */}
                  <div className="absolute -inset-1 rounded-[18px] bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />

                  {/* Step Header (Icon + Number) */}
                  <div className="flex items-center justify-between w-full mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-violet-main/10 flex items-center justify-center border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold font-mono text-white/10 group-hover:text-violet-500/30 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3 text-text-primary group-hover:text-violet-alt transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Node (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-[45px] -translate-y-1/2 items-center justify-center z-20">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                      />
                    </div>
                  )}
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
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <button className="group flex items-center gap-2 mx-auto text-violet-400 font-medium hover:text-violet-300 transition-colors">
            <span>Voir comment démarrer</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
