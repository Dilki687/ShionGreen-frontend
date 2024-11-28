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

      <div className={isAdminRoute ? "content-wrapper flex-grow-1" : "content-wrapper"}>
        {!isAdminRoute && <NavBar />}

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/orderform" element={<OrderForm />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        {!isAdminRoute && <Footer />}
      </div>
    </div>
  );
};

export default App;
