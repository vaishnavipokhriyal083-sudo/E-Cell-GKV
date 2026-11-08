export const ECELL_STATS = [
  { label: 'Startups Incubated', value: '35+', subtext: 'In healthcare, agritech, SaaS & edtech' },
  { label: 'Grants & Funding', value: '₹40L+', subtext: 'Facilitated via seed capital & investor pitch' },
  { label: 'Events & Bootcamps', value: '65+', subtext: 'Conducted across national & campus forums' },
  { label: 'Active Innovators', value: '8,000+', subtext: 'Students & alumni connected in community' }
];

export const INITIATIVES = [
  {
    id: 'e-summit',
    title: 'E-Summit GKV',
    badge: 'Flagship Event',
    description: 'The premier annual conclave bringing together visionary founders, venture capitalists, policymakers, and 2,000+ aspiring student entrepreneurs.',
    icon: 'Flame',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/30',
    metrics: '2,500+ Attendees | ₹5L Cash Prize Pool'
  },
  {
    id: 'ideathon',
    title: 'Ideathon & Hack-GKV',
    badge: 'Innovation Sprint',
    description: '36-hour hackathon and ideation marathon aimed at building tech-first prototypes solving Bharat-centric regional and industrial challenges.',
    icon: 'Lightbulb',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/30',
    metrics: '400+ Submissions | 12 Finalist Teams'
  },
  {
    id: 'venture-hatchery',
    title: 'Venture Hatchery (Incubator)',
    badge: 'Incubation Program',
    description: 'Comprehensive 6-month pre-incubation program offering student startups 1-on-1 mentorship, legal compliance, cloud credits, and pilot testing access.',
    icon: 'Rocket',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    metrics: 'Up to ₹5L Seed Support | Lab Infrastructure'
  },
  {
    id: 'founders-cafe',
    title: "Founder's Cafe & Masterclasses",
    badge: 'Community & Learning',
    description: 'Exclusive fireside chats and intimate roundtables with Unicorn executives, YC alumni, and GKV alumni founders sharing real-world warfare stories.',
    icon: 'Coffee',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    metrics: 'Bi-weekly Sessions | Hands-on Workshops'
  }
];

export const EVENTS = [
  {
    id: 'esummit-26',
    title: "E-Summit '26: Igniting Bharat's Next Trillion Dollar Economy",
    category: 'Conclave',
    date: 'March 28 - 29, 2026',
    time: '09:30 AM - 06:30 PM IST',
    venue: 'Convocation Hall & Auditorium, GKV Haridwar',
    status: 'Registration Open',
    isUpcoming: true,
    tag: 'Flagship',
    summary: 'Join 40+ speakers, 50+ startup pitch teams, and angel investors for our two-day grand entrepreneurship fiesta.',
    perks: ['Certificate of Participation', 'Networking Lunch with VCs', 'Access to Startup Expo'],
    slotsLeft: 120
  },
  {
    id: 'pitch-perfect',
    title: 'Pitch Perfect 4.0: National B-Plan Challenge',
    category: 'Competition',
    date: 'April 15, 2026',
    time: '11:00 AM IST',
    venue: 'FET Seminar Hall & Virtual Hybrid',
    status: 'Applications Open',
    isUpcoming: true,
    tag: 'Prize: ₹2,00,000',
    summary: 'Present your early-stage prototype or business model directly to active angel investors and get on-the-spot term-sheet discussions.',
    perks: ['Direct entry to Pre-Incubation', 'Cloud Credits worth $5,000', '1-on-1 VC Feedback'],
    slotsLeft: 24
  },
  {
    id: 'ai-startup-bootcamp',
    title: 'GenAI & Autonomous Agents for Product Builders',
    category: 'Workshop',
    date: 'May 02, 2026',
    time: '02:00 PM - 05:30 PM IST',
    venue: 'Computer Science Lab 3, GKV Campus',
    status: 'Upcoming',
    isUpcoming: true,
    tag: 'Hands-on',
    summary: 'Learn how to architect, build, and monetize AI-native SaaS applications from scratch using modern agentic workflows.',
    perks: ['Open-source starter templates', 'Compute sandbox access', 'Digital Credential'],
    slotsLeft: 60
  },
  {
    id: 'angel-roundtable',
    title: 'GKV Alumni Venture Circle & Investor Mixer',
    category: 'Networking',
    date: 'February 10, 2026',
    time: '04:00 PM IST',
    venue: 'Main Administrative Guest Complex',
    status: 'Completed',
    isUpcoming: false,
    tag: 'Past Success',
    summary: 'Gathered 18 distinguished alumni founders and angel syndicates to review 8 student venture demos.',
    perks: ['3 Startups shortlisted for Term Sheets', 'Alumni Mentorship Network formed'],
    slotsLeft: 0
  }
];

