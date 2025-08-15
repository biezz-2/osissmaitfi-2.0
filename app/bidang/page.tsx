'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import PageEnterAnimation from '@/components/PageEnterAnimation';
import {
  FaMosque,
  FaSchool,
  FaImages,
  FaBook,
  FaGuitar,
  FaBroom,
  FaMoneyBillWave,
  FaCameraRetro,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa';

interface ProgramCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  link: string;
  stats: {
    programs: number;
    members: number;
  };
  highlights: string[];
}

const programCards: ProgramCard[] = [
  {
    id: 1,
    title: 'Seksi Bidang 1',
    subtitle: 'Keagamaan & Kerohanian',
    description: 'Bertanggung jawab atas kegiatan keagamaan dan kerohanian di sekolah untuk memperkuat iman dan takwa siswa.',
    icon: <FaMosque className="text-5xl" />,
    gradient: 'from-blue-500 via-blue-600 to-indigo-700',
    accentColor: 'blue',
    link: '/sekbid/sekbid-1',
    stats: { programs: 12, members: 8 },
    highlights: ['Kajian Rutin', 'Peringatan Hari Besar Islam', 'Mentoring Rohani']
  },
  {
    id: 2,
    title: 'Seksi Bidang 2',
    subtitle: 'Nasionalisme & Patriotisme',
    description: 'Mengembangkan rasa nasionalisme dan patriotisme melalui berbagai kegiatan cinta tanah air.',
    icon: <FaSchool className="text-5xl" />,
    gradient: 'from-red-500 via-red-600 to-rose-700',
    accentColor: 'red',
    link: '/sekbid/sekbid-2',
    stats: { programs: 10, members: 6 },
    highlights: ['Upacara Bendera', 'Lomba Kemerdekaan', 'Paskibra']
  },
  {
    id: 3,
    title: 'Seksi Bidang 3',
    subtitle: 'Wawasan & Pengetahuan',
    description: 'Mengedukasi siswa untuk berwawasan luas dan meningkatkan pengetahuan umum.',
    icon: <FaLightbulb className="text-5xl" />,
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    accentColor: 'yellow',
    link: '/sekbid/sekbid-3',
    stats: { programs: 15, members: 7 },
    highlights: ['Seminar Edukasi', 'Workshop', 'Diskusi Ilmiah']
  },
  {
    id: 4,
    title: 'Seksi Bidang 4',
    subtitle: 'Bahasa & Literasi',
    description: 'Mengedukasi siswa dalam bidang bahasa dan meningkatkan budaya literasi di sekolah.',
    icon: <FaBook className="text-5xl" />,
    gradient: 'from-green-500 via-emerald-600 to-teal-700',
    accentColor: 'green',
    link: '/sekbid/sekbid-4',
    stats: { programs: 11, members: 9 },
    highlights: ['Perpustakaan Digital', 'Lomba Puisi', 'Reading Club']
  },
  {
    id: 5,
    title: 'Seksi Bidang 5',
    subtitle: 'Bakat & Kreativitas',
    description: 'Mengembangkan bakat dan kreativitas siswa melalui berbagai kegiatan seni dan budaya.',
    icon: <FaGuitar className="text-5xl" />,
    gradient: 'from-purple-500 via-violet-600 to-indigo-700',
    accentColor: 'purple',
    link: '/sekbid/sekbid-5',
    stats: { programs: 18, members: 12 },
    highlights: ['Festival Seni', 'Band Sekolah', 'Teater']
  },
  {
    id: 6,
    title: 'Seksi Bidang 6',
    subtitle: 'Kebersihan & Kesehatan',
    description: 'Bertanggung jawab dalam menjaga kebersihan dan kesehatan lingkungan sekolah.',
    icon: <FaHeart className="text-5xl" />,
    gradient: 'from-cyan-400 via-teal-500 to-blue-600',
    accentColor: 'cyan',
    link: '/sekbid/sekbid-6',
    stats: { programs: 8, members: 10 },
    highlights: ['Jumat Bersih', 'Penyuluhan Kesehatan', 'Green School']
  },
  {
    id: 7,
    title: 'Seksi Bidang 7',
    subtitle: 'Kewirausahaan & Keuangan',
    description: 'Melatih jiwa kewirausahaan siswa dan mengelola keuangan organisasi dengan baik.',
    icon: <FaMoneyBillWave className="text-5xl" />,
    gradient: 'from-slate-600 via-gray-700 to-zinc-800',
    accentColor: 'gray',
    link: '/sekbid/sekbid-7',
    stats: { programs: 9, members: 5 },
    highlights: ['Bazar Sekolah', 'Pelatihan Bisnis', 'Koperasi Siswa']
  },
  {
    id: 8,
    title: 'Seksi Bidang 8',
    subtitle: 'Komunikasi & Informasi',
    description: 'Mengelola komunikasi dan informasi OSIS serta media sosial sekolah.',
    icon: <FaCameraRetro className="text-5xl" />,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    accentColor: 'emerald',
    link: '/sekbid/sekbid-8',
    stats: { programs: 14, members: 8 },
    highlights: ['Media Sosial', 'Dokumentasi', 'Website Sekolah']
  }
];

