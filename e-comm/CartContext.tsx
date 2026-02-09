import React, { createContext, useContext, useState } from "react";
import Toast from "react-native-toast-message";

export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  discountPrice?: number;
  size: string;
  qty: number;
  stock: number; // ✅ available stock
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQty: (id: number, size: string) => void;
  decreaseQty: (id: number, size: string) => void;
  removeFromCart: (id: number, size: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  /* ================= ADD TO CART ================= */
  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const index = prev.findIndex(
        p => p.id === item.id && p.size === item.size
      );

      // Item already exists
      if (index >= 0) {
        const existing = prev[index];

        if (existing.qty + item.qty > existing.stock) {
          Toast.show({
            type: "error",
            text1: "Stock limit reached",
            text2: `Only ${existing.stock} items available`,
          });
          return prev;
        }

        const updated = [...prev];
        updated[index].qty += item.qty;
        return updated;
      }

      // New item
      if (item.qty > item.stock) {
        Toast.show({
          type: "error",
          text1: "Out of stock",
          text2: `Only ${item.stock} items available`,
        });
        return prev;
      }

      return [...prev, item];
    });
  };

  /* ================= INCREASE QTY ================= */
  const increaseQty = (id: number, size: string) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id && item.size === size) {
          if (item.qty >= item.stock) {
            Toast.show({
              type: "error",
              text1: "Stock limit reached",
              text2: `Only ${item.stock} items available`,
            });
            return item;
          }
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  };

  /* ================= DECREASE QTY ================= */
  const decreaseQty = (id: number, size: string) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.size === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeFromCart = (id: number, size: string) => {
    setCart(prev =>
      prev.filter(item => !(item.id === id && item.size === size))
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
