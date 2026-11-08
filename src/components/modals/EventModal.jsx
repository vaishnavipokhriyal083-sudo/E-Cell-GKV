import React, { useState } from 'react';
import { X, Calendar, MapPin, Ticket, CheckCircle2, QrCode } from 'lucide-react';

export default function EventModal({ event, isOpen, onClose }) {
  const [attendee, setAttendee] = useState({
    name: '',
    email: '',
    institution: 'Gurukula Kangri Vishwavidyalaya',
    rollNo: '',
    tier: 'Student Pass (Free)'
  });
  const [confirmed, setConfirmed] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen || !event) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    const id = 'GKV-EVT-' + Math.floor(100000 + Math.random() * 900000);
    setRegId(id);
    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    setAttendee({
      name: '',
      email: '',
      institution: 'Gurukula Kangri Vishwavidyalaya',
      rollNo: '',
      tier: 'Student Pass (Free)'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Delegate Pass Confirmed!</h3>
            <p className="text-sm text-slate-300">
              Your delegate badge has been generated and sent to <span className="text-emerald-400 font-medium">{attendee.email}</span>.
            </p>

            {/* Pass Card Preview */}
            <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-5 text-left my-4 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">E-Cell GKV Official Pass</span>
                  <h4 className="text-base font-bold text-white truncate max-w-[240px]">{event.title}</h4>
                </div>
                <QrCode className="w-8 h-8 text-emerald-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-2">
                <div>
                  <span className="text-slate-500 block">Delegate Name</span>
                  <span className="font-semibold text-white">{attendee.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Registration ID</span>
                  <span className="font-mono text-emerald-400 font-bold">{regId}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500 block">Date & Venue</span>
                  <span>{event.date}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Pass Category</span>
                  <span className="text-amber-400 font-medium">{attendee.tier}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all text-sm"
            >
              Done & Save Pass
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Ticket className="w-4 h-4" />
              <span>Event Registration</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {event.title}
            </h3>

            {/* Event pill summary */}
            <div className="my-4 p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{event.date} ({event.time})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>{event.venue}</span>
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Attendee Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siddharth Rawat"
                  value={attendee.name}
                  onChange={(e) => setAttendee({ ...attendee, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email for Pass *</label>
                  <input
                    type="email"
                    required
                    placeholder="siddharth@example.com"
                    value={attendee.email}
                    onChange={(e) => setAttendee({ ...attendee, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Roll / ID Number</label>
                  <input
                    type="text"
                    placeholder="e.g. 21124018"
                    value={attendee.rollNo}
                    onChange={(e) => setAttendee({ ...attendee, rollNo: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">College / Organization</label>
                <input
                  type="text"
                  value={attendee.institution}
                  onChange={(e) => setAttendee({ ...attendee, institution: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Pass Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Student Pass (Free)', 'VIP / Founder Pass'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setAttendee({ ...attendee, tier })}
                      className={`text-xs py-2 px-2 rounded-xl border text-center transition-all ${
                        attendee.tier === tier
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20 text-sm"
              >
                Confirm & Download Pass
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
