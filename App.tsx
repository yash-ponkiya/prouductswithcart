import React, { useState } from "react";
import { CartProvider } from "./e-comm/CartContext";
import CreateAccount from "./e-comm/CreateAccount";
import CartScreen from "./e-comm/CartScreen";
import Toast from "react-native-toast-message";

export default function App() {
  const [screen, setScreen] = useState<"products" | "cart">("products");

  return (
    <CartProvider>
      {screen === "products" ? (
        <CreateAccount goToCart={() => setScreen("cart")} />
      ) : (
        <CartScreen goBack={() => setScreen("products")} />
      )}
      <Toast/>
    </CartProvider>
  );
}
