'use client';

import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import PageEnterAnimation from '@/components/PageEnterAnimation';
import MemberCard from '@/components/MemberCard';
import MemberStats from '@/components/MemberStats';

interface Member {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  department?: string;
}

const PeoplePage: React.FC = () => {
  const ketua: Member = {
    id: 1,
    name: 'Muhammad Hafidz Azzamulhaq',
    position: 'Ketua OSIS',
    description: 'Memimpin organisasi dengan visi dan dedikasi yang tinggi.',
    image: '/images/about/ke-2.png'
  };

  const pengurusInti: Member[] = [
    {
      id: 2,
      name: 'Nooraisha Tiara Putri',
      position: 'Wakil Ketua OSIS',
      description: 'Mendukung ketua dalam semua urusan organisasi.',
      image: '/images/about/ke-5.png'
    },
    {
      id: 3,
      name: "I'tisyam Ariqoh Shafa",
      position: 'Sekretaris OSIS',
      description: 'Menjaga catatan dan memastikan komunikasi yang lancar.',
      image: '/images/about/ke-6.png'
    },
    {
      id: 4,
      name: 'Rahma Ayuna Nurul Haq',
      position: 'Bendahara OSIS',
      description: 'Mengelola keuangan dan anggaran untuk semua kegiatan.',
      image: '/images/about/ke-4.png'
    }
  ];

  const kepalaDepartemen: Member[] = [
    {
      id: 5,
      name: 'Farras Yusra Juneeta',
      position: 'Kepala Departemen A',
      description: 'Penanggung Jawab Sekbid 1 dan Sekbid 2.',
      image: '/images/about/ke-7.png'
    },
    {
      id: 6,
      name: 'Adiba Alya Batrisya',
      position: 'Kepala Departemen B',
      description: 'Penanggung Jawab Sekbid 3 dan Sekbid 4.',
      image: '/images/about/ke-9.png'
    },
    {
      id: 7,
      name: 'Mochammad Kafka Reznia Avicena',
      position: 'Kepala Departemen C',
      description: 'Penanggung Jawab Sekbid 5 dan Sekbid 6.',
      image: '/images/about/ke-10.png'
    },
    {
      id: 8,
      name: 'Adnan Humam Alfadz',
      position: 'Kepala Departemen D',
      description: 'Penanggung Jawab Sekbid 7 dan Sekbid 8.',
      image: '/images/about/ke-12.png'
    }
  ];

  const anggotaSekbid: Member[] = [
    {
      id: 9,
      name: 'Sekbid 1',
      position: 'Keagamaan',
      description: 'Mengkoordinir kegiatan keagamaan di sekolah.',
      image: '/images/about/ke-13.png'
    },
    {
      id: 10,
      name: 'Sekbid 2',
      position: 'Kedisiplinan',
      description: 'Menjaga kedisiplinan dan tata tertib sekolah.',
      image: '/images/about/ke-14.png'
    },
    {
      id: 11,
      name: 'Sekbid 3',
      position: 'Pendidikan',
      description: 'Mengembangkan program pendidikan siswa.',
      image: '/images/about/ke-15.png'
    },
    {
      id: 12,
      name: 'Sekbid 4',
      position: 'Literasi',
      description: 'Meningkatkan budaya literasi di sekolah.',
      image: '/images/about/ke-16.png'
    },
    {
      id: 13,
      name: 'Sekbid 5',
      position: 'Bakat & Minat',
      description: 'Mengembangkan bakat dan minat siswa.',
      image: '/images/about/ke-18.png'
    },
    {
      id: 14,
      name: 'Sekbid 6',
      position: 'Kesehatan',
      description: 'Menjaga kesehatan dan kebersihan sekolah.',
      image: '/images/about/ke-19.png'
    },
    {
      id: 15,
      name: 'Sekbid 7',
      position: 'Kewirausahaan',
      description: 'Mengembangkan jiwa kewirausahaan siswa.',
      image: '/images/about/ke-20.png'
    },
    {
      id: 16,
      name: 'Sekbid 8',
      position: 'Media',
      description: 'Mengelola media dan publikasi sekolah.',
      image: '/images/about/ke-21.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <PageEnterAnimation animation="fade">
        <section className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-white py-20 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-reverse" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />

            {/* Floating Icons */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 bg-white/10 rounded-full flex items-center justify-center animate-float"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              >
                <i className="fas fa-users text-sm"></i>
              </div>
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Icon */}
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-6 mb-8 animate-float">
                <i className="fas fa-users text-6xl"></i>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Foto Anggota OSIS
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up delay-200">
                Para siswa berdedikasi yang membuat OSIS SMAIT Fithrah Insani menjadi mungkin
              </p>
            </div>
          </div>
        </section>
      </PageEnterAnimation>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Ketua OSIS Section */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Ketua OSIS
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pemimpin organisasi siswa yang memimpin dengan visi dan dedikasi tinggi.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md">
              <MemberCard member={ketua} isLeader={true} delay={0} />
            </div>
          </div>
        </AnimatedSection>

        {/* Pengurus Inti Section */}
        <AnimatedSection delay={0.4} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Pengurus Inti OSIS
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Para siswa berdedikasi yang membuat OSIS SMAIT FITHRAH INSANI menjadi mungkin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pengurusInti.map((member, index) => (
              <AnimatedSection
                key={member.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="scroll-reveal"
              >
                <MemberCard member={member} delay={index * 100} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Kepala Departemen Section */}
        <AnimatedSection delay={0.6} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Kepala Departemen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Para pemimpin departemen yang bertanggung jawab atas berbagai seksi bidang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kepalaDepartemen.map((member, index) => (
              <AnimatedSection
                key={member.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="scroll-reveal"
              >
                <MemberCard member={member} delay={index * 100} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Anggota Seksi Bidang Section */}
        <AnimatedSection delay={0.8} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Anggota Seksi Bidang
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Para anggota yang bertanggung jawab dalam berbagai bidang kegiatan sekolah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {anggotaSekbid.map((member, index) => (
              <AnimatedSection
                key={member.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="scroll-reveal"
              >
                <MemberCard member={member} delay={index * 100} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Member Statistics */}
        <AnimatedSection delay={1.0} className="scroll-reveal">
          <MemberStats />
        </AnimatedSection>
      </div>
    </div>
  );
};



export default PeoplePage;