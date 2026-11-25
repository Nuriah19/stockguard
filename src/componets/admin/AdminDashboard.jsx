import { useState, useEffect } from "react";
import Data from "../Data";

function Admin() {
  
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("stockguard_inventory");
      return saved ? JSON.parse(saved) : Data;
    } catch {
      return Data;
    }
  });

  
  const [soldCount, setSoldCount] = useState(() => {
    return Number(localStorage.getItem("stockguard_sold_count")) || 124;
  });

  const [activityLog, setActivityLog] = useState(() => {
    try {
      const saved = localStorage.getItem("stockguard_activity");
      return saved
        ? JSON.parse(saved)
        : [
            { id: 1, text: "Marked Bread (Adema's Mini Mart) as Sold", time: "10 mins ago" },
            { id: 2, text: "Listed Fresh Milk at Iminza's Grocery", time: "1 hour ago" },
            { id: 3, text: "Updated clearance price on Cooking Oil", time: "3 hours ago" },
          ];
    } catch {
      return [];
    }
  });

  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL"); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    dukaName: "Adema's Mini Mart",
    category: "Dairy & Bakery",
    price: "",
    originalPrice: "",
    expiresIn: "6 hours",
    storageTip: "Keep refrigerated or in a cool, dry place.",
    description: "",
    image: "",
  });

  
  useEffect(() => {
    localStorage.setItem("stockguard_inventory", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("stockguard_sold_count", String(soldCount));
  }, [soldCount]);

  useEffect(() => {
    localStorage.setItem("stockguard_activity", JSON.stringify(activityLog));
  }, [activityLog]);

  const addLog = (text) => {
    setActivityLog((prev) => [
      { id: Date.now(), text, time: "Just now" },
      ...prev.slice(0, 6),
    ]);
  };
  const isUrgent = (expiresIn = "") => {
    const lower = String(expiresIn).toLowerCase();
    return lower.includes("hour") || lower.includes("today") || lower.includes("1 day");
  };


  const activeCount = products.length;
  const expiringSoonCount = products.filter((p) => isUrgent(p.expiresIn)).length;
  const totalRevenue = products.reduce(
    (sum, p) => sum + (Number(String(p.price).replace(/[^0-9.]/g, "")) || 0),
    0
  );
  const foodSavedKg = (soldCount * 1.5).toFixed(0); 

  
  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dukaName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterStatus === "URGENT") {
      return matchesSearch && isUrgent(item.expiresIn);
    }
    return matchesSearch;
  });

  
  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      dukaName: "Adema's Mini Mart",
      category: "Dairy & Bakery",
      price: "",
      originalPrice: "",
      expiresIn: "6 hours",
      storageTip: "Keep refrigerated or in a cool, dry place.",
      description: "",
      image: "",
    });
    setIsModalOpen(true);
  };

  
  const openEditModal = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name || "",
      dukaName: product.dukaName || "Adema's Mini Mart",
      category: product.category || "Groceries",
      price: product.price || "",
      originalPrice: product.originalPrice || "",
      expiresIn: product.expiresIn || "2 days",
      storageTip: product.storageTip || "",
      description: product.description || "",
      image: product.image || "",
    });
    setIsModalOpen(true);
  };

  
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const cleanPrice = Number(formData.price) || 0;
    const cleanOriginal = Number(formData.originalPrice) || cleanPrice * 2;
    const savePercent =
      cleanOriginal > 0
        ? Math.round(((cleanOriginal - cleanPrice) / cleanOriginal) * 100)
        : 50;

    if (editingId) {
      setProducts((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                ...formData,
                price: cleanPrice,
                originalPrice: cleanOriginal,
                savePercent,
              }
            : item
        )
      );
      addLog(`Edited "${formData.name}" (${formData.dukaName})`);
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: cleanPrice,
        originalPrice: cleanOriginal,
        savePercent,
      };
      setProducts((prev) => [newProduct, ...prev]);
      addLog(`Added "${formData.name}" at ${formData.dukaName}`);
    }

    setIsModalOpen(false);
  };

  
  const handleMarkSold = (product) => {
    setProducts((prev) => prev.filter((item) => item.id !== product.id));
    setSoldCount((prev) => prev + 1);
    addLog(`Marked "${product.name}" (${product.dukaName}) as Sold`);
  };

  
  const handleDelete = (product) => {
    setProducts((prev) => prev.filter((item) => item.id !== product.id));
    addLog(`Removed "${product.name}" from listings`);
  };

  return (
    <section className="container mx-auto mt-8 px-4 pb-20 max-w-7xl space-y-8">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-300">
            StockGuard Control Center
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Overview
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search item or duka..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-300 text-sm focus:outline-none focus:border-teal-400"
          />
          <button
            type="button"
            onClick={openAddModal}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-extrabold text-sm shadow-lg shadow-teal-950/40 transition cursor-pointer"
          >
            + Add Clearance Item
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl space-y-1">
          <p className="text-xs font-semibold text-slate-300">
            Active Clearance Items
          </p>
          <p className="text-3xl font-extrabold text-white">{activeCount}</p>
          <p className="text-xs text-teal-300 font-medium">Live Products</p>
        </div>

        <div className="bg-amber-500/15 backdrop-blur-md border border-amber-400/30 rounded-2xl p-5 shadow-xl space-y-1">
          <p className="text-xs font-semibold text-amber-200">
            Expiring Soon (&lt;24h)
          </p>
          <p className="text-3xl font-extrabold text-amber-300">
            {expiringSoonCount}
          </p>
          <p className="text-xs text-amber-200/80 font-medium">
            Requires Attention
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl space-y-1">
          <p className="text-xs font-semibold text-slate-300">
            Total Potential Revenue
          </p>
          <p className="text-3xl font-extrabold text-white">
            KES {totalRevenue.toLocaleString()}
          </p>
          <p className="text-xs text-teal-300 font-medium">
            Projected Earnings
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl space-y-1">
          <p className="text-xs font-semibold text-slate-300">
            Food Saved / Waste Prevented
          </p>
          <p className="text-3xl font-extrabold text-teal-300">
            {Number(foodSavedKg).toLocaleString()} KG
          </p>
          <p className="text-xs text-slate-300 font-medium">Impact Metric</p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-extrabold text-white">
              Inventory &amp; Expiry Table
            </h2>

            <div className="flex items-center gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => setFilterStatus("ALL")}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterStatus === "ALL"
                    ? "bg-teal-500 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                All ({products.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterStatus("URGENT")}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  filterStatus === "URGENT"
                    ? "bg-amber-500 text-white"
                    : "bg-white/10 text-slate-300 hover:bg-white/20"
                }`}
              >
                Urgent &lt;24h ({expiringSoonCount})
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-slate-300">
                  <th className="py-3 px-2">Item</th>
                  <th className="py-3 px-2">Duka / Mini-Mart</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Price vs. Original</th>
                  <th className="py-3 px-2">Expiry Status</th>
                  <th className="py-3 px-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {filteredProducts.map((item) => {
                  const urgent = isUrgent(item.expiresIn);
                  return (
                    <tr
                      key={item.id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3.5 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center p-1 shrink-0 overflow-hidden">
                            {item.image ? (
                              <img
                                src={item.image}
                                alt={item.name}
                                className="max-h-full object-contain"
                              />
                            ) : (
                              <span>📦</span>
                            )}
                          </div>
                          <span className="font-bold text-white">
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-2 text-slate-200 font-medium">
                        {item.dukaName}
                      </td>
                      <td className="py-3.5 px-2 text-slate-300 text-xs">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-2">
                        <span className="font-extrabold text-teal-300">
                          KES {item.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through ml-1.5">
                          KES {item.originalPrice}
                        </span>
                      </td>
                      <td className="py-3.5 px-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold ${
                            urgent
                              ? "bg-red-500/25 text-red-200 border border-red-400/40"
                              : "bg-teal-500/20 text-teal-200 border border-teal-400/30"
                          }`}
                        >
                          {item.expiresIn}
                        </span>
                      </td>
                      <td className="py-3.5 px-2 text-right">
                        <div className="inline-flex items-center gap-2 text-xs font-bold">
                          <button
                            type="button"
                            onClick={() => openEditModal(item)}
                            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMarkSold(item)}
                            className="px-2.5 py-1 rounded-lg bg-teal-500/25 hover:bg-teal-500/40 text-teal-200 border border-teal-400/30 cursor-pointer"
                          >
                            ✓ Sold
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(item)}
                            className="px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 cursor-pointer"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {filteredProducts.length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-8 text-center text-slate-300 text-sm"
                    >
                      No clearance items match your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

    
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl space-y-4">
          <h2 className="text-lg font-extrabold text-white border-b border-white/10 pb-3">
            Recent Activity Log
          </h2>
          <div className="space-y-3">
            {activityLog.map((log) => (
              <div
                key={log.id}
                className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1"
              >
                <p className="text-xs font-semibold text-white">{log.text}</p>
                <p className="text-[11px] text-teal-300">{log.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-white">
                {editingId ? "Edit Clearance Item" : "Add Clearance Item"}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Supa Loaf White Bread 400g"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Duka / Mini-Mart
                  </label>
                  <select
                    value={formData.dukaName}
                    onChange={(e) =>
                      setFormData({ ...formData, dukaName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-white/20 text-white"
                  >
                    <option value="Adema's Mini Mart">Adema&apos;s Mini Mart</option>
                    <option value="Iminza's Grocery">Iminza&apos;s Grocery</option>
                    <option value="Kabere's Mini Mart">Kabere&apos;s Mini Mart</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dairy & Bakery"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Clearance (KES)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="50"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Original (KES)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="100"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        originalPrice: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Expires In
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="4 hours"
                    value={formData.expiresIn}
                    onChange={(e) =>
                      setFormData({ ...formData, expiresIn: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Image URL (optional)
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-slate-300 font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-extrabold cursor-pointer"
                >
                  {editingId ? "Save Changes" : "Publish Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Admin;