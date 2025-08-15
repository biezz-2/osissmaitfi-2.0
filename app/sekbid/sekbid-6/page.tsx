import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaBroom, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid6Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cyan-500 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaBroom className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 6</h1>
          <p className="text-xl">Kebersihan dan Kesehatan</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-cyan-600 hover:text-cyan-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 6</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 6 bertanggung jawab dalam menjaga kebersihan dan kesehatan lingkungan sekolah. 
              Kami berkomitmen menciptakan lingkungan belajar yang bersih, sehat, dan nyaman untuk semua.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Program kebersihan harian</li>
              <li>Kampanye hidup sehat</li>
              <li>Lomba kebersihan kelas</li>
              <li>Sosialisasi kesehatan</li>
              <li>Pengelolaan sampah dan daur ulang</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Menciptakan lingkungan sekolah yang bersih dan sehat, menumbuhkan kesadaran akan pentingnya 
              kebersihan dan kesehatan, serta membentuk kebiasaan hidup sehat di kalangan siswa.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}