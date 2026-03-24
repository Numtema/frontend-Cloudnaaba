import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import GlobeVisual from './GlobeVisual';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-[140px] pb-[110px] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-violet-400">
                Plateforme d’exploitation applicative
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight mb-8"
            >
              Déployez vos applications <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-violet-400">
                sans gérer l’infrastructure.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-400 max-w-[620px] leading-relaxed mb-6"
            >
              CloudNaaba permet aux PME et aux organisations exigeantes de déployer sites, plateformes et applications de façon simple, sécurisée et maîtrisée — sans dépendre d’une équipe DevOps complexe.
            </motion.p>

            {/* Reinforcement */}
            <motion.p 
              variants={itemVariants}
              className="text-sm font-medium text-gray-500 mb-10"
            >
              Lancez plus vite. Réduisez le risque technique. Gardez le contrôle sur vos données et vos services.
            </motion.p>

            {/* CTA Stack */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              <button className="group relative bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 violet-glow hover:-translate-y-0.5 active:translate-y-0">
                Commencer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold transition-all hover:-translate-y-0.5 active:translate-y-0">
                Voir les offres
              </button>

              <button className="hidden xl:flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors ml-2">
                <Play className="w-4 h-4 fill-current" />
                Demander une démo
              </button>
            </motion.div>

            {/* Trust Chips */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <TrustChip text="Aucune carte bancaire requise" />
              <TrustChip text="Mise en route simple" />
              <TrustChip text="Accompagnement possible" />
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <GlobeVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TrustChip({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
      <CheckCircle2 className="w-4 h-4 text-violet-500/60" />
      {text}
    </div>
  );
}
