import React from 'react';
import { motion } from 'motion/react';
import { User, Shield, Settings, Cloud, Lock } from 'lucide-react';

const cards = [
  {
    title: "Dépendance à une personne clé",
    description: "Le déploiement et la maintenance reposent souvent sur un développeur ou un prestataire. Si cette personne n’est pas disponible, tout ralentit ou se bloque.",
    icon: <User className="w-6 h-6 text-violet-400" />,
    secondaryIcon: <Lock className="w-3 h-3 text-violet-500 absolute -bottom-1 -right-1" />
  },
  {
    title: "Sécurité traitée trop tard",
    description: "Certificats, configuration, bonnes pratiques… La sécurité arrive après coup, alors qu’elle devrait faire partie du socle dès le départ.",
    icon: <Shield className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Maintenance sans cadre clair",
    description: "Mises à jour, surveillance, gestion des incidents… Personne ne sait vraiment qui fait quoi ni comment réagir en cas de problème.",
    icon: <Settings className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Déploiements instables",
    description: "Chaque mise en ligne devient une source de stress : erreurs, oublis, manipulations manuelles, imprévus.",
    icon: <Cloud className="w-6 h-6 text-violet-400" />
  }
];

export default function ProblemSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Vertical Separator Lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-[0.03]">
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
        <div className="w-px h-full bg-white" />
      </div>

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display max-w-[820px] mb-8 leading-[1.1] tracking-tight text-gradient">
            Votre projet numérique mérite mieux qu’un déploiement fragile.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[720px] leading-relaxed">
            Beaucoup d’entreprises investissent dans un site, une application ou un outil métier. 
            Mais une fois en ligne, la même réalité revient : l’exploitation repose sur des bases fragiles.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-10 premium-card hover:bg-red-500/[0.02] overflow-hidden"
            >
              {/* Flicker Glow Effect */}
              <motion.div 
                className="absolute -inset-px rounded-[18px] bg-red-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
                animate={{
                  opacity: [0, 0.1, 0.05, 0.1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Micro Noise Overlay */}
              <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

              <div className="relative z-10">
                <div className="relative w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors">
                  {card.icon}
                  {card.secondaryIcon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                  {card.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-full bg-accent-soft border border-accent-primary/10 mb-8">
            <div className="px-4 py-1 rounded-full bg-bg-primary text-xs font-bold uppercase tracking-widest text-accent-primary">
              Le constat
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-medium text-text-primary max-w-[900px] mx-auto leading-tight tracking-tight">
            Le problème n’est pas seulement technique. <br className="hidden md:block" />
            <span className="text-accent-primary">Un service important pour votre activité ne peut pas reposer sur du bricolage.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
