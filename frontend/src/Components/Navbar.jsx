import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, Sun, Moon, User, ChevronRight, Menu, X, LogIn, LogOut, Sparkles } from 'lucide-react';

const dropdownData = {
  Visions: [
    {
      heading: 'Why Invest',
      links: [
        { label: 'Overview', href: '/why-invest', description: 'Discover investment opportunities' },
      ],
    },
    {
      heading: 'Funding Plan',
      links: [
        { label: 'Overview', href: '/funding-plan', description: 'Explore funding strategies' },
      ],
    },
    {
      heading: 'Financials',
      links: [
        { label: 'Overview', href: '/financials', description: 'Review financial reports' },
      ],
    },
    {
      heading: 'Become a Partner',
      links: [
        { label: 'Apply', href: '/become-a-partner', description: 'Join our partner network' },
      ],
    },
  ],
  Investment: [
    {
      heading: 'Pig Farming',
      links: [
        { label: 'Overview', href: '/pig-farming', description: 'Modern farming solutions' },
      ],
    },
    {
      heading: 'Breeding Program',
      links: [
        { label: 'Overview', href: '/breeding-program', description: 'Advanced breeding techniques' },
      ],
    },
    {
      heading: 'Training Services',
      links: [
        { label: 'Overview', href: '/training-services', description: 'Professional training programs' },
      ],
    },
  ],
  Services: [
    {
      heading: 'Advisory',
      links: [
        { label: 'Farm Setup', href: '/services/farm-setup', description: 'Complete farm solutions' },
        { label: 'Financial Advisory', href: '/services/financial-advisory', description: 'Expert financial guidance' },
        { label: 'Operations Consulting', href: '/services/operations-consulting', description: 'Optimize your operations' },
      ],
    },
    {
      heading: 'Products',
      links: [
        { label: 'Pork', href: '/services/pork', description: 'Premium quality pork' },
        { label: 'Fertilizer', href: '/services/fertilizer', description: 'Organic fertilizer solutions' },
        { label: 'Feed', href: '/services/feed', description: 'Nutritious animal feed' },
      ],
    },
  ],
  Impact: [
    {
      heading: 'Social Impact',
      links: [
        { label: 'Overview', href: '/social-impact', description: 'Community empowerment' },
      ],
    },
    {
      heading: 'Environmental Impact',
      links: [
        { label: 'Overview', href: '/environmental-impact', description: 'Sustainable practices' },
      ],
    },
    {
      heading: 'Youth Empowerment',
      links: [
        { label: 'Overview', href: '/youth-empowerment', description: 'Building future leaders' },
      ],
    },
  ],
};

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); 
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme-dark');
    if (saved === '1') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme-dark', isDarkMode ? '1' : '0');
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeAll = () => { setActiveMenu(null); setMobileOpen(false); };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500/95 to-green-600/95 dark:from-slate-900/95 dark:to-slate-800/95 backdrop-blur-lg shadow-lg border-b border-white/10 dark:border-white/5 transition-colors duration-300">
      <div className="px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">

          <a href="/" className="text-white text-2xl font-bold italic tracking-wide hover:opacity-90 transition-opacity">
            logo
          </a>

          <div className="hidden md:block flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-5 py-2.5 pr-12 rounded-full bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 shadow-md transition-all duration-300"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="text-green-500 dark:text-green-400" size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-full hover:bg-green-50 dark:hover:bg-slate-600 transition-all duration-300 shadow-md hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="text-yellow-500" size={20} />
              ) : (
                <Moon className="text-slate-700" size={20} />
              )}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-700 rounded-full hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 shadow-md hover:scale-105 relative"
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
              >
                {isLoggedIn ? (
                  <img src="https://i.pravatar.cc/40" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <>
                    <User className="text-gray-700 dark:text-gray-200" size={20} />
                    <ChevronDown className={`absolute -bottom-1 -right-1 text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-700 rounded-full transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={14} />
                  </>
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 divide-y divide-gray-100 dark:divide-slate-700 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-700">
                    <div className="font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 truncate">name@flowbite.com</div>
                  </div>
                  <ul className="py-2">
                    <li>
                      <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-slate-700 transition-colors duration-200">
                        <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Sparkles size={16} className="text-green-600 dark:text-green-400" />
                        </div>
                        <span>Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-slate-700 transition-colors duration-200">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <User size={16} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <span>Settings</span>
                      </a>
                    </li>
                  </ul>
                  <div className="py-2">
                    <a
                      href="#"
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group"
                    >
                      <span className="font-medium">Sign out</span>
                      <LogOut className="text-red-500 dark:text-red-400 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-white/30 dark:border-white/10"></div>

        <nav className="items-center justify-between relative hidden md:flex">
          <ul className="flex gap-8 text-white font-medium">
            <li className="relative">
              <a href="/" className="hover:text-gray-100 dark:hover:text-green-400 transition-colors duration-200 flex items-center gap-1">
                Home
              </a>
            </li>

            {['Visions', 'Investment', 'Services', 'Impact'].map((menu) => (
              <li
                key={menu}
                className="relative group"
              >
                <button 
                  className="hover:text-gray-100 dark:hover:text-green-400 transition-colors duration-200 flex items-center gap-1"
                  onMouseEnter={() => setActiveMenu(menu)}
                >
                  {menu}
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeMenu === menu ? 'rotate-180' : ''}`} />
                </button>

                {activeMenu === menu && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-50"
                    onMouseEnter={() => setActiveMenu(menu)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="min-w-[720px] max-w-[860px] bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="grid grid-cols-4 gap-0">
                        {dropdownData[menu].map((col, idx) => (
                          <div key={idx} className="p-6 border-r last:border-r-0 border-gray-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 rounded-full"></div>
                              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{col.heading}</div>
                            </div>
                            <ul className="space-y-1">
                              {col.links.map((link, i) => (
                                <li key={i}>
                                  <a
                                    href={link.href}
                                    className="group/link block rounded-xl px-3 py-3 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 dark:hover:from-slate-700 dark:hover:to-slate-700 transition-all duration-200"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex-1">
                                        <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover/link:text-green-600 dark:group-hover/link:text-green-400 transition-colors duration-200">
                                          {link.label}
                                        </div>
                                        {link.description && (
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {link.description}
                                          </div>
                                        )}
                                      </div>
                                      <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 group-hover/link:text-green-500 dark:group-hover/link:text-green-400 transition-all duration-200 group-hover/link:translate-x-1 mt-0.5" />
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-slate-700 dark:via-slate-700 dark:to-slate-700 px-6 py-5 flex items-center justify-between border-t border-gray-100 dark:border-slate-600">
                        <div>
                          <div className="text-sm font-bold text-gray-800 dark:text-white flex items-center gap-2">
                            <Sparkles size={16} className="text-green-600 dark:text-green-400" />
                            Explore {menu}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Curated resources and guides for you</div>
                        </div>
                        <a
                          href="/"
                          className="px-5 py-2.5 text-sm bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <a href="/register" className="px-6 py-2.5 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-medium shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-slate-600 hover:scale-105 hover:shadow-lg">
              Register
            </a>
            <a href="/signin" className="px-6 py-2.5 text-white border-2 border-white dark:border-slate-600 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:border-slate-500 hover:scale-105 group">
              <div className="flex items-center justify-center gap-2">
                <span>Sign In</span>
                <LogIn className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </div>
            </a>
          </div>
        </nav>
        <nav className="md:hidden">
          <div className="flex items-center justify-between">
            <button
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>

            <div className="flex gap-2">
              <a href="/register" className="px-3 py-1.5 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg text-sm font-medium shadow-md hover:scale-105 transition-transform duration-200">Register</a>
              <a href="/signin" className="px-3 py-1.5 border-2 border-white dark:border-slate-600 text-white rounded-lg text-sm font-medium hover:bg-white hover:text-gray-900 dark:hover:bg-slate-700 transition-all duration-200">Sign In</a>
            </div>
          </div>

          {mobileOpen && (
            <div className="mt-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg rounded-xl p-4 space-y-2 text-gray-900 dark:text-gray-200 shadow-xl ring-1 ring-black/5 dark:ring-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
              <a href="/" className="block px-4 py-2.5 rounded-lg hover:bg-green-50 dark:hover:bg-slate-700 font-medium transition-colors duration-200" onClick={closeAll}>Home</a>
              {['Visions', 'Investment', 'Services', 'Impact'].map((menu) => (
                <div key={menu} className="border-t border-gray-100 dark:border-slate-700 pt-2">
                  <div className="px-4 py-2 font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                    {menu}
                  </div>
                  <div className="pl-3 pb-2">
                    {dropdownData[menu].map((col, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-3 font-semibold">{col.heading}</div>
                        <ul className="space-y-1">
                          {col.links.map((link, i) => (
                            <li key={i}>
                              <a href={link.href} className="block px-4 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-slate-700 transition-colors duration-200 text-sm" onClick={closeAll}>
                                <div className="font-medium">{link.label}</div>
                                {link.description && (
                                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{link.description}</div>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}