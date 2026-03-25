import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Layers, Shield, Eye, RefreshCw, TrendingUp, Unlock } from 'lucide-react';

const features = [
  {
    title: "Déploiement automatique",
    description: "Chaque mise en ligne est structurée et reproductible, sans manipulation serveur répétitive.",
    icon: <Rocket className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Détection intelligente de la stack",
    description: "CloudNaaba identifie votre technologie et prépare l’environnement adapté automatiquement.",
    icon: <Layers className="w-6 h-6 text-violet-400" />
  },
  {
    title: "HTTPS et sécurité intégrée",
    description: "La sécurité de base est incluse dès le départ, sans configuration manuelle.",
    icon: <Shield className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Supervision et visibilité",
    description: "Vous gardez une vue claire sur l’état de vos services et de vos applications.",
    icon: <Eye className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Mises à jour simplifiées",
    description: "Faites évoluer votre projet sans risquer de casser votre production.",
    icon: <RefreshCw className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Scalabilité maîtrisée",
    description: "Votre projet peut grandir dans un cadre stable, sans refonte d’infrastructure.",
    icon: <TrendingUp className="w-6 h-6 text-violet-400" />
  }
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight">
            L’essentiel pour exploiter vos applications <span className="text-accent-primary">proprement, dès le départ.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            CloudNaaba intègre les éléments critiques d’exploitation pour éviter les oublis, les manipulations risquées et les configurations fragiles.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
                index={index} 
              />
            </div>
          ))}
          
          {/* Highlighted 7th Feature: Réversibilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3 group relative p-10 premium-card flex flex-col md:flex-row items-center gap-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 rounded-[24px] bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors relative z-10 shrink-0"
            >
              <Unlock className="w-10 h-10 text-accent-primary" />
            </motion.div>
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                Réversibilité totale
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg max-w-[700px]">
                Vous gardez la maîtrise. Vos données et vos services ne sont jamais enfermés. CloudNaaba est un cadre, pas une prison technique.
              </p>
            </div>

            {/* Subtle sweep animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12"
              />
            </div>
          </motion.div>
        </div>

        {/* Optional Trust Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/20 font-bold">
            Un socle d’exploitation propre, pensé pour durer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-10 premium-card overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors"
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
