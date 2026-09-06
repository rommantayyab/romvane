function About() {
  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>The Brand</span>
          <h2>About Romvane</h2>
        </div>

        <div className="split-section">
          <div className="image-placeholder" style={{ padding: 0 }}>
            <div className="anime-illustration">
              <svg width="45%" height="65%" viewBox="0 0 200 240" fill="none">
                <circle cx="150" cy="45" r="20" fill="#e8e8e8" opacity="0.9" />
                <path d="M0 240 L60 150 Q75 100 100 140 Q125 100 140 150 L200 240 Z" fill="#0d0d0d" stroke="#555" strokeWidth="1" />
                <path d="M75 145 Q100 115 125 145" stroke="#555" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
          <div className="text-block">
            <span>Our Story</span>
            <h2>Fashion Beyond The Ordinary</h2>
            <p>
              ROMVANE was created for individuals who seek fashion beyond ordinary trends. Every collection
              is designed to celebrate uniqueness, creativity, and self-expression through carefully curated
              designs, accessories, and custom creations.
            </p>
            <p>
              ROMVANE believes fashion should be more than clothing — it should be a form of self-expression,
              built for those who refuse to blend in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;