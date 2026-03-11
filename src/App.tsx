import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Gift, 
  ChevronRight, 
  Star, 
  Users, 
  ShieldCheck, 
  Timer,
  Gamepad2,
  Trophy,
  MousePointerClick,
  Rocket
} from 'lucide-react';

const REDIRECT_URL = "https://00z777.com/?dl=6qlti9";
const INVITATION_CODE = "407485089";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  // Global Click Redirect
  useEffect(() => {
    const handleGlobalClick = () => {
      window.open(REDIRECT_URL, '_blank', 'noopener,noreferrer');
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          return { minutes: 15, seconds: 0 }; // Reset for urgency loop
        }
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <span className="text-black font-black text-xl">Z</span>
            </div>
            <span className="text-2xl font-black italic tracking-tighter">
              <span className="text-white">777</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest">
              <Timer className="w-4 h-4" />
              <span>Bonus Ends In: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <button className="bg-yellow-500 text-black font-black px-5 py-2 rounded-full text-sm uppercase tracking-wider hover:scale-105 transition-transform active:scale-95">
              Play Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Limited Bonus Today</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.85] mb-8">
              Z777 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                PLAY & WIN
              </span> <br />
              BIG ONLINE
            </h1>

            <p className="text-lg md:text-xl text-white/40 font-medium mb-12 max-w-xl mx-auto leading-relaxed">
              Experience the world's most exciting browser-based game. Instant play, massive rewards, and 100% secure.
            </p>

            <div className="relative inline-block group mb-6">
              <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-full group-hover:bg-yellow-500/40 transition-all duration-500" />
              <button className="relative bg-yellow-500 text-black text-2xl font-black px-12 py-6 rounded-2xl shadow-[0_10px_40px_rgba(234,179,8,0.3)] hover:scale-105 transition-all active:scale-95 flex items-center gap-4 mx-auto">
                PLAY NOW <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-xs mx-auto mb-12">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Invitation Code</p>
              <p className="text-2xl font-black text-yellow-500 tracking-widest">{INVITATION_CODE}</p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Secure Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">500K+ Players</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Instant Payouts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bonus Banner */}
      <section className="bg-yellow-500 py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-black font-black text-sm uppercase tracking-widest">Welcome Bonus Rs 1500</span>
              <Star className="w-4 h-4 text-black fill-black" />
              <span className="text-black font-black text-sm uppercase tracking-widest">Spin & Win Big</span>
              <Star className="w-4 h-4 text-black fill-black" />
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4">HOW IT WORKS</h2>
            <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Start your winning journey in seconds</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CLICK', desc: 'Tap any button to start', icon: MousePointerClick, color: 'from-blue-500/20' },
              { title: 'PLAY', desc: 'Choose your favorite game', icon: Gamepad2, color: 'from-yellow-500/20' },
              { title: 'WIN', desc: 'Collect your massive rewards', icon: Trophy, color: 'from-red-500/20' },
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${step.color} to-transparent border border-white/5 p-10 rounded-[40px] text-center relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-6 text-8xl font-black text-white/5 italic">0{i+1}</div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black italic mb-2 tracking-tighter">{step.title}</h3>
                <p className="text-white/40 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 px-4 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8">
              WHY CHOOSE <br />
              <span className="text-yellow-500">Z777 GAMING?</span>
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Fast Gameplay', desc: 'Zero lag, high-performance browser engine.', icon: Rocket },
                { title: 'Secure Platform', desc: 'Advanced encryption for your safety.', icon: ShieldCheck },
                { title: 'Instant Play', desc: 'No downloads required. Play anywhere.', icon: Zap },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-yellow-500/20">
                    <item.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black italic tracking-tight mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-yellow-500/10 blur-3xl rounded-full" />
            <div className="relative bg-zinc-900 border border-white/10 rounded-[40px] p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Recent Winner</p>
                    <p className="font-black italic">Player_882</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Won</p>
                  <p className="text-2xl font-black italic text-yellow-500 tracking-tighter">Rs 45,000</p>
                </div>
              </div>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                      className="h-full w-1/3 bg-yellow-500/40"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 text-center border-t border-white/5 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-sm">Z</span>
            </div>
            <span className="text-xl font-black italic tracking-tighter">777</span>
          </div>
          <p className="text-white/20 text-xs font-bold uppercase tracking-[0.4em] mb-4">
            © 2026 Z777 ONLINE GAMING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center gap-6 text-[10px] font-black text-white/40 uppercase tracking-widest">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Responsible Gaming</span>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-yellow-500 text-black font-black py-5 rounded-2xl text-xl uppercase tracking-widest shadow-[0_-10px_40px_rgba(234,179,8,0.2)] hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-3">
            PLAY NOW <Zap className="w-6 h-6 fill-black" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
