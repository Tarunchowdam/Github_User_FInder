import React from "react";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import UserInfo from "./Routes/UserInfo";
import Users from "./Routes/Users";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="appContainer">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:name" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
