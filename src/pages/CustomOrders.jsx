import { useState } from "react";

function CustomOrders() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", category: "Jewelry", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Create Something That Doesn't Exist Yet</span>
          <h2>Custom Orders</h2>
        </div>

        <div className="form-box">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Product Category</label>
                <select name="category" value={form.category} onChange={handleChange}>
                  <option>Jewelry</option>
                  <option>Clothing</option>
                  <option>Full Costume</option>
                  <option>Accessories</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Describe Your Dream Design</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="I want a black gothic necklace with red gemstones and moon-inspired details..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                Submit Request
              </button>
            </form>
          ) : (
            <div className="submit-msg">
              Your custom order request has been received. Our team will review your idea and contact you soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomOrders;