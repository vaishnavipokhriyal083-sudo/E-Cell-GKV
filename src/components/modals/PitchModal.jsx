import React, { useState } from 'react';
import { X, Rocket, CheckCircle2, FileText, Link2 } from 'lucide-react';

export default function PitchModal({ isOpen, onClose }) {
  const [pitchData, setPitchData] = useState({
    founderName: '',
    email: '',
    ventureName: '',
    domain: 'Agritech',
    stage: 'Idea Stage',
    problem: '',
    solution: '',
    deckUrl: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Venture Pitch Submitted!</h3>
            <p className="text-sm text-slate-300">
              Our Incubation & Investment Committee will review your proposal and schedule a preliminary screening session within 7 business days.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Rocket className="w-4 h-4" />
              <span>Incubate & Scale</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">Pitch Your Startup Idea</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
              Connect directly with GKV's Innovation & Incubation Council for seed support and mentorship.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Founder / Team Lead *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Sharma"
                    value={pitchData.founderName}
                    onChange={(e) => setPitchData({ ...pitchData, founderName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="founder@venture.com"
                    value={pitchData.email}
                    onChange={(e) => setPitchData({ ...pitchData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Startup / Project Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VedicBio or AgroTech"
                    value={pitchData.ventureName}
                    onChange={(e) => setPitchData({ ...pitchData, ventureName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Industry Domain</label>
                  <select
                    value={pitchData.domain}
                    onChange={(e) => setPitchData({ ...pitchData, domain: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Agritech">Agritech & Sustainability</option>
                    <option value="Ayurveda">Ayur-Tech & Healthcare</option>
                    <option value="AI / SaaS">GenAI, SaaS & Dev Tools</option>
                    <option value="Edtech">EdTech & Upskilling</option>
                    <option value="Fintech">FinTech / Web3</option>
                    <option value="D2C">D2C & E-Commerce</option>
                    <option value="Hardware / IoT">Hardware & Robotics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Current Maturity Stage</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Idea Stage', 'MVP / Prototype', 'Early Revenue'].map((stg) => (
                    <button
                      type="button"
                      key={stg}
                      onClick={() => setPitchData({ ...pitchData, stage: stg })}
                      className={`text-xs py-2 px-2 rounded-xl border text-center transition-all ${
                        pitchData.stage === stg
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {stg}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Problem Statement *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="What specific pain point does your venture address?"
                  value={pitchData.problem}
                  onChange={(e) => setPitchData({ ...pitchData, problem: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none text-xs"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Proposed Solution & Secret Sauce *</label>
                <textarea
                  required
                  rows="2"
                  placeholder="How does your solution uniquely resolve this? Any proprietary tech or IP?"
                  value={pitchData.solution}
                  onChange={(e) => setPitchData({ ...pitchData, solution: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none text-xs"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Pitch Deck Link / Drive URL (Optional)</label>
                <div className="relative">
                  <Link2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="url"
                    placeholder="https://drive.google.com/... or Notion link"
                    value={pitchData.deckUrl}
                    onChange={(e) => setPitchData({ ...pitchData, deckUrl: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all shadow-md shadow-amber-500/20"
              >
                Submit Pitch for Evaluation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
