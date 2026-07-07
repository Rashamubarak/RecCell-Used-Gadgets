import { Link } from 'react-router-dom';
import { 
  Store, 
  Mail, 
  Phone, 
  MapPin,
  Shield,
  Zap,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a1a] to-[#050510] border-t border-white/5 mt-12">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Sparkles className="text-blue-400 w-7 h-7" />
              <span className="text-white">Rec<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cell</span></span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Premium pre-owned tech at unbeatable prices. Every device certified, tested & backed with warranty.
            </p>
           
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=used-phones" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Used Phones
                </Link>
              </li>
              <li>
                <Link to="/shop?category=gadgets" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=covers" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Covers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-500 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 hover:text-gray-300 transition-colors">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">support@reccell.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 hover:text-gray-300 transition-colors">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 hover:text-gray-300 transition-colors">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Tech Park, Silicon Valley, CA</span>
              </li>
              <li className="flex items-start gap-3 text-green-400">
                <Shield size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-sm font-semibold">100% Secure Checkout</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
          <span>© 2026 RecCell. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <Shield size={16} className="text-green-400" />
            Secure Checkout • 6-Month Warranty
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;