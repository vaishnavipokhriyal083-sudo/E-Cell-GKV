import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/ecellData';
import { Linkedin, Twitter, Mail, GraduationCap } from 'lucide-react';

export default function Team() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredTeam = TEAM_MEMBERS.filter((member) => {
    if (activeTab === 'mentor') return member.type === 'mentor';
    if (activeTab === 'core') return member.type === 'core';
    return true;
  });

  return (
    <section id="team" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
            People Behind E-Cell
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Leadership & Mentors
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Backed by experienced university faculty and executed by high-energy student innovators committed to elevating GKV's startup ecosystem.
          </p>

          {/* Filter tabs */}
          <div className="mt-8 inline-flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'all', label: 'All Team' },
              { id: 'core', label: 'Student Executive Body' },
              { id: 'mentor', label: 'Faculty & Mentors' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.name}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-slate-700/80 group-hover:border-emerald-500/50 transition-colors shadow-md"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-400/90">{member.role}</p>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                      {member.department}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social connect links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-slate-400 text-xs">
                <span className="text-slate-500 capitalize">{member.type === 'mentor' ? 'Advisory' : 'Core Member'}</span>
                <div className="flex items-center gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-800 hover:text-emerald-400 hover:bg-slate-700 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-800 hover:text-emerald-400 hover:bg-slate-700 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="mailto:ecell@gkv.ac.in" className="p-1.5 rounded-lg bg-slate-800 hover:text-emerald-400 hover:bg-slate-700 transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
