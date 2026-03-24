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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1240px] px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display max-w-[720px] mb-6 leading-tight">
            Votre projet numérique mérite mieux qu’un déploiement fragile.
          </h2>
          <p className="text-text-secondary text-lg max-w-[680px] leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-[14px] bg-surface border border-border-subtle hover:border-violet-main/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.15)]"
            >
              <div className="relative w-12 h-12 rounded-xl bg-violet-main/10 flex items-center justify-center mb-6 border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors">
                {card.icon}
                {card.secondaryIcon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-violet-alt transition-colors">
                {card.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {card.description}
              </p>
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
          <p className="text-xl md:text-2xl font-medium text-text-primary max-w-[800px] mx-auto leading-relaxed">
            Le problème n’est pas seulement technique. <br className="hidden md:block" />
            <span className="text-violet-alt">Un service important pour votre activité ne peut pas reposer sur du bricolage.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
