import { 
  Flower, 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone, 
  Mail, 
  MessageCircle,
  ArrowUp,
  Clock,
  Truck,
  RefreshCw,
  Search,
  ShieldCheck
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  slug: string;
}

const recentPosts: BlogPost[] = [
  {
    id: 1,
    title: "Essential Care Tips for Fresh-Cut Roses",
    date: "March 15, 2024",
    slug: "rose-care-tips"
  },
  {
    id: 2,
    title: "The Art of Kenyan Flower Growing",
    date: "March 10, 2024",
    slug: "kenyan-flower-growing"
  }
];

export function Footer() {
  const [orderNumber, setOrderNumber] = useState('');
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement order tracking logic
    console.log('Tracking order:', orderNumber);
  };

  return (
    <footer className="bg-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About & Contact Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Flower className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold text-white">KenyaBlooms</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              From the heart of Kenya to your doorstep, we deliver nature's finest blooms. 
              Our mission is to share the beauty of Kenyan flowers while supporting local 
              communities and sustainable farming practices.
            </p>
            <div className="space-y-3">
              <a href="tel:+254200000000" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>+254 20 000 0000</span>
              </a>
              <a href="mailto:hello@kenyablooms.com" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@kenyablooms.com</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com/kenyablooms" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/kenyablooms" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/kenyablooms" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links & Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Live Chat Support</span>
              </Link>
              <Link to="/help-center" className="text-neutral-400 hover:text-white transition-colors flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Help Center</span>
              </Link>
              <Link to="/shipping" className="text-neutral-400 hover:text-white transition-colors flex items-center space-x-2">
                <Truck className="h-4 w-4" />
                <span>Shipping Information</span>
              </Link>
              <Link to="/returns" className="text-neutral-400 hover:text-white transition-colors flex items-center space-x-2">
                <RefreshCw className="h-4 w-4" />
                <span>Returns & Refunds</span>
              </Link>
              <Link to="/faq" className="text-neutral-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Latest from Our Blog</h3>
            <div className="space-y-4">
              {recentPosts.map(post => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h4 className="text-neutral-400 group-hover:text-white transition-colors text-sm">
                    {post.title}
                  </h4>
                  <p className="text-neutral-500 text-xs">{post.date}</p>
                </Link>
              ))}
              <Link 
                to="/blog" 
                className="inline-block text-rose-400 hover:text-rose-300 text-sm font-medium transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </div>

          {/* Track Order Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Track Your Order</h3>
            <form onSubmit={handleTrackOrder} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter order number"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-4">Secure Shopping</h3>
              <div className="flex items-center space-x-2 text-neutral-400">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm">SSL Secured Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-neutral-800">
          <Link to="/about" className="text-neutral-400 hover:text-white text-sm transition-colors">
            About Us
          </Link>
          <Link to="/privacy" className="text-neutral-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-neutral-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </Link>
          <Link to="/sitemap" className="text-neutral-400 hover:text-white text-sm transition-colors">
            Sitemap
          </Link>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-sm text-center md:text-left">
            © {currentYear} KenyaBlooms. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}