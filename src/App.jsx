import React, { useState, useEffect } from 'react'
import {
  Calendar,
  Video,
  Award,
  BookOpen,
  CheckCircle2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Star,
  Globe,
  Users,
  MessageSquare,
  Clock,
  Menu,
  X,
  Play,
  ChevronRight,
  Target,
  Sparkles
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ImpactSection />
        <CurriculumSection />
        <BonusSection />
        <TrainerSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}

// --- Navigation ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Philosophy', href: '#problem' },
    { name: 'Program', href: '#curriculum' },
    { name: 'Meet Isha', href: '#trainer' }
  ]

  return (
    <nav className={`absolute top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-3xl px-8 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-2xl' : 'bg-white/50 border-transparent shadow-none'}`}>
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-1 transition-transform duration-300 group-hover:scale-110">
              <BookOpen className="text-brand-dark w-7 h-7" />
            </div>
            <span className="text-2xl font-display font-black text-brand-dark tracking-tight">Speakifly</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-slate-500 hover:text-brand-primary transition-colors tracking-wide uppercase">
                {link.name}
              </a>
            ))}
            <a href="https://rzp.io/rzp/osDrPHe" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-7 py-2.5 rounded-2xl font-bold text-sm shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">
              Claim Your Seat
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="text-brand-primary w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2">
                  <BookOpen className="text-brand-dark w-6 h-6" />
                  <span className="text-xl font-display font-black text-brand-dark">Speakifly</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-brand-primary" /></button>
              </div>
              <div className="flex flex-col gap-10">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-display font-bold text-brand-dark">
                    {link.name}
                  </a>
                ))}
                <a href="https://rzp.io/rzp/osDrPHe" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-brand-primary text-white p-6 rounded-3xl text-center text-xl font-bold">
                  Register Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// --- Hero Section ---
const HeroSection = () => (
  <section className="relative pt-48 pb-32 overflow-hidden bg-white">
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full -z-10"></div>

    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-brand-primary/5 border border-brand-primary/10 px-5 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-primary">
              Live 2-Day Communication Masterclass
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 font-display font-black tracking-tight text-brand-dark">
            Speak Confidently <br />
            <span className="text-gradient">Without Overthinking</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            A practical 2-day live English & communication workshop designed for students
            and working professionals who want real confidence — not grammar confusion.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-12">
            <a href="https://rzp.io/rzp/osDrPHe" target="_blank" rel="noopener noreferrer" className="group bg-brand-primary text-white px-10 py-5 rounded-2xl shadow-2xl shadow-brand-primary/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 font-display font-bold text-xl">
                Reserve My Seat for ₹99
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 italic font-semibold text-slate-400 text-sm">
              <ShieldCheck className="text-emerald-500" size={20} />
              Limited Seats for Live Interaction
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
            <Feature icon={<Calendar size={18} />} text="2 Days Intensive" />
            <Feature icon={<Video size={18} />} text="Live on Zoom" />
            <Feature icon={<Award size={18} />} text="Certificate Included" />
            <Feature icon={<BookOpen size={18} />} text="Free Practice Material" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src="/hero-laptop.png"
            alt="Live Webinar"
            className="w-full object-contain"
          />
        </motion.div>

      </div>
    </div>
  </section>
)

// --- Problem Section ---
const ProblemSection = () => (
  <section id="problem" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="max-w-3xl mb-20">
        <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 block">
          Do You Relate To This?
        </span>

        <h2 className="text-4xl md:text-6xl mb-8 font-display tracking-tight">
          You Understand English… <br />
          <span className="text-brand-primary">But You Freeze While Speaking.</span>
        </h2>

        <p className="text-xl text-slate-500 leading-relaxed font-medium">
          You're not bad at English. You were just never trained in structured speaking.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "You translate sentences in your mind before speaking",
          "You fear making grammar mistakes",
          "You hesitate during introductions",
          "You avoid speaking in meetings or interviews",
          "You don't know how to sound polite & professional",
          "You lose confidence in public situations"
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <Target className="text-brand-primary mt-1" size={20} />
              <p className="text-slate-600 font-medium">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
)

