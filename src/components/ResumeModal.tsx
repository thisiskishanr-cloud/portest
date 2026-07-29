import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Copy, Check, FileText, GraduationCap, Code2, Trophy, Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo, skillsData, projectsData, achievementsData, achievementData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
${personalInfo.name}
${personalInfo.roles.join(' | ')}
Location: ${personalInfo.location}
Education: ${personalInfo.education} - ${personalInfo.institution} (${personalInfo.currentSemester})
Email: ${personalInfo.email} | GitHub: ${personalInfo.github}

CAREER OBJECTIVE:
${personalInfo.careerGoal}

TECHNICAL SKILLS:
- Languages: Python, C, C++, JavaScript, HTML5, CSS3, SQL
- Databases: MySQL, MongoDB
- Frameworks: Flask, Streamlit, React (Learning)
- Tools: Git, GitHub, VS Code, Figma, Canva

PROJECTS:
${projectsData.map((p, i) => `${i + 1}. ${p.title}: ${p.description}`).join('\n')}

ACHIEVEMENTS:
${achievementsData.map((a) => `- ${a.title} (${a.subtitle}): ${a.organizer}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50/80 sticky top-0 z-10 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-600 text-white shadow-xs">
                <FileText size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Digital Resume</h3>
                <p className="text-[11px] text-slate-500 font-medium">Kishan R • CUSAT CSE</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopySummary}
                className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs shadow-indigo-500/20"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white font-sans text-slate-800 print:p-0">
            
            {/* Header / Contact Info */}
            <div className="border-b border-slate-200 pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{personalInfo.name}</h1>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    {personalInfo.roles.join(' • ')}
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-600 font-mono">
                  <p className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400" /> {personalInfo.location}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Mail size={13} className="text-slate-400" /> {personalInfo.email}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Github size={13} className="text-slate-400" /> <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/thisiskishanr-cloud</a>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Linkedin size={13} className="text-slate-400" /> <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/kishan-r-</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <GraduationCap size={14} className="text-blue-600" /> Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                {personalInfo.careerGoal}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <GraduationCap size={14} className="text-blue-600" /> Education
              </h2>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">{personalInfo.education}</h3>
                  <span className="text-xs font-mono font-semibold text-blue-600">{personalInfo.currentSemester}</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">{personalInfo.institution}</p>
                <p className="text-[11px] text-slate-500 pt-1">
                  Focus Areas: Programming in C/C++, Python, Data Structures & Algorithms, Web Engineering.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-600" /> Technical Skills
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Programming Languages</span>
                  <p className="text-slate-600">Python, C, C++, JavaScript, HTML5, CSS3, SQL</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Databases</span>
                  <p className="text-slate-600">MySQL, MongoDB</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Frameworks & Libraries</span>
                  <p className="text-slate-600">Flask, Streamlit, React (Learning)</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Tools & Design</span>
                  <p className="text-slate-600">Git, GitHub, VS Code, Figma, Canva</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <FileText size={14} className="text-blue-600" /> Key Projects
              </h2>

              <div className="space-y-3">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                        {proj.tech.join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                <Trophy size={14} className="text-amber-500" /> Achievements & Hackathons
              </h2>
              <div className="space-y-2">
                {achievementsData.map((item) => (
                  <div key={item.id} className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900">{item.title} ({item.subtitle})</h3>
                      <span className="text-xs font-semibold text-amber-800">{item.year}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">{item.organizer} • {item.role}</p>
                    <p className="text-[11px] text-slate-500 pt-1">
                      {item.highlights[0]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 cursor-pointer"
            >
              Close Resume View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
