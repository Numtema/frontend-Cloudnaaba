import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Cloud, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[76px] flex items-center ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-[1240px] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center border-2 border-violet-400/50 overflow-hidden shadow-[0_0_20px_rgba(124,58,237,0.4)] group">
            <img 
              src="/logo.png" 
              alt="CloudNaaba Logo" 
              className="w-full h-full object-contain p-1.5 relative z-10"
              referrerPolicy="no-referrer"
            />
            {/* Fallback background if image is missing or loading */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-900 opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display">
            Cloud<span className="text-violet-400">Naaba</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#">Accueil</NavLink>
          <NavLink href="#">Marketplace</NavLink>
          <NavLink href="#">Hybride</NavLink>
          <div className="relative group">
            <NavLink href="#">NEW</NavLink>
            <span className="absolute -top-2 -right-4 bg-violet-600 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              PRO
            </span>
          </div>
          <NavLink href="#">Tarifs</NavLink>
          <NavLink href="#">Sécurité</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Se connecter
          </button>
          <button className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all violet-glow">
            Commencer
          </button>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
    </a>
  );
}
