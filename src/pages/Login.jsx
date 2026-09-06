import { useState } from "react";

function Login() {
  const [mode, setMode] = useState("signin");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section page-hero">
      <div className="container">
        <div className="section-title">
          <span>Account</span>
          <h2>{mode === "signin" ? "Sign In" : "Create Account"}</h2>
        </div>

        <div className="form-box">
          {submitted ? (
            <div className="submit-msg">
              {mode === "signin" ? "Signed in successfully." : "Account created successfully."}
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                {mode === "signup" && (
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required />
                  </div>
                )}

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>

                {mode === "signup" && (
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required />
                  </div>
                )}

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" required />
                </div>

                {mode === "signup" && (
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required />
                  </div>
                )}

                {mode === "signup" && (
                  <div className="form-group" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <input type="checkbox" required style={{ width: "auto" }} />
                    <label style={{ margin: 0, textTransform: "none", letterSpacing: 0, fontSize: "13px" }}>
                      I agree to the Terms & Conditions
                    </label>
                  </div>
                )}

                <button type="submit" className="btn-primary" style={{ width: "100%" }}>
                  {mode === "signin" ? "Login" : "Create Account"}
                </button>
              </form>

              <p style={{ marginTop: "24px", textAlign: "center", fontSize: "13px", color: "#888" }}>
                {mode === "signin" ? (
                  <>Don't have an account?{" "}
                    <span style={{ color: "#fff", cursor: "pointer", borderBottom: "1px solid #fff" }} onClick={() => setMode("signup")}>
                      Create one
                    </span>
                  </>
                ) : (
                  <>Already have an account?{" "}
                    <span style={{ color: "#fff", cursor: "pointer", borderBottom: "1px solid #fff" }} onClick={() => setMode("signin")}>
                      Sign in
                    </span>
                  </>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;