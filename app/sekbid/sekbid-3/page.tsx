import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaImages, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-yellow-500 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaImages className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 3</h1>
          <p className="text-xl">Wawasan dan Pengetahuan</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 3</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 3 bertugas mengedukasi siswa untuk memiliki wawasan yang luas dan 
              pengetahuan yang mendalam dalam berbagai bidang ilmu pengetahuan.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Seminar dan workshop edukatif</li>
              <li>Lomba karya tulis ilmiah</li>
              <li>Diskusi ilmiah rutin</li>
              <li>Pameran sains dan teknologi</li>
              <li>Kunjungan edukatif</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Meningkatkan wawasan dan pengetahuan siswa dalam berbagai bidang, 
              serta mendorong semangat belajar dan penelitian di kalangan siswa.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}