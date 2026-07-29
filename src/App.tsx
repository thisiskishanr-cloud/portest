import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { EducationTimeline } from './components/EducationTimeline';
import { LearningGoals } from './components/LearningGoals';
import { CareerGoal } from './components/CareerGoal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'achievements', 'education', 'learning', 'career-goal', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-blue-500 selection:text-white font-sans antialiased">
      {/* Floating Header Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onScrollToContact={handleScrollToContact}
        />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <EducationTimeline />
        <LearningGoals />
        <CareerGoal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Digital Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Back To Top Floating Button */}
      <BackToTop />

      {/* Custom Interactive Developer Studio Cursor */}
      <CustomCursor />
    </div>
  );
}
