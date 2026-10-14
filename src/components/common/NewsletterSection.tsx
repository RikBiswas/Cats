import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    healthAlerts: true,
    foodRecalls: true,
    behaviorTips: true
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    // Simulated realistic subscription handling
    setTimeout(() => {
      setStatus('success');
      try {
        localStorage.setItem('whiskerwise_subscriber', JSON.stringify({ email, preferences, date: new Date().toISOString() }));
      } catch {
        // ignore
      }
    }, 600);
  };

  return (
    <section id="newsletter-section" className="bg-[#FAF7F2] border-y border-[#E6DFD5] py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E2321] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative background pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5A83B] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The WhiskerWise Weekly Dispatch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-editorial">
                Feline Health, Nutrition Science & Honest Reviews in Your Inbox
              </h2>
              <p className="text-sm text-[#A8B5AF] leading-relaxed">
                Join over 45,000 cat owners who rely on our veterinary-reviewed care guides, urgent pet food recall bulletins, and hands-on product comparisons. No fluff, no sponsored bias.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#CCD7D2]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                  <span>Verified Vet Advisory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2D634C]" />
                  <span>Immediate Recall Alerts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#A8B5AF]">Zero Spam · 1-Click Unsubscribe</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              {status === 'success' ? (
                <div className="text-center py-4 space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 bg-[#2D634C]/20 border border-[#2D634C] text-[#55C28F] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-editorial">You're Subscribed!</h3>
                  <p className="text-xs text-[#C5D0CB] leading-relaxed">
                    We've sent a welcome confirmation to <strong className="text-white">{email}</strong>. Check your inbox for our Feline Preventive Health Checklist!
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setEmail('');
                    }}
                    className="text-xs text-[#C85A32] underline hover:text-[#E5A83B] cursor-pointer pt-2"
                  >
                    Subscribe with another address
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="block text-xs font-semibold text-[#DDE4E1] mb-1.5">
                      Your Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={e => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="you@example.com"
                        className="w-full pl-9 pr-4 py-2.5 bg-white text-[#1E2321] rounded-xl text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                      />
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-300">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Topic preferences */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#A8B5AF] block">
                      Include Preferences:
                    </span>
                    <label className="flex items-center gap-2 text-xs text-[#C5D0CB] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.healthAlerts}
                        onChange={e => setPreferences({ ...preferences, healthAlerts: e.target.checked })}
                        className="rounded border-neutral-600 text-[#C85A32] focus:ring-[#C85A32]"
                      />
                      <span>Feline Health & Medicine Bulletins</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-[#C5D0CB] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.foodRecalls}
                        onChange={e => setPreferences({ ...preferences, foodRecalls: e.target.checked })}
                        className="rounded border-neutral-600 text-[#C85A32] focus:ring-[#C85A32]"
                      />
                      <span>Food Safety & Recall Notifications</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-2.5 px-4 bg-[#C85A32] hover:bg-[#AD4B26] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? 'Subscribing...' : 'Get Free Weekly Dispatch'}
                  </button>

                  <p className="text-[10px] text-[#86948E] text-center leading-tight">
                    By submitting, you consent to receive educational emails from WhiskerWise. Read our Privacy Policy anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