// --- Bonus Section ---
const BonusSection = () => (
  <section className="py-32 bg-white">
    <div className="max-w-5xl mx-auto px-6 text-center">

      <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 block">
        Bonus Materials
      </span>

      <h2 className="text-4xl md:text-6xl font-display font-black mb-12">
        You Also Get
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          "Free Speaking Practice PDF",
          "30-Day Basic Practice Plan",
          "Certificate of Participation",
          "1-on-1 Strategic Session"
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group"
          >
            <CheckCircle2 className="text-brand-primary mb-4 mx-auto group-hover:scale-110 transition-transform" size={28} />
            <p className="font-bold text-slate-700">{item}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-2xl font-display font-black text-brand-primary">
        Total Value ₹1999+ — Today Only ₹99
      </div>

    </div>
  </section>
)

// --- Impact Section ---
const ImpactSection = () => (
  <section className="py-32 bg-brand-primary text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-8 text-white">Why 2 Days <br /> is Enough?</h2>
          <p className="text-xl text-brand-light font-medium mb-12 opacity-80 leading-relaxed">We don't teach grammar rules you can find on YouTube. We focus on the <span className="text-white underline decoration-brand-secondary underline-offset-8">psychology of speech</span> and professional frameworks.</p>

          <div className="space-y-6">
            <ImpactPoint text="90% Practical Implementation" />
            <ImpactPoint text="Instant Feedback Loops" />
            <ImpactPoint text="Proven Corporate Frameworks" />
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-8">
          <StatBox num="1k+" label="Career Transformations" />
          <StatBox num="100+" label="Live Sessions Done" />
          <StatBox num="4.9" label="Avg User Rating" />
          <StatBox num="100%" label="Action Focused" />
        </div>
      </div>
    </div>
  </section>
)

