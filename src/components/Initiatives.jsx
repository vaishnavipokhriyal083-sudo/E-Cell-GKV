import React from 'react';
import { INITIATIVES } from '../data/ecellData';
import { Flame, Lightbulb, Rocket, Coffee, ArrowRight } from 'lucide-react';

const iconMap = {
  Flame: Flame,
  Lightbulb: Lightbulb,
  Rocket: Rocket,
  Coffee: Coffee
};

export default function Initiatives({ onOpenPitchModal }) {
  return (
    <section id="initiatives" className="py-24 bg-slate-900/40 relative border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            Flagship Programs
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Initiatives Driving Campus Entrepreneurship
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            From university ideathons to nationwide summits and institutional incubation, our programs nurture early venture prototypes every step of the journey.
          </p>
        </div>

        {/* Grid of Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INITIATIVES.map((item) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <div
                key={item.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-emerald-400/90">{item.metrics}</span>
                  <a
                    href="#events"
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium group/link"
                  >
                    <span>View Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">Have a unique venture or research project at GKV?</h4>
            <p className="text-slate-400 text-sm mt-1">Get immediate incubation assistance, lab infrastructure, and grant evaluation from our advisory board.</p>
          </div>
          <button
            onClick={onOpenPitchModal}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
          >
            Submit Proposal
          </button>
        </div>

      </div>
    </section>
  );
}
