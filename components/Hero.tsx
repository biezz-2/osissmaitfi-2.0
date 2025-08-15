'use client';

import React from 'react';
import { FaArrowDown, FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  const handleScrollToVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      const yOffset = -80;
      const y = visionSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90" />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/8 to-pink-500/8 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce delay-300" />
        <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-bounce delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/60 rounded-full animate-bounce delay-1000" />
        <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-amber-400/60 rounded-full animate-bounce delay-200" />
        
        {/* Geometric shapes */}
        <div className="absolute top-16 right-16 w-8 h-8 border-2 border-yellow-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-16 left-16 w-6 h-6 border-2 border-blue-400/30 rounded-full animate-ping delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-5xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="heading-primary text-6xl md:text-8xl lg:text-9xl text-white mb-4 text-shadow-strong">
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                BHASKARA
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-gray-200">
                2025
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Organisasi Siswa Intra Sekolah
            <span className="block mt-2 text-yellow-400 font-medium">SMAIT Fithrah Insani</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              type="button"
              onClick={handleScrollToVision}
              className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/25 inline-flex items-center"
            >
              <FaPlay className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
              Jelajahi Visi & Misi
            </button>
            
            <button
              type="button"
              onClick={handleScrollToVision}
              className="group border-2 border-white/30 hover:border-yellow-400 text-white hover:text-yellow-400 font-medium py-4 px-8 rounded-full backdrop-blur-sm transition-all duration-300 inline-flex items-center"
            >
              Pelajari Lebih Lanjut
              <FaArrowDown className="ml-3 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;