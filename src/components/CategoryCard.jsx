import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Headphones, 
  ShoppingBag, 
  Zap, 
  Tablet,
  Grid,
  Apple
} from 'lucide-react';

const iconMap = {
  'Grid': Grid,
  'Smartphone': Smartphone,
  'Apple': Apple,
  'Headphones': Headphones,
  'ShoppingBag': ShoppingBag,
  'Zap': Zap,
  'Tablet': Tablet,
};

const CategoryCard = ({ category }) => {
  const Icon = iconMap[category.icon] || Smartphone;
  const isAll = category.id === 'all';

  return (
    <Link
      to={isAll ? '/shop' : `/shop?category=${category.id}`}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#1a1a2e] to-[#0a0a1a] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50"
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 scale-150"></div>
      </div>

      {/* Icon Container */}
      <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-0.5 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30`}>
        <div className="w-full h-full bg-[#0a0a1a] rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {category.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{category.description || `${category.count} items`}</p>
        
        {/* Count Badge */}
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            {category.count} items
          </span>
          <span className="text-xs text-gray-600 group-hover:text-blue-400 transition-colors duration-300">
            Shop Now →
          </span>
        </div>
      </div>

      {/* Decorative Line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
    </Link>
  );
};

export default CategoryCard;