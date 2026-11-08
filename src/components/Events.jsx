import React, { useState } from 'react';
import { EVENTS } from '../data/ecellData';
import { Calendar, MapPin, Clock, Ticket, Check, Sparkles, AlertCircle } from 'lucide-react';

export default function Events({ onSelectEvent }) {
  const [filter, setFilter] = useState('all');

  const filteredEvents = EVENTS.filter((event) => {
    if (filter === 'upcoming') return event.isUpcoming;
    if (filter === 'past') return !event.isUpcoming;
    return true;
  });

  return (
    <section id="events" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Happenings & Summits
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Events & Competitions
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Immerse yourself in keynote conferences, intense hackathons, and high-stakes pitch arenas held at GKV Haridwar.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {['all', 'upcoming', 'past'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all ${
                  filter === tab
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className={`bg-slate-900/70 border rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
                evt.isUpcoming
                  ? 'border-slate-800 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-950/20'
                  : 'border-slate-800/50 opacity-80'
              }`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {evt.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {evt.tag}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      evt.isUpcoming
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {evt.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-emerald-400 transition-colors">
                  {evt.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {evt.summary}
                </p>

                {/* Details list */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                {/* Perks */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">Participant Benefits:</span>
                  <div className="flex flex-wrap gap-2">
                    {evt.perks.map((perk, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md">
                        <Check className="w-3 h-3 text-emerald-400" />
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  {evt.isUpcoming ? (
                    <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      {evt.slotsLeft} seats remaining
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500">Concluded successfully</span>
                  )}
                </div>

                {evt.isUpcoming ? (
                  <button
                    onClick={() => onSelectEvent(evt)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                  >
                    <Ticket className="w-4 h-4 text-slate-950" />
                    Register Pass
                  </button>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-500 bg-slate-800 cursor-not-allowed"
                  >
                    Event Ended
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
