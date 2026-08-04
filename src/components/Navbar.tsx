import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Menu, X, Sparkles, Code2, GraduationCap, FolderKanban, Award, BookOpen, Mail, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      <header className={`fixed top-3 left-0 right-0 z-40 px-4 sm:px-6 max-w-7xl mx-auto transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
        <nav className={`w-full rounded-2xl transition-all duration-300 px-4 py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-md shadow-slate-900/5'
            : 'bg-white/60 backdrop-blur-md border-slate-200/40 shadow-xs'
        }`}>
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-hidden"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 p-[1.5px] shadow-sm transition-transform duration-300 group-hover:scale-105">
  <img
    src="/me.jpg"
    alt="Kishan R"
    className="w-full h-full rounded-[10.5px] object-cover"
  />
</div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                CUSAT CSE '29
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/50">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <item.icon size={13} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white text-xs font-semibold shadow-xs shadow-indigo-500/20 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-3 bg-white/95 backdrop-blur-2xl rounded-2xl border border-slate-200/80 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`p-2.5 rounded-xl text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-200/60'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <item.icon size={15} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileText size={14} />
                  <span>View Full Resume</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
