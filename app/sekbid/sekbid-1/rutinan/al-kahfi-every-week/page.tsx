'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import Image from 'next/image';

export default function AlKahfiEveryWeekPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const objectives = [
    {
      icon: "fas fa-book-quran",
      title: "Keutamaan Al-Kahfi",
      description: "Menanamkan pemahaman tentang keutamaan membaca Surat Al-Kahfi khususnya di hari Jumat sesuai sunnah Rasulullah.",
      color: "blue"
    },
    {
      icon: "fas fa-users",
      title: "Kebersamaan",
      description: "Menciptakan kebersamaan dalam beribadah dan meningkatkan ukhuwah islamiyah antar siswa.",
      color: "green"
    },
    {
      icon: "fas fa-hands-praying",
      title: "Pembiasaan Ibadah",
      description: "Membiasakan siswa untuk konsisten dalam beribadah dan mendekatkan diri kepada Allah SWT.",
      color: "purple"
    }
  ];

  const technicalSteps = [
    {
      icon: "fas fa-door-open",
      title: "Di Kelas Masing-Masing",
      description: "Pada minggu pertama dan ketiga, kegiatan membaca Surat Al-Kahfi dilaksanakan di masing-masing kelas. Sekbid 1 akan berkeliling untuk mendokumentasikan kegiatan ini.",
      color: "blue",
      weeks: "Minggu 1 & 3"
    },
    {
      icon: "fas fa-people-group",
      title: "Al-Kahfi Gabungan",
      description: "Pada minggu kedua dan keempat, kegiatan dilaksanakan secara gabungan di lapangan sekolah. Kegiatan ini diikuti oleh seluruh siswa dan dilanjutkan dengan dakwah dari Rohis.",
      color: "green",
      weeks: "Minggu 2 & 4"
    },
    {
      icon: "fas fa-camera",
      title: "Dokumentasi",
      description: "Setiap kegiatan akan didokumentasikan dengan baik sebagai bentuk pertanggungjawaban dan untuk memotivasi siswa dalam berpartisipasi.",
      color: "purple",
      weeks: "Setiap Minggu"
    }
  ];

  const galleryImages = [
    {
      src: "/images/al-kahfi/10-d.png",
      alt: "Pengondisian di kelas",
      title: "Pengondisian di kelas",
      fallback: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      src: "/images/al-kahfi/11-a.png", 
      alt: "Kegiatan Di Kelas",
      title: "Kegiatan Di Kelas",
      fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      src: "/images/al-kahfi/11-b.png",
      alt: "Membaca Surah Al Kahfi", 
      title: "Membaca Surah Al Kahfi",
      fallback: "https://images.unsplash.com/photo-1542816417-0983675a5c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/30',
        iconBg: 'bg-blue-100 dark:bg-blue-800',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/30',
        iconBg: 'bg-green-100 dark:bg-green-800',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-700'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/30',
        iconBg: 'bg-purple-100 dark:bg-purple-800',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-700'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center mb-6"
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <i className="fas fa-book-quran text-5xl text-yellow-400"></i>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent"
          >
            Al Kahfi Every Week
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto"
          >
            Menggapai Keutamaan Membaca Surat Al-Kahfi di Hari Jumat
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('tujuan')}
              className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Tujuan Program</span>
              <i className="fas fa-arrow-down"></i>
            </button>
            <button
              onClick={() => scrollToSection('dokumentasi')}
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold py-3 px-8 rounded-full inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-images"></i>
              <span>Lihat Dokumentasi</span>
            </button>
          </motion.div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50 dark:fill-gray-900">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Navigation Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Home
            </Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <Link href="/sekbid/sekbid-1" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Sekbid 1
            </Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-green-600 dark:text-green-400 font-medium">Al Kahfi Every Week</span>
          </div>
        </motion.nav>

        {/* Tujuan Program Section */}
        <motion.section 
          id="tujuan" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Tujuan Program
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              Program Al-Kahfi Every Week bertujuan untuk meningkatkan pemahaman dan pengamalan nilai-nilai Islam di kalangan siswa/i SMA IT Fithrah Insani.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1542816417-0983675a5c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Tujuan Program Al Kahfi"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
              </div>
            </div>

            {/* Objectives Cards */}
            <div className="lg:w-1/2 space-y-6">
              {objectives.map((objective, index) => {
                const colorClasses = getColorClasses(objective.color);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`${colorClasses.bg} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${colorClasses.border} group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`${colorClasses.iconBg} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${objective.icon} ${colorClasses.text} text-2xl`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                          {objective.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Teknis Pelaksanaan Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Teknis Pelaksanaan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              Pelaksanaan program Al-Kahfi Every Week dilakukan dengan sistem yang teratur dan terencana.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {technicalSteps.map((step, index) => {
              const colorClasses = getColorClasses(step.color);
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Icon Section */}
                  <div className="md:w-1/3 flex justify-center">
                    <div className={`${colorClasses.iconBg} w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative`}>
                      <i className={`${step.icon} ${colorClasses.text} text-3xl`}></i>
                      <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`md:w-2/3 ${isEven ? '' : 'md:text-right'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {step.title}
                        </h3>
                        <span className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-sm font-medium`}>
                          {step.weeks}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Dokumentasi Section */}
        <motion.section 
          id="dokumentasi"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Dokumentasi Kegiatan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image.fallback)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.fallback}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-search-plus text-white text-2xl"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 dark:text-white text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Mari Bergabung dalam Program Al Kahfi Every Week
          </h3>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas yang berkomitmen untuk mendekatkan diri kepada Allah SWT melalui pembacaan Surat Al-Kahfi setiap hari Jumat.
          </p>
          <Link 
            href="/sekbid/sekbid-1"
            className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Kembali ke Sekbid 1</span>
          </Link>
        </motion.section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
            >
              <i className="fas fa-times"></i>
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Kembali ke atas"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}