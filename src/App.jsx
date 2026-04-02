import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Timings from "./pages/Timings"
import Clergy from "./pages/Clergy"
import Quiz from "./pages/Quiz"
import Magazine from "./pages/Magazine"
import Contact from "./pages/Contact"

function App() {

  return (

    <BrowserRouter>

      {/* Main Layout */}

      <div className="min-h-screen flex flex-col overflow-x-hidden bg-white">

        <Navbar />

        {/* Page Content */}

        <main className="flex-1 flex flex-col">

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timings" element={<Timings />} />
            <Route path="/clergy" element={<Clergy />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  )

}

export default App