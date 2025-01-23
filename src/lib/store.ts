import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface StoreState {
  cart: CartItem[];
  favorites: FavoriteItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  cartCount: () => number;
  favoritesCount: () => number;
  cartTotal: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      favorites: [],
      
      addToCart: (item) => set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id);
        if (existingItem) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      updateCartQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),

      toggleFavorite: (item) =>
        set((state) => {
          const exists = state.favorites.some((i) => i.id === item.id);
          if (exists) {
            return {
              favorites: state.favorites.filter((i) => i.id !== item.id),
            };
          }
          return { favorites: [...state.favorites, item] };
        }),

      cartCount: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },

      favoritesCount: () => {
        const { favorites } = get();
        return favorites.length;
      },

      cartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'kenyablooms-store',
    }
  )
);