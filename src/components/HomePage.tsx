import { Gamepad2, TrendingUp, Users, MessageSquare, Star, Mic, Target, Rocket } from 'lucide-react';

interface HomePageProps {
  onJoinClick: () => void;
}

export default function HomePage({ onJoinClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full bg-black/95 backdrop-blur-sm z-50 border-b-4 border-[#a300c5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <div className="text-2xl sm:text-3xl font-black text-[#ff3131] tracking-wider uppercase leading-none mb-.5">
                W.F.P.
              </div>
              <div className="text-xs font-extrabold text-white uppercase tracking-wide leading-tight">
                PODCAST
              </div>
              <div className="text-xs font-extrabold text-white uppercase tracking-wide leading-tight">
                INDIE GAME SHOWCASE
              </div>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg shadow-[#a300c5]/50"
          >
            JOIN NOW
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a300c5]/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tight" style={{lineHeight: '1.2'}}>
              <span className="text-[#ffed00]">Make Your Indie Game</span>
              <br />
              <span className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] bg-clip-text text-transparent">Go Viral on Steam</span>
            </h1>
          </div>

          <div className="bg-[#ff3131]/10 border-4 border-[#ff3131] rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <p className="text-lg sm:text-xl leading-relaxed text-gray-200 mb-6">
              Spent years on your game only to launch to crickets? You're not alone – it's <span className="text-[#ff3131] font-bold italic">"depressing"</span> when <span className="text-[#ff3131] font-bold italic">"no one cares about my game"</span> after all that work.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
              That's why <span className="text-[#ffed00] font-bold">Make Viral Games</span> exists: to give indie devs a <span className="text-[#ff39e5] font-bold">step-by-step viral game formula</span>, a private community of serious developers, and mentorship from veteran game makers so you can finally get players excited about your game.
            </p>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-4">
              <button
                onClick={onJoinClick}
                className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black text-lg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-2xl shadow-[#a300c5]/50"
              >
                <span className="flex items-center gap-3 justify-center">
                  <Gamepad2 className="w-5 h-5" />
                  Join the W.F.P. Mastermind – $19
                </span>
              </button>
              <button className="bg-[#a300c5] text-white text-lg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all border-2 border-[#ff39e5]">
                <span className="flex items-center gap-3 justify-center">
                  <Mic className="w-5 h-5" />
                  Apply for Podcast – Free Access
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#a300c5]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-12 text-[#ffed00] uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            Why Great Indie Games Go Unnoticed
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black/50 border-2 border-[#ff3131] rounded-xl p-8 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-200 mb-4">
                You pour your heart into a game and hit "Release," only to face <span className="text-[#ff3131] font-bold italic">"the inevitable stab-through-the-heart feeling of disappointment as you watch the hours tick by and the user count remains static."</span>
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                One dev said: <span className="text-[#ffed00] font-bold italic">"I did a demo and sent 1,108 keys to streamers… and I only got 8 sales."</span>
              </p>
            </div>

            <div className="bg-black/50 border-2 border-[#ff39e5] rounded-xl p-8 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-200 mb-4">
                <span className="text-[#ff39e5] font-bold italic">"Holy crap, is it hard to get interest"</span> as an unknown indie. You might post on every forum and still have <span className="text-[#ff3131] font-bold italic">"literally no-one join the Discord"</span> for your game.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Marketing feels like a second job – and you didn't sign up to be a marketer.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] rounded-2xl p-1">
            <div className="bg-black rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#ffed00]">The Solution: A Mastermind for Viral Game Success</h3>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#ffed00] shadow-2xl shadow-[#a300c5]/50">
                    <img src="/WAITING FOR PLAYERS1.png" alt="yOKzONa - Host of Waiting For Players Podcast" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed text-gray-200 mb-4">
                    Introducing <span className="text-[#ffed00] font-bold">Make Viral Games</span>, the mastermind group designed to solve exactly these problems. <span className="text-[#ff39e5] font-bold">yOKzONa</span> – host of the Waiting For Players podcast, with 20-years as a business exec turned full-time indie dev.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-200">
                    <span className="text-white font-bold italic">"I know how tough it can be to get eyes on your work, especially when you're doing it all yourself. I'm also an indie dev, so I get it—marketing and attention is difficult, I'm here to help you with that."</span>
                  </p>
                  <p className="text-[#ffed00] font-bold mt-3">– yOKzONa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-16 text-white uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            <span className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] bg-clip-text text-transparent">3 Big Benefits</span>
            <br />
            <span className="text-[#ffed00]">of Joining</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#a300c5]/30 to-transparent border-2 border-[#a300c5] rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#ffed00] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffed00]">Step-by-Step Viral Game Formula</h3>
              <p className="text-gray-200 leading-relaxed">
                Get a clear roadmap to make your game shareable and buzz-worthy. This isn't vague advice – it's a detailed formula covering everything from crafting a hook that grabs players in seconds, to leveraging Steam algorithms and social media.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#ff3131]/30 to-transparent border-2 border-[#ff3131] rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-[#ff3131] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffed00]">Private Community of Indie Devs</h3>
              <p className="text-gray-200 leading-relaxed">
                Join an exclusive group of serious, like-minded game developers who are all pushing for virality. Share wins, vent frustrations, and swap tactics that actually work. You'll never feel alone in dev hell again.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#ff39e5]/30 to-transparent border-2 border-[#ff39e5] rounded-xl p-8 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffed00]">
                  <img src="/WAITING FOR PLAYERS1.png" alt="yOKzONa" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-[#ffde59] to-[#ff39e5] rounded-full flex items-center justify-center">
                  <Mic className="w-6 h-6 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffed00]">Mentorship & Exposure with yOKzONa</h3>
              <p className="text-gray-200 leading-relaxed">
                Accelerate your learning with direct access to yOKzONa. As host of Waiting For Players Podcast (featuring 50+ indie devs), he can offer exposure opportunities most devs only dream of. It's like having an industry insider in your corner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-[#a300c5]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-[#ffed00] uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            Social Proof & Credibility
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#a300c5] to-[#ff39e5] rounded-2xl p-1 mb-8">
              <div className="bg-black rounded-xl p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ffed00] shadow-2xl shadow-[#a300c5]/50">
                      <img src="/WAITING FOR PLAYERS1.png" alt="yOKzONa - Podcast Host" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                      <Mic className="w-8 h-8 text-[#ffed00]" />
                      <h3 className="text-2xl font-bold text-[#ffed00]">Waiting For Players Podcast</h3>
                    </div>
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                      The Waiting For Players Podcast has already highlighted <span className="text-[#ff39e5] font-bold">50+ indie games and their creators</span> – devs sharing how they built cult followings from scratch.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      This mastermind is the next level of that community. It's not theory; it's built on real success stories and lessons learned from the field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/70 border-2 border-[#ffed00] rounded-xl p-6">
                <Rocket className="w-8 h-8 text-[#ffed00] mb-3" />
                <p className="text-gray-200 leading-relaxed">
                  Early members are already reporting small wins that lead to big results – from <span className="text-[#ffed00] font-bold">doubling their Steam wishlist count in a month</span>, to landing their first 100 beta sign-ups.
                </p>
              </div>

              <div className="bg-black/70 border-2 border-[#ff39e5] rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-[#ff39e5] mb-3" />
                <p className="text-gray-200 leading-relaxed">
                  You'll be joining a growing circle of indie devs who <span className="text-[#ff39e5] font-bold">refuse to let their games vanish into obscurity</span>. The momentum is real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-section" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-white uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            <span className="text-[#ffed00]">Ready to Make</span>
            <br />
            <span className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] bg-clip-text text-transparent">Your Game Go Viral?</span>
          </h2>

          <div className="bg-gradient-to-r from-[#a300c5] to-[#ff39e5] rounded-2xl p-1 mb-8">
            <div className="bg-black rounded-xl p-10">
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                You don't have to keep hoping for a miracle on launch day. With Make Viral Games, you have the formula, the team, and the mentor to actually make it happen. Imagine logging into your dev dashboard to see a flood of new wishlists, players streaming your game, and a Discord full of excited fans.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Join now and get instant access to the entire viral game blueprint, our members-only community, and direct mentorship. Best of all, it's risk-free with our <span className="text-[#ffed00] font-bold">30-day money-back guarantee</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-6xl font-black text-[#ffed00] mb-2">$19</p>
                  <p className="text-gray-300">to join today</p>
                </div>
                <div className="text-4xl text-gray-500 hidden sm:block">or</div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#ff39e5] mb-2">FREE</p>
                  <p className="text-gray-300">Apply to be on our podcast</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                <button
                  onClick={onJoinClick}
                  className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black text-lg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all shadow-2xl shadow-[#a300c5]/50 w-full sm:w-auto"
                >
                  <span className="flex items-center gap-3 justify-center">
                    <Gamepad2 className="w-5 h-5" />
                    Join the W.F.P. Mastermind – $19
                  </span>
                </button>
                <button className="bg-[#a300c5] text-white text-lg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all border-2 border-[#ff39e5] w-full sm:w-auto">
                  <span className="flex items-center gap-3 justify-center">
                    <Mic className="w-5 h-5" />
                    Apply for Podcast – Free Access
                  </span>
                </button>
              </div>

              <p className="text-sm text-gray-400 italic">
                30-Day Money-Back Guarantee – If you don't LOVE the value you get inside the mastermind in your first month, just let us know for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#a300c5]/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 text-[#ffed00] uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            FAQ
          </h2>

          <div className="space-y-6">
            <div className="bg-black/70 border-2 border-[#ffed00] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#ffed00] mb-3 flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                What if my game isn't ready yet?
              </h3>
              <p className="text-gray-200 leading-relaxed">
                No game is "too early" for this community. Whether you're still coding your prototype or polishing for launch, you'll benefit. In fact, it's often better to join before your game releases. You can start building hype and learn the viral formula while you develop, so that you don't launch to an empty room.
              </p>
            </div>

            <div className="bg-black/70 border-2 border-[#ff39e5] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#ff39e5] mb-3 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6" />
                Is this just for PC games, or any platform/engine?
              </h3>
              <p className="text-gray-200 leading-relaxed">
                It's for any indie game. The principles of going viral apply whether your project is on Steam, console, mobile, or web. We have Unreal and Unity devs, pixel-art platformers, VR experiments – you name it. The mastermind focuses on marketing tactics, community-building, and game-design tweaks that trigger word-of-mouth.
              </p>
            </div>

            <div className="bg-black/70 border-2 border-[#ff3131] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#ff3131] mb-3 flex items-center gap-3">
                <Star className="w-6 h-6" />
                How much time do I need to commit?
              </h3>
              <p className="text-gray-200 leading-relaxed">
                It's totally up to you – there's no strict schedule. We designed Make Viral Games to fit around a busy dev life. The training materials and viral formula can be consumed at your own pace. The community is active 24/7 on Discord, but you can lurk or jump in as your schedule allows. Whether you have 5 hours or 5 minutes a day, you can participate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t-4 border-[#a300c5] bg-black">
        <div className="text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <div className="text-2xl sm:text-3xl font-black text-[#ff3131] tracking-wider uppercase leading-none mb-.5">
                W.F.P.
              </div>
              <div className="text-xs font-extrabold text-white uppercase tracking-wide leading-tight">
                PODCAST
              </div>
              <div className="text-xs font-extrabold text-white uppercase tracking-wide leading-tight">
                INDIE GAME SHOWCASE
              </div>
          <div className="mt-6 text-gray-500 text-sm">
            © 2025 W.F.P. Master Mind Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
