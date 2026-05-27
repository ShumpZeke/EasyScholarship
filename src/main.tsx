// Geist Variable is loaded as our primary sans-serif (premium dark/gold treatment).
// Imported here so it's available everywhere without a Google Fonts network call.
import "@fontsource-variable/geist"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