const ImpactPoint = ({ text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-300">
      <CheckCircle2 size={18} className="text-brand-secondary group-hover:text-white" />
    </div>
    <span className="text-lg font-bold tracking-wide">{text}</span>
  </div>
)

const StatBox = ({ num, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 rounded-[40px] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
  >
    <div className="text-4xl md:text-5xl font-display font-black text-brand-light mb-2">{num}</div>
    <div className="text-[10px] uppercase font-black tracking-widest opacity-60 italic">{label}</div>
  </motion.div>
)

// --- Curriculum Section ---
const CurriculumSection = () => (
  <section id="curriculum" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 block">The Roadmap</span>
        <h2 className="text-4xl md:text-6xl font-display items-center gap-4 justify-center flex flex-col md:flex-row">
          The 2-Day <span className="bg-brand-mint text-brand-primary px-6 py-2 rounded-3xl rotate-2">Blueprint</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <DayCard
          day="01"
          title="Speaking Confidence & Professional Manners"
          desc="Understanding Speaking Psychology & Removing Hesitation"
          items={[
            "Professional Self-Introduction Framework",
            "Polite Communication & Corporate Speaking Manners",
            "Structured Speaking & Eliminating Filler Words"
          ]}
          icon={<Users className="w-8 h-8" />}
          active
        />
        <DayCard
          day="02"
          title="English Basics & Clarity"
          desc="Simple Sentence Structure & Speaking Formula"
          items={[
            "Common Grammar Mistakes & Corrections",
            "Essential Tense Clarity for Daily Communication",
            "Thinking in English & Vocabulary Improvement"
          ]}
          icon={<Sparkles className="w-8 h-8" />}
        />
      </div>
    </div>
  </section>
)

const DayCard = ({ day, title, desc, items, active, icon }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`relative p-12 rounded-[48px] border transition-all duration-500 overflow-hidden ${active ? 'bg-white shadow-3xl border-slate-100' : 'bg-slate-50/50 border-slate-100'}`}
  >
    <div className="flex justify-between items-start mb-10">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">Module {day}</span>
        <h3 className="text-3xl font-display font-black text-brand-dark leading-tight">{title}</h3>
      </div>
      <div className={`p-4 rounded-3xl ${active ? 'bg-brand-primary text-white' : 'bg-slate-200 text-slate-400'}`}>
        {icon}
      </div>
    </div>
    <p className="text-slate-500 mb-10 font-medium leading-relaxed">{desc}</p>
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 group">
          <div className="mt-1 bg-brand-primary/5 p-1 rounded-full text-brand-primary transition-transform group-hover:scale-110"><CheckCircle2 size={16} /></div>
          <span className="font-bold text-slate-700 tracking-tight leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

// --- Trainer Section ---
const TrainerSection = () => (
  <section id="trainer" className="py-32 bg-slate-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white rounded-[64px] shadow-3xl border border-slate-100 p-12 lg:p-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
          <Star size={400} />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Modern Graphic Feature instead of Image */}
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-brand-primary/5 rounded-[48px] -rotate-6 transition-transform duration-700 group-hover:rotate-0"></div>
                <div className="absolute inset-0 bg-brand-secondary/5 rounded-[48px] rotate-3 transition-transform duration-700 group-hover:rotate-0"></div>

                {/* Main Content Card */}
                <div className="absolute inset-0 bg-white border border-slate-100 shadow-3xl rounded-[48px] p-10 flex flex-col items-center justify-center text-center overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary"></div>

                  <div className="mb-8 relative">
                    <div className="w-28 h-28 bg-brand-primary/10 rounded-full flex items-center justify-center relative z-10">
                      <Users className="text-brand-primary w-14 h-14" />
                    </div>
                    <div className="absolute -inset-4 bg-brand-primary/5 blur-2xl rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-display font-black text-brand-dark mb-1">Expert Instruction</h3>
                  <div className="text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-10">Communication Mastery</div>

                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-5 bg-slate-50/50 rounded-3xl border border-slate-100 flex flex-col items-center gap-1 group/item hover:bg-white hover:shadow-xl transition-all">
                      <div className="text-3xl font-display font-bold text-brand-dark">5+</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Years Exp</div>
                    </div>
                    <div className="p-5 bg-slate-50/50 rounded-3xl border border-slate-100 flex flex-col items-center gap-1 group/item hover:bg-white hover:shadow-xl transition-all">
                      <div className="text-3xl font-display font-bold text-brand-dark">1k+</div>
                      <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Students</div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3 py-3 px-6 bg-emerald-50 rounded-full border border-emerald-100">
                    <ShieldCheck className="text-emerald-500 w-5 h-5" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">ISO Certified Training</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 glass p-8 rounded-3xl shadow-2xl border border-white/50 z-20"
                >
                  <Award className="text-brand-primary w-10 h-10" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-brand-dark text-white py-4 px-8 rounded-2xl shadow-2xl font-display font-black text-xs tracking-widest uppercase z-20"
                >
                  Live Coaching
                </motion.div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-6 block">Visionary Instructor</span>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-10 text-brand-dark leading-none">Meet Isha Shah</h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Hi, I’m Isha Shah. I specialize in helping students and working professionals build strong English communication skills and real speaking confidence through structured, practical training.
              <br /><br />
              My approach focuses on clarity, confidence, and real-world application — not complicated grammar theory. This webinar is designed to be interactive, implementation-driven, and results-oriented, ensuring that participants leave with measurable improvement in just two days.
            </p>
            <div className="flex items-center gap-6">
              <SocialIcon icon={<Globe size={20} />} href="https://speakifly.vercel.app/" />
              <div className="h-px w-24 bg-slate-200"></div>
              <span className="text-sm font-black uppercase tracking-widest text-slate-400">Join the movement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const SocialIcon = ({ icon, href }) => (
  <a
    href={href || "#"}
    target={href ? "_blank" : undefined}
    rel={href ? "noopener noreferrer" : undefined}
    className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all cursor-pointer"
  >
    {icon}
  </a>
)

// --- Testimonial ---
const TestimonialSection = () => (
  <section className="py-32 bg-white flex flex-col items-center">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="inline-flex gap-1 mb-10">
        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="#214177" stroke="none" />)}
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-black leading-tight max-w-4xl italic text-brand-dark mb-12">"I was always terrified of corporate presentations, even with the right data. Isha's 2-day roadmap gave me the exact tools to command the room. A massive ROI for just ₹99."</h2>
      <div className="text-lg font-bold text-slate-500">Rahul Verma <span className="mx-4 text-slate-200">|</span> Senior Manager @ TCS</div>
    </div>
  </section>
)

