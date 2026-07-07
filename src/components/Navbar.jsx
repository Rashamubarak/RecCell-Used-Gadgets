import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  Heart, 
  User, 
  Search, 
  Menu, 
  X,
  Zap,
  Sparkles
} from 'lucide-react';
import { useCarts } from '../hooks/useCarts';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCarts();
  const cartCount = getCartCount();

  return (
    <nav className="bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold group">
            <div className="relative">
              <Sparkles className="text-blue-400 w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-white">Rec<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cell</span></span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-1">
            <Link 
              to="/wishlist" 
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300 group relative"
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Wishlist</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-300 group relative"
            >
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-blue-500/30 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link 
              to="/login" 
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 ml-2"
            >
              <User size={18} />
              <span className="text-sm font-semibold">Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 hover:bg-white/5 rounded-xl transition-all duration-300 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-white/5 px-4 py-6">
          <div className="flex flex-col gap-2">
            <Link 
              to="/shop" 
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              <Search size={20} /> Shop
            </Link>
            <Link 
              to="/wishlist" 
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              <Heart size={20} /> Wishlist
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
            >
              <ShoppingBag size={20} /> Cart ({cartCount})
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-center justify-center font-semibold"
            >
              <User size={20} /> Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;