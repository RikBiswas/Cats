import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertTriangle, ShieldCheck, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('editorial');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 15) {
      setStatus('error');
      setErrorMessage('Please enter a message of at least 15 characters.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTicketId(`WW-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Emergency Medical Notice */}
        <div className="mt-4 mb-8 p-4 bg-rose-50 rounded-2xl border border-rose-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-rose-950 space-y-1">
            <strong>Urgent Pet Health Disclaimer:</strong>
            <p>
              WhiskerWise is an educational editorial publication. We <strong>cannot</strong> provide clinical diagnoses, emergency triage, or prescription drug advice for your individual pet via email. If your cat is experiencing difficulty breathing, inability to urinate, continuous vomiting, or sudden trauma, please transport them to an emergency veterinary hospital immediately.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Get in Touch
              </span>
              <h1 className="text-3xl font-extrabold text-[#1E2321] font-editorial mt-1">
                Contact the WhiskerWise Editorial Desk
              </h1>
              <p className="text-xs sm:text-sm text-[#596560] leading-relaxed mt-2">
                We welcome scientific feedback, clinical corrections, product evaluation suggestions, and reader adoption story submissions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8E1D7] space-y-4 text-xs">
              <div>
                <strong className="block text-[#1E2321] font-semibold">Editorial Desk:</strong>
                <span className="text-[#596560]">editorial@whiskerwise.org (Sample)</span>
              </div>
              <div>
                <strong className="block text-[#1E2321] font-semibold">Testing Lab Inquiries:</strong>
                <span className="text-[#596560]">reviews@whiskerwise.org (Sample)</span>
              </div>
              <div>
                <strong className="block text-[#1E2321] font-semibold">Turnaround Time:</strong>
                <span className="text-[#596560]">Our editors typically review inquiries within 2–3 business days.</span>
              </div>
            </div>

            <div className="p-4 bg-[#EFF6F1] rounded-2xl border border-[#D0E2D6] text-xs text-[#2D634C] space-y-1">
              <strong className="block font-semibold">Notice for Pet Brands & Manufacturers:</strong>
              <p className="text-[#3E4F46]">
                We do not accept sponsored article requests, paid review scores, or paid product inclusions. All evaluations are conducted independently under our strict 5-pillar standard.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E1D7] shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-[#2D634C] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2321] font-editorial">
                  Inquiry Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5550] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your message has been routed to our editorial board with Reference Ticket <strong>{ticketId}</strong>.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-[#1E2321] text-white text-xs font-semibold rounded-xl hover:bg-[#2C3330] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-base font-bold text-[#1E2321] border-b border-[#F2EBE1] pb-2">
                  Send a Message to the Editors
                </h2>

                {status === 'error' && (
                  <div className="p-3 bg-rose-50 text-rose-800 rounded-xl text-xs border border-rose-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A5550] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A5550] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.g. maya@example.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A5550] mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={inquiryType}
                    onChange={e => setInquiryType(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                  >
                    <option value="editorial">Editorial Question or Suggestion</option>
                    <option value="correction">Scientific / Medical Fact Correction</option>
                    <option value="product">Product Testing Recommendation</option>
                    <option value="story">Submit Reader Rescue Story</option>
                    <option value="other">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A5550] mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="Brief summary of your inquiry"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A5550] mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Provide detailed context, article reference URL, or scientific citations..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-[#C85A32] hover:bg-[#AD4B26] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting Message...' : 'Transmit Message to Editorial Team'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
