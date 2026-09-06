import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Fixed path to point directly to src/index.css
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);