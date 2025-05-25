import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Search, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Shop', 
      path: '/products',
      children: [
        { name: 'All Products', path: '/products' },
        { name: 'New Arrivals', path: '/products?filter=new' },
        { name: 'Premium Collection', path: '/products?category=premium' },
        { name: 'Athletic Performance', path: '/products?category=athletic' },
        { name: 'Plus Size Range', path: '/products?category=plus-size' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="z-10">
              <Logo size={scrolled ? 'small' : 'large'} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                link.children ? (
                  <div key={link.name} className="relative group">
                    <button className="flex items-center text-navy-dark hover:text-teal-DEFAULT font-medium">
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {link.children.map((childLink) => (
                        <Link 
                          key={childLink.name}
                          to={childLink.path}
                          className="block px-4 py-2 text-sm text-navy-DEFAULT hover:bg-teal-light hover:text-white transition-colors"
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-navy-dark hover:text-teal-DEFAULT font-medium ${
                      location.pathname === link.path ? 'text-teal-DEFAULT' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4 z-10">
              <button 
                className="text-navy-dark hover:text-teal-DEFAULT"
                onClick={toggleSearch}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link 
                to="/account" 
                className="text-navy-dark hover:text-teal-DEFAULT"
                aria-label="My Account"
              >
                <User size={20} />
              </Link>
              <Link 
                to="/cart" 
                className="text-navy-dark hover:text-teal-DEFAULT relative"
                aria-label="Shopping Cart"
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-gold-DEFAULT text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button
                className="md:hidden text-navy-dark hover:text-teal-DEFAULT"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden overflow-y-auto pt-20`}
      >
        <div className="container-custom py-8">
          <nav className="flex flex-col space-y-6">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-navy-dark">{link.name}</p>
                    <div className="ml-4 space-y-2 border-l-2 border-teal-light pl-4">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          to={childLink.path}
                          className="block text-navy hover:text-teal-DEFAULT"
                          onClick={closeMenu}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-lg font-medium ${
                      location.pathname === link.path
                        ? 'text-teal-DEFAULT'
                        : 'text-navy-dark hover:text-teal-DEFAULT'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              to="/login" 
              className="block py-2 text-lg text-navy-dark hover:text-teal-DEFAULT"
              onClick={closeMenu}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="block py-2 text-lg text-navy-dark hover:text-teal-DEFAULT"
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${searchOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom h-full flex items-start justify-center pt-32">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={toggleSearch}
              aria-label="Close Search"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-heading mb-4">Search Products</h2>
            <div className="flex w-full">
              <input 
                type="text" 
                className="form-input flex-grow"
                placeholder="Search for burkinis, modest swimwear..."
                autoFocus
              />
              <button className="btn btn-primary ml-2">
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-gray-100 hover:bg-teal-light hover:text-white rounded-full text-sm">Premium burkinis</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-teal-light hover:text-white rounded-full text-sm">New arrivals</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-teal-light hover:text-white rounded-full text-sm">Athletic swimwear</button>
                <button className="px-3 py-1 bg-gray-100 hover:bg-teal-light hover:text-white rounded-full text-sm">Plus size</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;