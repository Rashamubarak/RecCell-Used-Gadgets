import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCarts } from '../hooks/useCarts';  // ✅ Changed to useCarts
import toast from 'react-hot-toast';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCarts();  // ✅ Changed to useCarts

  if (cart.length === 0) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Start shopping and add items to your cart</p>
          <Link to="/shop" className="btn-primary mt-6 inline-block">
            <ArrowLeft size={18} /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.image || `https://picsum.photos/seed/${item.id}/100/100`}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.brand}</p>
                  <p className="font-bold text-slate-900">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id, item.name)}
                    className="p-2 text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 text-sm font-medium mt-4"
            >
              Clear Cart
            </button>
          </div>
          
          <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-slate-900 mt-4">
            <ArrowLeft size={18} /> Continue Shopping
          </Link>
        </div>

        <div className="lg:w-80">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
            <h3 className="font-bold text-lg text-slate-900 mb-4">Order Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="text-green-500 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-slate-900">Total</span>
                  <span className="font-bold text-xl text-slate-900">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link to="/checkout" className="btn-primary w-full justify-center mt-6">
              <ShoppingBag size={18} /> Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;