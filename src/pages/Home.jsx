import { Link } from "react-router-dom";
import collections from "../data/collections.js";
import products from "../data/products.js";

function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="crown-icon">♛</div>
        <h1>ROMVANE</h1>
        <h3>Wear the Unordinary</h3>
        <p>
          Rare creations for those who refuse ordinary fashion — gothic jewelry,
          dark-fantasy clothing, and custom pieces built for individuality.
        </p>
        <div className="hero-buttons">
          <Link to="/shop" className="btn-primary">
            Explore Collection
          </Link>
          <Link to="/custom-orders" className="btn-outline">
            Custom Designs
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>Curated For You</span>
            <h2>Featured Collections</h2>
          </div>
          <div className="collections-grid">
            {collections.slice(0, 3).map((c) => (
              <div className="collection-card" key={c.id}>
                <img src={c.image} alt={c.name} className="card-img" />
                <div className="collection-card-overlay">
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-title">
            <span>Most Loved</span>
            <h2>Best Sellers</h2>
          </div>
          <div className="products-grid">
            {bestSellers.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image">
                  <img src={p.image} alt={p.name} className="card-img" />
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <p className="price">Rs. {p.price.toLocaleString()}</p>
                  <p className="tag">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-section">
            <div className="image-placeholder" style={{ padding: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
                alt="ROMVANE Brand"
                className="card-img"
              />
            </div>
            <div className="text-block">
              <span>The Brand</span>
              <h2>About Romvane</h2>
              <p>
                ROMVANE was created for individuals who seek fashion beyond
                ordinary trends. Every collection celebrates uniqueness,
                creativity, and self-expression through carefully curated
                products and custom creations.
              </p>
              <Link to="/about" className="btn-outline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="split-section">
            <div className="text-block">
              <span>Meet The Founder</span>
              <h2>Romman Tayyab</h2>
              <p>
                Founder & Creative Director of ROMVANE — web developer and the
                mind behind the brand's dark, unconventional identity.
              </p>
              <Link to="/founder" className="btn-outline">
                View Founder Profile
              </Link>
            </div>
            <div className="image-placeholder" style={{ padding: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
                alt="Romman Tayyab"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;