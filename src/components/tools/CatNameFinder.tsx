import React, { useState, useMemo } from 'react';
import { Search, Heart, Sparkles, Filter, Copy, Check, RotateCcw } from 'lucide-react';
import { CAT_NAMES } from '../../data/catNames';
import { CatName } from '../../types';
import { useNavigation } from '../../context/NavigationContext';

export const CatNameFinder: React.FC = () => {
  const { favorites, toggleFavoriteName, isFavoriteName } = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'female' | 'male' | 'unisex'>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedCoat, setSelectedCoat] = useState<string>('all');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const stylesList = [
    { id: 'all', label: 'All Styles' },
    { id: 'cute', label: 'Cute & Playful' },
    { id: 'majestic', label: 'Majestic & Regal' },
    { id: 'food', label: 'Food & Culinary' },
    { id: 'nature', label: 'Nature & Botany' },
    { id: 'literary', label: 'Literary & Historical' },
    { id: 'vintage', label: 'Vintage & Classic' }
  ];

  const coatsList = [
    'All Coats', 'Orange', 'Black', 'Grey', 'White', 'Calico', 'Tuxedo', 'Tabby'
  ];

  const filteredNames = useMemo(() => {
    return CAT_NAMES.filter(item => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }

      // Keyword search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesMeaning = item.meaning.toLowerCase().includes(query);
        const matchesOrigin = item.origin.toLowerCase().includes(query);
        if (!matchesName && !matchesMeaning && !matchesOrigin) return false;
      }

      // Gender filter
      if (selectedGender !== 'all') {
        if (selectedGender === 'female' && item.gender !== 'female' && item.gender !== 'unisex') return false;
        if (selectedGender === 'male' && item.gender !== 'male' && item.gender !== 'unisex') return false;
        if (selectedGender === 'unisex' && item.gender !== 'unisex') return false;
      }

      // Style filter
      if (selectedStyle !== 'all' && item.style !== selectedStyle) {
        return false;
      }

      // Coat filter
      if (selectedCoat !== 'all' && selectedCoat !== 'All Coats') {
        const hasCoat = item.coats.some(c => c.toLowerCase().includes(selectedCoat.toLowerCase()) || c === 'Any');
        if (!hasCoat) return false;
      }

      return true;
    });
  }, [searchQuery, selectedGender, selectedStyle, selectedCoat, showOnlyFavorites, favorites]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 1500);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedGender('all');
    setSelectedStyle('all');
    setSelectedCoat('all');
    setShowOnlyFavorites(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E6DFD5] p-6 sm:p-10 shadow-sm">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#C85A32] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Naming Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2321] font-editorial mb-3">
          Curated Cat Name Finder
        </h2>
        <p className="text-sm text-[#596560] leading-relaxed mb-6">
          Find the ideal name for your new kitten or rescue. Filter across personality aesthetics, coat coloring compatibility, and linguistic origins.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border border-[#E8E1D7] mb-8 space-y-4">
        {/* Search Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name, meaning, or language (e.g. 'sweet', 'Japanese', 'sun')..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D5CCC0] rounded-xl text-sm focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none text-[#1E2321]"
            />
            <Search className="w-4 h-4 text-[#7A8680] absolute left-3.5 top-3 pointer-events-none" />
          </div>

          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              showOnlyFavorites
                ? 'bg-[#C85A32] text-white border-[#C85A32]'
                : 'bg-white text-[#2C3330] border-[#D5CCC0] hover:border-[#1E2321]'
            }`}
          >
            <Heart className={`w-4 h-4 ${showOnlyFavorites ? 'fill-white text-white' : 'text-[#C85A32]'}`} />
            <span>Saved Favorites ({favorites.length})</span>
          </button>
        </div>

        {/* Filter Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {/* Gender */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A8680] mb-1">
              Gender Focus
            </label>
            <div className="grid grid-cols-4 gap-1 p-1 bg-white rounded-xl border border-[#D5CCC0]">
              {(['all', 'female', 'male', 'unisex'] as const).map(g => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`py-1 text-xs capitalize font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedGender === g
                      ? 'bg-[#1E2321] text-white font-semibold'
                      : 'text-[#4A5550] hover:text-[#1E2321]'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A8680] mb-1">
              Theme / Style
            </label>
            <select
              value={selectedStyle}
              onChange={e => setSelectedStyle(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
            >
              {stylesList.map(s => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Coat Color */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#7A8680] mb-1">
              Coat Color Match
            </label>
            <select
              value={selectedCoat}
              onChange={e => setSelectedCoat(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white border border-[#D5CCC0] rounded-xl focus:border-[#C85A32] focus:ring-1 focus:ring-[#C85A32] outline-none"
            >
              {coatsList.map(c => (
                <option key={c} value={c === 'All Coats' ? 'all' : c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs text-[#596560] pt-2 border-t border-[#E8E1D7]">
          <span>
            Showing <strong className="text-[#1E2321]">{filteredNames.length}</strong> matching feline names
          </span>
          {(searchQuery || selectedGender !== 'all' || selectedStyle !== 'all' || selectedCoat !== 'all' || showOnlyFavorites) && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-xs text-[#C85A32] hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Grid */}
      {filteredNames.length === 0 ? (
        <div className="text-center py-12 px-4 bg-[#FAF7F2] rounded-2xl border border-dashed border-[#D5CCC0]">
          <Heart className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
          <h3 className="text-base font-bold text-[#1E2321]">No matching cat names found</h3>
          <p className="text-xs text-[#596560] mt-1 max-w-sm mx-auto">
            Try broadening your search keyword or clearing the style and coat color filters.
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 bg-[#1E2321] text-white text-xs font-semibold rounded-xl hover:bg-[#2C3330] cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNames.map(item => {
            const favorited = isFavoriteName(item.id);
            const isJustCopied = copiedName === item.name;

            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8E1D7] hover:border-[#D5C9BC] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-[#1E2321] font-editorial group-hover:text-[#C85A32] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleCopy(item.name)}
                        className="p-1.5 text-neutral-400 hover:text-[#1E2321] rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                        title="Copy name"
                      >
                        {isJustCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => toggleFavoriteName(item.id)}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          favorited ? 'text-[#C85A32] bg-rose-50' : 'text-neutral-400 hover:text-[#C85A32] hover:bg-neutral-100'
                        }`}
                        title={favorited ? 'Remove from favorites' : 'Save to favorites'}
                      >
                        <Heart className={`w-4 h-4 ${favorited ? 'fill-[#C85A32]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#7A8680] mb-3">
                    <span className="capitalize font-medium text-[#2C3330]">{item.gender}</span>
                    <span>·</span>
                    <span className="capitalize">{item.style}</span>
                    <span>·</span>
                    <span>{item.origin}</span>
                  </div>

                  <p className="text-xs text-[#4A5550] leading-relaxed mb-4">
                    {item.meaning}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8E1D7] flex items-center justify-between text-[11px] text-[#7A8680]">
                  <span className="text-[#596560]">
                    Suits: <span className="text-[#2C3330] font-medium">{item.coats.join(', ')}</span>
                  </span>
                  <span className="font-semibold text-[#C85A32]">Rank #{item.popularityRank}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
