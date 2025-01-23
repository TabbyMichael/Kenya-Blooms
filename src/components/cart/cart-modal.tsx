import { Modal } from '../ui/modal';
import { useStore } from '@/lib/store';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateCartQuantity, cartTotal } = useStore();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Your Cart</h2>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-neutral-600">Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-neutral-900">{item.name}</h3>
                <p className="text-rose-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateCartQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 text-neutral-600 hover:text-rose-600 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-neutral-600 hover:text-rose-600 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-auto p-1 text-neutral-600 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t border-neutral-200 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>${cartTotal().toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => {/* Implement checkout */}}
            className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </Modal>
  );
}