import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ChevronLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCarts } from '../hooks/useCarts';  // ✅ Changed to useCarts
import { useWishlist } from '../hooks/useWishlist';
import toast from 'react-hot-toast';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCarts();  // ✅ Changed to useCarts
  const { isInWishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="animate-pulse">
          <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto"></div>
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto mt-4"></div>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`Added ${quantity} item(s) to cart 🛒`);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.success(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist ❤️');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container-custom py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-slate-900 mb-6"
      >
        <ChevronLeft size={20} /> Back
      </button>

      <div className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
              <img
                src={product.image || `https://picsum.photos/seed/${product.id}/500/500`}
                alt={product.name}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            {product.badge && (
              <span className="inline-block mt-4 bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
            <p className="text-gray-500">{product.brand}</p>

            <div className="flex items-center gap-2 mt-2">
              {renderStars(product.rating)}
              <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.condition && (
              <div className="mt-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {product.condition}
                </span>
                {product.warranty && (
                  <span className="inline-block ml-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {product.warranty} Warranty
                  </span>
                )}
              </div>
            )}

            <p className="text-gray-600 mt-4">{product.description}</p>

            {product.specs && (
              <div className="mt-6">
                <h3 className="font-semibold text-slate-900 mb-2">Specifications</h3>
                <div className="grid grid-cols-2 gap-2 bg-gray-50 rounded-xl p-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500 capitalize">{key}:</span>
                      <span className="font-medium text-slate-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center transition"
                >
                  −
                </button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                onClick={handleWishlist}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition ${
                  isInWishlist(product.id)
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-200 hover:border-red-500 hover:text-red-500'
                }`}
              >
                <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;