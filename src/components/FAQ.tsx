import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`premium-card overflow-hidden transition-all duration-500 mb-4 ${
        isOpen ? 'border-accent-primary/30 bg-accent-primary/[0.02]' : 'hover:border-white/10'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-8 text-left flex items-center justify-between group"
      >
        <span className={`text-xl font-bold transition-colors duration-300 ${
          isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
        }`}>
          {question}
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-accent-primary text-white rotate-180' : 'bg-white/5 text-text-secondary group-hover:bg-white/10'
        }`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8 text-lg text-text-secondary leading-relaxed border-t border-white/5 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const faqs = [
  {
    id: "hosting",
    question: "Est-ce que CloudNaaba est juste un hébergement ?",
    answer: "Non. CloudNaaba ajoute une couche d’exploitation : déploiement, sécurité, supervision et continuité. L’hébergement seul ne couvre pas ces éléments essentiels à la stabilité de votre activité."
  },
  {
    id: "expertise",
    question: "Faut-il une équipe technique avancée pour l’utiliser ?",
    answer: "Non. La plateforme est conçue pour des structures qui veulent déployer sérieusement sans dépendre d’une expertise infra lourde. Nous automatisons la complexité pour vous laisser vous concentrer sur votre produit."
  },
  {
    id: "data",
    question: "Est-ce que je garde la maîtrise de mes données ?",
    answer: "Oui. La maîtrise et la réversibilité sont des principes clés de CloudNaaba. Vous gardez le contrôle total sur vos données, vos services et votre configuration. Pas de verrouillage propriétaire."
  },
  {
    id: "pme",
    question: "Est-ce adapté à une PME ?",
    answer: "Oui. CloudNaaba est pensé pour les entreprises qui ont des projets numériques importants sans équipe d’exploitation complète. C'est le partenaire idéal pour stabiliser votre croissance technique."
  },
  {
    id: "sensitive",
    question: "Est-ce adapté à des projets sensibles ?",
    answer: "Oui. Dès qu’il y a des enjeux de sécurité, de continuité ou de gouvernance, un cadre d’exploitation plus structuré devient essentiel. CloudNaaba fournit ce cadre par défaut."
  },
  {
    id: "price",
    question: "Pourquoi ne pas simplement prendre un serveur moins cher ?",
    answer: "Parce que le coût réel ne se limite pas au serveur. Il inclut la gestion, les risques d'interruption, les erreurs de configuration et la dépendance humaine — des coûts cachés que CloudNaaba réduit drastiquement."
  }
];

const highlights = [
  { id: "data", label: "Maîtrise des données" },
  { id: "expertise", label: "Besoin d'experts ?" },
  { id: "sensitive", label: "Projets critiques" }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("hosting");

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const scrollToAndOpen = (id: string) => {
    setOpenId(id);
    const element = document.getElementById('faq-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="faq-section" className="py-48 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-[900px] px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] mb-8 tracking-tight text-gradient">
            Questions fréquentes.
          </h2>
          <p className="text-text-secondary text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
            Les points qui reviennent le plus souvent avant de démarrer avec CloudNaaba.
          </p>
        </motion.div>

        {/* Highlight Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {highlights.map((chip) => (
            <button
              key={chip.id}
              onClick={() => scrollToAndOpen(chip.id)}
              className="px-6 py-2.5 rounded-full bg-white/[0.03] border border-border-subtle text-sm font-bold text-text-secondary hover:text-text-primary hover:border-accent-primary/30 hover:bg-accent-primary/5 transition-all duration-300 tracking-tight"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mb-24">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => toggleId(faq.id)}
              />
            </div>
          ))}
        </div>

        {/* Final Reassurance */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-border-subtle"
        >
          <p className="text-text-secondary text-xl md:text-2xl leading-relaxed italic font-medium">
            "Vous n’avez pas besoin de tout anticiper dès le départ. <br className="hidden md:block" />
            <span className="text-text-primary">CloudNaaba est conçu pour vous accompagner dans la durée.</span>"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
