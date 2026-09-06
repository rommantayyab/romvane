import products from "../data/products.js";

function Shop() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Our Store</span>
          <h2>All Products</h2>
        </div>
        <div className="products-grid">
          {products.map((p) => (
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
  );
}

export default Shop;