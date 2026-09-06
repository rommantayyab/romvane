function Founder() {
  const projects = [
    { name: "Tech Landing Page", link: "https://tech-landing-page-8r5f3el6r-rommanxx.vercel.app" },
    { name: "PlayIt", link: "https://playit-bqbmd8sx4-rommanxx.vercel.app" },
    { name: "Responsive Product Grid", link: "https://responsiveproductgrid-k05j0oeg3-rommanxx.vercel.app" },
    { name: "Login Form", link: "https://loginform-drab-three.vercel.app" },
    { name: "Login App", link: "https://loginapp-smef.vercel.app" },
    { name: "Responsive App", link: "https://responsiveapp-28pb2u1jl-rommanxx.vercel.app" },
  ];

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="founder-hero" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px" }}>
          <div>
            <span>Founder & Creative Director</span>
            <h1>Romman Tayyab</h1>
            <h4>Web Developer • Digital Creator • Founder of ROMVANE</h4>
          </div>
          <div style={{ maxWidth: "320px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80"
              alt="Romman Tayyab"
              style={{ width: "100%", height: "auto", display: "block" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "70px" }}>
          <div className="founder-block">
            <h2>About Me</h2>
            <p>
              I am Romman Tayyab, a front-end web developer building expertise in modern web development and digital products.
              My goal is to create impactful digital experiences and build successful technology businesses.
            </p>
          </div>

          <div className="founder-block">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Web Development</h4>
                <ul>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Responsive Web Design</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Technology</h4>
                <ul>
                  <li>Python Fundamentals</li>
                  <li>Database Concepts</li>
                  <li>Networking Basics</li>
                  <li>Operating Systems</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Creative & Professional</h4>
                <ul>
                  <li>Video & Image Editing</li>
                  <li>Digital Marketing Fundamentals</li>
                  <li>Communication Skills</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="founder-block">
            <h2>Projects</h2>
            <div className="project-list">
              {projects.map((p, i) => (
                <div className="project-item" key={i}>
                  <h4>{p.name}</h4>
                  <a href={p.link} target="_blank" rel="noreferrer">View Live Demo →</a>
                </div>
              ))}
            </div>
          </div>

          <div className="founder-block">
            <h2>Why I Created ROMVANE</h2>
            <p>
              ROMVANE was created to offer unique and expressive fashion collections inspired by creativity,
              individuality, and alternative aesthetics. The vision behind the brand is to give customers
              distinctive products that are difficult to find in traditional marketplaces, allowing them to
              express their personality through carefully curated designs and custom creations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;