import { Check, X, Video, FileText, Sparkles, ArrowRight } from 'lucide-react';

interface UpsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellPage({ onAccept, onDecline }: UpsellPageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#ffde59] to-[#ff39e5] rounded-full px-6 py-2 mb-6">
            <p className="text-black font-black text-sm uppercase tracking-wide">Wait! Special One-Time Offer</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight" style={{lineHeight: '1.2'}}>
            <span className="text-[#ffed00]">Supercharge Your</span>
            <br />
            <span className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] bg-clip-text text-transparent">Game's Launch Success</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            You're joining the mastermind – that's awesome! But what if you could <span className="text-[#ff39e5] font-bold">fast-track your results</span> with professional, proven marketing assets?
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#a300c5] to-[#ff39e5] rounded-3xl p-1 mb-8">
          <div className="bg-black rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <p className="text-[#ffed00] text-lg font-bold mb-2">EXCLUSIVE ADD-ON PACKAGE</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">The Launch Accelerator</h2>
              <div className="flex items-center justify-center gap-4">
                <span className="text-3xl text-gray-500 line-through">$299</span>
                <span className="text-6xl font-black text-[#ffed00]">$80</span>
              </div>
              <p className="text-[#ff39e5] font-bold text-lg mt-2">73% OFF – Today Only!</p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="bg-gradient-to-r from-[#ffed00]/10 to-transparent border-2 border-[#ffed00] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffed00] rounded-full flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#ffed00] mb-2">1 Playtest & Feedback Session</h3>
                    <p className="text-gray-200 leading-relaxed">
                      yOKzONa personally plays your game and gives you <span className="text-white font-bold">brutally honest, actionable feedback</span> on what's working and what's killing your retention. Most devs are too close to their game to see the issues – get an expert's fresh eyes.
                    </p>
                    <p className="text-sm text-[#ffed00] mt-2 font-semibold">Value: $99</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ff3131]/10 to-transparent border-2 border-[#ff3131] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff3131] rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#ff3131] mb-2">1 High-Quality Game Trailer</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Get a <span className="text-white font-bold">proven-converting trailer</span> that showcases your game's most viral moments. We know what makes gamers click "wishlist" – let us craft a trailer that does exactly that. No more DIY disasters.
                    </p>
                    <p className="text-sm text-[#ff3131] mt-2 font-semibold">Value: $149</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#ff39e5]/10 to-transparent border-2 border-[#ff39e5] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ffde59] to-[#ff39e5] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#ff39e5] mb-2">Steam/Store Page Facelift</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Your Steam page is the first impression – make it count. We'll optimize your copy, visuals, and layout for <span className="text-white font-bold">maximum conversions</span>. Turn browsers into buyers with a page that screams "add to wishlist."
                    </p>
                    <p className="text-sm text-[#ff39e5] mt-2 font-semibold">Value: $79</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#ffed00]/10 border-2 border-[#ffed00] rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Check className="w-6 h-6 text-[#ffed00]" />
                <p className="text-xl font-bold text-[#ffed00]">Why This Is a No-Brainer</p>
              </div>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#ff39e5] flex-shrink-0 mt-1" />
                  <span><span className="text-white font-bold">Save months</span> of trial and error trying to figure out trailers and store pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#ff39e5] flex-shrink-0 mt-1" />
                  <span><span className="text-white font-bold">Get professional-grade assets</span> that would normally cost $300+ if hired separately</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#ff39e5] flex-shrink-0 mt-1" />
                  <span><span className="text-white font-bold">Launch with confidence</span> knowing your marketing materials are built by experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-[#ff39e5] flex-shrink-0 mt-1" />
                  <span>This offer is <span className="text-[#ff3131] font-bold">ONLY available right now</span> – you won't see this price again</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onAccept}
                className="flex-1 bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black text-xl font-black px-8 py-5 rounded-xl hover:scale-105 transition-all shadow-2xl shadow-[#a300c5]/50 uppercase"
              >
                <span className="flex items-center gap-3 justify-center">
                  <Check className="w-6 h-6" />
                  Yes! Add Launch Accelerator – $80
                </span>
              </button>
            </div>

            <button
              onClick={onDecline}
              className="w-full text-gray-500 hover:text-gray-400 text-sm mt-6 underline transition-colors"
            >
              No thanks, I'll figure it out myself
            </button>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 italic">
                <span className="text-[#ffed00] font-bold">30-Day Money-Back Guarantee</span> applies to this add-on too. If you're not satisfied, get a full refund.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>This is a limited-time offer available only at signup</p>
        </div>
      </div>
    </div>
  );
}
