import React, { useState } from "react"
import { LoginForm } from "../../components"
import authService from "../../services/auth";

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const session = await authService.login({
            email: formData.email,
            password: formData.password,
            });
            console.log("Login successful:", session);

            // Optional: redirect user after login
            // navigate("/dashboard"); // if you're using react-router
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid email or password");
        }
    };
  
    return (
      <LoginForm
        email={formData.email}
        password={formData.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  };

export default Login