import React, { useState } from 'react';
import { Users, BookOpen, Heart, MessageCircle, Send, CheckCircle2, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const CommunityView: React.FC = () => {
  const { navigate } = useNavigation();

  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [catName, setCatName] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [storyText, setStoryText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (catName && guardianName && storyText.length > 20) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setStoryModalOpen(false);
        setCatName('');
        setGuardianName('');
        setStoryText('');
      }, 2000);
    }
  };

  const resourcePacks = [
    {
      title: 'Senior Cat Mobility & Hydration Diary',
      format: 'PDF Printable Checklist',
      description: 'A 4-week daily tracker for monitoring water intake, litter box frequency, and jumping comfort to share with your vet.',
      downloads: '14.2k downloads'
    },
    {
      title: 'Kitten Socialization & Vaccine Roadmap',
      format: 'Reference Guide',
      description: 'Week-by-week protocol from weaning to adolescence, including gentle desensitization routines for carriers and nail clippers.',
      downloads: '28.9k downloads'
    },
    {
      title: 'Household Feline Toxic Botanical Poster',
      format: 'Visual Safety Chart',
      description: 'High-resolution visual guide identifying common house flora that cause acute nephrotoxicity or GI distress in cats.',
      downloads: '51.4k downloads'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Community & Resources' }]} />

        {/* Hero */}
        <header className="mt-4 mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Feline Guardians Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E2321] font-editorial leading-tight">
            The WhiskerWise Community & Knowledge Collective
          </h1>
          <p className="text-sm sm:text-base text-[#4A5550] leading-relaxed max-w-3xl">
            A collaborative gathering place for thoughtful cat guardians, foster volunteers, and veterinary educators. We share real-life rescue transformations, verified health roadmaps, and monthly community Q&A digests.
          </p>
        </header>

        {/* Transparency Disclosure regarding Forums */}
        <div className="p-4 bg-white rounded-2xl border border-[#E8E1D7] text-xs text-[#596560] leading-relaxed mb-10 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#2D634C] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1E2321]">Community Discussion Policy:</strong> To protect pets from dangerous crowdsourced medical misinformation, WhiskerWise does not host open, unmoderated message boards. Instead, our community platform operates through vet-reviewed reader Q&A rounds, vetted resource downloads, and curated adoption memoirs.
          </div>
        </div>

        {/* Free Resource Downloads */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">Free Guardian Downloads</span>
              <h2 className="text-2xl font-bold text-[#1E2321] font-editorial">Clinical Care Roadmaps & Printables</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resourcePacks.map((res, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8E1D7] flex flex-col justify-between shadow-xs">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A8680] block">{res.format}</span>
                  <h3 className="text-base font-bold text-[#1E2321] font-editorial">{res.title}</h3>
                  <p className="text-xs text-[#4A5550] leading-relaxed">{res.description}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#F2EBE1] flex items-center justify-between text-xs">
                  <span className="text-[#7A8680]">{res.downloads}</span>
                  <button
                    onClick={() => alert(`Downloaded "${res.title}" (Printable Sample Edition).`)}
                    className="inline-flex items-center gap-1 font-semibold text-[#C85A32] hover:underline cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reader Rescue Stories & Submission CTA */}
        <section className="bg-white rounded-3xl border border-[#E8E1D7] p-8 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">
                Share Your Cat's Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial">
                Celebrate Your Cat’s Resilience
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed">
                From timid shelter ferals who learned to cuddle to senior cats who found second chances, we spotlight reader rescue journeys every month in our publication.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setStoryModalOpen(true)}
                  className="px-5 py-2.5 bg-[#C85A32] hover:bg-[#AD4B26] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Submit Your Cat's Story
                </button>
                <button
                  onClick={() => navigate('/category/cat-stories')}
                  className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F2EBE1] text-[#1E2321] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Read Featured Memoirs
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-[#E8E1D7]">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80"
                alt="Rescue cat Oliver basking in morning sunlight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Story Submission Modal */}
        {storyModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#E8E1D7] space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-[#F2EBE1] pb-3">
                <h3 className="text-lg font-bold text-[#1E2321] font-editorial">
                  Submit Your Cat's Adoption Story
                </h3>
                <button
                  onClick={() => setStoryModalOpen(false)}
                  className="p-1 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-[#2D634C] rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#1E2321]">Story Submitted!</h4>
                  <p className="text-xs text-[#596560]">
                    Thank you for sharing your journey. Our editorial team reviews submissions for monthly featured publication.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleStorySubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-[#4A5550] mb-1">Cat's Name</label>
                    <input
                      type="text"
                      required
                      value={catName}
                      onChange={e => setCatName(e.target.value)}
                      placeholder="e.g. Oliver or Cleo"
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#4A5550] mb-1">Your Name / City</label>
                    <input
                      type="text"
                      required
                      value={guardianName}
                      onChange={e => setGuardianName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Portland, OR)"
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#4A5550] mb-1">The Adoption Journey & Breakthrough</label>
                    <textarea
                      rows={4}
                      required
                      value={storyText}
                      onChange={e => setStoryText(e.target.value)}
                      placeholder="How did you meet? What fears or challenges did your cat overcome? What is their favorite daily quirk?"
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#D5CCC0] rounded-xl outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#C85A32] text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#AD4B26] transition-colors cursor-pointer"
                  >
                    Submit Story for Editorial Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
