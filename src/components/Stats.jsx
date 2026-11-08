import React from 'react';
import { ECELL_STATS } from '../data/ecellData';
import { Rocket, Landmark, Calendar, Users2 } from 'lucide-react';

const statIcons = [Rocket, Landmark, Calendar, Users2];

export default function Stats() {
  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {ECELL_STATS.map((stat, idx) => {
          const Icon = statIcons[idx % statIcons.length];
          return (
            <div
              key={stat.label}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-200">{stat.label}</h3>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">{stat.subtext}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
