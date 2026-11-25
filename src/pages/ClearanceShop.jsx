import { useState } from "react";
import { Link } from "react-router-dom";
import bread from "../assets/images/white-bread.png";
import flour from "../assets/images/flour.png";
import cooking from "../assets/images/cooking-oil.png";
import milk from "../assets/images/milk.png";
import papai from "../assets/images/papai.png";
import potato from "../assets/images/potato.png";
import shrimp from "../assets/images/shrimp.png";
import strawberry from "../assets/images/strawberry.png";
import sugar from "../assets/images/sugar.png";
import meat from "../assets/images/meat.png";
import ugali from "../assets/images/ugali.png";
import mango from "../assets/images/mango.png";
import fish from "../assets/images/fish.png";
import brown from "../assets/images/brown-bread.png";
import grape from "../assets/images/grapes.png";
import greek from "../assets/images/greek.png";
import Data from "../componets/Data";
function ClearanceShop() {
  const [selectedDuka, setSelectedDuka] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = Data.filter((product) => {
    const matchesDuka =
      selectedDuka === "All" || product.dukaName === selectedDuka;
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.dukaName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDuka && matchesCategory && matchesSearch;
  });
  const [products] = useState([
    {
      id: 1,
      name: "Broadways Bread 500g",
      price: 60,
      originalPrice: 105,
      expiresIn: "3 hrs",
      image: bread,
      savePercent: 40,
      dukaName: "Kabere's Mini Mart",
    },
    {
      id: 2,
      name: "Unga Wa Dola 1kg",
      price: 60,
      originalPrice: 100,
      expiresIn: "12 hrs",
      image: flour,
      savePercent: 40,
      dukaName: "Adema's Groceries",
    },
    {
      id: 3,
      name: "Pwani Fresh Oil 500ml",
      price: 60,
      originalPrice: 100,
      expiresIn: "12 hrs",
      image: cooking,
      savePercent: 40,
      dukaName: "Zawadi Retail",
    },
    {
      id: 4,
      name: "Cowbell Milk Powder",
      price: 40,
      originalPrice: 400,
      expiresIn: "12 hrs",
      image: milk,
      savePercent: 90,
      dukaName: "Zack's Duka",
    },
    {
      id: 5,
      name: "Papai ",
      price: 40,
      originalPrice: 400,
      expiresIn: "12 hrs",
      image: papai,
      savePercent: 90,
      dukaName: " Zack's Duka",
    },
    {
      id: 6,
      name: "Potataoes",
      price: 40,
      originalPrice: 65,
      expiresIn: "1 day",
      image: potato,
      savePercent: 40,
      dukaName: "Kabere Fresh",
    },
    {
      id: 7,
      name: "Shrimp",
      price: 40,
      originalPrice: 100,
      expiresIn: "1 day",
      image: shrimp,
      savePercent: 60,
      dukaName: "Nuriah's Groceries",
    },
    {
      id: 8,
      name: "StrawBerry",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: strawberry,
      savePercent: 90,
      dukaName: "Nuriah's Groceries",
    },
    {
      id: 9,
      name: "Sugar",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: sugar,
      savePercent: 90,
      dukaName: "Nuriah's Groceries",
    },
    {
      id: 10,
      name: "Ugali flour",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: ugali,
      savePercent: 90,
      dukaName: "Ilagosa's Groceries",
    },
    {
      id: 11,
      name: "Mango",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: mango,
      savePercent: 90,
      dukaName: "Iminza's Groceries",
    },
    {
      id: 12,
      name: "meat",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: meat,
      savePercent: 90,
      dukaName: "Imiznza's Groceries",
    },

    {
      id: 13,
      name: "Brown Bread",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: brown,
      savePercent: 90,
      dukaName: "Adema's Groceries",
    },
    {
      id: 14,
      name: "Fish",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: fish,
      savePercent: 90,
      dukaName: "Adema's Groceries",
    },
    {
      id: 15,
      name: "Grape",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: grape,
      savePercent: 90,
      dukaName: "Iminza;s Groceries",
    },
    {
      id: 16,
      name: "Greek Yoghurt",
      price: 40,
      originalPrice: 400,
      expiresIn: "1 day",
      image: greek,
      savePercent: 90,
      dukaName: "Kabere's Groceries",
    },
  ]);

  const [watchlist, setWatchlist] = useState([
    {
      id: 1,
      name: "Broadways Bread 500g",
      price: 65,
      status: "Expiring soon",
      image: bread,
    },
    {
      id: 2,
      name: "Ugali flour",
      price: 65,
      status: "Expiring soon",
      image: ugali,
    },
    {
      id: 3,
      name: "Strawberry",
      price: 65,
      status: "Expiring soon",
      image: strawberry,
    },
  ]);

  const handleRemoveWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  return (
    <section className="container mx-auto mt-6 px-4 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl font-extrabold text-white tracking-tight uppercase">
                Clearance Deals Today
              </h1>
              <p className="text-xs text-slate-300">
                Verified, near-expiry groceries from local dukas (
                {filteredProducts.length} items)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full xl:w-auto">
              <select
                value={selectedDuka}
                onChange={(e) => setSelectedDuka(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-slate-200 text-xs focus:outline-none focus:border-teal-400 cursor-pointer"
              >
                <option value="All" className="bg-slate-900 text-white">
                  Browse by Duka (All)
                </option>
                <option
                  value="Kabere's Mini Mart"
                  className="bg-slate-900 text-white"
                >
                  Kabere's Mini Mart
                </option>
                <option
                  value="Iminza's Groceries"
                  className="bg-slate-900 text-white"
                >
                  Iminza's Groceries
                </option>
                <option
                  value="Kivuli Retail"
                  className="bg-slate-900 text-white"
                >
                  Kivuli Retail
                </option>
             
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-slate-200 text-xs focus:outline-none focus:border-teal-400 cursor-pointer"
              >
                <option value="All" className="bg-slate-900 text-white">
                  Product Category (All)
                </option>
                <option value="Baked Goods" className="bg-slate-900 text-white">
                  Baked Goods
                </option>
                <option
                  value="Grains & Flour"
                  className="bg-slate-900 text-white"
                >
                  Grains & Flour
                </option>
                <option
                  value="Cooking Oils"
                  className="bg-slate-900 text-white"
                >
                  Cooking Oils
                </option>
                <option value="Dairy" className="bg-slate-900 text-white">
                  Dairy
                </option>
                <option
                  value="Fresh Fruits"
                  className="bg-slate-900 text-white"
                >
                  Fresh Fruits
                </option>
                <option
                  value="Fresh Vegetables"
                  className="bg-slate-900 text-white"
                >
                  Fresh Vegetables
                </option>
                <option
                  value="Seafood & Meat"
                  className="bg-slate-900 text-white"
                >
                  Seafood & Meat
                </option>
                <option
                  value="Pantry Staples"
                  className="bg-slate-900 text-white"
                >
                  Pantry Staples
                </option>
              </select>

              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search milk, bread..."
                className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-teal-400 flex-1 xl:flex-initial"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)]"
              >
                <div className="relative rounded-xl overflow-hidden bg-white h-40 flex items-center justify-center p-3 mb-3">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full object-contain"
                    />
                  ) : (
                    <div className="text-slate-300 text-4xl font-black">📦</div>
                  )}

                  <span className="absolute bottom-0 left-0 w-full bg-amber-600/90 text-white text-center text-[11px] font-bold py-1 backdrop-blur-sm">
                    expires in {product.expiresIn}
                  </span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="font-bold text-xs text-white leading-tight line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 line-through">
                      KES {product.originalPrice}
                    </span>
                    <span className="text-[10px] text-slate-300">
                      Clearance Price
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-2 border-t border-white/10">
                  <div>
                    <span className="text-base font-extrabold text-white">
                      KES {product.price}
                    </span>
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-full">
                      SAVE {product.savePercent}%
                    </span>
                    <Link to={`/Single/${product.id}`}>
                      <button className="px-3 py-1 rounded-lg bg-teal-500/80 hover:bg-teal-500 text-white text-[11px] font-bold transition cursor-pointer">
                        Watch
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl flex items-center justify-between">
            <h2 className="text-base font-bold text-white tracking-tight">
              My Watchlist
            </h2>
            <button
              onClick={() => setWatchlist([])}
              className="text-xs text-teal-300 hover:underline cursor-pointer"
            >
              Clear All
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl space-y-3">
            {watchlist.length === 0 ? (
              <p className="text-center text-slate-300 text-xs py-8">
                Your watchlist is empty. Click 'Watch' on any deal to track it
                here.
              </p>
            ) : (
              watchlist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/40 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden p-1">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt=""
                          className="max-h-full object-contain"
                        />
                      ) : (
                        <span className="text-lg">🛒</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-300">
                        KES {item.price}
                      </p>
                      <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wide">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveWatchlist(item.id)}
                    className="w-6 h-6 rounded-lg bg-white/10 hover:bg-red-500/30 text-slate-300 hover:text-white flex items-center justify-center text-xs transition cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}

            {watchlist.length > 0 && (
              <button className="w-full py-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-xs shadow transition duration-200 cursor-pointer mt-2">
                Manage Alerts
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClearanceShop;
