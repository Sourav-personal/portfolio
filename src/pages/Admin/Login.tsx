import React, { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm";
import authService from "../../services/auth";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm<{email: string, password: string}>();

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (cookieFallback && cookieFallback !== "[]") {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = async (data: {email: string, password: string}) => {
    try {
      await authService.login(data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password");
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>You are logged in</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm register={register} onSubmit={handleSubmit(onSubmit)} />
      )}
    </>
  );
};

export default Login;