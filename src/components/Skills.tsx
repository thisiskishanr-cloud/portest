import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Code2, Database, Layers, Wrench, Heart, Filter } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { IconRenderer } from './IconRenderer';
import { Skill } from '../types';

const getSkillAccentStyle = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('python')) {
    return {
      iconBg: 'bg-sky-50 text-sky-600 border-sky-100 group-hover:bg-sky-600 group-hover:text-white',
      borderHover: 'hover:border-sky-300 hover:shadow-md hover:shadow-sky-500/10',
      badgeBg: 'bg-sky-50/80 text-sky-700 border-sky-200/80',
      progressGradient: 'from-sky-400 to-blue-600'
    };
  }
  if (lower.includes('c++') || lower.includes('c ') || lower === 'c') {
    return {
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
      borderHover: 'hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10',
      badgeBg: 'bg-blue-50/80 text-blue-700 border-blue-200/80',
      progressGradient: 'from-blue-500 to-indigo-600'
    };
  }
  if (lower.includes('javascript') || lower.includes('html') || lower.includes('canva')) {
    return {
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-500 group-hover:text-white',
      borderHover: 'hover:border-amber-300 hover:shadow-md hover:shadow-amber-500/10',
      badgeBg: 'bg-amber-50/80 text-amber-800 border-amber-200/80',
      progressGradient: 'from-amber-400 to-orange-500'
    };
  }
  if (lower.includes('css') || lower.includes('react') || lower.includes('streamlit') || lower.includes('web')) {
    return {
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white',
      borderHover: 'hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-500/10',
      badgeBg: 'bg-cyan-50/80 text-cyan-800 border-cyan-200/80',
      progressGradient: 'from-cyan-400 to-blue-600'
    };
  }
  if (lower.includes('tensorflow') || lower.includes('ai') || lower.includes('figma') || lower.includes('intelligence')) {
    return {
      iconBg: 'bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white',
      borderHover: 'hover:border-violet-300 hover:shadow-md hover:shadow-violet-500/10',
      badgeBg: 'bg-violet-50/80 text-violet-800 border-violet-200/80',
      progressGradient: 'from-violet-500 to-purple-600'
    };
  }
  if (lower.includes('mongodb') || lower.includes('flask') || lower.includes('sql') || lower.includes('open source')) {
    return {
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      borderHover: 'hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/10',
      badgeBg: 'bg-emerald-50/80 text-emerald-800 border-emerald-200/80',
      progressGradient: 'from-emerald-400 to-teal-600'
    };
  }
  if (lower.includes('git') || lower.includes('gradio') || lower.includes('vs code') || lower.includes('automation')) {
    return {
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
      borderHover: 'hover:border-rose-300 hover:shadow-md hover:shadow-rose-500/10',
      badgeBg: 'bg-rose-50/80 text-rose-800 border-rose-200/80',
      progressGradient: 'from-rose-400 to-pink-600'
    };
  }
  return {
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
    borderHover: 'hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/10',
    badgeBg: 'bg-indigo-50/80 text-indigo-800 border-indigo-200/80',
    progressGradient: 'from-indigo-500 to-violet-600'
  };
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'All', label: 'All Skills', icon: Sparkles },
    { id: 'Languages', label: 'Languages', icon: Code2 },
    { id: 'Databases', label: 'Databases', icon: Database },
    { id: 'Frameworks', label: 'Frameworks', icon: Layers },
    { id: 'Tools', label: 'Tools', icon: Wrench },
    { id: 'Interests', label: 'Areas of Interest', icon: Heart },
  ];

  const filteredSkills = skillsData.filter((skill: Skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Code2 size={13} />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg"
          >
            Languages, frameworks, databases, tools, and technical areas I explore and build with.
          </motion.p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = cat.id === 'All' ? skillsData.length : skillsData.filter(s => s.category === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <cat.icon size={13} />
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs bg-slate-50 border border-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredSkills.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredSkills.map((skill, idx) => {
                const style = getSkillAccentStyle(skill.name);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className={`p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs ${style.borderHover} transition-all duration-200 group flex flex-col justify-between`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-200 ${style.iconBg}`}>
                            <IconRenderer name={skill.iconName} size={18} />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                              {skill.name}
                            </h3>
                            <span className={`inline-block text-[10px] px-1.5 py-0.2 rounded-md font-medium uppercase tracking-wider border ${style.badgeBg}`}>
                              {skill.category}
                            </span>
                          </div>
                        </div>

                        {skill.name.includes('Learning') && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold animate-pulse">
                            Learning
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed min-h-[32px]">
                        {skill.description}
                      </p>
                    </div>

                    {/* Level progress bar if level provided */}
                    {skill.level && (
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-400 font-mono">Proficiency</span>
                          <span className="font-semibold text-slate-700 font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${style.progressGradient} rounded-full`}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/80 space-y-2">
              <Filter className="mx-auto text-slate-400" size={32} />
              <p className="text-sm font-semibold text-slate-800">No skills match your search</p>
              <p className="text-xs text-slate-500">Try adjusting your query or category filter</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
