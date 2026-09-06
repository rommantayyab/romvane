function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>ROMVANE</h4>
            <p>Wear the Unordinary.</p>
            <p>Rare creations for those who refuse ordinary fashion.</p>
          </div>

          <div>
            <h4>Shop</h4>
            <a href="/shop">All Products</a>
            <a href="/collections">Collections</a>
            <a href="/custom-orders">Custom Orders</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/founder">Founder</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="https://github.com/rommantayyab" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/romman-tayyab-567623418" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:rommantayyabcs@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">© 2026 ROMVANE. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;