export const STARTUPS = [
  {
    name: 'VedicBio Formulations',
    category: 'Ayur-Tech & Wellness',
    stage: 'Seed Funded (₹15 Lakhs)',
    founder: 'Aman Sharma & Ritika Joshi (FET \'23)',
    description: 'Clinically tested modern herbal formulations engineered through bio-fermentation for clean lifestyle wellness.',
    badge: 'Incubated at GKV',
    metrics: '₹28L Annual Run-Rate | 12,000+ Customers',
    logoText: 'VB'
  },
  {
    name: 'GangaFlow Agrotech',
    category: 'Agritech & IoT',
    stage: 'Govt. Grant Recipient (₹10 Lakhs)',
    founder: 'Shubham Verma (EE \'24)',
    description: 'Precision drip-irrigation sensors powered by solar micro-controllers reducing water consumption by 42% for sugarcane farmers.',
    badge: 'Patent Filed',
    metrics: 'Deployed in 80+ Farms across Uttarakhand',
    logoText: 'GF'
  },
  {
    name: 'CodePulse Engine',
    category: 'Developer Tools / AI',
    stage: 'Pre-Seed Stage',
    founder: 'Priyanshu Tiwari (CSE \'25)',
    description: 'Automated vulnerability scanning and smart contract telemetry platform for Web3 & enterprise cloud setups.',
    badge: 'Winner Ideathon',
    metrics: '1,400+ Github Stars | 350 Beta Devs',
    logoText: 'CP'
  },
  {
    name: 'CampuzMart',
    category: 'Hyperlocal Commerce',
    stage: 'Bootstrapped & Profitable',
    founder: 'Divya Rastogi & Karan Pant (BBA \'24)',
    description: 'Student-to-student peer marketplace for authenticated textbook leasing, electronics, and hostel essentials.',
    badge: 'Active on Campus',
    metrics: '4,500+ Active Student Users',
    logoText: 'CM'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Prof. (Dr.) Sunil Kumar',
    role: 'Faculty Advisor & Head of Incubation',
    department: 'Faculty of Engineering & Technology, GKV',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: 'Guiding university-wide R&D commercialization, MSME incubation grants, and industry tie-ups.',
    type: 'mentor'
  },
  {
    name: 'Aditya Narang',
    role: 'Student President',
    department: 'B.Tech CSE - 4th Year',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
    bio: 'Passionate about deep-tech ecosystems, hackathons, and fostering student founder networks.',
    type: 'core'
  },
  {
    name: 'Ananya Singhal',
    role: 'Vice President & Head of Initiatives',
    department: 'B.Tech ECE - 4th Year',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    bio: 'Lead organizer for E-Summit, orchestrating corporate sponsorships, VCs, and keynote speakers.',
    type: 'core'
  },
  {
    name: 'Harshit Tyagi',
    role: 'Head of Technical Development',
    department: 'B.Tech CSE - 3rd Year',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Architect of internal portal platforms, hackathon management software, and tech workshops.',
    type: 'core'
  },
  {
    name: 'Suhani Rawat',
    role: 'Head of Corporate Relations & PR',
    department: 'MBA - 2nd Year',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Liaison with external angel networks, media agencies, and national student entrepreneurship cells.',
    type: 'core'
  },
  {
    name: 'Vikram Rajput',
    role: 'Head of Operations & Logistics',
    department: 'B.Tech ME - 3rd Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Ensuring seamless on-ground execution, venue production, and delegate hosting.',
    type: 'core'
  }
];

export const TESTIMONIALS = [
  {
    quote: "E-Cell GKV was the spark that converted my raw laboratory project into a venture. From our first pitch deck review to connecting with our seed investor, their mentorship made all the difference.",
    author: "Aman Sharma",
    role: "Founder & CEO, VedicBio Formulations",
    cohort: "Incubated 2023"
  },
  {
    quote: "The energy and caliber of startups at E-Summit GKV rivals premier national institutes. The dedication to solving real problems in tier-2 and agricultural ecosystems is truly commendable.",
    author: "Rajeev Goel",
    role: "Angel Investor & Partner at NorthGate Capital",
    cohort: "Keynote Speaker & Judge 2025"
  },
  {
    quote: "Joining E-Cell as a freshman gave me exposure to product management, venture capital, and leadership that no textbook could ever provide.",
    author: "Pooja Bisht",
    role: "Student Coordinator (B.Tech EE)",
    cohort: "Class of 2025"
  }
];

export const FAQS = [
  {
    question: "Who can join E-Cell GKV?",
    answer: "Any student enrolled in Gurukula Kangri (Deemed to be University)—across Engineering, Sciences, Management, Humanities, or Vedic studies—is welcome to apply. Prior startup experience is not required; enthusiasm to learn and execute is!"
  },
  {
    question: "How do I pitch my startup idea to get incubated?",
    answer: "You can click on the 'Pitch Your Idea' button on this portal anytime. Our incubation committee conducts monthly evaluation cohorts where selected ideas receive seed grant guidance, co-working space, and mentorship."
  },
  {
    question: "Is there funding support for student entrepreneurs?",
    answer: "Yes. E-Cell GKV assists in preparing applications for government schemes like Startup India Seed Fund, MSME Idea Hackathon, and connects viable ventures with alumni angel syndicates."
  },
  {
    question: "How can I participate in E-Summit '26?",
    answer: "You can register directly through this portal under the Events section. Early bird passes include access to keynotes, workshops, networking dinners, and competition entries."
  }
];
