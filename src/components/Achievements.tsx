import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Sparkles, CheckCircle2, Trophy, X } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { Achievement } from '../types';

export const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="py-20 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Trophy size={13} />
            <span>Recognitions & Awards</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Honors & Achievements
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg"
          >
            Recognized for design excellence, technical execution, and rapid problem-solving in competitive hackathons.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 relative">
                {/* Top Banner Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-amber-800 font-bold font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/70 text-xs font-semibold shrink-0">
                    {item.badge}
                  </span>
                </div>

                {/* Organizer & Role */}
                <div className="space-y-1 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-blue-600 flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>{item.organizer}</span>
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    Role: {item.role} • Year: {item.year}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 relative">
                <button
                  onClick={() => setSelectedAchievement(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  <Award size={15} />
                  <span>View Event Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Hackathon Details */}
        <AnimatePresence>
          {selectedAchievement && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-amber-500 text-white shadow-md">
                      <Trophy size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{selectedAchievement.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">{selectedAchievement.organizer}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedAchievement(null)} className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer">
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                    <p className="font-bold text-slate-900 flex items-center gap-2">
                      <Award size={16} className="text-amber-600" />
                      {selectedAchievement.subtitle} — {selectedAchievement.role}
                    </p>
                    <p className="text-slate-600">
                      Organized by {selectedAchievement.organizer} in {selectedAchievement.year}. Recognized for speed, team coordination, and technical execution.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900">Key Highlights & Accomplishments:</p>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {selectedAchievement.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 cursor-pointer"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
