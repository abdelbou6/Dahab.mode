import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { CartItem } from '../types';
import { products } from '../data/products';

const CartPage = () => {
  // Sample cart items for demo
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      ...products[0],
      quantity: 1,
      selectedColor: products[0].colors[0],
      selectedSize: products[0].sizes[1]
    },
    {
      ...products[2],
      quantity: 2,
      selectedColor: products[2].colors[1],
      selectedSize: products[2].sizes[0]
    },
  ]);
  
  // Coupon code state
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );
  const shipping = subtotal > 100 ? 0 : 12.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax - couponDiscount;
  
  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Apply coupon code
  const applyCoupon = () => {
    // In a real app, this would validate the coupon against an API
    if (couponCode.toLowerCase() === 'dahab10') {
      setAppliedCoupon('DAHAB10');
      setCouponDiscount(subtotal * 0.1); // 10% discount
    } else {
      alert('Invalid coupon code');
    }
  };
  
  // Remove applied coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponDiscount(0);
    setCouponCode('');
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-heading font-semibold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-soft p-12 text-center">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-gray-200 bg-gray-50">
                  <div className="col-span-6">
                    <h3 className="font-medium">Product</h3>
                  </div>
                  <div className="col-span-2 text-center">
                    <h3 className="font-medium">Price</h3>
                  </div>
                  <div className="col-span-2 text-center">
                    <h3 className="font-medium">Quantity</h3>
                  </div>
                  <div className="col-span-2 text-right">
                    <h3 className="font-medium">Total</h3>
                  </div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className="border-b border-gray-200 p-4">
                    <div className="sm:grid sm:grid-cols-12 sm:gap-4 flex flex-col space-y-4 sm:space-y-0">
                      {/* Product Info */}
                      <div className="sm:col-span-6 flex">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                          <img 
                            src={item.images[0]} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="ml-4">
                          <Link to={`/products/${item.id}`} className="font-medium hover:text-teal-DEFAULT">
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-500 mt-1">
                            <p>Color: {item.selectedColor}</p>
                            <p>Size: {item.selectedSize}</p>
                          </div>
                          <button 
                            className="text-sm text-red-500 hover:text-red-600 mt-2 flex items-center sm:hidden"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={14} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="sm:col-span-2 flex items-center justify-between sm:justify-center">
                        <span className="sm:hidden font-medium">Price:</span>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="sm:col-span-2 flex items-center justify-between sm:justify-center">
                        <span className="sm:hidden font-medium">Quantity:</span>
                        <div className="flex items-center">
                          <button 
                            className="w-8 h-8 rounded-l-md border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-10 h-8 border-t border-b border-gray-300 text-center text-sm"
                          />
                          <button 
                            className="w-8 h-8 rounded-r-md border border-gray-300 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="sm:col-span-2 flex items-center justify-between sm:justify-end">
                        <span className="sm:hidden font-medium">Total:</span>
                        <div className="flex items-center">
                          <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            className="ml-4 text-gray-400 hover:text-red-500 hidden sm:block"
                            onClick={() => removeItem(item.id)}
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="p-4 bg-gray-50 flex justify-between">
                  <Link to="/products" className="text-teal-DEFAULT hover:text-teal-dark flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Continue Shopping
                  </Link>
                  <button 
                    className="text-red-500 hover:text-red-600 flex items-center"
                    onClick={() => setCartItems([])}
                  >
                    <X size={16} className="mr-1" />
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      {shipping === 0 ? (
                        <span className="text-success-DEFAULT">Free</span>
                      ) : (
                        <span>${shipping.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    {appliedCoupon && (
                      <div className="flex justify-between text-success-DEFAULT">
                        <span className="flex items-center">
                          Discount ({appliedCoupon})
                          <button 
                            className="ml-2 text-gray-400 hover:text-red-500"
                            onClick={removeCoupon}
                            aria-label="Remove coupon"
                          >
                            <X size={14} />
                          </button>
                        </span>
                        <span>-${couponDiscount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="p-6 border-b border-gray-200">
                  <h3 className="font-medium mb-3">Apply Coupon Code</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code" 
                      className="form-input flex-grow rounded-r-none"
                    />
                    <button 
                      className="bg-teal-DEFAULT text-white px-4 py-2 rounded-r-md hover:bg-teal-dark"
                      onClick={applyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Try code "DAHAB10" for 10% off your order
                  </p>
                </div>
                
                {/* Checkout Button */}
                <div className="p-6">
                  <Link to="/checkout">
                    <Button 
                      variant="secondary" 
                      fullWidth
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      We accept payment through secure methods
                    </p>
                    <div className="flex justify-center mt-2 space-x-2">
                      <span className="text-2xl">💳</span>
                      <span className="text-2xl">🔒</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;