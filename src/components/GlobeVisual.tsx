import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Zap, Users } from 'lucide-react';

export default function GlobeVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-violet-600/20 via-transparent to-transparent blur-3xl" />
      
      {/* The Globe Abstraction */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-[85%] h-[85%] rounded-full border border-white/10 bg-black/40 flex items-center justify-center overflow-hidden"
      >
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #4c1d95 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        
        {/* West Africa Focus (Simplified SVG) */}
        <svg viewBox="0 0 200 200" className="w-full h-full text-violet-500/40 fill-current">
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            d="M80,100 Q90,90 110,100 T140,110 T160,130 T140,160 T100,170 T70,150 T60,120 Z" 
            className="fill-violet-600/10 stroke-violet-500/50 stroke-[0.5]"
          />
          
          {/* Nodes */}
          {[
            { x: 90, y: 110 }, { x: 110, y: 120 }, { x: 130, y: 130 }, 
            { x: 100, y: 145 }, { x: 120, y: 155 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 + i, delay: i * 0.5 }}
              className="fill-violet-400"
            />
          ))}

          {/* Arcs */}
          <motion.path
            d="M90,110 Q110,90 130,130"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner glow */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(124,58,237,0.1)] rounded-full" />
      </motion.div>

      {/* Floating Glass Cards */}
      <FloatingCard 
        icon={<Zap className="w-3 h-3 text-green-400" />} 
        label="Deploy status" 
        value="Live" 
        className="top-[10%] left-[5%]" 
        delay={0}
      />
      <FloatingCard 
        icon={<ShieldCheck className="w-3 h-3 text-blue-400" />} 
        label="HTTPS" 
        value="Active" 
        className="top-[40%] -right-[5%]" 
        delay={1}
      />
      <FloatingCard 
        icon={<Users className="w-3 h-3 text-violet-400" />} 
        label="Monitoring" 
        value="Healthy" 
        className="bottom-[15%] left-[10%]" 
        delay={2}
      />
      <FloatingCard 
        icon={<Globe className="w-3 h-3 text-orange-400" />} 
        label="Stack" 
        value="Detected" 
        className="bottom-[30%] -right-[10%]" 
        delay={1.5}
      />
    </div>
  );
}

function FloatingCard({ icon, label, value, className, delay }: { icon: React.ReactNode; label: string; value: string; className: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + 0.5, duration: 0.8 }}
      className={`absolute z-10 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{label}</span>
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
    </motion.div>
  );
}
