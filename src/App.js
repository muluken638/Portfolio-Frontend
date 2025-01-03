import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ProjectDetail from "./pages/ProjectDetail";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDshboard from "./pages/Admin/AdminDshboard";
import AdminLayout from "./pages/Admin/Layouts/AdminLayout";
import RegisterPortfolio from "./pages/Admin/RegisterPortfolio";
import { AuthProvider } from "./components/auth/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminProfile from "./pages/Admin/AdminProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* public links  */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Skills />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="project/:id" element={<ProjectDetail />} />
          </Route>
          {/* ProtectedRoute for Admin Only */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="admindashboard" element={<AdminDshboard />} />
            <Route path="projects" element={<RegisterPortfolio />} />
            <Route path="profiles" element={<AdminProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
