import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/State";

function Cart() {
  const { cart, setCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext)

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return (
      <section className="container mx-auto mt-20 px-4 text-center space-y-6 pb-20">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-lg mx-auto space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cart is Empty !!!!
          </h2>
          <p className="text-sm text-slate-300 font-medium">
            Go Shop my dear dont be stingy 🤣
          </p>
          <Link
            to="/ClearanceShop"
            className="inline-block px-8 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-white font-extrabold text-2xl shadow-lg shadow-teal-950/40 transition duration-200"
          >
            Go Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto mt-8 px-4 pb-20 max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-white tracking-tight uppercase">
          Your Clearance Cart ({cart.length})
        </h1>
        <Link
          to="/clearanceShop"
          className="text-2xl font-bold text-teal-300 hover:underline "
        >
          ← Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2 shrink-0 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl">📦</span>
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-xs text-slate-300">KES {item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-white/20 px-3 py-1 rounded text-white"
                    >
                      -
                    </button>

                    <span className="text-white font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-teal-500 px-3 py-1 rounded text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <span className="text-sm font-extrabold text-teal-300 block">
                  KES {item.price * item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/30 text-xs font-bold transition cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white tracking-tight border-b border-white/10 pb-3">
            Order Summary
          </h3>
          <div className="flex justify-between text-xs text-slate-300">
            <span>Total Items</span>
            <span className="font-bold text-white">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <div className="flex justify-between text-sm font-extrabold text-white pt-2 border-t border-white/10">
            <span>Total Amount</span>
            <span className="text-teal-300">
              KES {totalPrice.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
         
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-extrabold text-xs shadow-lg shadow-amber-950/40 transition duration-200 cursor-pointer mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
    
  );
}

export default Cart;
