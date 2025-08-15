'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PendampinganRohisPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activities = [
    {
      icon: "fas fa-hands-helping",
      title: "Jumat Berkah",
      description: "Kegiatan berbagi makanan atau sedekah kepada warga sekolah setiap hari Jumat untuk menumbuhkan semangat berbagi dan kepedulian sosial.",
      color: "yellow"
    },
    {
      icon: "fas fa-microphone",
      title: "Melakukan Dakwah",
      description: "Siswa/i diberikan kesempatan untuk menyampaikan pesan-pesan dakwah, baik melalui kultum, diskusi, maupun media sosial sekolah, agar terbiasa berdakwah dan menyebarkan nilai-nilai Islam.",
      color: "blue"
    },
    {
      icon: "fas fa-broom",
      title: "Bersih-bersih di Area Masjid",
      description: "Kegiatan gotong royong membersihkan masjid sekolah secara rutin untuk menjaga kebersihan, kenyamanan, dan menanamkan rasa cinta terhadap rumah ibadah.",
      color: "green"
    }
  ];

  const benefits = [
    {
      icon: "fas fa-users",
      title: "Kemampuan Berorganisasi",
      description: "Mengembangkan skill leadership dan manajemen organisasi"
    },
    {
      icon: "fas fa-mosque",
      title: "Dakwah & Spiritualitas",
      description: "Meningkatkan kemampuan berdakwah dan kedalaman spiritual"
    },
    {
      icon: "fas fa-heart",
      title: "Kepedulian Sosial",
      description: "Menumbuhkan rasa empati dan kepedulian terhadap sesama"
    },
    {
      icon: "fas fa-star",
      title: "Karakter Islami",
      description: "Membentuk kepribadian yang sesuai dengan nilai-nilai Islam"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/30',
        iconBg: 'bg-yellow-100 dark:bg-yellow-800',
        text: 'text-yellow-600 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-700'
      },
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
      }
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
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
              <i className="fas fa-hands-helping text-5xl text-green-400"></i>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Pendampingan Rohis
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            Pembinaan dan pendampingan untuk Rohani Islam di SMA IT Fithrah Insani
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById('tujuan')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Pelajari Program</span>
            <i className="fas fa-arrow-down"></i>
          </motion.button>
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
            <span className="text-green-600 dark:text-green-400 font-medium">Pendampingan Rohis</span>
          </div>
        </motion.nav>

        {/* Tujuan Program Section */}
        <motion.section 
          id="tujuan" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="order-1 w-full md:w-1/2 h-56 md:h-80 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Foto Rohis" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="order-2 w-full md:w-1/2 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-6 text-center">
                Tujuan Program
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center mb-6">
                Menumbuhkan kemampuan siswa/i SMA IT Fithrah Insani dalam berdakwah dan berorganisasi.
              </p>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg text-center">
                    <i className="fas fa-bullhorn text-green-600 dark:text-green-400 text-xl mb-2"></i>
                    <p className="text-sm font-medium text-green-800 dark:text-green-300">Dakwah</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-center">
                    <i className="fas fa-users text-blue-600 dark:text-blue-400 text-xl mb-2"></i>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Organisasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Teknis Kegiatan Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Teknis Kegiatan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {activities.map((activity, index) => {
              const colorClasses = getColorClasses(activity.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${colorClasses.iconBg} p-4 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${activity.icon} ${colorClasses.text} text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {activity.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Manfaat Program
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Program Pendampingan Rohis memberikan berbagai manfaat untuk pengembangan diri siswa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-green-100 dark:bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${benefit.icon} text-green-600 dark:text-green-400 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Program Features Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Keunggulan Program
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Program yang dirancang khusus untuk mengembangkan potensi rohani dan kepemimpinan siswa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "fas fa-calendar-week", title: "Rutin & Terstruktur", desc: "Kegiatan terjadwal dengan baik" },
              { icon: "fas fa-hands-helping", title: "Praktik Langsung", desc: "Pembelajaran melalui pengalaman nyata" },
              { icon: "fas fa-trophy", title: "Pengembangan Karakter", desc: "Membentuk kepribadian Islami yang kuat" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <i className={`${feature.icon} text-3xl text-yellow-400 mb-4`}></i>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-green-100 text-sm">{feature.desc}</p>
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
          className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Mari Bergabung dalam Program Pendampingan Rohis
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Kembangkan kemampuan dakwah dan organisasi Anda melalui program pendampingan yang komprehensif dan terarah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/sekbid/sekbid-1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-arrow-left"></i>
              <span>Kembali ke Sekbid 1</span>
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <i className="fas fa-info-circle"></i>
              <span>Info Lebih Lanjut</span>
            </button>
          </div>
        </motion.section>
      </main>

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