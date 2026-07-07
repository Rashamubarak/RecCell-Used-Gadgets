import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, RotateCcw, Headphones as HeadphonesIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

const Home = () => {
  const featuredProducts = products.slice(0, 8);
  const bestSellers = products.filter(p => p.badge === 'Bestseller');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="container-custom">
      <Hero />

      {/* Categories Section */}
      <section className="mt-16">
        <div className="section-header">
          <div>
            <h2 className="section-title">Browse Categories</h2>
            <p className="text-gray-500 mt-2 text-sm">Find exactly what you're looking for</p>
          </div>
          <Link to="/shop" className="view-all-link">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bestsellers */}
      <section className="mt-16">
        <div className="section-header">
          <div>
            <h2 className="section-title">🏆 Bestsellers</h2>
            <p className="text-gray-500 mt-2 text-sm">Most popular items this month</p>
          </div>
          <Link to="/shop" className="view-all-link">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(bestSellers.length > 0 ? bestSellers : featuredProducts).slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mt-16">
        <div className="section-header">
          <div>
            <h2 className="section-title">🔥 Featured Products</h2>
            <p className="text-gray-500 mt-2 text-sm">Handpicked just for you</p>
          </div>
          <Link to="/shop" className="view-all-link">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] rounded-3xl border border-white/5 p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <Shield className="text-blue-400" size={28} />
            </div>
            <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">6-Month Warranty</h4>
            <p className="text-sm text-gray-500 mt-1">Every device tested & certified</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20">
              <RotateCcw className="text-green-400" size={28} />
            </div>
            <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">7-Day Returns</h4>
            <p className="text-sm text-gray-500 mt-1">Not satisfied? Return easily</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/20">
              <Truck className="text-orange-400" size={28} />
            </div>
            <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">Free Delivery</h4>
            <p className="text-sm text-gray-500 mt-1">On orders over $50</p>
          </div>
          <div className="text-center group">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <HeadphonesIcon className="text-purple-400" size={28} />
            </div>
            <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">24/7 Support</h4>
            <p className="text-sm text-gray-500 mt-1">Dedicated support team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;