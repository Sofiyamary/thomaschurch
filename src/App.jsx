import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";

import { AuthProvider }   from "./context/AuthContext";
import ProtectedRoute     from "./components/ProtectedRoute";
import Navbar             from "./components/Navbar";
import Footer             from "./components/Footer";

// Public pages
import Home     from "./pages/Home";
import About    from "./pages/About";
import Timings  from "./pages/Timings";
import Clergy   from "./pages/Clergy";
import Quiz     from "./pages/Quiz";
import Magazine from "./pages/Magazine";
import Contact  from "./pages/Contact";

// Admin pages
import AdminLogin     from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import BibleExamAdmin from "./pages/admin/BibleExamAdmin";
import MagazineAdmin  from "./pages/admin/MagazineAdmin";

/* Public layout with Navbar / Footer + page transitions */
function PublicRoutes() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"         element={<Home />}     />
            <Route path="/about"    element={<About />}    />
            <Route path="/timings"  element={<Timings />}  />
            <Route path="/clergy"   element={<Clergy />}   />
            <Route path="/quiz"     element={<Quiz />}     />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/contact"  element={<Contact />}  />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

/* Root: separates admin (no Navbar/Footer) from public */
function AppContent() {
  return (
    <Routes>
      {/* ── Admin routes (no Navbar / Footer) ── */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute><AdminDashboard /></ProtectedRoute>
      } />
      <Route path="/admin/bible-exam" element={
        <ProtectedRoute><BibleExamAdmin /></ProtectedRoute>
      } />
      <Route path="/admin/magazine" element={
        <ProtectedRoute><MagazineAdmin /></ProtectedRoute>
      } />

      {/* ── Public routes (with Navbar / Footer) ── */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MotionConfig reducedMotion="user">
          <AppContent />
        </MotionConfig>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
