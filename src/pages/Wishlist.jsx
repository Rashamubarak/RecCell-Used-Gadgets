import { Link } from 'react-router-dom';
import { useWishlist } from '../hooks/useWishlist';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-bold text-slate-900">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2">Start adding your favorite items</p>
          <Link to="/shop" className="btn-primary mt-6 inline-block">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900">My Wishlist</h1>
        <span className="text-gray-500">{wishlist.length} items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;