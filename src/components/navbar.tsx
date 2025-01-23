import { ShoppingCart, User, Heart, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthModal } from './auth/auth-modal';
import { CartModal } from './cart/cart-modal';
import { FavoritesModal } from './favorites/favorites-modal';
import { useStore } from '@/lib/store';

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const cartCount = useStore((state) => state.cartCount());
  const favoritesCount = useStore((state) => state.favoritesCount());

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Flower className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold text-neutral-900">KenyaBlooms</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/shop" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-900">
              Shop
            </Link>
            <Link to="/custom" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Custom Bouquets
            </Link>
            <Link to="/occasions" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Occasions
            </Link>
            <Link to="/blog" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-neutral-500 hover:text-neutral-900">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFavoritesModalOpen(true)}
              className="text-neutral-500 hover:text-neutral-900 relative"
            >
              <Heart className="h-6 w-6" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsCartModalOpen(true)}
              className="text-neutral-500 hover:text-neutral-900 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="text-neutral-500 hover:text-neutral-900"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
      />
    </nav>
  );
}