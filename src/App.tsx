import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/contexts/AuthContext"
import { SmoothScroll } from "@/components/shared/SmoothScroll"
import { CinematicBackground } from "@/components/shared/CinematicBackground"
import { AnimatedRoutes } from "@/components/shared/AnimatedRoutes"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Buttery momentum scroll (igloo.inc-style feel) */}
        <SmoothScroll />
        {/* Persistent treasure-world atmosphere behind every route */}
        <CinematicBackground />
        {/* Routes with cinematic enter/exit transitions */}
        <AnimatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
