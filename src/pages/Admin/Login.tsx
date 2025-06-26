import React, { useEffect, useState } from "react";
import { LoginForm } from "../../components";
import authService from "../../services/auth";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check if user is already logged in (on page load)
  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (cookieFallback && cookieFallback != "[]") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authService.login({
        email: formData.email,
        password: formData.password,
      });

      // console.log("Login successful user id:", session?.userId);
      // console.log("Login successful email id:", session?.providerUid);

      setIsLoggedIn(true); // ✅ Update state
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password");
    }
  };

  // ✅ Logout Handler
  const handleLogout = async () => {
    const session = await authService.logout();
    setIsLoggedIn(false);
    console.log(session);
  };

  // ✅ Conditional UI
  return (
    <>
      {isLoggedIn ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>You are logged in</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm
          email={formData.email}
          password={formData.password}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Login;
