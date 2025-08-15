'use client';

import Hero from "@/components/Hero";
import VisionCard from "@/components/VisionCard";
import MissionCard from "@/components/MissionCard";
import EventSection from "@/components/EventSection";
import GoalsSection from "@/components/GoalsSection";
import GallerySection from "@/components/GallerySection";
import AnimatedSection from "@/components/AnimatedSection";
import { FaQuran, FaUserShield, FaGraduationCap } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="page-content bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />

      <AnimatedSection id="vision">
        <section className="py-20 section-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
            <div className="mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100 mb-6">
                Visi <span className="text-yellow-600 dark:text-yellow-400">Kami</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
            </div>
            <VisionCard />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="mission">
        <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400 rounded-full" />
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-blue-400 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-400 rounded-full" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100 mb-6">
                Misi <span className="text-yellow-600 dark:text-yellow-400">Kami</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tiga pilar utama yang menjadi fondasi pergerakan OSIS SMAIT Fithrah Insani
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
              <MissionCard
                icon={<FaQuran size={32} />}
                title="Integrasi Nilai Islami"
                description="Mengintegrasikan Nilai-nilai Al Qur'an dan hadits dalam setiap kegiatan OSIS untuk membentuk karakter Islami yang kuat."
              />
              <MissionCard
                icon={<FaUserShield size={32} />}
                title="Kedisiplinan & Keteladanan"
                description="Meningkatkan kedisiplinan dan keteladanan bagi seluruh pengurus OSIS serta memberikan contoh perilaku yang baik bagi seluruh siswa."
              />
              <MissionCard
                icon={<FaGraduationCap size={32} />}
                title="Pengembangan Potensi"
                description="Menjadikan OSIS sebagai sarana pengembangan dan peningkatan potensi akademik maupun non akademik siswa/i SMAIT Fithrah Insani."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="events">
        <section className="py-20 section-gradient relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-2xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-gray-900 dark:text-gray-100">Event</span> <span className="text-yellow-600 dark:text-yellow-400">Terbaru</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Berbagai kegiatan dan program kerja yang telah kami laksanakan
              </p>
            </div>
            <EventSection />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="our-goals">
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 via-transparent to-blue-400/20" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl mb-6">
                <span className="text-white">Target</span> <span className="text-yellow-400">Kami</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Pencapaian dan tujuan yang ingin kami wujudkan bersama
              </p>
            </div>
            <GoalsSection />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection id="gallery">
        <section className="py-20 section-gradient relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400/5 to-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100 mb-6">
                Galeri <span className="text-yellow-600 dark:text-yellow-400">Momen</span>
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400" />
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dokumentasi perjalanan dan pencapaian OSIS SMAIT Fithrah Insani
              </p>
            </div>
            <GallerySection />
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}