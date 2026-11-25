import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function State({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("stockguard_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("stockguard_cart", JSON.stringify(cart));
  }, [cart]);

  const getPrice = (item) => {
    const raw = item.price ?? item.clearancePrice ?? item.discountPrice ?? 0;
    return Number(String(raw).replace(/[^0-9.]/g, "")) || 0;
  };

  const addToCart = (product) => {
    if (!product || !product.id) return;
    const cleanPrice = getPrice(product);

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, price: cleanPrice, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + getPrice(item) * (item.quantity || 1),
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default State;
