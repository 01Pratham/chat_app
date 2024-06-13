import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Loader from "./components/loader";

function LoaderWrapper() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <main style={{ display: loading ? "none" : "block" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoaderWrapper />
    </BrowserRouter>
  );
}

export default App;
