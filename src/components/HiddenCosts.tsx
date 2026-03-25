import React from 'react';
import { motion } from 'motion/react';
import { Clock, User, ShieldAlert, TrendingUp, ShieldCheck } from 'lucide-react';

const costs = [
  {
    title: "Temps perdu en continu",
    description: "Corrections, redéploiements, vérifications, relances… Vos équipes passent plus de temps à maintenir qu’à construire.",
    icon: <Clock className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Dépendance à une personne",
    description: "Un développeur, un prestataire, une personne clé devient un point de fragilité. Le projet dépend plus d’un individu que d’un système.",
    icon: <User className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Risque opérationnel invisible",
    description: "Certificat oublié, configuration fragile, sauvegarde absente… Une simple erreur peut impacter toute votre activité.",
    icon: <ShieldAlert className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Croissance technique limitée",
    description: "Ce qui fonctionne au début devient difficile à faire évoluer proprement. Chaque changement devient risqué.",
    icon: <TrendingUp className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Crédibilité affaiblie",
    description: "Un service lent, instable ou mal sécurisé affecte directement la confiance de vos utilisateurs et partenaires.",
    icon: <ShieldCheck className="w-6 h-6 text-violet-400" />
  }
];

export default function HiddenCosts() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
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
    <section className="py-32 relative overflow-hidden bg-bg-primary">
      {/* Animated background glow sweep */}
      <motion.div 
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 0.1, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent pointer-events-none skew-x-12"
      />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 max-w-[1000px] mx-auto tracking-tight">
            Quand l’infrastructure n’est pas cadrée, <br className="hidden md:block" />
            le coût ne se voit pas tout de suite. <span className="text-accent-primary">Mais il existe.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
            Vous ne le payez pas en facture directe. <br className="hidden md:block" />
            Vous le payez en temps, en dépendance, en risque et en ralentissement.
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-24"
        >
          {/* Top Row: 3 cards */}
          {costs.slice(0, 3).map((cost, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="md:col-span-2 group relative p-10 premium-card overflow-hidden"
            >
              {/* Impact Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight relative inline-block">
                  {cost.title}
                  {/* Animated Underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {cost.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bottom Row: 2 cards centered */}
          {costs.slice(3, 5).map((cost, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className={`md:col-span-2 ${index === 0 ? 'md:col-start-2' : ''} group relative p-10 premium-card overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-8 border border-accent-primary/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-accent-primary transition-colors tracking-tight relative inline-block">
                  {cost.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {cost.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Impact Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center border-t border-white/5 pt-24"
        >
          <p className="text-2xl md:text-3xl font-medium text-text-primary max-w-[950px] mx-auto leading-tight tracking-tight">
            Le coût réel n’est pas visible immédiatement. <br className="hidden md:block" />
            <span className="text-accent-primary">Mais il s’accumule, fragilise votre activité et freine votre croissance.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
