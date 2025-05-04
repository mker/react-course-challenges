import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import TipCalculator from "./TipCalculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TipCalculator />
  </StrictMode>
);
