import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Code2,
  Sparkles,
  MapPin,
  CheckCircle2,
  Rocket,
  Brain,
  Layers,
  Award,
  Zap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      title: 'CUSAT CSE Student',
      description: 'Currently in Semester 2 at Cochin University of Science and Technology (Thrikkakara Campus).'
    },
    {
      icon: Code2,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-100',
      title: 'Full-Stack Aspirant',
      description: 'Passionate about building end-to-end web applications with modern frontend & backend architectures.'
    },
    {
      icon: Sparkles,
      color: 'text-violet-600',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-100',
      title: 'UI/UX Craftsmanship',
      description: 'Dedicated to designing intuitive, accessible, and sleek user interfaces with micro-interactions.'
    },
    {
      icon: Brain,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      title: 'Problem Solver',
      description: 'Enjoys tackling complex logical challenges through clean code, data structures, and automation.'
    },
  ];

  const stats = [
    { label: 'Current Semester', value: 'Sem 3', sub: 'B.Tech CSE at CUSAT' },
    { label: 'Hackathons', value: '🥈 & 🎯', sub: 'Repo Relay 🥈 & Lumora 2026' },
    { label: 'Core Projects', value: '4', sub: 'AI Medical, Widget, Bot, Web' },
    { label: 'Technologies', value: '18+', sub: 'AI/ML, Python, Web & Tools' },
  ];

  return (
    <section id="about" className="py-20 relative bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={13} />
            <span>Get to know me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed"
          >
            Driven by curiosity, powered by technology, and dedicated to crafting impactful digital solutions.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Rocket className="text-blue-600" size={22} />
                <span>My Journey & Passion</span>
              </h3>

              <p className="text-slate-700 text-base leading-relaxed">
                I am a <strong>Computer Science Engineering student</strong> currently in <strong>Semester 2</strong> at <strong>Cochin University of Science and Technology (CUSAT)</strong>, Thrikkakara Campus.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                I have a deep genuine passion for building software and continuously exploring emerging technologies. Whether it's crafting a lightweight widget for mobile ecosystems, building Python bots with REST APIs, or designing full-stack web platforms, I thrive on turning ideas into functional, clean code.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                My primary technical focus centers on <strong>Full-Stack Development</strong> and <strong>UI/UX Design</strong>. I believe great software isn't just about robust code under the hood—it's equally about creating effortless, intuitive user interfaces that people enjoy using every day.
              </p>

              <div className="pt-3 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.aboutDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((st, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
                  <p className="text-lg font-extrabold text-blue-600 tracking-tight">{st.value}</p>
                  <p className="text-xs font-semibold text-slate-900 mt-0.5">{st.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{st.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Traits & Focus Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold text-slate-900 px-1 flex items-center gap-2">
              <Zap className="text-indigo-600" size={18} />
              <span>Core Pillars</span>
            </h3>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className={`p-4 rounded-2xl bg-white border ${item.borderColor} shadow-xs hover:shadow-md transition-all flex items-start gap-3.5`}
                >
                  <div className={`p-2.5 rounded-xl ${item.bgColor} ${item.color} shrink-0`}>
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location & Institution Info Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/10 border border-blue-200/60 flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <div>
                  <p className="font-bold text-slate-900">Malappuram, Kerala, India</p>
                  <p className="text-slate-500">CUSAT Thrikkakara Campus</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white font-semibold text-blue-600 border border-blue-200 text-[11px] shadow-2xs">
                In-Person & Remote
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
