import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Initiatives from './components/Initiatives';
import Events from './components/Events';
import Startups from './components/Startups';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Modals
import JoinModal from './components/modals/JoinModal';
import PitchModal from './components/modals/PitchModal';
import EventModal from './components/modals/EventModal';

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar
        onOpenJoinModal={() => setIsJoinOpen(true)}
        onOpenPitchModal={() => setIsPitchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenPitchModal={() => setIsPitchOpen(true)}
          onOpenJoinModal={() => setIsJoinOpen(true)}
        />
        <Stats />
        <About />
        <Initiatives onOpenPitchModal={() => setIsPitchOpen(true)} />
        <Events onSelectEvent={(event) => setSelectedEvent(event)} />
        <Startups onOpenPitchModal={() => setIsPitchOpen(true)} />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dynamic Modals */}
      <JoinModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />
      <PitchModal
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
      />
      <EventModal
        event={selectedEvent}
        isOpen={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
