import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface LegalViewProps {
  type: 'privacy' | 'terms';
}

export const LegalView: React.FC<LegalViewProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: isPrivacy ? 'Privacy Policy' : 'Terms of Service' }]} />

        <header className="mt-4 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1E2321] font-editorial">
            {isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms of Service & Clinical Disclaimers'}
          </h1>
          <p className="text-xs text-[#7A8680]">
            Last updated: October 2026 · WhiskerWise Media Editorial Governance
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E8E1D7] p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-[#2C3330] leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">1. Commitment to User Privacy</h2>
                <p>
                  WhiskerWise is committed to transparent, minimal data collection. We do not sell, rent, or trade your personal email address or reading habits to third-party data brokers or behavioral advertising networks.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">2. Newsletter Subscriptions</h2>
                <p>
                  When you voluntarily subscribe to our weekly dispatch or email alerts, your email address is stored securely solely for transmitting requested feline wellness dispatches. Every email includes a one-click unsubscribe mechanism.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">3. Local Browser Storage</h2>
                <p>
                  Our interactive utilities (such as saved favorite cat names and preferred calculator units) utilize your browser’s local client storage (localStorage). This data stays entirely on your personal device and is not transmitted to our servers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">4. Third-Party Links & Affiliate Tracking</h2>
                <p>
                  WhiskerWise contains links to external pet supply retailers. Clicking these links may generate standard referral tracking cookies by the merchant platform to credit qualifying purchases. Please review the privacy policies of external merchant websites.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">1. Acceptance of Terms</h2>
                <p>
                  By accessing and browsing WhiskerWise, you agree to these Terms of Service. If you do not accept these terms, you should discontinue using the platform.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">2. Non-Substitute for Professional Veterinary Care</h2>
                <p className="font-medium text-rose-950 bg-rose-50 p-4 rounded-xl border border-rose-200">
                  IMPORTANT: All content, medical flowcharts, dosage references, and calculators published on WhiskerWise are intended strictly for educational and informational purposes. They do not constitute veterinary medical diagnosis, triage, or prescriptive advice. You must always seek the advice of a licensed veterinarian regarding any questions you have regarding a medical condition.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">3. Intellectual Property</h2>
                <p>
                  All articles, data matrices, review standards, and calculators are copyright protected by WhiskerWise Media. Reproduction without prior written authorization is strictly prohibited.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#1E2321]">4. Limitation of Liability</h2>
                <p>
                  WhiskerWise Media and its veterinary contributors assume no liability for individual decisions made based on information presented on this site.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
