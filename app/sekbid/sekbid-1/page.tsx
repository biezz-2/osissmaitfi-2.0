'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  FaBook,
  FaQuoteRight,
  FaMicrophone,
  FaHandsHelping,
  FaStar,
  FaQuran,
  FaMoon,
  FaHeart,
  FaCalendar,
  FaMosque,
  FaBookOpen,
  FaCalendarAlt,
  FaCalendarDay,
  FaArrowLeft,
  FaUsers,
  FaBullseye,
  FaClock,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa';

export default function Sekbid1Page() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'rutinan' | 'insidental'>('rutinan');

  const programsData = {
    rutinan: [
      {
        id: 1,
        title: "Al Kahfi Every Week",
        description: "Program mingguan membaca dan memahami Surat Al-Kahfi",
        icon: FaBook,
        color: "green",
        schedule: "Setiap Jumat",
        participants: "Seluruh Siswa",
        details: "Program rutin membaca Surat Al-Kahfi setiap hari Jumat untuk meningkatkan spiritualitas dan pemahaman Al-Qur'an.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/al-kahfi-every-week"
      },
      {
        id: 2,
        title: "Hadits Of The Week",
        description: "Pembelajaran hadits Nabi setiap minggu",
        icon: FaQuoteRight,
        color: "blue",
        schedule: "Setiap Senin",
        participants: "Kelas X-XII",
        details: "Kajian hadits mingguan untuk memperdalam pemahaman tentang sunnah Rasulullah SAW.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/hadits-of-the-week"
      },
      {
        id: 3,
        title: "Kultum",
        description: "Kuliah tujuh menit untuk menambah ilmu agama",
        icon: FaMicrophone,
        color: "purple",
        schedule: "Setiap Hari",
        participants: "Bergantian",
        details: "Ceramah singkat 7 menit yang disampaikan siswa untuk berbagi ilmu agama.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/kultum"
      },
      {
        id: 4,
        title: "Pendampingan Rohis",
        description: "Pembinaan dan pendampingan untuk Rohani Islam",
        icon: FaHandsHelping,
        color: "yellow",
        schedule: "Mingguan",
        participants: "Anggota Rohis",
        details: "Program mentoring dan pembinaan untuk mengembangkan kegiatan rohani Islam di sekolah.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/pendampingan-rohis"
      },
      {
        id: 5,
        title: "Takhosus",
        description: "Program khusus untuk pengembangan diri",
        icon: FaStar,
        color: "red",
        schedule: "Bulanan",
        participants: "Siswa Terpilih",
        details: "Program pengembangan diri khusus untuk meningkatkan kualitas spiritual dan kepemimpinan.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/takhosus"
      },
      {
        id: 6,
        title: "Tilawah OSIS",
        description: "Program tilawah Al-Qur'an untuk anggota OSIS",
        icon: FaQuran,
        color: "indigo",
        schedule: "Bi-weekly",
        participants: "Anggota OSIS",
        details: "Kegiatan tilawah Al-Qur'an khusus untuk anggota OSIS guna meningkatkan kualitas bacaan.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/rutinan/tilawah-osis"
      }
    ],
    insidental: [
      {
        id: 7,
        title: "Ramadhan Ceria",
        description: "Kegiatan khusus selama bulan Ramadhan",
        icon: FaMoon,
        color: "green",
        schedule: "Bulan Ramadhan",
        participants: "Seluruh Siswa",
        details: "Rangkaian kegiatan menyambut dan mengisi bulan suci Ramadhan dengan berbagai aktivitas spiritual.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/insidental/ramadhan-ceria"
      },
      {
        id: 8,
        title: "Idul Fitri",
        description: "Perayaan hari raya Idul Fitri",
        icon: FaHeart,
        color: "blue",
        schedule: "1 Syawal",
        participants: "Komunitas Sekolah",
        details: "Perayaan Hari Raya Idul Fitri dengan berbagai kegiatan silaturahmi dan syukuran.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/insidental/idul-fitri"
      },
      {
        id: 9,
        title: "Muharram",
        description: "Kegiatan memperingati tahun baru Islam",
        icon: FaCalendar,
        color: "purple",
        schedule: "1 Muharram",
        participants: "Seluruh Siswa",
        details: "Peringatan tahun baru Hijriah dengan kajian sejarah Islam dan refleksi diri.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/insidental/muharram"
      },
      {
        id: 10,
        title: "Isra Mi'raj",
        description: "Peringatan peristiwa Isra' Mi'raj Nabi Muhammad SAW",
        icon: FaMosque,
        color: "yellow",
        schedule: "27 Rajab",
        participants: "Seluruh Siswa",
        details: "Memperingati peristiwa Isra' Mi'raj dengan kajian dan renungan spiritual.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/insidental/isra-miraj"
      },
      {
        id: 11,
        title: "One Day One Juz",
        description: "Program membaca satu juz Al-Qur'an setiap hari",
        icon: FaBookOpen,
        color: "red",
        schedule: "Periode Tertentu",
        participants: "Seluruh Siswa",
        details: "Challenge membaca Al-Qur'an satu juz per hari untuk meningkatkan kedekatan dengan kitab suci.",
        hasDetailPage: true,
        detailUrl: "/sekbid/sekbid-1/insidental/one-day-one-juz"
      }
    ]
  };

  useEffect(() => {
    // Enhanced animation for program cards
    const programCards = document.querySelectorAll('.program-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });

    programCards.forEach(card => {
      const element = card as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px) scale(0.95)';
      element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'bg-green-100 dark:bg-green-900/30',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-700',
        hover: 'hover:bg-green-50 dark:hover:bg-green-900/50'
      },
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900/30',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700',
        hover: 'hover:bg-blue-50 dark:hover:bg-blue-900/50'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900/30',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-700',
        hover: 'hover:bg-purple-50 dark:hover:bg-purple-900/50'
      },
      yellow: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/30',
        text: 'text-yellow-600 dark:text-yellow-400',
        border: 'border-yellow-200 dark:border-yellow-700',
        hover: 'hover:bg-yellow-50 dark:hover:bg-yellow-900/50'
      },
      red: {
        bg: 'bg-red-100 dark:bg-red-900/30',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-200 dark:border-red-700',
        hover: 'hover:bg-red-50 dark:hover:bg-red-900/50'
      },
      indigo: {
        bg: 'bg-indigo-100 dark:bg-indigo-900/30',
        text: 'text-indigo-600 dark:text-indigo-400',
        border: 'border-indigo-200 dark:border-indigo-700',
        hover: 'hover:bg-indigo-50 dark:hover:bg-indigo-900/50'
      }
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 min-h-screen">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-24 mt-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] bg-[length:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <FaMosque className="text-6xl md:text-7xl mx-auto mb-4 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight py-2">
            Seksi Bidang 1
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Pembinaan Keimanan dan Ketakwaan
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <FaUsers className="mr-2" />
              <span>Seluruh Siswa</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <FaBullseye className="mr-2" />
              <span>Spiritual Growth</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <FaClock className="mr-2" />
              <span>Ongoing Programs</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000" />
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-500" />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/bidang"
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors font-medium"
          >
            <FaArrowLeft className="mr-2" />
            Kembali ke Program Kerja
          </Link>
        </div>

        {/* Enhanced About Section */}
        <section className="mb-16">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="order-1 w-full md:w-1/2 h-64 md:h-96 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/50 dark:to-emerald-900/50 border-2 border-green-200 dark:border-green-700 flex items-center justify-center relative group">
              <img
                src="/images/sekbid-1.jpg"
                alt="Foto Sekbid 1"
                className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://picsum.photos/600/400?random=1';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl" />
            </div>
            <div className="order-2 w-full md:w-1/2 flex-1 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Visi & Misi
                </span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight py-1">
                  Tujuan Sekbid 1
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Sekbid 1 bertujuan untuk membentuk pribadi pada siswa/i SMA IT Fithrah Insani yang senantiasa beribadah dan bertakwa kepada Allah SWT dengan mengamalkan nilai Islam pada program kerja yang dibuat.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-100 dark:border-green-700">
                  <FaBullseye className="text-green-600 dark:text-green-400 mr-3 text-lg" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Spiritual Development</span>
                </div>
                <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-700">
                  <FaUsers className="text-blue-600 dark:text-blue-400 mr-3 text-lg" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Community Building</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Program Kerja Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-green-600 dark:from-gray-200 dark:to-green-400 bg-clip-text text-transparent inline-block relative pb-6 leading-tight py-2">
              Program Kerja Sekbid 1
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Beragam program spiritual dan keagamaan untuk mengembangkan karakter Islami siswa
            </p>
          </div>

          {/* Interactive Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 dark:border-gray-700/20">
              <button
                type="button"
                onClick={() => setActiveTab('rutinan')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${activeTab === 'rutinan'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
                  }`}
              >
                <FaCalendarAlt className="mr-2" />
                Program Rutinan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('insidental')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ml-2 ${activeTab === 'insidental'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30'
                  }`}
              >
                <FaCalendarDay className="mr-2" />
                Program Insidental
              </button>
            </div>
          </div>

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData[activeTab].map((program, index) => {
              const IconComponent = program.icon;
              const colorClasses = getColorClasses(program.color);

              // If program has detail page, render as Link, otherwise as clickable div
              const CardComponent = program.hasDetailPage ? Link : 'div';
              const cardProps = program.hasDetailPage
                ? { href: program.detailUrl }
                : { onClick: () => setSelectedProgram(program) };

              return (
                <CardComponent
                  key={program.id}
                  className="program-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  {...cardProps}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`${colorClasses.bg} ${colorClasses.border} p-4 rounded-2xl border-2 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`${colorClasses.text} text-2xl`} />
                      </div>
                      <FaChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-green-500 dark:group-hover:text-green-400 group-hover:transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {program.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <FaClock className="mr-1" />
                        <span>{program.schedule}</span>
                      </div>
                      <div className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {program.participants}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardComponent>
              );
            })}
          </div>
        </section>

        {/* Program Detail Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`${getColorClasses(selectedProgram.color).bg} p-3 rounded-xl mr-4`}>
                      <selectedProgram.icon className={`${getColorClasses(selectedProgram.color).text} text-2xl`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{selectedProgram.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <FaTimes className="text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Deskripsi Program</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{selectedProgram.details}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <FaClock className="mr-2 text-blue-500 dark:text-blue-400" />
                        Jadwal
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">{selectedProgram.schedule}</p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <FaUsers className="mr-2 text-green-500 dark:text-green-400" />
                        Peserta
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">{selectedProgram.participants}</p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProgram(null)}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}