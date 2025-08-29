import React, { useState, useRef, useEffect } from "react";
import logo1 from "../Images/logo1.png";
import speak from "../Images/speak.png";
import user from "../Images/Userimg.png";
import { FaExchangeAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import sidebar from '../Images/sidebar.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-screen bg-[rgb(52,113,52)] h-[58px] flex items-center justify-between px-5" style={{ backgroundImage: `url(${sidebar})`, backgroundPosition: "top", }}>
      {/* Left Side (Logo + Speak together) */}
      <div className="flex items-center gap-15">
        <img className="h-16 w-auto" src={logo1} alt="logo" />
        <img className="h-10 w-auto animate-pulse" src={speak} alt="speak" />
        <div className="overflow-hidden w-[300px]">
          <p className="text-white font-bold whitespace-nowrap animate-marquee">
            Welcome to VANKY12.COM
          </p>
        </div>
      </div>

      {/* User Profile with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <img
          className="rounded-xl w-10 h-10 cursor-pointer"
          src={user}
          alt="user"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
  <div className="absolute top-12 right-0 z-10 text-black rounded">
    <div className="border border-[rgb(52,113,52)] bg-white shadow-md w-45  ">
      {/* Profile Info */}
      <div className="flex items-center gap-3  pb-2">
        <img className="rounded-xl w-10 h-10" src={user} alt="profile" />
        <div className="text-sm font-light">
          <p className="font-medium">userID</p>
          <p>Username</p>
        </div>
      </div>

      {/* Switch Account Row */}
      <div className="flex items-center gap-2 mt-3 cursor-pointer border-b hover:bg-gray-100 p-2 border-[rgb(52,113,52)]">
        <FaExchangeAlt className="text-lg text-gray-700" />
        <span className="text-sm font-bold text-gray-700">Change password</span>
      </div>
      <div className="flex items-center gap-2 mt-3  cursor-pointer hover:bg-gray-100 p-2 rounded">
      <LuLogOut  className="text-lg text-gray-700" />
        <span className="text-sm font-bold text-gray-700">Logout</span>
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default Navbar;
