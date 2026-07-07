import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${query}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        placeholder="Search used phones, gadgets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-5 pr-14 text-sm text-white placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10
                   transition-all duration-300"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 
                   text-white p-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
      >
        <Search size={16} />
      </button>
    </form>
  );
};

export default SearchBar;