import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown, Filter, Star, X } from 'lucide-react';
import { products, categories } from '../data/products';
import { Product } from '../types';
import Button from '../components/ui/Button';

const ProductsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Filters
  const [categoryFilter, setCategoryFilter] = useState<string>(queryParams.get('category') || '');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>(queryParams.get('sort') || 'featured');
  const [showNewOnly, setShowNewOnly] = useState<boolean>(queryParams.get('filter') === 'new');
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  
  // Mobile filter drawer
  const [showFilters, setShowFilters] = useState(false);
  
  // Filtered products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Get all available colors and sizes from products
  const allColors = Array.from(new Set(products.flatMap(product => product.colors)));
  const allSizes = Array.from(new Set(products.flatMap(product => product.sizes)));
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (categoryFilter) {
      result = result.filter(product => 
        product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }
    
    // Price range filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // New only filter
    if (showNewOnly) {
      result = result.filter(product => product.isNew);
    }
    
    // Color filter
    if (colorFilter.length > 0) {
      result = result.filter(product => 
        product.colors.some(color => colorFilter.includes(color))
      );
    }
    
    // Size filter
    if (sizeFilter.length > 0) {
      result = result.filter(product => 
        product.sizes.some(size => sizeFilter.includes(size))
      );
    }
    
    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (a.isFeatured === b.isFeatured) ? 0 : a.isFeatured ? -1 : 1);
        break;
    }
    
    setFilteredProducts(result);
  }, [categoryFilter, priceRange, sortBy, showNewOnly, colorFilter, sizeFilter]);
  
  // Toggle color filter
  const toggleColorFilter = (color: string) => {
    if (colorFilter.includes(color)) {
      setColorFilter(colorFilter.filter(c => c !== color));
    } else {
      setColorFilter([...colorFilter, color]);
    }
  };
  
  // Toggle size filter
  const toggleSizeFilter = (size: string) => {
    if (sizeFilter.includes(size)) {
      setSizeFilter(sizeFilter.filter(s => s !== size));
    } else {
      setSizeFilter([...sizeFilter, size]);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setCategoryFilter('');
    setPriceRange([0, 200]);
    setSortBy('featured');
    setShowNewOnly(false);
    setColorFilter([]);
    setSizeFilter([]);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-semibold mb-2">Shop Burkinis</h1>
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-teal-DEFAULT">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-DEFAULT">Products</span>
          </div>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            className="w-full btn btn-outline flex items-center justify-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div 
            className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
          >
            <div className="bg-white rounded-lg shadow-soft p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <button 
                  className="text-sm text-teal-DEFAULT hover:text-teal-dark"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer flex items-center ${categoryFilter === '' ? 'text-teal-DEFAULT' : ''}`}
                    onClick={() => setCategoryFilter('')}
                  >
                    <span className={`mr-2 w-4 h-4 border rounded-sm flex items-center justify-center ${categoryFilter === '' ? 'bg-teal-DEFAULT border-teal-DEFAULT text-white' : 'border-gray-300'}`}>
                      {categoryFilter === '' && <span>✓</span>}
                    </span>
                    <span>All Categories</span>
                  </div>
                  {categories.map(category => (
                    <div 
                      key={category.id}
                      className={`cursor-pointer flex items-center ${categoryFilter === category.id ? 'text-teal-DEFAULT' : ''}`}
                      onClick={() => setCategoryFilter(category.id)}
                    >
                      <span className={`mr-2 w-4 h-4 border rounded-sm flex items-center justify-center ${categoryFilter === category.id ? 'bg-teal-DEFAULT border-teal-DEFAULT text-white' : 'border-gray-300'}`}>
                        {categoryFilter === category.id && <span>✓</span>}
                      </span>
                      <span>{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {allColors.map(color => (
                    <button
                      key={color}
                      className={`px-3 py-1 text-sm rounded-full border ${
                        colorFilter.includes(color) 
                          ? 'bg-teal-light text-white border-teal-light' 
                          : 'bg-white text-gray-700 border-gray-200 hover:border-teal-light'
                      }`}
                      onClick={() => toggleColorFilter(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Sizes */}
              <div className="mb-6">
                <h3 className="text-md font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {allSizes.map(size => (
                    <button
                      key={size}
                      className={`w-10 h-10 flex items-center justify-center text-sm rounded-md border ${
                        sizeFilter.includes(size) 
                          ? 'bg-teal-light text-white border-teal-light' 
                          : 'bg-white text-gray-700 border-gray-200 hover:border-teal-light'
                      }`}
                      onClick={() => toggleSizeFilter(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* New Arrivals */}
              <div className="mb-6">
                <div 
                  className={`cursor-pointer flex items-center ${showNewOnly ? 'text-teal-DEFAULT' : ''}`}
                  onClick={() => setShowNewOnly(!showNewOnly)}
                >
                  <span className={`mr-2 w-4 h-4 border rounded-sm flex items-center justify-center ${showNewOnly ? 'bg-teal-DEFAULT border-teal-DEFAULT text-white' : 'border-gray-300'}`}>
                    {showNewOnly && <span>✓</span>}
                  </span>
                  <span>New Arrivals Only</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Result Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-gray-600">Showing {filteredProducts.length} products</p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-teal-light focus:border-teal-light"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
            
            {/* Active Filters */}
            {(categoryFilter || colorFilter.length > 0 || sizeFilter.length > 0 || showNewOnly) && (
              <div className="mb-6 flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600">Active Filters:</span>
                
                {categoryFilter && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-light text-white">
                    {categories.find(c => c.id === categoryFilter)?.name || categoryFilter}
                    <button 
                      onClick={() => setCategoryFilter('')}
                      className="ml-1"
                      aria-label="Remove filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                
                {colorFilter.map(color => (
                  <span key={color} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-light text-white">
                    {color}
                    <button 
                      onClick={() => toggleColorFilter(color)}
                      className="ml-1"
                      aria-label="Remove filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
                
                {sizeFilter.map(size => (
                  <span key={size} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-light text-white">
                    Size: {size}
                    <button 
                      onClick={() => toggleSizeFilter(size)}
                      className="ml-1"
                      aria-label="Remove filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
                
                {showNewOnly && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-teal-light text-white">
                    New Arrivals
                    <button 
                      onClick={() => setShowNewOnly(false)}
                      className="ml-1"
                      aria-label="Remove filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-soft p-12 text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  variant="primary" 
                  onClick={clearFilters}
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="card h-full flex flex-col">
                    <div className="relative h-80">
                      <Link to={`/products/${product.id}`}>
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-gold-DEFAULT text-white text-sm px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full text-navy-dark hover:text-teal-DEFAULT transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4 flex-grow flex flex-col">
                      <div className="flex items-center mb-2">
                        <div className="flex text-gold-DEFAULT">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <h3 className="font-medium text-lg mb-1">
                        <Link to={`/products/${product.id}`} className="hover:text-teal-DEFAULT">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-gold-dark font-semibold mb-4">${product.price.toFixed(2)}</p>
                      <div className="mt-auto">
                        <Button 
                          variant="primary" 
                          fullWidth 
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;