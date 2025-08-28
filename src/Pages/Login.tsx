import React, { useState } from "react";
import loginimg from "../Images/Loginbg.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { IoWarningOutline } from "react-icons/io5";
import logo from "../Images/logo.png";

const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user || !password) {
      setError("User ID and Password are required.");
      return;
    }

    // Example dummy validation (replace with API call later)
    if (user === "Sm365941" && password === "123456") {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${loginimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="rounded-xl p-8 h-[600px] w-[500px] flex flex-col items-center shadow-lg"
        style={{
          backgroundColor: "rgba(0, 25, 0, 0.7)",
          border: "2px solid #7CFF4E",
        }}
      >
        <img src={logo} alt="logo" className="w-32 h-auto mb-8" />

        {/* User ID */}
        <div className="w-full mb-6">
          <label
            htmlFor="userid"
            className="text-white font-semibold mb-2 flex items-center gap-2"
          >
            <FaRegUserCircle className="text-green-400" />
            User ID
          </label>
          <input
            id="userid"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Sm365941"
            className="w-full px-6 py-3 rounded-xl bg-white text-black placeholder-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="w-full mt-10">
          <label
            htmlFor="password"
            className="text-white font-semibold mb-2 flex items-center gap-2"
          >
            <RiLock2Fill className="text-green-400" />
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            className="w-full px-6 py-3 rounded-xl bg-white text-black placeholder-gray-400 outline-none border border-gray-300 focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm font-semibold mt-4">{error}</p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-10 w-full py-3 rounded-xl border-2 border-green-400 text-white font-semibold hover:bg-green-400 hover:text-black transition duration-300"
        >
          Log In Now
        </button>

        {/* Notes */}
        <p
          className="text-red-500 text-sm font-semibold mt-10 px-4 py-2 rounded-full text-center"
          style={{ backgroundColor: "rgb(235, 222, 222)" }}
        >
          Note - Only 10 Wrong Password attempts are valid.
        </p>

        <p className="text-gray-200 text-xs mt-4 flex items-center gap-2">
          <IoWarningOutline className="text-green-400" />
          Note - This Website is not for Indian Territory.
        </p>
      </div>
    </div>
  );
};

export default Login;
