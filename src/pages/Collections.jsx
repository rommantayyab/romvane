import collections from "../data/collections.js";

function Collections() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Explore Aesthetic</span>
          <h2>Collections</h2>
        </div>
        <div className="collections-grid">
          {collections.map((c) => (
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
  );
}

export default Collections;import collections from "../data/collections.js";

function Collections() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Explore Aesthetic</span>
          <h2>Collections</h2>
        </div>
        <div className="collections-grid">
          {collections.map((c) => (
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
  );
}

export default Collections;