'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="Logo OSIS" 
                  className="rounded-full w-12 h-12" 
                />
                <div>
                  <h3 className="heading-secondary text-2xl text-white">
                    OSIS SMAIT FITHRAH INSANI
                  </h3>
                  <p className="text-yellow-400 font-medium">Bhaskara 2025</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                "Bermanfaat bersama, bersinar selamanya" - Membangun generasi yang berakhlak mulia, 
                cerdas, dan mandiri berdasarkan nilai-nilai Al-Qur'an dan Hadits.
              </p>

              {/* Enhanced Social Media */}
              <div className="flex space-x-4">
                {[
                  { 
                    icon: FaInstagram, 
                    href: "https://www.instagram.com/osissmaitfi/", 
                    color: "hover:text-pink-400",
                    bgColor: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600",
                    name: "Instagram"
                  },
                  { 
                    icon: FaSpotify, 
                    href: "https://open.spotify.com/show/0LNgKunTS7KWBCv3JXFnSw", 
                    color: "hover:text-green-400",
                    bgColor: "hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600",
                    name: "Spotify"
                  },
                  { 
                    icon: FaTiktok, 
                    href: "https://www.tiktok.com/@osissmaitfi?lang=id-ID", 
                    color: "hover:text-white",
                    bgColor: "hover:bg-gradient-to-br hover:from-gray-800 hover:to-black",
                    name: "TikTok"
                  },
                  { 
                    icon: FaYoutube, 
                    href: "https://www.youtube.com/@osissmaitfithrahinsani9481", 
                    color: "hover:text-red-400",
                    bgColor: "hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600",
                    name: "YouTube"
                  }
                ].map((social, index) => (
                  <div key={index} className="relative group">
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 ${social.color} ${social.bgColor} transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl focus-ring group overflow-hidden`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      {/* Icon */}
                      <social.icon size={22} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 rounded-2xl animate-ping bg-white/20" />
                      </div>
                    </a>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      {social.name}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="heading-secondary text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/bidang", label: "Program Kerja" },
                  { href: "/our-social-media", label: "Social Media" },
                  { href: "/people", label: "Anggota" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="heading-secondary text-lg text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mr-3 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-400 leading-relaxed">
                    SMAIT Fithrah Insani<br />
                    Jl. H. Gofur No. 10 Tanimulya<br />
                    Ngamprah, Kab. Bandung Barat
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">(022) 87805564</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-yellow-400" />
                  <span className="text-gray-400">info@smaitfithrahinsani.sch.id</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 flex items-center">
                &copy; {new Date().getFullYear()} OSIS SMAIT Fithrah Insani - Bhaskara. 
                <span className="ml-2 flex items-center">
                  Made with <FaHeart className="text-red-400 mx-1" /> for education
                </span>
              </p>
              
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;