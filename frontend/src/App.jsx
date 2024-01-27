import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Sendmoney from "./pages/Sendmoney";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Sendmoney />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
