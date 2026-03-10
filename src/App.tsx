import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Gamepad2, 
  Zap, 
  Gift, 
  ChevronRight, 
  Star, 
  Users, 
  Headphones, 
  LayoutGrid,
  TrendingUp,
  Wallet,
  Menu,
  X,
  Plane,
  Coins,
  Crown
} from 'lucide-react';

const CATEGORIES = [
  { id: 'hot', name: 'Hot', icon: Zap },
  { id: 'blockchain', name: 'Blockchain', icon: LayoutGrid },
  { id: 'slot', name: 'Slot', icon: Coins },
  { id: 'cards', name: 'Cards', icon: Gamepad2 },
  { id: 'fishing', name: 'Fishing', icon: Trophy },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleGlobalClick = (e: React.MouseEvent) => {
    // If the click is already on an <a> tag, let it handle itself
    if ((e.target as HTMLElement).closest('a')) return;
    
    // Otherwise, open the link
    window.open("https://00z777.com/?dl=6qlti9", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      onClick={handleGlobalClick}
      className="min-h-screen font-sans selection:bg-yellow-500 selection:text-black bg-black text-white cursor-pointer"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <a 
              href="https://00z777.com/?dl=6qlti9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-black tracking-tighter italic">
                <span className="text-red-600">00Z</span>
                <span className="text-yellow-500">777</span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              <img src="https://flagcdn.com/w20/pk.png" alt="PK" className="w-5 h-auto rounded-sm" />
              <span className="text-sm font-mono text-yellow-500">0.04</span>
              <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            </div>
            <a 
              href="https://00z777.com/?dl=6qlti9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-sm transition-all transform active:scale-95 flex items-center gap-2"
            >
              Deposit
              <span className="bg-red-600 text-white text-[10px] px-1 rounded font-black">+5%</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-2 rounded-full mb-6">
                <Gift className="w-4 h-4 text-red-600" />
                <span className="text-red-600 font-bold text-sm tracking-wide uppercase">Limited Time Offer</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-[0.9] mb-6">
                SIGN UP & GET <br />
                <span className="text-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">Rs 1500</span> <br />
                REWARD!
              </h1>
              
              <p className="text-xl text-white/60 mb-8 max-w-md leading-relaxed">
                Welcome to the ultimate online entertainment experience. Speed, slots, and exclusive rewards await.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://00z777.com/?dl=6qlti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-black px-8 py-4 rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(234,179,8,0.2)] text-center"
                >
                  CLAIM REWARD NOW
                </a>
                <a 
                  href="https://00z777.com/?dl=6qlti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xl font-black px-8 py-4 rounded-2xl transition-all text-center"
                >
                  PLAY GAME
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-black"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm text-white/40 font-medium">Trusted by 500k+ Players</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              {/* Gaming Background Glows */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-yellow-500/20 to-red-600/20 blur-3xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
              
              <div className="relative z-10 aspect-square rounded-[40px] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://picsum.photos/seed/gaming/1000/1000" 
                  alt="00Z777 Gaming" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Floating Elements - LARGER */}
                <motion.div 
                  animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 bg-black/80 backdrop-blur-xl p-8 rounded-[32px] border-2 border-red-600/30 shadow-[0_0_40px_rgba(220,38,38,0.4)] z-20"
                >
                  <Plane className="w-14 h-14 text-red-600 mb-3 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <p className="text-sm font-black text-white/40 uppercase tracking-[0.2em] mb-1">Aviator</p>
                  <p className="text-4xl font-black text-yellow-500 tracking-tighter italic">1,014.54x</p>
                  <div className="mt-4 h-1 w-full bg-red-600/20 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="h-full w-1/2 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)]"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-xl p-8 rounded-[32px] border-2 border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.4)] z-20"
                >
                  <Crown className="w-14 h-14 text-yellow-500 mb-3 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
                  <p className="text-sm font-black text-white/40 uppercase tracking-[0.2em] mb-1">Jackpot</p>
                  <p className="text-4xl font-black text-red-600 tracking-tighter italic">Rs 99,999</p>
                  <div className="mt-4 flex gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="h-1.5 w-full bg-yellow-500/20 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          className="h-full w-full bg-yellow-500"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Decorative Gaming Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />

              {/* Decorative Rings */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-2 border-yellow-500/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-red-600/10 rounded-full animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white/5 border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <a 
                key={cat.id}
                href="https://00z777.com/?dl=6qlti9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 px-6 py-3 rounded-2xl transition-all whitespace-nowrap group"
              >
                <cat.icon className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm uppercase tracking-wider">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Lucky Wheel Promo */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5 -skew-y-3 transform origin-left" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-black italic tracking-tighter mb-6 leading-tight">
                  SPIN THE <br />
                  <span className="text-yellow-500">LUCKY WHEEL</span>
                </h2>
                <p className="text-white/60 text-lg mb-8">
                  Every new member gets 2 free spins. Win up to Rs 999 bonus instantly!
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Daily reset for all players',
                    'Instant claim after win',
                    'No deposit required for first spin'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                      <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://00z777.com/?dl=6qlti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-500 text-white font-black px-10 py-5 rounded-2xl text-xl transition-all transform hover:scale-105 active:scale-95 shadow-2xl text-center"
                >
                  TRY YOUR LUCK
                </a>
              </div>
              <div className="relative flex justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-64 h-64 md:w-96 md:h-96"
                >
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-500/20 shadow-[0_0_100px_rgba(234,179,8,0.1)]" />
                  <div className="absolute inset-4 rounded-full border-4 border-red-600/20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-12 bg-yellow-500 rounded-b-full z-20 shadow-xl" />
                  
                  {/* Wheel Segments */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div 
                      key={i}
                      className="absolute inset-0 flex justify-center pt-8"
                      style={{ transform: `rotate(${deg}deg)` }}
                    >
                      <div className="text-xs font-black text-yellow-500/40">Rs {200 + i * 100}</div>
                    </div>
                  ))}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href="https://00z777.com/?dl=6qlti9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 bg-black rounded-full border-4 border-yellow-500 flex items-center justify-center shadow-2xl z-30 hover:scale-110 transition-transform"
                  >
                    <span className="text-yellow-500 font-black text-xl">SPIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Players', value: '500K+', icon: Users },
              { label: 'Total Games', value: '2,500+', icon: Gamepad2 },
              { label: 'Daily Payouts', value: 'Rs 10M+', icon: Wallet },
              { label: 'Support', value: '24/7', icon: Headphones },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-4 border border-white/10">
                  <stat.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="text-3xl font-black italic tracking-tighter mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <span className="text-4xl font-black tracking-tighter italic mb-6 block">
                <span className="text-red-600">00Z</span>
                <span className="text-yellow-500">777</span>
              </span>
              <p className="text-white/40 max-w-sm leading-relaxed mb-8">
                The world's leading online gaming platform. Experience the thrill of slots, casino games, and sports betting with the fastest payouts in the industry.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'telegram'].map(social => (
                  <a 
                    key={social} 
                    href="https://00z777.com/?dl=6qlti9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all"
                  >
                    <span className="sr-only">{social}</span>
                    <TrendingUp className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm font-bold text-white/40">
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Terms of Service</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Responsible Gaming</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-white/40">
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Help Center</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Live Chat</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
                <li><a href="https://00z777.com/?dl=6qlti9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
            © 2026 00Z777 GAMING. ALL RIGHTS RESERVED. v1.1.62
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          {[
            { label: 'Home', icon: Zap, active: true },
            { label: 'Offers', icon: Gift },
            { label: 'Invite', icon: Users },
            { label: 'Support', icon: Headphones },
            { label: 'Profile', icon: Star },
          ].map((item, i) => (
            <a 
              key={i} 
              href="https://00z777.com/?dl=6qlti9"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-1 ${item.active ? 'text-yellow-500' : 'text-white/40'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Sidebar Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-80 z-[70] bg-zinc-950 border-r border-white/10 p-6"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-2xl font-black tracking-tighter italic">
                  <span className="text-red-600">00Z</span>
                  <span className="text-yellow-500">777</span>
                </span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-white/5 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-2">
                {[
                  { label: 'Dashboard', icon: LayoutGrid },
                  { label: 'My Wallet', icon: Wallet },
                  { label: 'Game History', icon: Gamepad2 },
                  { label: 'Promotions', icon: Gift },
                  { label: 'VIP Club', icon: Crown },
                  { label: 'Settings', icon: Zap },
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href="https://00z777.com/?dl=6qlti9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl transition-all group"
                  >
                    <item.icon className="w-5 h-5 text-white/40 group-hover:text-yellow-500 transition-colors" />
                    <span className="font-bold text-sm uppercase tracking-widest">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <a 
                  href="https://00z777.com/?dl=6qlti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white font-black py-4 rounded-2xl uppercase tracking-widest text-sm shadow-xl text-center"
                >
                  Logout
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
