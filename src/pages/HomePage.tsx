import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Slider from 'react-slick';
import { products, testimonials } from '../data/products';
import Button from '../components/ui/Button';

const HomePage = () => {
  // Settings for the featured products slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6045109/pexels-photo-6045109.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-navy-dark bg-opacity-50"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-2xl text-white"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
              variants={fadeInUp}
            >
              Elegant Modest <span className="text-gold-light">Swimwear</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-100"
              variants={fadeInUp}
            >
              Discover our premium collection of burkinis that combine style, comfort, and modesty for the modern woman.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <Link to="/products" className="btn btn-secondary">
                Shop Collection
              </Link>
              <Link to="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-navy-dark">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold mb-4">Shop by Category</h2>
            <p className="text-navy max-w-2xl mx-auto">
              Browse our selection of high-quality burkinis designed for different needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Premium Collection */}
            <Link to="/products?category=premium" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg" 
                  alt="Premium Collection" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-heading font-medium mb-2">Premium Collection</h3>
                  <p className="flex items-center text-gold-light">
                    Shop Now <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </p>
                </div>
              </div>
            </Link>
            
            {/* Athletic Performance */}
            <Link to="/products?category=athletic" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6045098/pexels-photo-6045098.jpeg" 
                  alt="Athletic Performance" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-heading font-medium mb-2">Athletic Performance</h3>
                  <p className="flex items-center text-gold-light">
                    Shop Now <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </p>
                </div>
              </div>
            </Link>
            
            {/* Plus Size Range */}
            <Link to="/products?category=plus-size" className="group">
              <div className="relative h-96 overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/6311595/pexels-photo-6311595.jpeg" 
                  alt="Plus Size Range" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-heading font-medium mb-2">Plus Size Range</h3>
                  <p className="flex items-center text-gold-light">
                    Shop Now <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold mb-4">Featured Products</h2>
            <p className="text-navy max-w-2xl mx-auto">
              Our most popular and highest quality burkinis loved by customers worldwide.
            </p>
          </div>
          
          <Slider {...sliderSettings} className="featured-products-slider">
            {featuredProducts.map(product => (
              <div key={product.id} className="px-2">
                <div className="card h-full flex flex-col">
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
              </div>
            ))}
          </Slider>
          
          <div className="text-center mt-10">
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-teal-DEFAULT text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-dark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
              <p className="text-teal-100">Crafted with the finest materials for durability and comfort.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-dark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">UV Protection</h3>
              <p className="text-teal-100">Built-in UPF 50+ sun protection for safe swimming.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-dark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Fast Shipping</h3>
              <p className="text-teal-100">Quick worldwide delivery with order tracking.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-dark rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Easy Returns</h3>
              <p className="text-teal-100">30-day hassle-free return policy for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-semibold mb-4">What Our Customers Say</h2>
            <p className="text-navy max-w-2xl mx-auto">
              Hear from satisfied customers who love our burkinis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-soft">
                <div className="flex text-gold-DEFAULT mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
                <p className="text-navy-DEFAULT mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-teal-light rounded-full w-10 h-10 flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-navy-DEFAULT text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-semibold mb-4">Join Our Newsletter</h2>
            <p className="mb-8 text-gray-300">
              Subscribe to receive updates on new collections, exclusive offers, and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold-DEFAULT"
              />
              <button className="btn btn-secondary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;