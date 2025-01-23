import { Modal } from '../ui/modal';
import { useStore } from '@/lib/store';
import { ShoppingCart } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesModal({ isOpen, onClose }: FavoritesModalProps) {
  const { favorites, toggleFavorite, addToCart } = useStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Your Favorites</h2>
      </div>

      {favorites.length === 0 ? (
        <p className="text-center text-neutral-600">No favorites yet</p>
      ) : (
        <div className="grid gap-6">
          {favorites.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-neutral-900">{item.name}</h3>
                <p className="text-rose-600">${item.price.toFixed(2)}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-1 text-sm text-rose-600 hover:text-rose-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleFavorite(item)}
                    className="text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}