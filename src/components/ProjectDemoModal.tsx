import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Music, Globe, Play, RefreshCw, Send, CheckCircle2, Sparkles, Code2, Server, BarChart2, Brain, Activity, Upload, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  // Medical AI Classifier State
  const [selectedScan, setSelectedScan] = useState<'scan1' | 'scan2'>('scan1');
  const [analyzingScan, setAnalyzingScan] = useState(false);
  const [scanResult, setScanResult] = useState<{
    status: 'Pneumonia Detected' | 'Normal Scan';
    confidence: number;
    details: string;
    affectedArea: string;
  }>({
    status: 'Pneumonia Detected',
    confidence: 80.86,
    details: 'Infiltration and opacity identified in lower right lung zone.',
    affectedArea: 'Right Inferior Lobe'
  });

  const handleRunScan = (scanType: 'scan1' | 'scan2') => {
    setSelectedScan(scanType);
    setAnalyzingScan(true);
    setTimeout(() => {
      if (scanType === 'scan1') {
        setScanResult({
          status: 'Pneumonia Detected',
          confidence: 80.86,
          details: 'Infiltration and consolidation identified in right lung zone.',
          affectedArea: 'Right Inferior Lobe'
        });
      } else {
        setScanResult({
          status: 'Normal Scan',
          confidence: 96.42,
          details: 'Clear lung fields without focal consolidation or pleural effusion.',
          affectedArea: 'None (Healthy Pulmonary Fields)'
        });
      }
      setAnalyzingScan(false);
    }, 700);
  };
  // Nothing Widget state
  const devTips = [
    { id: 1, tip: "Use Array.prototype.flatMap() to map and flatten arrays in a single pass.", category: "JavaScript", level: "Pro Tip" },
    { id: 2, tip: "Prefer const over let unless reassignment is explicitly required.", category: "Clean Code", level: "Best Practice" },
    { id: 3, tip: "Utilize CSS container queries for component-driven responsive layouts.", category: "CSS", level: "Modern CSS" },
    { id: 4, tip: "Always implement debouncing on search input event listeners.", category: "Performance", level: "UX Efficiency" },
    { id: 5, tip: "Use Python's 'with' context manager for safe file and socket operations.", category: "Python", level: "Safety" },
  ];
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  // Spotify Bot state
  const [spotifyQuery, setSpotifyQuery] = useState('Starboy');
  const [searching, setSearching] = useState(false);
  const [botOutput, setBotOutput] = useState<{
    title: string;
    artist: string;
    album: string;
    duration: string;
    bpm: number;
    key: string;
    popularity: number;
  }>({
    title: 'Starboy',
    artist: 'The Weeknd ft. Daft Punk',
    album: 'Starboy (2016)',
    duration: '3:50',
    bpm: 186,
    key: 'G Major',
    popularity: 92,
  });

  const sampleSongs: Record<string, typeof botOutput> = {
    starboy: { title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', album: 'Starboy', duration: '3:50', bpm: 186, key: 'G Major', popularity: 92 },
    blinding: { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', bpm: 171, key: 'F# Minor', popularity: 95 },
    bohemian: { title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: '5:55', bpm: 144, key: 'Bb Major', popularity: 90 },
    kesariya: { title: 'Kesariya', artist: 'Arijit Singh', album: 'Brahmastra', duration: '4:28', bpm: 98, key: 'C Major', popularity: 88 },
  };

  const handleSpotifySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!spotifyQuery.trim()) return;
    setSearching(true);
    setTimeout(() => {
      const q = spotifyQuery.toLowerCase();
      const matchKey = Object.keys(sampleSongs).find(k => q.includes(k) || sampleSongs[k].title.toLowerCase().includes(q) || sampleSongs[k].artist.toLowerCase().includes(q));
      if (matchKey) {
        setBotOutput(sampleSongs[matchKey]);
      } else {
        setBotOutput({
          title: spotifyQuery,
          artist: 'Discovered Artist',
          album: 'Single / EP',
          duration: '3:30',
          bpm: 120,
          key: 'A Minor',
          popularity: 84
        });
      }
      setSearching(false);
    }, 600);
  };

  // Web Projects state
  const [activeWebTab, setActiveWebTab] = useState<'flask' | 'streamlit' | 'react'>('flask');
  const [flaskLog, setFlaskLog] = useState<string[]>([
    '[2026-07-29 08:12:01] GET /api/v1/health 200 OK (2ms)',
    '[2026-07-29 08:12:05] POST /api/v1/calculate 201 Created (14ms)'
  ]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-xs">
                {project.demoType === 'ai' && <Brain size={20} />}
                {project.demoType === 'widget' && <Smartphone size={20} />}
                {project.demoType === 'spotify' && <Music size={20} />}
                {project.demoType === 'web' && <Globe size={20} />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{project.subtitle} • Interactive Simulator</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body / Demo Simulator */}
          <div className="p-6 overflow-y-auto space-y-6">

            {/* 0. AI MEDICAL IMAGE CLASSIFIER DEMO */}
            {project.demoType === 'ai' && (
              <div className="space-y-4">
                {/* Sample Selector */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleRunScan('scan1')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      selectedScan === 'scan1' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Activity size={14} />
                    <span>X-Ray #1 (Abnormal)</span>
                  </button>
                  <button
                    onClick={() => handleRunScan('scan2')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      selectedScan === 'scan2' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Activity size={14} />
                    <span>X-Ray #2 (Normal)</span>
                  </button>
                </div>

                {/* Simulated Diagnostic Workspace */}
                <div className="p-5 rounded-2xl bg-slate-950 text-white space-y-4 border border-slate-800 shadow-xl font-mono">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2.5">
                    <span className="flex items-center gap-2 text-blue-400 font-bold">
                      <Brain size={15} /> TENSORFLOW_CNN_INFERENCE_ENGINE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] border border-emerald-800">
                      GRADIO UI ACTIVE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    {/* Simulated Chest X-ray graphic / scan viewport */}
                    <div className="relative aspect-square rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center overflow-hidden p-3 group">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-slate-950/80 pointer-events-none" />
                      
                      {/* Scanning Reticle Animation */}
                      {analyzingScan && (
                        <motion.div
                          initial={{ top: '0%' }}
                          animate={{ top: '100%' }}
                          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_12px_#38bdf8] z-10"
                        />
                      )}

                      {/* Chest X-ray SVG Diagram */}
                      <svg viewBox="0 0 100 100" className="w-full h-full text-slate-600 p-2">
                        <path d="M30,20 Q50,15 70,20 Q80,40 75,75 Q50,85 25,75 Q20,40 30,20 Z" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                        {/* Lungs outline */}
                        <path d="M32,28 Q45,26 48,50 Q45,72 32,68 Q26,50 32,28 Z" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                        <path d="M68,28 Q55,26 52,50 Q55,72 68,68 Q74,50 68,28 Z" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                        {/* Spine */}
                        <line x1="50" y1="20" x2="50" y2="80" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
                        {/* Ribs */}
                        <path d="M32,35 Q48,32 48,35" stroke="#334155" strokeWidth="1.5" fill="none" />
                        <path d="M68,35 Q52,32 52,35" stroke="#334155" strokeWidth="1.5" fill="none" />
                        <path d="M32,48 Q48,45 48,48" stroke="#334155" strokeWidth="1.5" fill="none" />
                        <path d="M68,48 Q52,45 52,48" stroke="#334155" strokeWidth="1.5" fill="none" />

                        {/* Infiltration highlight if scan1 */}
                        {selectedScan === 'scan1' && (
                          <circle cx="62" cy="56" r="10" fill="#ef4444" fillOpacity="0.35" stroke="#f87171" strokeWidth="1" />
                        )}
                      </svg>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/80 p-1.5 rounded-lg border border-slate-800">
                        <span>IMG_CHEST_XRAY_{selectedScan === 'scan1' ? '0881' : '0204'}.DICOM</span>
                        <span>512x512px</span>
                      </div>
                    </div>

                    {/* Diagnostic Result Card */}
                    <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 tracking-wider block font-semibold">Diagnostic Result</span>
                        <div className="flex items-center gap-2 mt-1">
                          {scanResult.status === 'Pneumonia Detected' ? (
                            <span className="px-2.5 py-1 rounded-md bg-rose-950 border border-rose-800 text-rose-300 font-bold text-sm flex items-center gap-1.5">
                              <AlertCircle size={14} className="text-rose-400" /> {scanResult.status}
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-300 font-bold text-sm flex items-center gap-1.5">
                              <CheckCircle2 size={14} className="text-emerald-400" /> {scanResult.status}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Confidence Score:</span>
                          <span className="text-cyan-400 font-bold">{scanResult.confidence}%</span>
                        </div>
                        {/* Confidence Progress Bar */}
                        <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${scanResult.confidence}%` }}
                            transition={{ duration: 0.5 }}
                            className={`h-full ${scanResult.status === 'Pneumonia Detected' ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-gradient-to-r from-emerald-500 to-cyan-500'}`}
                          />
                        </div>
                      </div>

                      <div className="text-[11px] space-y-1 pt-2 border-t border-slate-800/80 text-slate-300 font-sans">
                        <p><strong className="text-slate-400 font-mono text-[10px] uppercase">Zone:</strong> {scanResult.affectedArea}</p>
                        <p className="text-slate-400 text-[11px]">{scanResult.details}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 font-mono">
                    <span>Model: Custom CNN (TensorFlow 2.x)</span>
                    <button
                      onClick={() => handleRunScan(selectedScan)}
                      disabled={analyzingScan}
                      className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw size={12} className={analyzingScan ? 'animate-spin' : ''} />
                      <span>Re-Analyze X-Ray</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* 1. NOTHING WIDGET DEMO */}
            {project.demoType === 'widget' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono space-y-3 shadow-lg">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Smartphone size={14} className="text-blue-400" /> NOTHING (R) WIDGET OS
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[10px] text-emerald-400">
                      LIVE JSON FEED
                    </span>
                  </div>

                  {/* Nothing OS Widget Display Card */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] uppercase font-bold tracking-widest">
                        {devTips[currentTipIndex].category}
                      </span>
                      <span className="text-[10px] text-blue-400 font-semibold">
                        {devTips[currentTipIndex].level}
                      </span>
                    </div>

                    <p className="text-sm font-sans font-medium text-slate-100 leading-relaxed py-1">
                      "{devTips[currentTipIndex].tip}"
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-[11px] text-slate-500">
                      <span>Tip #{currentTipIndex + 1} of {devTips.length}</span>
                      <span>JSON payload: 0.8KB</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setCurrentTipIndex((prev) => (prev + 1) % devTips.length)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all active:scale-95"
                    >
                      <RefreshCw size={13} />
                      <span>Next Developer Tip</span>
                    </button>

                    <span className="text-[11px] text-slate-400">Click to fetch next JSON item</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                  <p className="font-semibold text-slate-900">Key Architectural Details:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600" /> JSON-driven tips parser
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600" /> Lightweight RAM footprint
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600" /> Nothing OS dark aesthetic
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600" /> Instant content updates
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 2. SPOTIFY BOT DEMO */}
            {project.demoType === 'spotify' && (
              <div className="space-y-4">
                <form onSubmit={handleSpotifySearch} className="flex gap-2">
                  <input
                    type="text"
                    value={spotifyQuery}
                    onChange={(e) => setSpotifyQuery(e.target.value)}
                    placeholder="Enter song name (e.g., Starboy, Kesariya)..."
                    className="flex-1 px-4 py-2.5 rounded-xl text-xs bg-slate-100 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-900"
                  />
                  <button
                    type="submit"
                    disabled={searching}
                    className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    {searching ? <RefreshCw className="animate-spin" size={14} /> : <Send size={14} />}
                    <span>Bot Search</span>
                  </button>
                </form>

                {/* Spotify Response Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white space-y-4 border border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Music size={14} /> SPOTIFY_API_RESPONSE
                    </span>
                    <span className="text-slate-400">200 OK</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider font-semibold">Track Metadata</span>
                      <h4 className="text-base font-bold text-white">{botOutput.title}</h4>
                      <p className="text-xs text-slate-300">{botOutput.artist}</p>
                      <p className="text-[11px] text-slate-500">{botOutput.album}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Tempo</span>
                        <span className="text-white font-semibold">{botOutput.bpm} BPM</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Key</span>
                        <span className="text-white font-semibold">{botOutput.key}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Duration</span>
                        <span className="text-white font-semibold">{botOutput.duration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Popularity</span>
                        <span className="text-emerald-400 font-semibold">{botOutput.popularity}/100</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 font-mono">
                    Pyrogram Handler: <code>@spotify_info_bot query="{spotifyQuery}"</code>
                  </p>
                </div>
              </div>
            )}

            {/* 3. WEB PRACTICE PROJECTS DEMO */}
            {project.demoType === 'web' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <button
                    onClick={() => setActiveWebTab('flask')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                      activeWebTab === 'flask' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Server size={13} /> Flask API
                  </button>
                  <button
                    onClick={() => setActiveWebTab('streamlit')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                      activeWebTab === 'streamlit' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <BarChart2 size={13} /> Streamlit Dashboard
                  </button>
                  <button
                    onClick={() => setActiveWebTab('react')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer flex items-center gap-1.5 ${
                      activeWebTab === 'react' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Code2 size={13} /> React Component
                  </button>
                </div>

                {activeWebTab === 'flask' && (
                  <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-3">
                    <p className="text-blue-400 font-semibold">Microservice Endpoint Test:</p>
                    <div className="p-3 bg-slate-950 rounded-xl space-y-1">
                      {flaskLog.map((log, i) => (
                        <p key={i} className="text-emerald-400">{log}</p>
                      ))}
                    </div>
                    <button
                      onClick={() => setFlaskLog([...flaskLog, `[${new Date().toISOString().replace('T', ' ').slice(0, 19)}] GET /api/v1/ping 200 OK (${Math.floor(Math.random()*15+2)}ms)`])}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
                    >
                      Trigger Test Request
                    </button>
                  </div>
                )}

                {activeWebTab === 'streamlit' && (
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-red-400 font-bold">Streamlit Analytics Preview</span>
                      <span className="text-slate-400">st.dataframe()</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="text-[10px] text-slate-400">Total Views</span>
                        <p className="text-sm font-bold text-emerald-400">12,450</p>
                      </div>
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="text-[10px] text-slate-400">API Calls</span>
                        <p className="text-sm font-bold text-blue-400">3,890</p>
                      </div>
                      <div className="p-2 bg-slate-800 rounded-lg">
                        <span className="text-[10px] text-slate-400">Uptime</span>
                        <p className="text-sm font-bold text-violet-400">99.9%</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeWebTab === 'react' && (
                  <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 font-mono text-xs">
                    <p className="text-indigo-400 font-semibold">Interactive React State Sandbox</p>
                    <div className="p-3 bg-slate-950 rounded-xl flex items-center justify-between">
                      <span>Count state:</span>
                      <div className="flex items-center gap-2">
                        <button onClick={() => alert('React state updated!')} className="px-2.5 py-1 bg-indigo-600 rounded text-white font-bold cursor-pointer">
                          Increment State
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Feature Checklist */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Features Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Sparkles size={14} className="text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">Built by Kishan R</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Close Simulator
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
