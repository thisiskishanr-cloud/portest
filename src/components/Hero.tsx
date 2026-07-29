import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Mail,
  ChevronDown,
  Sparkles,
  MapPin,
  GraduationCap,
  Terminal,
  Code2,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  CornerDownLeft,
  Trash2,
  Command,
  Trophy
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onScrollToContact: () => void;
}

interface TerminalHistoryItem {
  id: string;
  type: 'input' | 'output' | 'system';
  command?: string;
  content: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onScrollToContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter Animation state for Subtitle Roles
  const roles = [
    {
      title: 'Computer Science Engineering Student',
      Icon: GraduationCap,
      badgeStyle: 'bg-blue-50/90 border-blue-200/80 text-blue-800 shadow-xs',
      iconColor: 'text-blue-600',
      cursorColor: 'bg-blue-600'
    },
    {
      title: 'Aspiring Full-Stack Developer',
      Icon: Code2,
      badgeStyle: 'bg-indigo-50/90 border-indigo-200/80 text-indigo-800 shadow-xs',
      iconColor: 'text-indigo-600',
      cursorColor: 'bg-indigo-600'
    },
    {
      title: 'UI/UX Enthusiast',
      Icon: Sparkles,
      badgeStyle: 'bg-violet-50/90 border-violet-200/80 text-violet-800 shadow-xs',
      iconColor: 'text-violet-600',
      cursorColor: 'bg-violet-600'
    }
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = roles[roleIndex].title;
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      // Pause when the full title is typed out
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === '') {
      // Switch to next title once completely deleted
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting speed
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentTitle.substring(0, prev.length - 1)
            : currentTitle.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const CurrentIcon = roles[roleIndex].Icon;

  // Interactive Terminal State
  const [terminalHistory, setTerminalHistory] = useState<TerminalHistoryItem[]>([
    {
      id: 'init-welcome',
      type: 'system',
      content: (
        <div className="space-y-1 text-slate-300 font-mono text-xs">
          <p className="text-emerald-400 font-bold flex items-center gap-1.5">
            <Terminal size={14} className="text-emerald-400" />
            <span>Kishan OS Developer Shell v3.0.0 [Sem 3]</span>
          </p>
          <p className="text-slate-400 text-[11px]">
            Type <span className="text-amber-300 font-bold">'help'</span> or click quick chips below to run commands.
          </p>
        </div>
      )
    }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalHistory]);

  const handleRunCommand = (cmdStr: string) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;
    const cmd = rawCmd.toLowerCase();

    if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (cmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-amber-300 font-semibold flex items-center gap-1">
              <span className="text-violet-400">const</span> <span className="text-cyan-300">commands</span> = [
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-slate-300 pl-3">
              <div><span className="text-emerald-400 font-bold">whoami</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'About Kishan'</span></div>
              <div><span className="text-emerald-400 font-bold">skills</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'Tech stack'</span></div>
              <div><span className="text-emerald-400 font-bold">projects</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'Key projects'</span></div>
              <div><span className="text-emerald-400 font-bold">education</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'Schools & CUSAT'</span></div>
              <div><span className="text-emerald-400 font-bold">contact</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'Get links & email'</span></div>
              <div><span className="text-emerald-400 font-bold">clear</span> <span className="text-slate-500">:</span> <span className="text-amber-200">'Clear terminal'</span></div>
            </div>
            <p className="text-amber-300 font-semibold">];</p>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-200">
            <p className="font-bold text-cyan-300 flex items-center gap-1">
              <span className="text-emerald-400">👋</span> <span className="text-violet-400">class</span> <span className="text-amber-300">Developer</span> <span className="text-slate-400">&#123;</span>
            </p>
            <div className="pl-3 space-y-0.5 text-[11px]">
              <p><span className="text-purple-400">name</span>: <span className="text-amber-200">'Kishan R'</span>,</p>
              <p><span className="text-purple-400">role</span>: <span className="text-amber-200">'Full-Stack Developer & Undergrad'</span>,</p>
              <p><span className="text-purple-400">education</span>: <span className="text-amber-200">'B.Tech CSE Sem 3 @ SOE CUSAT'</span>,</p>
              <p><span className="text-purple-400">achievement</span>: <span className="text-emerald-400">'Repo Relay Hackathon Runner-up 🥈'</span></p>
            </div>
            <p className="text-slate-400">&#125;</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-indigo-300 font-bold flex items-center gap-1">
              <span className="text-violet-400">import</span> &#123; <span className="text-cyan-300">Stack</span> &#125; <span className="text-violet-400">from</span> <span className="text-amber-200">'@kishan/skills'</span>;
            </p>
            <div className="space-y-1 text-[11px] text-slate-300 pl-1">
              <p><span className="text-blue-400 font-semibold">[Languages]</span> <span className="text-cyan-200">Python</span>, <span className="text-cyan-200">C</span>, <span className="text-cyan-200">C++</span>, <span className="text-cyan-200">JavaScript</span>, <span className="text-cyan-200">TypeScript</span></p>
              <p><span className="text-emerald-400 font-semibold">[Frameworks]</span> <span className="text-emerald-200">React</span>, <span className="text-emerald-200">Streamlit</span>, <span className="text-emerald-200">Flask</span>, <span className="text-emerald-200">Tailwind</span></p>
              <p><span className="text-purple-400 font-semibold">[AI & Tools]</span> <span className="text-purple-200">Gemini API</span>, <span className="text-purple-200">TensorFlow</span>, <span className="text-purple-200">Git/GitHub</span>, <span className="text-purple-200">Figma</span></p>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-200">
            <p className="text-purple-300 font-bold flex items-center gap-1">
              <span className="text-violet-400">export const</span> <span className="text-cyan-300">topProjects</span> = [
            </p>
            <div className="space-y-1 text-[11px] pl-3">
              <p>1. <span className="text-emerald-300 font-semibold">'AI Medical Image Classifier'</span> <span className="text-slate-500">(TensorFlow + Streamlit)</span></p>
              <p>2. <span className="text-blue-300 font-semibold">'Nothing OS Glyph Visualizer'</span> <span className="text-slate-500">(C++ Audio LED Generator)</span></p>
              <p>3. <span className="text-amber-300 font-semibold">'Spotify Song Metadata Bot'</span> <span className="text-slate-500">(Python Spotipy Bot)</span></p>
              <p>4. <span className="text-cyan-300 font-semibold">'Developer Tips Widget'</span> <span className="text-slate-500">(JS + Nothing OS)</span></p>
            </div>
            <p className="text-purple-300 font-bold">];</p>
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-200">
            <p className="text-amber-300 font-bold">🎓 // Education Timeline</p>
            <div className="space-y-1 text-[11px] text-slate-300 pl-1">
              <p><span className="text-emerald-400">● B.Tech CSE (Sem 3):</span> <span className="text-cyan-200">SOE, CUSAT</span> <span className="text-amber-300 font-semibold">[Current]</span></p>
              <p><span className="text-blue-400">● Class XI - XII:</span> <span className="text-slate-300">SFS Public School, Ettumanoor</span></p>
              <p><span className="text-indigo-400">● Class VI - X:</span> <span className="text-slate-300">JNV Malappuram</span></p>
              <p><span className="text-purple-400">● Class I - V:</span> <span className="text-slate-300">MES Central School, Valanchery</span></p>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-slate-200">
            <p className="text-emerald-400 font-bold">📫 // Connect with Kishan</p>
            <div className="space-y-0.5 text-[11px] text-slate-300 pl-1">
              <p><span className="text-slate-400">email:</span> <a href="mailto:thisiskishanr@gmail.com" className="text-cyan-300 underline font-semibold">thisiskishanr@gmail.com</a></p>
              <p><span className="text-slate-400">github:</span> <a href="https://github.com/thisiskishanr-cloud" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">github.com/thisiskishanr-cloud</a></p>
              <p><span className="text-slate-400">linkedin:</span> <a href="https://www.linkedin.com/in/kishan-r-/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">linkedin.com/in/kishan-r-</a></p>
            </div>
          </div>
        );
        break;

      case 'sudo':
      case 'sudo rm -rf /':
        outputNode = (
          <div className="text-rose-400 text-xs font-mono">
            ⚠️ <span className="font-bold">Error 403:</span> Permission denied. Kishan's portfolio environment is protected! 🛡️
          </div>
        );
        break;

      default:
        outputNode = (
          <div className="text-slate-400 text-xs font-mono">
            <span className="text-rose-400 font-semibold">zsh: command not found:</span> <span className="text-amber-300 font-bold">{rawCmd}</span>. Type <span className="text-emerald-400 font-bold">'help'</span> for list.
          </div>
        );
        break;
    }

    setTerminalHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        type: 'input',
        command: rawCmd,
        content: outputNode
      }
    ]);
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(terminalInput);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-slate-50/50">
      {/* Soft Ambient Background Gradient Mesh */}
      <div className="absolute top-10 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-400/25 via-indigo-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-violet-400/20 via-purple-300/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-l from-cyan-300/25 via-sky-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-gradient-to-r from-amber-200/20 via-rose-200/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Radial Gradient Aura Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Top Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-medium text-slate-700"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for projects & hackathons</span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 text-slate-500 font-normal">
                <MapPin size={12} className="text-blue-600" /> {personalInfo.location}
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 font-mono">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Animated Subtitle Badge Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-1 min-h-[44px] flex items-center"
            >
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-300 ${roles[roleIndex].badgeStyle}`}
              >
                <CurrentIcon size={16} className={`${roles[roleIndex].iconColor} shrink-0`} />
                <span className="font-mono tracking-tight flex items-center">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.75, ease: 'easeInOut' }}
                    className={`inline-block w-[2.5px] h-3.5 sm:h-4 ml-1 rounded-full ${roles[roleIndex].cursorColor}`}
                  />
                </span>
              </div>
            </motion.div>

            {/* Short Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Institution Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/70 shadow-xs text-xs text-slate-600 max-w-xl"
            >
              <div className="p-2 rounded-xl bg-slate-100 text-blue-600">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{personalInfo.institution}</p>
                <p className="text-slate-500 font-medium">{personalInfo.education} • {personalInfo.currentSemester}</p>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </button>

              <button
                onClick={onScrollToContact}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Mail size={16} className="text-slate-500" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200/80 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Interactive Code / Developer Terminal Card Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl bg-slate-900 border border-slate-800 p-4 shadow-2xl shadow-indigo-900/10 text-white overflow-hidden"
            >
              {/* Window Header controls */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-emerald-400" />
                    <span>kishan@portfolio:~$</span>
                  </span>
                </div>

                <button
                  onClick={() => handleRunCommand('clear')}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 border border-slate-700/50 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                  title="Clear Terminal Output"
                >
                  <Trash2 size={11} />
                  <span>Clear</span>
                </button>
              </div>

              {/* Interactive Terminal Body */}
              <div
                ref={terminalContainerRef}
                className="font-mono text-xs text-slate-300 p-3 bg-slate-950/90 rounded-xl border border-slate-800/80 h-72 overflow-y-auto space-y-3 scrollbar-thin"
              >
                {terminalHistory.map((item) => (
                  <div key={item.id} className="space-y-1">
                    {item.type === 'input' && (
                      <div className="flex items-center gap-1.5 text-slate-300 font-mono text-xs">
                        <span className="text-emerald-400 font-bold">kishan@portfolio</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-blue-400 font-semibold">~$</span>
                        <span className="text-white font-medium">{item.command}</span>
                      </div>
                    )}
                    <div className="pl-0 sm:pl-1">{item.content}</div>
                  </div>
                ))}

                {/* Prompt Input Line */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-200 pt-1">
                  <span className="text-emerald-400 font-bold shrink-0">kishan@portfolio</span>
                  <span className="text-slate-500 shrink-0">:</span>
                  <span className="text-blue-400 font-semibold shrink-0">~$</span>
                  <div className="flex-1 flex items-center relative">
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="type 'help' or click quick chips..."
                      className="w-full bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-slate-600 caret-emerald-400"
                    />
                    <button
                      onClick={() => handleRunCommand(terminalInput)}
                      className="p-1 rounded bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors cursor-pointer text-[10px] shrink-0"
                      title="Run Command"
                    >
                      <CornerDownLeft size={12} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Action Chips Bar */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-slate-400 font-mono uppercase font-bold mr-1 flex items-center gap-1">
                    <Command size={10} className="text-blue-400" /> Quick:
                  </span>
                  {['whoami', 'skills', 'projects', 'education', 'contact', 'help', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleRunCommand(cmd)}
                      className="px-2 py-0.5 rounded-md bg-slate-800/90 hover:bg-blue-600/90 border border-slate-700/60 text-slate-300 hover:text-white text-[10px] font-mono transition-all cursor-pointer active:scale-95"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>

                {/* Status Footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-emerald-400 font-medium">Interactive Shell Active</span>
                  </div>
                  <span className="text-slate-500">SOE CUSAT Sem 3</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Stack Badges around Artwork */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200/80 shadow-lg hidden sm:flex items-center gap-2 text-xs font-medium text-slate-800"
            >
              <div className="p-1.5 rounded-xl bg-blue-100 text-blue-600">
                <Terminal size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Python & C++</p>
                <p className="text-[10px] text-slate-500">Core Languages</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -right-3 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200/80 shadow-lg hidden sm:flex items-center gap-2 text-xs font-medium text-slate-800"
            >
              <div className="p-1.5 rounded-xl bg-violet-100 text-violet-600">
                <Cpu size={16} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">React & Streamlit</p>
                <p className="text-[10px] text-slate-500">Modern Frameworks</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <button
          onClick={() => {
            const aboutEl = document.getElementById('about');
            if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:bg-slate-100 transition-colors text-slate-500 hover:text-blue-600 cursor-pointer animate-bounce"
          aria-label="Scroll Down"
        >
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
};

