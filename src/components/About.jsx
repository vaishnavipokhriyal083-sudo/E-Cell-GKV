import React from 'react';
import { Target, Compass, Zap, Share2, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Ideate & Validate',
      desc: 'Nurture raw curiosity into viable problem-solving business models with hypothesis testing frameworks and early customer validation.'
    },
    {
      icon: Compass,
      title: 'Incubate & Prototype',
      desc: 'Offer cutting-edge lab facilities, software licenses, AWS/GCP credits, and prototyping grants up to ₹5 Lakhs to build MVP.'
    },
    {
      icon: Zap,
      title: 'Accelerate & Scale',
      desc: 'Provide pitch refinement, financial forecasting, patent filing advisory, and go-to-market strategies tailored for Indian ecosystems.'
    },
    {
      icon: Share2,
      title: 'Angel & VC Network',
      desc: 'Direct bridge to distinguished GKV alumni founders, NorthGate Capital, Startup India angel syndicates, and institutional VCs.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              Heritage Meets High-Tech
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforming Students into Job Creators & Industry Pioneers
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded under the aegis of <strong className="text-white">Gurukula Kangri (Deemed to be University)</strong>, the Entrepreneurship Cell operates as the university's innovation launchpad. We empower students across engineering, science, management, and pharmacy to turn disruptive ideas into scalable startups.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Situated on the sacred banks of the Ganges in Haridwar, GKV holds a centuries-old heritage of integrity, discipline, and purpose. E-Cell infuses this grounded moral ethos with high-velocity deep-tech execution, equipping founders to solve real problems for the next billion users.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Zero-equity incubation for students</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>IPR & Patent filing assistance</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Dedicated Coworking Space on campus</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Access to MoE / MSME grant pools</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 p-6 rounded-2xl transition-all duration-300 hover:bg-slate-900 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
