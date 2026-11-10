import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles, ChevronRight } from 'lucide-react';
import logo from "./LOGO.png";

export default function Navbar({ onOpenJoinModal, onOpenPitchModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Events', href: '#events' },
    { name: 'Startups', href: '#startups' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 

      //${scrolled ? '...' : '...'}
      //condition ? value_if_true : value_if_false

      ${scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          
          {/* Logo */}

          <img src={logo} alt="E-CELL GKV Logo" className="h-12 w-auto" />
         
           <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-400 p-0.5 shadow-md shadow-emerald-900/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  E-CELL <span className="text-emerald-400">GKV</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full">
                  Haridwar
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                GURUKUL KANGRI (DEEMED TO BE UNIERSITY)
              </p>
            </div>
          </a>
          

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-500 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </div>
 
          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPitchModal}
              className="text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Pitch Idea
            </button>
            <button
              onClick={onOpenJoinModal}
              className="text-xs sm:text-sm px-4 py-2.5 rounded-lg font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              Join E-Cell
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenPitchModal}
              className="sm:hidden text-xs px-2.5 py-1.5 rounded-md font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30"
            >
              Pitch
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-emerald-400 font-medium py-2 border-b border-slate-900 text-sm"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPitchModal();
                }}
                className="w-full text-center py-2.5 rounded-lg font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 text-sm"
              >
                🚀 Pitch Your Startup Idea
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full text-center py-2.5 rounded-lg font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 text-sm shadow-md"
              >
                Join E-Cell GKV Community
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
