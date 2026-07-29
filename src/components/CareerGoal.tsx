import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Target, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const CareerGoal: React.FC = () => {
  return (
    <section id="career-goal" className="py-20 relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-blue-300">
              <Compass size={14} className="text-blue-400" />
              <span>Vision & Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Career Goal
            </h2>

            <blockquote className="text-lg sm:text-2xl font-medium text-slate-200 leading-relaxed max-w-2xl mx-auto italic">
              "{personalInfo.careerGoal}"
            </blockquote>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
                Scalable Web Systems
              </span>
              <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold">
                UI/UX Excellence
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                Open Source Contributions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
