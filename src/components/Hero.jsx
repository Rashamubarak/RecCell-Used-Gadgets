import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Award, Sparkles, TrendingUp, Smartphone, Headphones, Watch, Laptop } from 'lucide-react';

const Hero = () => {
  const categories = [
    { name: 'iPhone', icon: Smartphone, color: 'from-gray-600 to-gray-800' },
    { name: 'Samsung', icon: Smartphone, color: 'from-blue-600 to-purple-600' },
    { name: 'Gadgets', icon: Headphones, color: 'from-purple-500 to-pink-500' },
    { name: 'Tablets', icon: Laptop, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section className="relative overflow-hidden rounded-2xl mt-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#2a1a4e]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="relative z-10 px-6 md:px-10 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-blue-300 border border-white/5 mb-4">
              <Zap size={14} className="text-yellow-400" />
              Premium Pre-owned Tech Marketplace
              <Sparkles size={12} className="text-purple-400" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="text-white">Quality</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Used Tech
              </span>
              <br />
              <span className="text-white">Unbeatable Prices</span>
            </h1>
            
            <p className="text-gray-400 text-sm mt-3 max-w-lg leading-relaxed">
              Every device certified, tested & backed with <span className="text-blue-400 font-semibold">6-month warranty</span>. 
              Save up to <span className="text-green-400 font-semibold">70%</span> on premium gadgets.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-5">
              <Link to="/shop" className="btn-primary text-sm px-6 py-2.5">
                Shop Now 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary text-sm px-6 py-2.5">
                How It Works
              </Link>
            </div>

            {/* Category Quick Links */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/shop?category=${cat.name.toLowerCase()}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all duration-300 group text-xs"
                >
                  <div className={`w-5 h-5 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    <cat.icon size={10} className="text-white" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <ShieldCheck size={16} className="text-blue-400" />
                <span className="font-medium">6-Month Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Award size={16} className="text-purple-400" />
                <span className="font-medium">Certified Devices</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <TrendingUp size={16} className="text-green-400" />
                <span className="font-medium">10,000+ Customers</span>
              </div>
            </div>
          </div>
          
          {/* Hero Images Grid */}
          <div className="flex gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <Smartphone className="w-14 h-14 text-blue-400" />
                <p className="text-[10px] text-gray-400 mt-1.5">iPhone 16 Pro</p>
                <p className="text-xs font-bold text-white">$905</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 mt-4">
                <Headphones className="w-14 h-14 text-purple-400" />
                <p className="text-[10px] text-gray-400 mt-1.5">AirPods Pro</p>
                <p className="text-xs font-bold text-white">$189</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                <Watch className="w-14 h-14 text-green-400" />
                <p className="text-[10px] text-gray-400 mt-1.5">Galaxy Watch</p>
                <p className="text-xs font-bold text-white">$199</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 mt-4">
                <Laptop className="w-14 h-14 text-orange-400" />
                <p className="text-[10px] text-gray-400 mt-1.5">MacBook Pro</p>
                <p className="text-xs font-bold text-white">$899</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;