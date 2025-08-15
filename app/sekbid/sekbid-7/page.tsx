import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaMoneyBillWave, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid7Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaMoneyBillWave className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 7</h1>
          <p className="text-xl">Kewirausahaan dan Keuangan</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-gray-800 hover:text-gray-900 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 7</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 7 melatih kewirausahaan dan mengelola dana OSIS. 
              Kami mengembangkan jiwa entrepreneurship siswa dan mengelola keuangan organisasi dengan transparan.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Pelatihan kewirausahaan</li>
              <li>Bazar dan pameran produk siswa</li>
              <li>Pengelolaan keuangan OSIS</li>
              <li>Workshop bisnis dan investasi</li>
              <li>Kompetisi business plan</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Menumbuhkan jiwa kewirausahaan di kalangan siswa, mengajarkan pengelolaan keuangan yang baik, 
              dan mempersiapkan siswa untuk mandiri secara ekonomi di masa depan.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}