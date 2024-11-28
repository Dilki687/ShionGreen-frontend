import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import ContactUs from "./screens/ContactUs";
import OrderForm from "./screens/OrderForm";
import HomePage from "./screens/HomePage";
import AdminPage from "./screens/AdminPage";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./i18n";

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout />
      </div>
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Debugging route detection
  console.log("Current path:", location.pathname);

  return (
    <div className="layout-container">
      {/* Sidebar for admin route */}
      {isAdminRoute && <Sidebar />}

      <div className="content-wrapper">
  <NavBar />
  <main className="main-content">
    <HomePage />
  </main>
  <Footer />
</div>

    </div>
  );
};

export default App;


