import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaBook, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaBook className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 4</h1>
          <p className="text-xl">Bahasa dan Literasi</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 4</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 4 mengedukasi siswa dalam bidang bahasa dan literasi, 
              mengembangkan kemampuan berbahasa dan budaya membaca di kalangan siswa.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Lomba pidato dan debat</li>
              <li>Festival sastra dan puisi</li>
              <li>Program literasi sekolah</li>
              <li>Kelas bahasa asing</li>
              <li>Penerbitan majalah sekolah</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Meningkatkan kemampuan berbahasa siswa, menumbuhkan budaya literasi, 
              dan mengembangkan kreativitas dalam bidang sastra dan komunikasi.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}