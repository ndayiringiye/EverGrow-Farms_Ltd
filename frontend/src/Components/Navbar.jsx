import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Sun, Moon, User } from 'lucide-react';
import { MdLogin } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 shadow-md">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold italic tracking-wide">
            logo
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-2.5 pr-12 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white shadow-md"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="text-green-500" size={20} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-gray-50 transition shadow-md"
            >
              {isDarkMode ? (
                <Sun className="text-gray-900" size={20} />
              ) : (
                <Moon className="text-gray-900" size={20} />
              )}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-gray-50 transition shadow-md relative"
              >
                <User className="text-gray-700" size={20} />
                <ChevronDown className="absolute -bottom-1 -right-1 text-gray-700 bg-white rounded-full" size={14} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-md divide-y divide-gray-100 z-50">
                  <div className="px-4 py-3 text-sm text-gray-900">
                    <div className="font-semibold">Bonnie Green</div>
                    <div className="text-gray-500 truncate">name@flowbite.com</div>
                  </div>
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition">
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 rounded-md"
                    >
                      <span className="flex justify-between items-center">
                        <span>Sign out</span>
                        <LiaSignOutAltSolid className="text-lg text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-white/30"></div>

        <nav className="flex items-center justify-between">
          <ul className="flex gap-8 text-white font-medium">
            <li>
              <a href="#" className="hover:text-gray-100 transition flex items-center gap-1">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition flex items-center gap-1">
                Visions
                <ChevronDown size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition flex items-center gap-1">
                Investment
                <ChevronDown size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition flex items-center gap-1">
                Impact
                <ChevronDown size={16} />
              </a>
            </li>
          </ul>

          <div className="flex gap-3">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-md font-medium shadow-md transition-all duration-300 hover:bg-gradient-to-r from-green-500 to-green-600 hover:border-2 hover:border-gray-900 hover:text-gray-900 hover:scale-105 ">
              Register
            </button>
            <button className="px-6 py-2 text-gray-900 border-2 border-gray-900 rounded-md font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-md">
              <div className="flex items-center justify-center gap-2">
                <span>Sign In</span>
                <MdLogin className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}