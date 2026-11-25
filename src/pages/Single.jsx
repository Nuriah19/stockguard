import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../componets/Data";
import { CartContext } from "../context/State";

function Single() {
  const { id } = useParams();
  const product = Data.find((item) => item.id === Number(id));

  const { cart, addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [statusMessage, setStatusMessage] = useState("");

  if (!product) {
    return (
      <section className="container mx-auto mt-16 px-4 text-center space-y-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-white">Product Not Found</h2>
          <p className="text-sm text-slate-300">
            This clearance item may have already been claimed or expired.
          </p>
          <Link
            to="/ClearanceShop"
            className="inline-block px-6 py-3 rounded-xl bg-teal-500 text-white font-bold text-sm"
          >
            Back to Clearance Shop
          </Link>
        </div>
      </section>
    );
  }

  const handleAddToCart = () => {
    const alreadyInCart = cart.some((item) => item.id === product.id);

    if (alreadyInCart) {
      setStatusMessage("Already in your cart! This clearance item has already been claimed.");
      return;
    }

    addToCart(product, quantity);
    setStatusMessage(`✓ Added ${quantity} × ${product.name} to your cart!`);
  };

  return (
    <section className="container mx-auto mt-8 px-4 pb-16 max-w-5xl space-y-6">
      <div>
        <Link
          to="/clearanceShop"
          className="inline-flex items-center gap-2 font-bold text-teal-300 hover:text-white transition text-1xl rounded-xl hover:bg-white/15"
        >
          ← Back to Clearance Deals
        </Link>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-2xl overflow-hidden bg-white h-72 md:h-96 flex items-center justify-center p-6 shadow-inner">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
            />
          ) : (
            <div className="text-slate-300 text-7xl font-black">📦</div>
          )}

          <span className="absolute top-4 left-4 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-extrabold px-3 py-1 rounded-full shadow">
            SAVE {product.savePercent}%
          </span>

          <span className="absolute bottom-0 left-0 w-full bg-amber-600/95 text-white text-center text-xs font-bold py-2.5 tracking-wide">
            Expires in {product.expiresIn} • Verified Safe
          </span>
        </div>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 font-semibold">
                {product.category}
              </span>
              <span className="text-slate-300">
                Sold by <strong className="text-white">{product.dukaName}</strong>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {product.name}
            </h1>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-baseline gap-4">
            <span className="text-3xl font-extrabold text-teal-300">
              KES {product.price}
            </span>
            <span className="text-sm text-slate-400 line-through">
              KES {product.originalPrice}
            </span>
            <span className="text-xs text-amber-300 font-semibold ml-auto">
              Clearance Deal
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Product Description
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {product.description}
            </p>
            <p className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-xl p-3">
              <strong className="text-amber-300">Storage Tip:</strong> {product.storageTip}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="flex items-center justify-between bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 sm:w-36">
              <button
                type="button"
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="text-white font-extrabold text-lg hover:text-teal-300 cursor-pointer"
              >
                −
              </button>
              <span className="text-white font-bold text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="text-white font-extrabold text-lg hover:text-teal-300 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 py-3.5 px-6 rounded-xl bg-amber-500/90 hover:bg-amber-500 border border-amber-300/50 text-white font-extrabold text-sm shadow-lg shadow-amber-950/40 transition duration-200 cursor-pointer"
            >
              Add to Cart • KES {product.price * quantity}
            </button>
          </div>

          {statusMessage && (
            <p className="text-xs font-bold text-amber-300 bg-white/10 border border-amber-400/30 rounded-xl p-3 text-center">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Single;