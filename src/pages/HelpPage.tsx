import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const HelpPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1'); // Open the first FAQ by default
  
  const toggleFaq = (id: string) => {
    if (openFaqId === id) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(id);
    }
  };
  
  const faqs: FAQ[] = [
    {
      id: 'faq-1',
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, Mastercard, American Express, and PayPal. All payments are processed securely through our payment providers.',
      category: 'payment',
    },
    {
      id: 'faq-2',
      question: 'How do I find my size?',
      answer: 'Please refer to our size guide available on each product page. We provide detailed measurements to help you find the perfect fit. If you're between sizes, we recommend sizing up for a more comfortable fit.',
      category: 'sizing',
    },
    {
      id: 'faq-3',
      question: 'How long does shipping take?',
      answer: 'Domestic orders typically arrive within 3-5 business days. International orders can take 7-14 business days depending on your location and customs processing times. All orders include tracking information so you can monitor your delivery status.',
      category: 'shipping',
    },
    {
      id: 'faq-4',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unworn items in their original packaging. Returns are free for domestic customers. To initiate a return, please visit the Orders section in your account or contact our customer service team.',
      category: 'returns',
    },
    {
      id: 'faq-5',
      question: 'Are your burkinis chlorine resistant?',
      answer: 'Yes, our premium and athletic collection burkinis are made with chlorine-resistant fabric that maintains its shape and color even after frequent swimming in pools. Our standard collection has moderate chlorine resistance suitable for occasional pool use.',
      category: 'product',
    },
    {
      id: 'faq-6',
      question: 'Do your burkinis provide UV protection?',
      answer: 'Yes, all our burkinis provide UPF 50+ sun protection, blocking 98% of harmful UV rays. This makes them ideal for long days at the beach or pool while ensuring your skin remains protected.',
      category: 'product',
    },
    {
      id: 'faq-7',
      question: 'How do I care for my burkini?',
      answer: 'We recommend rinsing your burkini in cold water after each use, especially after swimming in chlorinated or salt water. Hand wash with mild detergent and lay flat to dry. Avoid using bleach, ironing, or machine drying as these can damage the fabric and reduce the lifespan of your burkini.',
      category: 'product',
    },
    {
      id: 'faq-8',
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. International shipping costs and delivery times vary depending on your location. You can see the exact shipping cost during checkout before completing your purchase.',
      category: 'shipping',
    },
    {
      id: 'faq-9',
      question: 'Can I modify or cancel my order?',
      answer: 'Orders can be modified or canceled within 2 hours of placing them. Please contact our customer service team immediately if you need to make changes. Once an order has been processed, we cannot make changes, but you can return the items when they arrive.',
      category: 'orders',
    },
    {
      id: 'faq-10',
      question: 'Do you offer wholesale or bulk discounts?',
      answer: 'Yes, we offer wholesale pricing for qualified businesses and volume discounts for large orders. Please contact our sales team at wholesale@dahab.mode.com for more information about our wholesale program.',
      category: 'payment',
    },
  ];
  
  // Filter FAQs based on active category
  const filteredFaqs = activeTab === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeTab);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-heading font-semibold mb-2">Help Center</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to frequently asked questions about our products, shipping, returns, and more.
          </p>
        </div>
        
        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'all' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All FAQs
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'product' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('product')}
          >
            Products
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'sizing' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('sizing')}
          >
            Sizing
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'shipping' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('shipping')}
          >
            Shipping
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'returns' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('returns')}
          >
            Returns
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'payment' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            Payment
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'orders' 
                ? 'bg-teal-DEFAULT text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaqId === faq.id ? (
                    <ChevronUp size={18} className="text-teal-DEFAULT" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-6 pb-4 ${openFaqId === faq.id ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Section */}
          <div className="mt-12 bg-cream rounded-lg p-8 text-center">
            <h2 className="text-2xl font-heading font-semibold mb-2">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help. Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href="mailto:support@dahab.mode.com" className="btn btn-outline">
                Email Support
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Help Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-semibold mb-8 text-center">Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-medium mb-4">Shipping Information</h3>
              <p className="text-gray-600 mb-4">
                Learn about shipping methods, delivery times, and tracking your order.
              </p>
              <Link to="/help/shipping" className="text-teal-DEFAULT hover:text-teal-dark font-medium">
                View Shipping Details →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-medium mb-4">Returns & Exchanges</h3>
              <p className="text-gray-600 mb-4">
                Our hassle-free return policy and step-by-step guide to returns.
              </p>
              <Link to="/help/returns" className="text-teal-DEFAULT hover:text-teal-dark font-medium">
                View Return Policy →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="text-xl font-medium mb-4">Size Guide</h3>
              <p className="text-gray-600 mb-4">
                Find your perfect fit with our detailed size charts and measuring guide.
              </p>
              <Link to="/help/sizing" className="text-teal-DEFAULT hover:text-teal-dark font-medium">
                View Size Guide →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;