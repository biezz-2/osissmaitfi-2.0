'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaImages,
  FaBullseye,
  FaStar,
  FaStarAndCrescent,
  FaCalendarDay,
  FaArrowUp,
  FaMoon,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
  FaPlay,
  FaQuoteLeft,
  FaBookOpen,
  FaHeart,
  FaLightbulb
} from 'react-icons/fa';

export default function MuharramPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
      
      // Update active section based on scroll position
      const sections = ['hero', 'tujuan', 'teknis', 'dokumentasi'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: FaUsers, label: 'Peserta', value: '500+', color: 'text-blue-400' },
    { icon: FaClock, label: 'Durasi', value: '1 Hari', color: 'text-green-400' },
    { icon: FaMapMarkerAlt, label: 'Lokasi', value: 'SMAIT FI', color: 'text-purple-400' },
    { icon: FaHeart, label: 'Impact', value: 'Spiritual', color: 'text-red-400' }
  ];

  const highlights = [
    {
      icon: FaQuoteLeft,
      title: "Refleksi Spiritual",
      description: "Momen introspeksi dan perenungan makna tahun baru Hijriah",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaBookOpen,
      title: "Kajian Sejarah",
      description: "Pembelajaran mendalam tentang peristiwa hijrah Nabi Muhammad SAW",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaLightbulb,
      title: "Inspirasi Baru",
      description: "Motivasi untuk memulai tahun dengan semangat dan tekad baru",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className={`font-sans bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 min-h-screen transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Hero Section */}
      <section 
        id="hero"
        className="relative bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white py-20 md:py-32 mt-16 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.85), rgba(16, 185, 129, 0.85)), url('https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15)_0%,transparent_50%)] bg-[length:100px_100px] animate-pulse" />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.1)_60deg,transparent_120deg)] animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Enhanced Icon Animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              <FaMoon className="text-6xl md:text-8xl text-white relative z-10 animate-pulse group-hover:scale-110 transition-transform duration-500" />
              <FaStar className="text-3xl md:text-4xl text-yellow-300 absolute -top-3 -right-3 animate-bounce group-hover:text-yellow-200 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent animate-fade-in">
              Program Kerja Muharram
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed text-green-100 animate-fade-in-delay">
              Mengisi bulan Muharram dengan kegiatan positif dan bermanfaat untuk memulai tahun Hijriah dengan penuh berkah
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <stat.icon className={`text-2xl md:text-3xl ${stat.color} mb-2 mx-auto`} />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('tujuan')}
              className="group bg-white text-green-700 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
            >
              <FaBullseye className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Tujuan Proker</span>
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-sm" />
              </div>
            </button>
            <button
              onClick={() => scrollToSection('teknis')}
              className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
            >
              <FaCalendarAlt className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span>Teknis Pelaksanaan</span>
              <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-sm" />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce blur-sm" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000 blur-sm" />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-500 blur-sm" />
        <div className="absolute top-20 right-1/4 w-6 h-6 bg-yellow-300/30 rounded-full animate-ping" />
        <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-green-300/30 rounded-full animate-pulse" />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/sekbid/sekbid-1"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Kembali ke Sekbid 1
          </Link>
        </div>

        {/* Program Highlights Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-gray-200 dark:to-green-400 bg-clip-text text-transparent mb-6">
              Keunggulan Program
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tiga aspek utama yang membuat program Muharram ini istimewa dan bermakna
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <highlight.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Tujuan Proker Section */}
        <section id="tujuan" className="mb-20">
          <div className="flex items-center mb-12">
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 w-16 mr-6 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-gray-200 dark:to-green-400 bg-clip-text text-transparent">
              Tujuan Program
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 dark:border-gray-700/20">
                  <img 
                    src="/images/sekbid/sekbid-1/insidental/muharram/IMG_0118.JPG" 
                    alt="Tujuan Program Muharram" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="text-white font-semibold text-lg mb-2">Kegiatan Muharram</h4>
                    <p className="text-gray-200 text-sm">Dokumentasi persiapan program tahun baru Hijriah</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-gradient-to-br from-white/90 to-green-50/90 dark:from-gray-800/90 dark:to-green-900/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaBullseye className="text-2xl text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      Tujuan Utama
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      Mengisi bulan Muharram dengan hal-hal yang positif dan bermanfaat bagi seluruh siswa SMAIT Fithrah Insani, menciptakan momentum spiritual yang bermakna.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-gray-800/90 dark:to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <FaStar className="text-2xl text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      Nilai Tambah
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      Meningkatkan pemahaman siswa tentang pentingnya bulan Muharram dalam Islam serta mengembangkan kreativitas dan kepemimpinan melalui kegiatan yang bermakna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Teknis Pelaksanaan Section */}
        <section id="teknis" className="mb-20">
          <div className="flex items-center mb-12">
            <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 w-16 mr-6 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-gray-200 dark:to-green-400 bg-clip-text text-transparent">
              Teknis Pelaksanaan
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-white/90 to-green-50/50 dark:from-gray-800/90 dark:to-green-900/20 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12">
            <div className="space-y-12">
              <div className="group relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaStarAndCrescent className="text-3xl text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      Peringatan Hari Besar Islam
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      Kegiatan ini merupakan Peringatan Hari Besar Islam yang diadakan untuk memperingati momen penting dalam sejarah Islam. Program ini dirancang khusus untuk memberikan pemahaman mendalam tentang makna tahun baru Hijriah dan nilai-nilai spiritual yang terkandung di dalamnya.
                    </p>
                    
                    {/* Additional Details */}
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-4 border border-green-200/50 dark:border-green-700/50">
                        <div className="flex items-center mb-2">
                          <FaUsers className="text-green-600 dark:text-green-400 mr-2" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Target Peserta</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Seluruh siswa SMAIT Fithrah Insani</p>
                      </div>
                      <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-4 border border-green-200/50 dark:border-green-700/50">
                        <div className="flex items-center mb-2">
                          <FaMapMarkerAlt className="text-green-600 dark:text-green-400 mr-2" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">Lokasi</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Aula SMAIT Fithrah Insani</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 dark:via-green-600 to-transparent"></div>
              
              <div className="group relative">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaCalendarDay className="text-3xl text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      Jadwal Pelaksanaan
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
                      Kegiatan ini dilaksanakan pada <strong className="text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">27 Juni 2025</strong> dengan rangkaian acara yang telah dipersiapkan secara matang.
                    </p>
                    
                    {/* Timeline */}
                    <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                        <FaClock className="text-blue-600 dark:text-blue-400 mr-2" />
                        Rundown Acara
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Pembukaan & Tilawah</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">08:00 - 08:30</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Kajian Sejarah Hijriah</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">08:30 - 10:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Refleksi & Resolusi</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">10:30 - 11:30</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">Penutupan & Doa</span>
                          <span className="font-medium text-blue-600 dark:text-blue-400">11:30 - 12:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Dokumentasi Section */}
        <section id="dokumentasi" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-gray-200 dark:to-green-400 bg-clip-text text-transparent mb-6">
              Dokumentasi Kegiatan
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              Momen berharga dari pelaksanaan program Muharram yang penuh makna dan inspirasi
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 dark:border-gray-700/20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                
                <img 
                  src="/images/sekbid/sekbid-1/insidental/muharram/1.png" 
                  alt="Dokumentasi Kegiatan Muharram" 
                  className="relative w-full h-auto max-h-[700px] object-contain transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://picsum.photos/800/600?random=7';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Enhanced Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-3 flex items-center">
                        <FaImages className="mr-3 text-green-400" />
                        Kegiatan Peringatan Muharram
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed mb-4">
                        Dokumentasi kegiatan peringatan tahun baru Hijriah dengan suasana khidmat dan penuh makna
                      </p>
                      
                      {/* Image Stats */}
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="flex items-center text-green-300">
                          <FaUsers className="mr-2" />
                          <span>500+ Peserta</span>
                        </div>
                        <div className="flex items-center text-blue-300">
                          <FaClock className="mr-2" />
                          <span>4 Jam Kegiatan</span>
                        </div>
                        <div className="flex items-center text-purple-300">
                          <FaHeart className="mr-2" />
                          <span>Penuh Berkah</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FaPlay className="text-white text-lg" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-bounce" />
            </div>
            
            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaQuoteLeft className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Refleksi Mendalam</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Momen introspeksi dan perenungan makna tahun baru</p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaBookOpen className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Kajian Bermakna</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Pembelajaran sejarah hijrah yang inspiratif</p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-white text-xl" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Inspirasi Baru</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Motivasi untuk memulai dengan semangat baru</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white w-14 h-14 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 backdrop-blur-sm border border-white/20 group"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
        </button>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}