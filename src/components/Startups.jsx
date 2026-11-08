import React from 'react';
import { STARTUPS } from '../data/ecellData';
import { Sparkles, ExternalLink, Award, TrendingUp, Users } from 'lucide-react';

export default function Startups({ onOpenPitchModal }) {
  return (
    <section id="startups" className="py-24 bg-slate-900/30 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Hall of Fame
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Startups Incubated at GKV
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Real-world ventures conceptualized in student dorms, developed in university labs, and scaling across national markets.
            </p>
          </div>

          <button
            onClick={onOpenPitchModal}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            Apply For Next Incubation Batch
          </button>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {STARTUPS.map((startup) => (
            <div
              key={startup.name}
              className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center font-black text-emerald-400 text-lg group-hover:scale-105 transition-transform">
                      {startup.logoText}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {startup.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {startup.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-300 shrink-0">
                    {startup.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {startup.description}
                </p>

                {/* Founder Info */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
                  <Users className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Founders: <strong className="text-slate-200">{startup.founder}</strong></span>
                </div>
              </div>

              {/* Bottom stats pill */}
              <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{startup.stage}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{startup.metrics}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
