import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Activity, CheckCircle2 } from 'lucide-react';

const trustItems = [
  {
    title: "Sécurité intégrée dès le départ",
    description: "Pas ajoutée après coup, mais incluse dans la base d’exploitation.",
    icon: <Shield className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Exploitation maîtrisée",
    description: "Moins de manipulations manuelles, moins de risques humains.",
    icon: <Lock className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Continuité mieux cadrée",
    description: "Surveillance, stabilité et cadre opérationnel plus clair.",
    icon: <Activity className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Gouvernance plus défendable",
    description: "Moins d’outils dispersés, plus de cohérence.",
    icon: <CheckCircle2 className="w-5 h-5 text-violet-400" />
  }
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-48 relative overflow-hidden bg-bg-primary">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-soft border border-accent-primary/20 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent-primary">
              Sécurité & Souveraineté
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display max-w-[1000px] leading-[1.1] tracking-tight">
            Ce qui est critique pour votre activité <span className="text-accent-primary">mérite un cadre sérieux.</span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-start">
          
          {/* Left - Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl font-medium text-text-primary leading-tight tracking-tight">
                Quand une entreprise gère des données importantes, la question n’est pas seulement : <span className="text-accent-primary">où héberger ?</span>
              </p>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                La vraie question est : comment garantir un niveau de maîtrise, de continuité et de sécurité compatible avec les enjeux métier ?
              </p>
            </div>
            
            <div className="pt-12 border-t border-border-subtle">
              <p className="text-2xl text-accent-primary font-medium tracking-tight">
                CloudNaaba a été conçu pour répondre à cette exigence.
              </p>
            </div>

            <div className="hidden lg:block pt-16">
              <div className="p-8 rounded-2xl bg-bg-elevated/50 border border-border-subtle italic">
                <p className="text-text-secondary text-lg leading-relaxed">
                  "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Trust Block */}
          <div className="lg:col-span-6 space-y-8">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.15), ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 premium-card overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex gap-8 relative z-10">
                  <div className="mt-1 w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Mobile only final block */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="lg:hidden pt-12 text-center"
            >
              <p className="text-text-secondary/60 text-lg italic leading-relaxed">
                "Pour une PME sérieuse comme pour une organisation sensible, la stabilité n’est pas un luxe. C’est une condition de confiance."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
