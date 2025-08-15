import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { FaSchool, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Sekbid2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <FaSchool className="text-6xl mb-4 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seksi Bidang 2</h1>
          <p className="text-xl">Nasionalisme dan Patriotisme</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <AnimatedSection>
          <div className="mb-8">
            <Link 
              href="/bidang" 
              className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Kembali ke Program Kerja
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Seksi Bidang 2</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Seksi Bidang 2 fokus pada pengembangan rasa nasionalisme dan patriotisme di kalangan siswa. 
              Kami berupaya menumbuhkan kecintaan terhadap tanah air dan kesadaran berbangsa dan bernegara.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Kerja</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Upacara bendera rutin</li>
              <li>Peringatan hari kemerdekaan</li>
              <li>Lomba cinta tanah air</li>
              <li>Pameran sejarah Indonesia</li>
              <li>Diskusi kebangsaan</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Membentuk generasi muda yang memiliki jiwa nasionalisme tinggi, mencintai tanah air, 
              dan siap berkontribusi untuk kemajuan bangsa Indonesia.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}