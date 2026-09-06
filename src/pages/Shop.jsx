import { useState } from "react";
import products from "../data/products";

const categories = ["All", "Jewelry", "Clothing", "Full Outfits", "Fragrance"];

function Shop() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title" style={{ marginBottom: "40px" }}>
          <span>The Full Collection</span>
          <h2>Shop</h2>
        </div>

        <div className="shop-controls">
          <div className="category-select">
            <button className="category-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {activeCategory} ▾
            </button>
            {dropdownOpen && (
              <div className="category-dropdown">
                {categories.map((cat) => (
                  <div key={cat} onClick={() => { setActiveCategory(cat); setDropdownOpen(false); }}>
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filtered.length === 0 && <p style={{ color: "#666" }}>No products match your search.</p>}

          {filtered.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-image">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <span
                  className={`wishlist-icon ${wishlist.includes(p.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(p.id)}
                >
                  {wishlist.includes(p.id) ? "❤" : "♡"}
                </span>
              </div>
              <div className="product-info">
                <h4>{p.name}</h4>
                <p className="price">Rs. {p.price.toLocaleString()}</p>
                <p className="tag">{p.category}</p>
                <button className="btn-outline">Book It</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;