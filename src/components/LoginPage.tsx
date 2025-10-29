import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const savedNameOnLocal = () => {
    if (name.trim().length > 0) {
      localStorage.setItem("userName", name);
      setError("");

      navigate("/dashboard");
    } else {
      setError("Please enter your name");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center   p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Enter Your Name
        </h1>
        <div className="flex flex-col items-center gap-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-xs px-4 py-2 text-center"
            placeholder="Enter Your Name"
          />

          <Button onClick={savedNameOnLocal} variant="default" className="w-full max-w-xs">
            Login
          </Button>
        </div>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm text-center animate-pulse">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
