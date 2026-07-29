import React from 'react';
import { motion } from 'motion/react';
import {
  FolderKanban,
  CheckCircle2,
  Smartphone,
  Music,
  Globe,
  Brain
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const getProjectIcon = (demoType: string) => {
    switch (demoType) {
      case 'ai':
        return <Brain size={22} className="text-cyan-600" />;
      case 'widget':
        return <Smartphone size={22} className="text-blue-600" />;
      case 'spotify':
        return <Music size={22} className="text-emerald-600" />;
      default:
        return <Globe size={22} className="text-indigo-600" />;
    }
  };

  const getProjectGradient = (demoType: string) => {
    switch (demoType) {
      case 'ai':
        return 'from-cyan-50/90 via-blue-50/60 to-slate-50 border-cyan-100';
      case 'widget':
        return 'from-blue-50/80 to-slate-50 border-blue-100';
      case 'spotify':
        return 'from-emerald-50/80 to-slate-50 border-emerald-100';
      default:
        return 'from-indigo-50/80 to-slate-50 border-indigo-100';
    }
  };

  const getTechPillStyle = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python') || lower.includes('c++')) {
      return 'bg-blue-50/90 text-blue-700 border-blue-200/80 hover:bg-blue-100/90';
    }
    if (lower.includes('tensorflow') || lower.includes('deep learning') || lower.includes('cnns') || lower.includes('ai')) {
      return 'bg-violet-50/90 text-violet-700 border-violet-200/80 hover:bg-violet-100/90';
    }
    if (lower.includes('javascript') || lower.includes('json') || lower.includes('css')) {
      return 'bg-amber-50/90 text-amber-800 border-amber-200/80 hover:bg-amber-100/90';
    }
    if (lower.includes('gradio') || lower.includes('opencv') || lower.includes('spotify') || lower.includes('spotipy')) {
      return 'bg-emerald-50/90 text-emerald-700 border-emerald-200/80 hover:bg-emerald-100/90';
    }
    if (lower.includes('react') || lower.includes('widget') || lower.includes('node')) {
      return 'bg-cyan-50/90 text-cyan-800 border-cyan-200/80 hover:bg-cyan-100/90';
    }
    return 'bg-indigo-50/80 text-indigo-700 border-indigo-200/80 hover:bg-indigo-100/80';
  };

  return (
    <section id="projects" className="py-20 relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider"
          >
            <FolderKanban size={13} />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Projects & Built Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg"
          >
            Real-world software, ecosystem widgets, API bots, and web platforms crafted with modern tech stacks.
          </motion.p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header Background Area */}
              <div className={`p-6 bg-gradient-to-br ${getProjectGradient(project.demoType)} border-b border-slate-100 relative overflow-hidden`}>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white shadow-xs border border-slate-200/60">
                    {getProjectIcon(project.demoType)}
                  </div>

                  {project.badge && (
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
                      Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-medium font-mono border transition-colors ${getTechPillStyle(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
