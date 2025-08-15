'use client';

import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import TeamMemberModal from '@/components/TeamMemberModal';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  ttl: string;
  alamat: string;
  motto: string;
}

const coreTeam: TeamMember[] = [
  {
    id: 'hafidz',
    name: 'Muhammad Hafidz Azzamulhaq',
    position: 'Ketua OSIS',
    image: '/images/team/KO.JPG',
    description: 'Memimpin organisasi dengan visi dan dedikasi yang tinggi.',
    ttl: 'Cimahi, 17 Oktober 2007',
    alamat: 'Bukit Rahmah Permai Blok D 26',
    motto: '"No Retreat"'
  },
  {
    id: 'tiara',
    name: 'Nooraisha Tiara Putri',
    position: 'Wakil Ketua OSIS',
    image: '/images/team/WKO.JPG',
    description: 'Mendukung ketua dalam semua urusan organisasi.',
    ttl: 'Bandung, 1 Maret 2008',
    alamat: 'Bukit Cipageran Indah',
    motto: '"One day or day one"'
  },
  {
    id: 'shafa',
    name: "I'tisyam Ariqoh Shafa",
    position: 'Sekretaris OSIS',
    image: '/images/team/SKTO.JPG',
    description: 'Menjaga catatan dan memastikan komunikasi yang lancar.',
    ttl: 'Sukoharjo, 12 Februari 2008',
    alamat: 'Royal Orchid Villa',
    motto: '"Sebaik-baiknya manusia adalah yang bermanfaat😉"'
  },
  {
    id: 'rahma',
    name: 'Rahma Ayuna Nurul Haq',
    position: 'Bendahara OSIS',
    image: '/images/team/BDHRO.JPG',
    description: 'Mengelola keuangan dan anggaran untuk semua kegiatan.',
    ttl: 'Bandung, 16 September 2008',
    alamat: 'Jl. Ciung Wanara',
    motto: '"The best view comes after the hardest climbing"'
  }
];

