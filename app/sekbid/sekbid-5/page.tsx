import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaGuitar, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid5Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-600 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaGuitar className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 5</h1>
          <p className="text-xl">Bakat dan Kreativitas</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 5</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 5 fokus pada pengembangan bakat dan kreativitas siswa dalam berbagai bidang seni dan budaya. 
              Kami menyediakan wadah untuk mengekspresikan dan mengasah kemampuan artistik siswa.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Festival seni dan budaya</li>
              <li>Lomba musik dan tari</li>
              <li>Workshop kreativitas</li>
              <li>Pameran karya seni siswa</li>
              <li>Pertunjukan teater dan drama</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Mengembangkan potensi seni dan kreativitas siswa, memberikan ruang ekspresi yang positif, 
              dan melestarikan nilai-nilai budaya dalam lingkungan sekolah.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}