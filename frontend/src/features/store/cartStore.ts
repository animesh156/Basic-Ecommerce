import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  actualPrice: number;
  image: string;
  rating: number;
  quantity: number;
};

export type NewCartItem = Omit<CartItem, "quantity"> & { quantity?: number };

type CartState = {
  cart: CartItem[];
  addToCart: (item: NewCartItem) => void;

  // subtotal is a FUNCTION that returns number
  subtotal: () => number;

  clearCart: () => void; // 🆕 clear all items
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),

  // GIVE TOTAL AMOUNT OF CART ITEMS
  subtotal: () =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  // 🆕 Clears entire cart
  clearCart: () => set({ cart: [] }),
}));