const departmentHeads: TeamMember[] = [
  {
    id: 'farras',
    name: 'Farras Yusra Juneeta',
    position: 'Kepala Departemen A',
    image: '/images/team/farras.JPG',
    description: 'Penanggung Jawab Sekbid 1 dan Sekbid 2.',
    ttl: 'Bandung, 09 Januari 2008',
    alamat: 'Jalan Cimareme',
    motto: '"Live as if today is your last day"'
  },
  {
    id: 'adiba',
    name: 'Adiba Alya Batrisya',
    position: 'Kepala Departemen B',
    image: '/images/team/adiba.JPG',
    description: 'Penanggung Jawab Sekbid 3 dan Sekbid 4.',
    ttl: 'Bandung, 3 September 2007',
    alamat: 'Jln Karya Bakti',
    motto: '"Kalau mereka bisa, aku juga pasti bisa"'
  },
  {
    id: 'kafka',
    name: 'Mochammad Kafka Reznia Avicena',
    position: 'Kepala Departemen C',
    image: '/images/team/kafka.JPG',
    description: 'Penanggung Jawab Sekbid 5 dan Sekbid 6.',
    ttl: 'Cimahi, 27 Februari 2008',
    alamat: 'Komplek Pemda Padasuka',
    motto: '"Let your calm hide the storm"'
  },
  {
    id: 'adnan',
    name: 'Adnan Humam Alfadz',
    position: 'Kepala Departemen D',
    image: '/images/team/adnan.JPG',
    description: 'Penanggung Jawab Sekbid 7 dan Sekbid 8.',
    ttl: 'Cimahi, 2 November 2007',
    alamat: 'Perumahan Pondok Ciptamas 2',
    motto: '"Hidup tanpa uang akan bahagia? Uang lah yang akan membeli kebahagiaan"'
  }
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="page-content min-h-screen section-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <header className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="heading-primary text-5xl md:text-7xl lg:text-8xl text-white mb-4 text-shadow-strong">
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 dark:from-yellow-300 dark:via-amber-400 dark:to-yellow-500 bg-clip-text text-transparent">
                Tentang
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-gray-200 dark:text-gray-300">
                BHASKARA 2025
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            Mengenal lebih dekat
            <span className="block mt-2 text-yellow-400 font-medium">OSIS SMAIT Fithrah Insani</span>
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-20">
        {/* About Section */}
        <AnimatedSection>
          <section className="mb-20">
            {/* Story Section */}
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl text-gray-900 dark:text-gray-100 mb-6">
                Cerita <span className="text-yellow-600 dark:text-yellow-400">Bhaskara</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl" />
              
              <div className="relative card-gradient rounded-2xl shadow-2xl p-8 md:p-12 card-hover border border-gray-200/50 backdrop-blur-sm">
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-full shadow-lg">
                    <span className="text-white text-3xl">☀️</span>
                  </div>
                </div>

                <h3 className="heading-secondary text-2xl md:text-3xl text-center text-gray-900 dark:text-gray-100 mb-8">
                  Nama OSIS <span className="text-yellow-600 dark:text-yellow-400">Bhaskara</span>
                </h3>
                
                <div className="prose prose-lg max-w-none text-center">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Ketua OSIS periode 2024–2025 memperkenalkan nama OSIS periode ini, yaitu 
                    <span className="font-semibold text-yellow-600"> BHASKARA</span>, 
                    yang berasal dari bahasa Sanskerta dan berarti 
                    <span className="font-semibold text-amber-600"> "matahari"</span>.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Nama ini dipilih karena melambangkan cahaya dan manfaat yang ingin diberikan OSIS kepada seluruh siswa. 
                    Selain itu, "Bhaskara" merupakan singkatan dari 
                    <span className="font-semibold text-blue-600"> Bimantara dan Sanskara</span>, 
                    menjadikannya simbolik sebagai "anak" dan "cucu" dari nama-nama sebelumnya.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Harapannya, OSIS Bhaskara dapat menjadi 
                    <span className="font-semibold text-green-600"> penerang dan pembawa kebaikan </span>
                    bagi seluruh siswa SMAIT Fithrah Insani.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
                </div>
              </div>
            </div>

            {/* Symbol Meaning Section */}
            <div className="mt-20">
              <div className="text-center mb-16">
                <h3 className="heading-primary text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-6">
                  Makna <span className="text-yellow-600 dark:text-yellow-400">Simbol</span>
                </h3>
                <div className="flex justify-center items-center space-x-4 mb-8">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
                </div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Setiap elemen dalam logo OSIS memiliki filosofi dan makna yang mendalam
                </p>
              </div>

              <div className="card-gradient rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50 card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-50">
                    <div className="text-center">
                      <img 
                        src="/images/logo.png" 
                        className="w-64 h-64 mx-auto object-contain drop-shadow-2xl" 
                        alt="OSIS Logo" 
                      />
                      <p className="text-gray-600 mt-6 font-medium">Logo OSIS SMAIT Fithrah Insani</p>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <h4 className="heading-secondary text-2xl lg:text-3xl text-gray-900 dark:text-gray-100 mb-8">
                      Filosofi Logo OSIS
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">⭕</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Lingkaran</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Melambangkan bahwa OSIS SMA IT Fithrah Insani terus bergenerasi dan tidak pernah terputus estafet kepemimpinannya.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">↔️</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Garis yang Tidak Menyambung</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Menunjukkan bahwa meskipun OSIS terdiri dari ikhwan dan akhwat, tetap menjaga batasan sesuai syariat.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">⚫</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Warna Hitam</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Simbol keberanian dan rasa percaya diri yang selalu dimiliki oleh OSIS SMA IT Fithrah Insani.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">✨</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Garis-Garis Warna Emas</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Menandakan bahwa setiap generasi OSIS selalu berprestasi dan membawa pencapaian membanggakan.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">🔴</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Empat Titik</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Melambangkan struktur inti OSIS yang terdiri dari empat anggota utama sebagai pemimpin organisasi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4">
                          <span className="text-white text-xl">📖</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Al-Qur'an</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Menjadi dasar dan landasan dari setiap program kerja OSIS, sesuai dengan nilai-nilai Islam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Core Team Section */}
        <AnimatedSection>
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl text-gray-900 dark:text-gray-100 mb-6">
                Pengurus <span className="text-yellow-600 dark:text-yellow-400">Inti</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-600 mx-auto max-w-3xl leading-relaxed">
                Para siswa berdedikasi yang memimpin dan menginspirasi OSIS SMAIT Fithrah Insani
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
              {coreTeam.map((member, index) => (
                <div key={member.id} className="group relative">
                  {/* Background glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                  
                  <div className="relative card-gradient rounded-xl shadow-xl text-center h-full card-hover border border-gray-200/50 backdrop-blur-sm overflow-hidden">
                    <div className="relative w-full h-80 overflow-hidden group cursor-pointer">
                      <img 
                        src={member.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        alt={member.name}
                        onClick={() => openModal(member)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-medium">Klik untuk detail</p>
                        </div>
                      </div>
                      
                      {/* View button */}
                      <button 
                        type="button"
                        title={`Lihat profil ${member.name}`}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        onClick={() => openModal(member)}
                      >
                        <span className="text-white text-2xl">👤</span>
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h5 className="heading-secondary text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors duration-300">
                        {member.name}
                      </h5>
                      <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-3 text-sm">
                        {member.position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                      
                      {/* Bottom decoration */}
                      <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Department Heads Section */}
        <AnimatedSection>
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl text-gray-900 dark:text-gray-100 mb-6">
                Kepala <span className="text-yellow-600 dark:text-yellow-400">Departemen</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-600 mx-auto max-w-3xl leading-relaxed">
                Para pemimpin departemen yang bertanggung jawab atas berbagai seksi bidang dan program kerja
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departmentHeads.map((member, index) => (
                <div key={member.id} className="group relative">
                  {/* Background glow with different colors */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                    index === 0 ? 'from-blue-400 to-blue-600' :
                    index === 1 ? 'from-green-400 to-green-600' :
                    index === 2 ? 'from-purple-400 to-purple-600' :
                    'from-red-400 to-red-600'
                  } rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                  
                  <div className="relative card-gradient rounded-xl shadow-xl text-center h-full card-hover border border-gray-200/50 backdrop-blur-sm overflow-hidden">
                    <div className="relative w-full h-80 overflow-hidden group cursor-pointer">
                      <img 
                        src={member.image} 
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
                        alt={member.name}
                        onClick={() => openModal(member)}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-medium">Klik untuk detail</p>
                        </div>
                      </div>
                      
                      {/* View button */}
                      <button 
                        type="button"
                        title={`Lihat profil ${member.name}`}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        onClick={() => openModal(member)}
                      >
                        <span className="text-white text-2xl">👨‍💼</span>
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h5 className="heading-secondary text-lg font-semibold mb-2 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                        {member.name}
                      </h5>
                      <p className="text-yellow-600 font-medium mb-3 text-sm">
                        {member.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                      
                      {/* Bottom decoration with department color */}
                      <div className="mt-4 pt-4 border-t border-gray-200/50">
                        <div className={`w-8 h-1 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 ${
                          index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                          index === 1 ? 'bg-gradient-to-r from-green-400 to-green-600' :
                          index === 2 ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                          'bg-gradient-to-r from-red-400 to-red-600'
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <TeamMemberModal 
          member={selectedMember} 
          isOpen={!!selectedMember} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}