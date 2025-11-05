import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, X, Upload, Moon, Sun, Camera, Phone, Building2, Sparkles } from 'lucide-react';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        company: ''
    });

    useEffect(() => {
        const saved = localStorage.getItem('theme-dark');
        if (saved === '1') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme-dark', darkMode ? '1' : '0');
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData, 'Profile Image:', profileImage);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="h-full flex relative bg-gray-50 mt-28 dark:bg-slate-900">

            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-12 relative overflow-hidden transition-all duration-500">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="relative z-10 flex flex-col justify-center max-w-md">
                    <div className="mb-8 animate-fadeIn">
                        <div className="w-14 h-14 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-xl transform hover:rotate-6 transition-transform duration-300">
                            <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-4 leading-tight animate-slideDown">
                            Join Our Investment Platform
                        </h1>
                        <p className="text-white/90 dark:text-gray-300 text-lg leading-relaxed animate-slideUp">
                            Create your account to access exclusive investor and partner features. Start building your portfolio today.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { text: 'Access to exclusive deals', delay: '0s' },
                            { text: 'Real-time portfolio tracking', delay: '0.2s' },
                            { text: 'Connect with partners worldwide', delay: '0.4s' }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 text-white/90 dark:text-gray-300 animate-slideRight"
                                style={{ animationDelay: item.delay }}
                            >
                                <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8 transition-colors duration-500">
                <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-ls p-8 border border-gray-100 dark:border-slate-700 transition-all duration-500 animate-scaleIn">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-slideDown">
                                Create Account
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 animate-fadeIn">Start your investment journey today</p>
                        </div>

                        <div className="space-y-5">

                            <div className="group animate-slideUp" style={{ animationDelay: '0.1s' }}>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Username"
                                        className="w-full pl-11 pr-4 py-3 border-b border-gray-300 dark:border-slate-600 bg-transparent focus:border-green-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className='flex justify-center gap-x-6'>
                                <div className="group animate-slideUp" style={{ animationDelay: '0.2s' }}>
                                    <div className="relative mt-4">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="w-full pl-11 pr-4 py-3 border-b border-gray-300 dark:border-slate-600 bg-transparent focus:border-green-500 outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="group animate-slideUp" style={{ animationDelay: '0.3s' }}>
                                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors group-focus-within:text-green-500" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Create a strong password"
                                            required
                                            className="w-full pl-11 pr-12 py-3.5 border-b-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Additional Options */}
                            <div className="flex items-center justify-between text-sm animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(true)}
                                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold transition-colors hover:underline flex items-center gap-1"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Add More Details
                                </button>
                                <button type="button" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors hover:underline">
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-500 dark:to-emerald-500 dark:hover:from-green-600 dark:hover:to-emerald-600 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/30 dark:shadow-green-900/30 flex items-center justify-center gap-2 group animate-slideUp hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
                                style={{ animationDelay: '0.5s' }}
                            >
                                Create Account
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Divider */}
                            <div className="relative my-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300 dark:border-slate-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400">Or continue with</span>
                                </div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="grid grid-cols-3 gap-3 animate-slideUp" style={{ animationDelay: '0.7s' }}>
                                <button
                                    type="button"
                                    className="flex items-center justify-center py-3.5 px-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 hover:bg-gradient-to-br hover:from-white hover:to-green-50 dark:hover:from-slate-600 dark:hover:to-green-900/30 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                                    aria-label="Register with Google"
                                >
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="flex items-center justify-center py-3.5 px-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 hover:bg-gradient-to-br hover:from-white hover:to-green-50 dark:hover:from-slate-600 dark:hover:to-green-900/30 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                                    aria-label="Register with LinkedIn"
                                >
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="#0A66C2" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="flex items-center justify-center py-3.5 px-4 border-2 border-gray-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 hover:bg-gradient-to-br hover:from-white hover:to-green-50 dark:hover:from-slate-600 dark:hover:to-green-900/30 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                                    aria-label="Register with Instagram"
                                >
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#FD5949" />
                                                <stop offset="50%" stopColor="#D6249F" />
                                                <stop offset="100%" stopColor="#285AEB" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Sign In Link */}
                            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                                Already have an account?{' '}
                                <a href="/signin" className="font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors hover:underline inline-flex items-center gap-1">
                                    Sign In
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                        By creating an account, you agree to our{' '}
                        <a href="#" className="underline hover:text-gray-700 dark:hover:text-gray-200">Terms</a> and{' '}
                        <a href="#" className="underline hover:text-gray-700 dark:hover:text-gray-200">Privacy Policy</a>
                    </p>
                </div>
            </div>

            {/* Modal for Additional Details */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn border border-gray-200 dark:border-slate-700">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors hover:rotate-90 duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 flex items-center justify-center shadow-lg">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Additional Details</h3>
                        </div>

                        <div className="space-y-5">
                            {/* Profile Image Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Profile Photo
                                </label>
                                <div className="flex items-center gap-4">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-dashed border-green-300 dark:border-green-700 flex items-center justify-center overflow-hidden">
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <Camera className="w-8 h-8 text-green-500 dark:text-green-400" />
                                        )}
                                    </div>
                                    <label className="flex-1 cursor-pointer">
                                        <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-500 dark:to-emerald-500 dark:hover:from-green-600 dark:hover:to-emerald-600 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                                            <Upload className="w-4 h-4" />
                                            <span>Upload Photo</span>
                                        </div>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="group">
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors group-focus-within:text-green-500" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            {/* Company */}
                            <div className="group">
                                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5 transition-colors group-focus-within:text-green-500" />
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company or organization"
                                        className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-500 dark:to-emerald-500 dark:hover:from-green-600 dark:hover:to-emerald-600 text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 group"
                            >
                                Save Details
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
        </div>
    );
}