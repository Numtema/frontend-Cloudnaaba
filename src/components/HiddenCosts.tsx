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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Ambient pulse background glow */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8 max-w-[900px] mx-auto">
            Quand l’infrastructure n’est pas cadrée, <br className="hidden md:block" />
            le coût ne se voit pas tout de suite. <span className="text-violet-400">Mais il existe.</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[700px] mx-auto leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-20"
        >
          {/* Top Row: 3 cards */}
          {costs.slice(0, 3).map((cost, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="md:col-span-2 group relative p-7 rounded-[16px] bg-[#111118] border border-white/5 hover:border-violet-main/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Soft Halo Effect */}
              <div className="absolute -inset-2 rounded-[16px] bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
              
              {/* Subtle internal gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-main/10 flex items-center justify-center mb-6 border border-violet-main/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-violet-alt transition-colors">
                  {cost.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-[15px]">
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
              className={`md:col-span-2 ${index === 0 ? 'md:col-start-2' : ''} group relative p-7 rounded-[16px] bg-[#111118] border border-white/5 hover:border-violet-main/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Soft Halo Effect */}
              <div className="absolute -inset-2 rounded-[16px] bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-main/10 flex items-center justify-center mb-6 border border-violet-main/20 group-hover:scale-110 transition-transform duration-300">
                  {cost.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-violet-alt transition-colors">
                  {cost.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-[15px]">
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
          className="text-center border-t border-white/5 pt-16"
        >
          <p className="text-xl md:text-2xl font-medium text-text-primary max-w-[850px] mx-auto leading-relaxed">
            Le coût réel n’est pas visible immédiatement. <br className="hidden md:block" />
            <span className="text-violet-alt">Mais il s’accumule, fragilise votre activité et freine votre croissance.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
