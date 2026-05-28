import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import { PageTransition } from "./PageTransition"
import { ProtectedRoute } from "./ProtectedRoute"
import Landing from "@/pages/Landing"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import ForgotPassword from "@/pages/ForgotPassword"
import Dashboard from "@/pages/Dashboard"

/**
 * All app routes wrapped in AnimatePresence so navigation animates instead of
 * hard-cutting. The `key={location.pathname}` forces the routed subtree to
 * remount on path change, which is what lets AnimatePresence run exit→enter.
 *
 * mode="wait" => the leaving page finishes its exit before the next enters,
 * so we never see two pages overlapping mid-transition.
 *
 * Landing uses cinematic={false} (opacity-only) so its fixed 3D canvas keeps
 * working — a blur/scale on the wrapper would break position:fixed.
 */
export function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition cinematic={false}>
              <Landing />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/signup"
          element={
            <PageTransition>
              <Signup />
            </PageTransition>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PageTransition>
              <ForgotPassword />
            </PageTransition>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