export default function ProgramKerjaPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Semua Bidang', count: 8 },
    { id: 'spiritual', name: 'Spiritual & Sosial', count: 3 },
    { id: 'academic', name: 'Akademik & Literasi', count: 2 },
    { id: 'creative', name: 'Kreatif & Seni', count: 1 },
    { id: 'management', name: 'Manajemen & Media', count: 2 }
  ];

  const filteredCards = selectedCategory === 'all' ? programCards :
    programCards.filter(card => {
      switch (selectedCategory) {
        case 'spiritual': return [1, 2, 6].includes(card.id);
        case 'academic': return [3, 4].includes(card.id);
        case 'creative': return [5].includes(card.id);
        case 'management': return [7, 8].includes(card.id);
        default: return true;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <PageEnterAnimation animation="fade">
        <section className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white py-24 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />

            {/* Floating Icons */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${25 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.4}s`
                }}
              >
                <FaUsers className="text-sm" />
              </div>
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Icon */}
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-6 mb-8 animate-float">
                <FaUsers className="text-6xl" />
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Program Kerja OSIS
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up delay-200">
                SMAIT Fithrah Insani - Bhaskara 2025
              </p>

              {/* Stats */}
              <div className="flex justify-center space-x-8 mt-12">
                <div className="text-center animate-fade-in-up delay-300">
                  <div className="text-3xl font-bold">8</div>
                  <div className="text-white/80">Seksi Bidang</div>
                </div>
                <div className="text-center animate-fade-in-up delay-400">
                  <div className="text-3xl font-bold">65</div>
                  <div className="text-white/80">Anggota</div>
                </div>
                <div className="text-center animate-fade-in-up delay-500">
                  <div className="text-3xl font-bold">97</div>
                  <div className="text-white/80">Program</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageEnterAnimation>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Introduction */}
        <AnimatedSection delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            8 Seksi Bidang OSIS
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Berikut adalah daftar bidang dan seksi yang ada dalam struktur OSIS kami.
            Setiap bidang memiliki tanggung jawab dan program kerja masing-masing.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.4} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-gray-600'
                  }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCards.map((card, index) => (
            <AnimatedSection
              key={card.id}
              delay={0.1 * (index + 1)}
              direction="up"
              className="scroll-reveal"
            >
              <div
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${card.gradient} p-8 text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${hoveredCard === card.id ? 'translate-x-[-200%]' : 'translate-x-full'
                      }`} />
                  </div>

                  {/* Icon */}
                  <div className={`mb-4 transition-transform duration-300 ${hoveredCard === card.id ? 'scale-110 rotate-12' : ''
                    }`}>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/90 text-sm font-medium">{card.subtitle}</p>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                    {card.stats.programs} Program
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Program Unggulan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {card.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-medium rounded-full bg-${card.accentColor}-100 text-${card.accentColor}-700 dark:bg-${card.accentColor}-900/30 dark:text-${card.accentColor}-300`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <FaUsers className="mr-1" />
                      {card.stats.members} Anggota
                    </span>
                    <span className="flex items-center">
                      <FaLightbulb className="mr-1" />
                      {card.stats.programs} Program
                    </span>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={card.link}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${card.gradient} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg relative overflow-hidden`}
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative z-10 flex items-center">
                      Lihat Detail
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                {hoveredCard === card.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-20 blur-xl -z-10 transition-opacity duration-300`} />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.8} className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-drift" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Bergabunglah dengan OSIS!
              </h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Jadilah bagian dari perubahan positif di sekolah. Pilih seksi bidang yang sesuai dengan minat dan bakatmu.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/about"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <FaUsers className="mr-2" />
                  Tentang OSIS
                </a>
                <a
                  href="/people"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  <FaHeart className="mr-2" />
                  Anggota Kami
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>


      </div>
    </div>
  );
}

