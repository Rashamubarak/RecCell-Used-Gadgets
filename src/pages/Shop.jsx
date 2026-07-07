import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Filter, 
  X, 
  Folder, 
  Smartphone, 
  Headphones, 
  ShoppingBag, 
  Zap,
  DollarSign,
  CheckCircle,
  Tag,
  Grid,
  Phone,
  Tablet,
  Watch,
  Laptop
} from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    search: searchParams.get('search') || '',
    priceRange: 'all',
    condition: 'all',
  });

  // Category icons mapping
  const categoryIcons = {
    'all': Grid,
    'used-phones': Phone,
    'gadgets': Headphones,
    'covers': ShoppingBag,
    'accessories': Zap,
    'iphone': Smartphone,
    'samsung': Smartphone,
    'tablets': Tablet,
    'watches': Watch,
    'laptops': Laptop,
  };

  const getCategoryIcon = (category) => {
    const Icon = categoryIcons[category] || Folder;
    return <Icon size={16} className="mr-2" />;
  };

  useEffect(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.search) {
      const search = filters.search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search)
      );
    }

    if (filters.priceRange !== 'all') {
      switch (filters.priceRange) {
        case 'under-200':
          result = result.filter(p => p.price < 200);
          break;
        case '200-500':
          result = result.filter(p => p.price >= 200 && p.price < 500);
          break;
        case '500-800':
          result = result.filter(p => p.price >= 500 && p.price < 800);
          break;
        case 'over-800':
          result = result.filter(p => p.price >= 800);
          break;
      }
    }

    if (filters.condition !== 'all') {
      result = result.filter(p =>
        p.condition?.toLowerCase() === filters.condition
      );
    }

    setFilteredProducts(result);
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      search: '',
      priceRange: 'all',
      condition: 'all',
    });
  };

  const getUniqueConditions = () => {
    const conditions = products.map(p => p.condition).filter(Boolean);
    return [...new Set(conditions)];
  };

  // Get display name for category
  const getCategoryDisplayName = (cat) => {
    const names = {
      'all': 'All Products',
      'used-phones': 'Used Phones',
      'gadgets': 'Gadgets',
      'covers': 'Covers & Cases',
      'accessories': 'Accessories',
      'iphone': 'iPhone',
      'samsung': 'Samsung',
      'tablets': 'Tablets',
      'watches': 'Watches',
      'laptops': 'Laptops',
    };
    return names[cat] || cat.replace('-', ' ');
  };

  return (
    <div className="container-custom">
      <div className="flex items-center justify-between mt-6 mb-6">
       <h1 className="text-3xl font-bold text-blue-400">🛍️ Shop</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:block ${showFilters ? 'fixed inset-0 z-50 bg-[#0a0a1a] p-6 overflow-y-auto' : 'hidden'}`}>
          {showFilters && (
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg text-white"
            >
              <X size={24} />
            </button>
          )}
          
          <div className="space-y-8">
            {/* Category Filter - With Icons */}
            <div>
              <h3 className="font-semibold text-blue-400 mb-4 text-lg border-b border-white/10 pb-2 flex items-center gap-2">
                <Folder size={18} className="text-blue-400" />
                Category
              </h3>
              <div className="space-y-2">
                {['all', 'used-phones', 'gadgets', 'covers', 'accessories'].map((cat) => {
                  const Icon = categoryIcons[cat] || Folder;
                  return (
                    <label 
                      key={cat} 
                      className={`flex items-center gap-3 text-sm cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                        filters.category === cat 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={filters.category === cat}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-4 h-4 text-blue-500 accent-blue-500"
                      />
                      <Icon size={16} className="flex-shrink-0" />
                      <span className="capitalize">{getCategoryDisplayName(cat)}</span>
                      {filters.category === cat && (
                        <span className="ml-auto text-xs bg-blue-500/30 px-2 py-0.5 rounded-full text-blue-300">
                          Selected
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Range Filter - With Icons */}
            <div>
              <h3 className="font-semibold text-blue-400 mb-4 text-lg border-b border-white/10 pb-2 flex items-center gap-2">
                <DollarSign size={18} className="text-purple-400" />
                Price Range
              </h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices', icon: Tag },
                  { value: 'under-200', label: 'Under $200', icon: DollarSign },
                  { value: '200-500', label: '$200 - $500', icon: DollarSign },
                  { value: '500-800', label: '$500 - $800', icon: DollarSign },
                  { value: 'over-800', label: 'Over $800', icon: DollarSign },
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <label 
                      key={option.value} 
                      className={`flex items-center gap-3 text-sm cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                        filters.priceRange === option.value 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={filters.priceRange === option.value}
                        onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        className="w-4 h-4 text-purple-500 accent-purple-500"
                      />
                      <Icon size={16} className="flex-shrink-0" />
                      <span>{option.label}</span>
                      {filters.priceRange === option.value && option.value !== 'all' && (
                        <span className="ml-auto text-xs bg-purple-500/30 px-2 py-0.5 rounded-full text-purple-300">
                          Active
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Condition Filter - With Icons */}
            <div>
              <h3 className="font-semibold text-blue-400 mb-4 text-lg border-b border-white/10 pb-2 flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                Condition
              </h3>
              <div className="space-y-2">
                <label 
                  className={`flex items-center gap-3 text-sm cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                    filters.condition === 'all' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="condition"
                    value="all"
                    checked={filters.condition === 'all'}
                    onChange={(e) => handleFilterChange('condition', e.target.value)}
                    className="w-4 h-4 text-green-500 accent-green-500"
                  />
                  <CheckCircle size={16} className="flex-shrink-0" />
                  <span>All Conditions</span>
                  {filters.condition === 'all' && (
                    <span className="ml-auto text-xs bg-green-500/30 px-2 py-0.5 rounded-full text-green-300">
                      Active
                    </span>
                  )}
                </label>
                {getUniqueConditions().map((condition) => (
                  <label 
                    key={condition} 
                    className={`flex items-center gap-3 text-sm cursor-pointer p-2 rounded-lg transition-all duration-300 ${
                      filters.condition === condition.toLowerCase() 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <input
                      type="radio"
                      name="condition"
                      value={condition.toLowerCase()}
                      checked={filters.condition === condition.toLowerCase()}
                      onChange={(e) => handleFilterChange('condition', e.target.value)}
                      className="w-4 h-4 text-green-500 accent-green-500"
                    />
                    <CheckCircle size={16} className="flex-shrink-0" />
                    <span className="capitalize">{condition}</span>
                    {filters.condition === condition.toLowerCase() && (
                      <span className="ml-auto text-xs bg-green-500/30 px-2 py-0.5 rounded-full text-green-300">
                        Active
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {(filters.category !== 'all' || filters.priceRange !== 'all' || filters.condition !== 'all') && (
              <button
                onClick={clearFilters}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <X size={18} /> Clear All Filters
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <p className="text-gray-400 mb-4">{filteredProducts.length} products found</p>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;