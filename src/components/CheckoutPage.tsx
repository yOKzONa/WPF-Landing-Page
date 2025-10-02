import { useState } from 'react';
import { Check, X, ShoppingCart, CreditCard, Lock, Trash2 } from 'lucide-react';

interface CheckoutPageProps {
  includeLaunchAccelerator: boolean;
}

export default function CheckoutPage({ includeLaunchAccelerator: initialIncludeLaunchAccelerator }: CheckoutPageProps) {
  const [includeLaunchAccelerator, setIncludeLaunchAccelerator] = useState(initialIncludeLaunchAccelerator);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    zipCode: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const mastermindPrice = 19;
  const launchAcceleratorPrice = 80;
  const total = mastermindPrice + (includeLaunchAccelerator ? launchAcceleratorPrice : 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
    }

    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '');
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2, 4);
      }
      if (formattedValue.length > 5) formattedValue = formattedValue.slice(0, 5);
    }

    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    if (name === 'zipCode') {
      formattedValue = value.replace(/\D/g, '').slice(0, 5);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      console.log('Payment processed:', {
        ...formData,
        mastermind: true,
        launchAccelerator: includeLaunchAccelerator,
        total: total
      });
      alert('Payment successful! Welcome to W.F.P. Mastermind!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-[#ffed00] uppercase">Checkout</h1>
          <p className="text-gray-400">Complete your purchase and start growing your game today</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-r from-[#a300c5] to-[#ff39e5] rounded-2xl p-1">
              <div className="bg-black rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart className="w-6 h-6 text-[#ffed00]" />
                  <h2 className="text-2xl font-bold text-[#ffed00]">Order Summary</h2>
                </div>

                {/* Mastermind - Always Included */}
                <div className="bg-[#ffed00]/10 border-2 border-[#ffed00] rounded-xl p-6 mb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-[#ffed00]" />
                        <h3 className="text-xl font-bold text-white">W.F.P. Mastermind</h3>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-300 ml-7">
                        <li>• Step-by-Step Viral Game Formula</li>
                        <li>• Private Community of Indie Devs</li>
                        <li>• Direct Mentorship Access</li>
                        <li>• 30-Day Money-Back Guarantee</li>
                      </ul>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-[#ffed00]">${mastermindPrice}</p>
                    </div>
                  </div>
                </div>

                {/* Launch Accelerator - Optional */}
                {includeLaunchAccelerator && (
                  <div className="bg-[#ff39e5]/10 border-2 border-[#ff39e5] rounded-xl p-6 mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="w-5 h-5 text-[#ff39e5]" />
                          <h3 className="text-xl font-bold text-white">The Launch Accelerator</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-gray-300 ml-7">
                          <li>• 1 Playtest & Feedback Session</li>
                          <li>• 1 High-Quality Game Trailer</li>
                          <li>• Steam/Store Page Facelift</li>
                        </ul>
                      </div>
                      <div className="text-right flex flex-col items-end gap-2">
                        <p className="text-2xl font-black text-[#ff39e5]">${launchAcceleratorPrice}</p>
                        <button
                          onClick={() => setIncludeLaunchAccelerator(false)}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#ff3131] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Add Launch Accelerator Option */}
                {!includeLaunchAccelerator && (
                  <div className="bg-[#ff39e5]/5 border-2 border-dashed border-[#ff39e5]/50 rounded-xl p-6 mb-4">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-[#ff39e5] mb-2">Want to fast-track your launch?</h3>
                      <p className="text-sm text-gray-400 mb-4">Add The Launch Accelerator for only $80 more</p>
                      <button
                        onClick={() => setIncludeLaunchAccelerator(true)}
                        className="bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
                      >
                        Add to Cart (+$80)
                      </button>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="border-t-2 border-gray-800 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-300">Total</span>
                    <span className="text-4xl font-black text-[#ffed00]">${total}</span>
                  </div>
                  <p className="text-sm text-gray-500 text-right mt-2">30-Day Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-gradient-to-b from-[#a300c5]/20 to-transparent border-2 border-[#a300c5] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-[#ffed00]" />
                <h2 className="text-2xl font-bold text-[#ffed00]">Payment Details</h2>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="John"
                    className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Doe"
                    className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Card Number */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-300 mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              {/* Card Details */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-300 mb-2">Expiry</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/YY"
                    className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-300 mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                    className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-300 mb-2">ZIP</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    placeholder="12345"
                    className="w-full bg-black/50 border-2 border-gray-700 focus:border-[#ffed00] rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-[#ffde59] to-[#ff39e5] text-black text-xl font-black px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-2xl shadow-[#a300c5]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center gap-3 justify-center">
                  {isProcessing ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Complete Secure Purchase - ${total}
                    </>
                  )}
                </span>
              </button>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Secured by 256-bit SSL encryption</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