// --- Final CTA ---
const FinalCTASection = () => (
  <section id="register" className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative group rounded-[64px] bg-brand-primary p-12 lg:p-24 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="flex flex-col items-center text-center relative z-10">
          <span className="text-brand-light font-black uppercase tracking-[0.5em] text-[10px] mb-8">One-Time Registration Opportunity</span>
          <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-10 leading-tight">Secure Your Spot. <br /> Change Your Voice.</h2>

          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/10 backdrop-blur-md rounded-[40px] p-10 lg:p-16 border border-white/20 mb-12 max-w-4xl w-full">
            <div className="flex-1 text-center md:text-left">
              <div className="text-7xl font-display font-black text-brand-light mb-2">₹99</div>
              <div className="text-sm font-bold text-white opacity-60 uppercase tracking-widest leading-none">Inc. of all materials</div>
            </div>
            <div className="w-px h-24 bg-white/20 hidden md:block"></div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl text-white font-medium mb-4 leading-snug">Limited to 20 students to ensure quality live interaction.</p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Clock size={16} className="text-brand-secondary" />
                <span className="text-xs font-black uppercase tracking-widest text-brand-secondary">Starts This Weekend</span>
              </div>
            </div>
          </div>

          <a href="https://rzp.io/rzp/osDrPHe" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-primary px-12 py-6 rounded-3xl text-2xl font-black shadow-3xl hover:bg-brand-mint hover:scale-105 transition-all duration-300 inline-block">
            REGISTER NOW FOR ₹99
          </a>

          <p className="mt-6 text-white/70 text-sm font-medium">
            Stop hesitating. Start speaking with confidence.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-10">
            <TrustPoint text="Verified Certificate" />
            <TrustPoint text="Lifetime Resources" />
            <TrustPoint text="Secure Checkout" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const TrustPoint = ({ text }) => (
  <div className="flex items-center gap-3 opacity-60">
    <CheckCircle2 size={18} className="text-white" />
    <span className="text-xs font-black uppercase tracking-[0.2em] text-white">{text}</span>
  </div>
)

// --- Footer ---
const Footer = () => (
  <footer className="py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="text-brand-dark w-6 h-6" />
            <span className="text-2xl font-display font-black text-brand-dark">Speakifly</span>
          </div>
          <p className="text-slate-400 font-medium leading-relaxed mb-10">Empowering Indian professionals with the linguistic confidence to command global opportunities.</p>
          <div className="flex gap-4">
            <SocialIcon icon={<Globe size={20} />} href="https://speakifly.vercel.app/" />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20 flex-1">
          <FooterGroup title="Platform" links={['Home', 'Program', 'Trainer', 'Blog']} />
          <FooterGroup title="Support" links={['Privacy', 'Refunds', 'Contact', 'FAQ']} />
          <FooterGroup title="Impact" num="1k+" label="Career Switches Facilitated since 2021." />
        </div>
      </div>

      <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">© 2026 Isha Shah Training. All Rights Reserved.</span>
        <div className="flex items-center gap-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">ISO 9001 Certified</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Safe Payment Gateways</span>
        </div>
      </div>
    </div>
  </footer>
)

const FooterGroup = ({ title, links, num, label }) => (
  <div className="space-y-8">
    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary">{title}</h4>
    {links ? (
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link}><a href="#" className="text-sm font-bold text-slate-400 hover:text-brand-primary transition-colors">{link}</a></li>
        ))}
      </ul>
    ) : (
      <div>
        <div className="text-4xl font-display font-black text-brand-primary mb-2">{num}</div>
        <p className="text-xs font-bold text-slate-400 leading-relaxed">{label}</p>
      </div>
    )}
  </div>
)

// --- Shared Utility Components ---
const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="text-brand-primary">{icon}</div>
    <span className="text-xs font-black uppercase tracking-widest text-brand-dark">{text}</span>
  </div>
)

export default App
