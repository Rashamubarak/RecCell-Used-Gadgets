import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Eye, Sparkles, TrendingUp } from 'lucide-react';
import { useCarts } from '../hooks/useCarts';
import { useWishlist } from '../hooks/useWishlist';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCarts();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
      />
    ));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success('Added to cart! 🛒');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product);
    toast.success(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist ❤️');
  };

  return (
    <div className="group bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        {/* Image Container */}
        <div className="bg-gradient-to-br from-[#1a1a3e] to-[#0a0a1a] h-64 flex items-center justify-center relative overflow-hidden">
          <img
            src={product.image || `https://picsum.photos/seed/${product.id}/400/400`}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
            style={{
              filter: 'brightness(1.05) contrast(1.1)',
            }}
          />
          
          {/* Image Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 scale-150"></div>
          </div>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
            <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
              <Eye size={18} /> Quick View
            </span>
          </div>
          
          {/* Badges */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30 flex items-center gap-1 z-10">
              <Sparkles size={12} /> {product.badge}
            </span>
          )}
          {product.condition && (
            <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full z-10">
              {product.condition}
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute bottom-3 right-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 z-10">
              <TrendingUp size={12} /> Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 text-lg">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
          
          <div className="flex items-center gap-1 mt-2">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl font-extrabold text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-xs bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-2.5 py-1 rounded-full font-bold border border-green-500/20 ml-auto">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-white/5">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl py-2.5 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              className={`w-11 h-11 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isInWishlist(product.id) 
                  ? 'border-red-500 bg-red-500/10 text-red-400 shadow-lg shadow-red-500/25' 
                  : 'border-white/10 hover:border-red-400 hover:text-red-400 hover:bg-red-500/10'
              }`}
            >
              <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;