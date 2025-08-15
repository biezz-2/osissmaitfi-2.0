'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import ClientOnly from './ClientOnly';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Wait for page to load completely
        setTimeout(() => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            const yOffset = -80;
            const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 500);
      }
    };

    // Handle hash on initial load
    handleHashNavigation();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with hash
      router.push(`/#${id}`);
    }
  };

  return (
    <nav className={`navbar-fixed fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <Link href="/" className="navbar-brand flex items-center space-x-3 group relative z-20">
          <div className="logo-container">
            <div className="logo-circle w-10 h-10">
              <img
                src="/images/logo.png"
                alt="Logo OSIS"
                className="logo-image w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 group-hover:scale-125 transition-transform duration-300" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 dark:from-yellow-400 dark:to-amber-400 bg-clip-text text-transparent group-hover:from-yellow-700 group-hover:to-amber-700 dark:group-hover:from-yellow-300 dark:group-hover:to-amber-300 transition-all duration-300">
            OSIS SMAIT FITHRAH INSANI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-nav hidden lg:flex items-center space-x-8 relative z-20">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/bidang" className="nav-link">Program Kerja</Link>
          <Link href="/our-social-media" className="nav-link">Social Media</Link>
          <Link href="/people" className="nav-link">Anggota</Link>
          <a href="#vision" onClick={(e) => handleSmoothScroll(e, 'vision')} className="nav-link">Visi</a>
          <a href="#mission" onClick={(e) => handleSmoothScroll(e, 'mission')} className="nav-link">Misi</a>
          <a href="#events" onClick={(e) => handleSmoothScroll(e, 'events')} className="nav-link">Event</a>
          <Link href="/gallery" className="nav-link">Galeri</Link>

          {/* Theme Toggle */}
          <div className="ml-4">
            <ClientOnly fallback={
              <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
            }>
              <ThemeToggle />
            </ClientOnly>
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Theme Toggle for Mobile */}
          <ClientOnly fallback={
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
          }>
            <ThemeToggle />
          </ClientOnly>

          {/* Mobile Hamburger Icon */}
          <button
            type="button"
            onClick={toggleMenu}
            className={`relative p-2 text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg transition-colors duration-300 ${isOpen ? 'hamburger-open' : ''
              }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden mobile-menu-dropdown transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
        <div className="container mx-auto px-6 py-6 space-y-1">
          <Link href="/" onClick={() => setIsOpen(false)} className="mobile-nav-link">
            <i className="fas fa-home mr-3 w-5"></i>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="mobile-nav-link">
            <i className="fas fa-info-circle mr-3 w-5"></i>
            About
          </Link>
          <Link href="/bidang" onClick={() => setIsOpen(false)} className="mobile-nav-link">
            <i className="fas fa-tasks mr-3 w-5"></i>
            Program Kerja
          </Link>
          <Link href="/our-social-media" onClick={() => setIsOpen(false)} className="mobile-nav-link">
            <i className="fas fa-share-alt mr-3 w-5"></i>
            Social Media
          </Link>
          <Link href="/people" onClick={() => setIsOpen(false)} className="mobile-nav-link">
            <i className="fas fa-users mr-3 w-5"></i>
            Anggota
          </Link>

          <div className="mobile-nav-spacing">
            <a href="#vision" onClick={(e) => handleSmoothScroll(e, 'vision')} className="mobile-nav-link">
              <i className="fas fa-eye mr-3 w-5"></i>
              Visi
            </a>
            <a href="#mission" onClick={(e) => handleSmoothScroll(e, 'mission')} className="mobile-nav-link">
              <i className="fas fa-bullseye mr-3 w-5"></i>
              Misi
            </a>
            <a href="#events" onClick={(e) => handleSmoothScroll(e, 'events')} className="mobile-nav-link">
              <i className="fas fa-calendar-alt mr-3 w-5"></i>
              Event
            </a>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="mobile-nav-link">
              <i className="fas fa-images mr-3 w-5"></i>
              Galeri
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;