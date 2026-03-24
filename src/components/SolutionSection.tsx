import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Déployez plus facilement",
    description: "Mettez vos applications en ligne dans un cadre clair, sans manipulation serveur complexe.",
    icon: <Rocket className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Sécurisez par défaut",
    description: "Certificats, bonnes pratiques et base d’exploitation sont intégrés dès le départ.",
    icon: <ShieldCheck className="w-5 h-5 text-violet-400" />
  },
  {
    title: "Gardez le contrôle",
    description: "Supervision, visibilité et cadre stable pour faire évoluer vos services sereinement.",
    icon: <BarChart3 className="w-5 h-5 text-violet-400" />
  }
];

export default function SolutionSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-8 text-text-primary">
                CloudNaaba professionnalise l’exploitation de vos applications, <span className="text-violet-400">sans vous imposer la complexité d’un cloud lourd.</span>
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-[640px]">
                CloudNaaba n’est pas un simple hébergement. C’est une plateforme conçue pour structurer, sécuriser et simplifier l’exploitation de vos applications.
              </p>
              
              <div className="bg-surface-light/30 border-l-2 border-violet-main p-6 mb-12 rounded-r-xl">
                <p className="text-xl font-medium text-text-primary italic">
                  "Vous vous concentrez sur votre produit. CloudNaaba prend en charge ce qui ralentit votre exploitation."
                </p>
              </div>
            </motion.div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl bg-surface border border-border-subtle hover:border-violet-main/30 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Soft Halo Effect */}
                  <div className="absolute -inset-1 rounded-2xl bg-violet-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-violet-main/10 flex items-center justify-center mb-4 border border-violet-main/20 group-hover:bg-violet-main/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-violet-alt transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Abstract Infra System */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Node */}
                <div className="w-32 h-32 rounded-3xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center relative z-10 violet-glow-btn">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-400/40 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-violet-400" />
                  </div>
                  
                  {/* Pulse effect */}
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl border border-violet-400/50"
                  />
                </div>

                {/* Connected Modules */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute w-24 h-24"
                    style={{ 
                      transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)` 
                    }}
                  >
                    <div className="w-full h-full rounded-2xl bg-surface border border-border-subtle flex items-center justify-center relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                      
                      {/* Connection Line */}
                      <div 
                        className="absolute w-px h-16 bg-gradient-to-b from-violet-500/50 to-transparent"
                        style={{ 
                          top: '100%', 
                          left: '50%', 
                          transform: `translateX(-50%)`
                        }} 
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Floating Indicators */}
                <FloatingIndicator label="Deploy" value="Automated" className="top-0 -right-4" delay={0} />
                <FloatingIndicator label="Security" value="Active" className="bottom-12 -left-8" delay={1} />
                <FloatingIndicator label="Monitoring" value="Live" className="top-24 -left-12" delay={2} />
                <FloatingIndicator label="Stack" value="Detected" className="bottom-0 -right-8" delay={1.5} />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-violet-600/5 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center border-t border-border-subtle pt-12"
        >
          <p className="text-xl md:text-2xl font-medium text-text-primary max-w-[800px] mx-auto leading-relaxed">
            CloudNaaba ne remplace pas votre projet. <br className="hidden md:block" />
            <span className="text-violet-alt">Il rend son exploitation plus fiable, plus lisible et plus durable.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingIndicator({ label, value, className, delay }: { label: string; value: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + delay, duration: 0.5 }}
      className={`absolute z-20 px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl flex flex-col ${className}`}
    >
      <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
    </motion.div>
  );
}
