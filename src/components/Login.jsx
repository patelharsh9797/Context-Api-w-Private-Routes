import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/useAllContext";

const Login = () => {
  const [kahaJanaHe, setkahaJanaHe] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.fromWhere || `/${kahaJanaHe}`;

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser();
    console.log("User Logged In");
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={kahaJanaHe}
          onChange={(e) => setkahaJanaHe(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
