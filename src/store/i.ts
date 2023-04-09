import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  photos: string[];
  coverPhoto: string;
  specifications: {
    name: string;
    value: string;
  }[];
  availability: {
    quantity: number;
    deliveryDate: string;
  };
  category: string;
  subcategory: string;
  features: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartStore {
  cart: CartState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: (cart: CartState) => void;
}

// Define the initial cart state
const initialCartState: CartState = {
  items: [],
};

// Create the cart store
export const useCartState = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: initialCartState,
        addToCart: (item) => {
          console.log(item);
          set((state) => ({
            cart: {
              ...state.cart,
              items: [
                ...state.cart.items,
                {
                  product: item.product,
                  quantity: item.quantity,
                },
              ],
            },
          }));
        },
        removeFromCart: (id) => {
          set((state) => ({
            cart: {
              ...state.cart,
              items: state.cart.items.filter((item) => item.product._id !== id),
            },
          }));
        },
        clearCart: (cart) => {
          set(() => ({
            cart,
          }));
        },
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
