import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingBag, Star, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import Slider from 'react-slick';
import Button from '../components/ui/Button';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Slider settings for product images
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-soft p-12 text-center">
            <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, the product you are looking for does not exist or has been removed.</p>
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  // Increment/decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  // Get stock status
  const getStockStatus = () => {
    if (product.stock > 10) {
      return <span className="text-success-DEFAULT">In Stock</span>;
    } else if (product.stock > 0) {
      return <span className="text-warning-DEFAULT">Low Stock - Only {product.stock} left</span>;
    } else {
      return <span className="text-error-DEFAULT">Out of Stock</span>;
    }
  };
  
  // Similar products (just grabbing a few random ones for demo)
  const similarProducts = products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, 4);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-teal-DEFAULT">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-teal-DEFAULT">Products</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-navy-DEFAULT">{product.name}</span>
          </div>
        </div>
        
        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-soft overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-4 md:p-8">
              <Slider {...sliderSettings}>
                {product.images.map((image, index) => (
                  <div key={index} className="outline-none">
                    <img 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1}`} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            
            {/* Product Info */}
            <motion.div 
              className="p-4 md:p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {product.isNew && (
                <span className="inline-block bg-gold-DEFAULT text-white text-sm px-3 py-1 rounded-full mb-4">
                  New Arrival
                </span>
              )}
              
              <h1 className="text-2xl md:text-3xl font-heading font-semibold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-gold-DEFAULT">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-semibold text-gold-dark">${product.price.toFixed(2)}</p>
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <p className="font-medium mb-2">Color:</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`px-4 py-2 rounded-md border ${
                        selectedColor === color 
                          ? 'border-teal-DEFAULT text-teal-DEFAULT' 
                          : 'border-gray-300 hover:border-teal-light'
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="font-medium mb-2">Size:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`w-12 h-12 flex items-center justify-center rounded-md border ${
                        selectedSize === size 
                          ? 'border-teal-DEFAULT text-teal-DEFAULT' 
                          : 'border-gray-300 hover:border-teal-light'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <p className="font-medium mb-2">Quantity:</p>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 rounded-l-md border border-gray-300 flex items-center justify-center"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    max={product.stock}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-16 h-10 border-t border-b border-gray-300 text-center"
                  />
                  <button 
                    className="w-10 h-10 rounded-r-md border border-gray-300 flex items-center justify-center"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </button>
                  
                  <div className="ml-4">
                    {getStockStatus()}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  variant="primary" 
                  leftIcon={<ShoppingBag size={18} />}
                  className="flex-1"
                >
                  Add to Cart
                </Button>
                <Button 
                  variant="secondary"
                  className="flex-1"
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="border border-gray-200 rounded-md p-4 mb-6">
                <div className="flex items-start">
                  <Truck size={20} className="text-teal-DEFAULT mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over $100. Delivery estimate: 5-7 business days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Product Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex border-b border-gray-200">
              <button 
                className={`px-6 py-4 font-medium text-sm focus:outline-none ${
                  activeTab === 'description' 
                    ? 'border-b-2 border-teal-DEFAULT text-teal-DEFAULT' 
                    : 'text-gray-600 hover:text-teal-DEFAULT'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-6 py-4 font-medium text-sm focus:outline-none ${
                  activeTab === 'features' 
                    ? 'border-b-2 border-teal-DEFAULT text-teal-DEFAULT' 
                    : 'text-gray-600 hover:text-teal-DEFAULT'
                }`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button 
                className={`px-6 py-4 font-medium text-sm focus:outline-none ${
                  activeTab === 'reviews' 
                    ? 'border-b-2 border-teal-DEFAULT text-teal-DEFAULT' 
                    : 'text-gray-600 hover:text-teal-DEFAULT'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews})
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <p className="mt-4">
                    Our premium burkinis are designed with your comfort and style in mind. Each piece is crafted from high-quality materials that offer excellent coverage while remaining lightweight and comfortable in the water.
                  </p>
                  <p className="mt-4">
                    Whether you're swimming, relaxing on the beach, or enjoying water sports, our burkinis provide the perfect blend of modesty, functionality, and fashion.
                  </p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-DEFAULT mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <Button variant="outline" size="sm">
                      Write a Review
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Sample reviews - in a real app, these would come from an API */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-gold-DEFAULT">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < 5 ? 'currentColor' : 'none'} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">Perfect fit and excellent quality</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">By Sarah on April 12, 2025</p>
                      <p className="text-gray-700">
                        I absolutely love this burkini! The material is soft yet durable, and it dries quickly after swimming.
                        The fit is perfect and very comfortable to wear all day. I've received many compliments on it.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex text-gold-DEFAULT">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < 4 ? 'currentColor' : 'none'} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">Great for swimming</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">By Amina on March 30, 2025</p>
                      <p className="text-gray-700">
                        This burkini is perfect for active swimming. The fabric doesn't weigh you down in the water and
                        it provides excellent coverage. My only small complaint is that the color faded slightly after
                        several washes, but it still looks good overall.
                      </p>
                    </div>
                    
                    {/* More review button */}
                    <div className="text-center">
                      <Button variant="text">
                        Load More Reviews
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Similar Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-6">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <div key={product.id} className="card h-full flex flex-col">
                <div className="relative h-64">
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
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-medium text-md mb-1">
                    <Link to={`/products/${product.id}`} className="hover:text-teal-DEFAULT">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-gold-dark font-semibold mb-4">${product.price.toFixed(2)}</p>
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      fullWidth 
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;