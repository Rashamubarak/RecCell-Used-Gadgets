import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search, 
  Menu, 
  X,
  Zap
} from 'lucide-react';
import { useCarts } from '../hooks/useCarts';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCarts();
  const cartCount = getCartCount();

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Close menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen) {
        const menu = document.querySelector('.mobile-menu');
        const button = document.querySelector('.menu-button');
        if (menu && !menu.contains(e.target) && !button?.contains(e.target)) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold group">
            <div className="relative">
              <Zap className="text-blue-400 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-white">Rec<span className="text-blue-400">Cell</span></span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* Desktop Actions - DARK THEME */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              to="/wishlist" 
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-blue-400 rounded-xl hover:bg-white/5 transition-all duration-300 group"
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Wishlist</span>
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-blue-400 rounded-xl hover:bg-white/5 transition-all duration-300 group relative"
            >
              <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg shadow-red-500/30 animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link 
              to="/login" 
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <User size={18} />
              <span className="text-sm font-medium">Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 hover:bg-white/5 rounded-xl transition-all duration-300 menu-button text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu - DARK THEME */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 shadow-lg mobile-menu">
          <div className="flex flex-col gap-3">
            <Link 
              to="/shop" 
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={20} /> Shop
            </Link>
            <Link 
              to="/wishlist" 
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={20} /> Wishlist
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={20} /> Cart ({cartCount})
            </Link>
            <Link 
              to="/login" 
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-center justify-center font-semibold"
              onClick={() => setIsMenuOpen(false)}
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