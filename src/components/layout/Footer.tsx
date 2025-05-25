import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Logo color="light" size="medium" />
            <p className="mt-4 text-gray-300">
              Dahab.mode specializes in premium quality burkinis and modest swimwear that combine elegance, comfort, and functionality.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-DEFAULT" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-DEFAULT" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-DEFAULT" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold-DEFAULT" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-gold-DEFAULT">All Products</Link>
              </li>
              <li>
                <Link to="/products?filter=new" className="text-gray-300 hover:text-gold-DEFAULT">New Arrivals</Link>
              </li>
              <li>
                <Link to="/products?category=premium" className="text-gray-300 hover:text-gold-DEFAULT">Premium Collection</Link>
              </li>
              <li>
                <Link to="/products?category=athletic" className="text-gray-300 hover:text-gold-DEFAULT">Athletic Burkinis</Link>
              </li>
              <li>
                <Link to="/products?category=plus-size" className="text-gray-300 hover:text-gold-DEFAULT">Plus Size Range</Link>
              </li>
              <li>
                <Link to="/products?sort=bestselling" className="text-gray-300 hover:text-gold-DEFAULT">Best Sellers</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-gold-DEFAULT">Help Center</Link>
              </li>
              <li>
                <Link to="/help/shipping" className="text-gray-300 hover:text-gold-DEFAULT">Shipping Information</Link>
              </li>
              <li>
                <Link to="/help/returns" className="text-gray-300 hover:text-gold-DEFAULT">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/help/sizing" className="text-gray-300 hover:text-gold-DEFAULT">Sizing Guide</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-DEFAULT">Contact Us</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-DEFAULT">About Dahab.mode</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold-DEFAULT" />
                <span className="text-gray-300">123 Fashion Street, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gold-DEFAULT" />
                <a href="tel:+9715012345678" className="text-gray-300 hover:text-gold-DEFAULT">+971 50 123 45678</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gold-DEFAULT" />
                <a href="mailto:info@dahab.mode.com" className="text-gray-300 hover:text-gold-DEFAULT">info@dahab.mode.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none focus:ring-1 focus:ring-gold-DEFAULT"
                />
                <button className="bg-gold-DEFAULT hover:bg-gold-dark px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Dahab.mode. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-gold-DEFAULT">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-gold-DEFAULT">Terms & Conditions</Link>
              <Link to="/sitemap" className="hover:text-gold-DEFAULT">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;