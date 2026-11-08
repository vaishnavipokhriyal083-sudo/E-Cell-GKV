import React from 'react';
import { TESTIMONIALS } from '../data/ecellData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const partners = [
    'Ministry of Education (IIC)',
    'Startup India Hub',
    'MSME Innovative Scheme',
    'AICTE Idea Lab',
    'TiE Dehradun & Uttarakhand',
    'AWS Activate'
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            Ecosystem Voices
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hear From Our Founders & Mentors
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Stories of resilience, venture scaling, and impactful guidance from individuals who have walked this journey.
          </p>
        </div>

        {/* Testimonials 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800/90 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-emerald-500/30 mb-3" />
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-emerald-400 mt-0.5">{t.role}</p>
                <span className="text-[11px] text-slate-500 block mt-1">{t.cohort}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos / Affiliations */}
        <div className="mt-20 pt-12 border-t border-slate-800/80 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">
            Supported by & Affiliated With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm font-semibold hover:border-emerald-500/30 hover:text-white transition-all shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
